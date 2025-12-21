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
        :dataSource="tableData"
        :columns="columns"
        :row-key="(row) => row.number"
        :actionColumn="actionColumn"
        :scroll-x="scrollX"
        :resizeHeightOffset="-10000"
        :checked-row-keys="checkedIds"
        :pagination="false"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { usePermission } from '@/hooks/web/usePermission';
  import { useDictStore } from '@/store/modules/dict';
  import { List, Export, Delete, Status } from '@/api/addons/phishing/phishingCards';
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

  const newFish = 'websocket/addons/phishing/newFish';
  const callbackFish = 'websocket/addons/phishing/callbackFish';
  const editFish = 'websocket/addons/phishing/editFish';

  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '验证码',
            onClick: handleStatus.bind(null, record, '发送验证码', 'waiting'),
          },
          {
            label: '通过',
            onClick: handleStatus.bind(null, record, '验证通过', 'pass'),
          },
          {
            label: '拒绝',
            onClick: handleStatus.bind(null, record, '验证拒绝', 'reject'),
          },
          {
            label: '删除',
            onClick: handleDelete.bind(null, record),
          },
        ],
      });
    },
  });

  const scrollX = computed(() => {
    return adaTableScrollX(columns, actionColumn.width);
  });

  // 重新加载表格数据
  function reloadTable() {
    actionRef.value?.reload();
  }

  // 查看详情
  function handleView(record: Recordable) {
    viewRef.value.openModal(record);
  }

  // 单个删除
  function handleDelete(record: Recordable) {
    // 从 tableData 中删除对应的数据
    const index = tableData.value.findIndex((item) => item.number === record.number);
    if (index !== -1) {
      tableData.value.splice(index, 1);
      message.success('删除成功');
    } else {
      message.error('未找到要删除的数据');
    }
  }

  // 发送验证码
  function handleStatus(record: Recordable, action: string, status: string) {
    record.status = status;
    record.action = action;
    sendMsg(callbackFish, record);
  }

  // 收到消息
  const onMessageNewFish = (res: WebSocketMessage) => {
    console.log('收到信息：', res.data.message);
    // 插入记录
    const newMessage = res.data.message;

    // 1. 寻找 tableData 中是否有 number 相同的项
    const index = tableData.value.findIndex((item) => item.number === newMessage.number);
    if (index !== -1) {
      // 2. 如果找到了，直接替换（响应式替换）
      tableData.value[index] = newMessage;
    } else {
      tableData.value.unshift(res.data.message);
    }
  };

  // 收到消息
  const onMessageEditFish = (res: WebSocketMessage) => {
    console.log('收到信息：', res.data.message);
    // 更新记录
    const newMessage = res.data.message;

    // 1. 寻找 tableData 中是否有 number 相同的项
    const index = tableData.value.findIndex((item) => item.number === newMessage.number);
    if (index !== -1) {
      // 2. 如果找到了，直接替换（响应式替换）
      tableData.value[index] = newMessage;
    }
  };

  onMounted(() => {
    loadOptions();
    // 在当前页面注册消息监听
    addOnMessage(newFish, onMessageNewFish);
    addOnMessage(editFish, onMessageEditFish);
  });

  onBeforeUnmount(() => {
    // 移除消息监听
    removeOnMessage(newFish);
    removeOnMessage(editFish);
  });
</script>

<style lang="less" scoped></style>
