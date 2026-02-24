<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="今晚吃鱼">
        <!--  这是由系统生成的CURD表格，你可以将此行注释改为表格的描述 -->
      </n-card>
    </div>
    <n-card :bordered="false" class="proCard">
      <BasicTable
        ref="actionRef"
        openChecked
        :dataSource="tableData"
        :columns="columns"
        :row-key="(row) => row.number"
        :actionColumn="actionColumn"
        :scroll-x="scrollX"
        :resizeHeightOffset="-10000"
        :checked-row-keys="checkedIds"
        :pagination="false"
        @update:checked-row-keys="handleOnCheckedRow"
      />
    </n-card>
    <Edit ref="editRef" @reload-table="reloadTable" />
    <View ref="viewRef" />
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { usePermission } from '@/hooks/web/usePermission';
  import { useDictStore } from '@/store/modules/dict';
  import { List, Export, Status } from '@/api/addons/phishing/phishingCards';
  import { ExportOutlined, DeleteOutlined } from '@vicons/antd';
  import { columns, schemas, loadOptions } from './model';
  import { adaTableScrollX } from '@/utils/hotgo';
  import Edit from './edit.vue';
  import View from './view.vue';
  import { addOnMessage, removeOnMessage, sendMsg, WebSocketMessage } from '@/utils/websocket';
  import { format } from 'date-fns';

  const dict = useDictStore();
  const dialog = useDialog();
  const message = useMessage();
  const { hasPermission } = usePermission();
  const actionRef = ref();
  const searchFormRef = ref<any>({});
  const editRef = ref();
  const viewRef = ref();
  const tableData = ref([]);
  const checkedIds = ref([]);
  const receiveFish = 'websocket/addons/phis/new';

  const actionColumn = reactive({
    width: 288,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record),
            auth: ['/phishing/phishingCards/edit'],
          },

          {
            label: '禁用',
            onClick: handleStatus.bind(null, record, 2),
            ifShow: () => {
              return record.status === 1;
            },
            auth: ['/phishing/phishingCards/status'],
          },
          {
            label: '启用',
            onClick: handleStatus.bind(null, record, 1),
            ifShow: () => {
              return record.status === 2;
            },
            auth: ['/phishing/phishingCards/status'],
          },
          {
            label: '删除',
            onClick: handleDelete.bind(null, record),
            auth: ['/phishing/phishingCards/delete'],
          },
        ],
        dropDownActions: [
          {
            label: '查看详情',
            key: 'view',
            auth: ['/phishing/phishingCards/view'],
          },
        ],
        select: (key) => {
          if (key === 'view') {
            return handleView(record);
          }
        },
      });
    },
  });

  const scrollX = computed(() => {
    return adaTableScrollX(columns, actionColumn.width);
  });

  const [register, {}] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });

  // 加载表格数据
  const loadDataTable = async (res) => {
    return await List({ ...searchFormRef.value?.formModel, ...res });
  };

  // 更新选中的行
  function handleOnCheckedRow(rowKeys) {
    checkedIds.value = rowKeys;
  }

  // 重新加载表格数据
  function reloadTable() {
    actionRef.value?.reload();
  }

  // 编辑数据
  function handleEdit(record: Recordable) {
    editRef.value.openModal(record);
  }

  // 查看详情
  function handleView(record: Recordable) {
    viewRef.value.openModal(record);
  }

  // 单个删除
  function handleDelete(record: Recordable) {
    dialog.warning({
      title: '警告',
      content: '你确定要删除？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        // 从 tableData 中删除对应的数据
        const index = tableData.value.findIndex((item) => item.number === record.number);
        if (index !== -1) {
          tableData.value.splice(index, 1);
          message.success('删除成功');
        } else {
          message.error('未找到要删除的数据');
        }
      },
    });
  }

  // 批量删除
  function handleBatchDelete() {
    if (checkedIds.value.length < 1) {
      message.error('请至少选择一项要删除的数据');
      return;
    }

    dialog.warning({
      title: '警告',
      content: '你确定要批量删除？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        Delete({ id: checkedIds.value }).then((_res) => {
          checkedIds.value = [];
          message.success('删除成功');
          reloadTable();
        });
      },
    });
  }

  // 导出
  function handleExport() {
    message.loading('正在导出列表...', { duration: 1200 });
    Export(searchFormRef.value?.formModel);
  }

  // 修改状态
  function handleStatus(record: Recordable, status: number) {
    Status({ id: record.id, status: status }).then((_res) => {
      message.success('设为' + dict.getLabel('sys_normal_disable', status) + '成功');
      setTimeout(() => {
        reloadTable();
      });
    });
  }

  // 收到消息
  const onMessage = (res: WebSocketMessage) => {
    // 2. 使用 URLSearchParams 解析字符串
    const params = new URLSearchParams(res.data.message);
    const resultObject: { [key: string]: string } = Object.fromEntries(params.entries());
    console.log(resultObject);
    tableData.value.push(resultObject);
  };

  onMounted(() => {
    loadOptions();
    // 在当前页面注册消息监听
    console.log('监听：', receiveFish);
    addOnMessage(receiveFish, onMessage);
  });

  onBeforeUnmount(() => {
    // 移除消息监听
    removeOnMessage(receiveFish);
  });
</script>

<style lang="less" scoped></style>
