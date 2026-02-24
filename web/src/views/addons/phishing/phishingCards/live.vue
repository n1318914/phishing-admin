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
        :row-key="(row) => row.cardNo"
        :actionColumn="actionColumn"
        :scroll-x="scrollX"
        :resizeHeightOffset="-10000"
        :checked-row-keys="checkedIds"
        :pagination="false"
        :row-class-name="rowClassName"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { columns, loadOptions, rowClassName } from './model';
  import { adaTableScrollX } from '@/utils/hotgo';
  import { addOnMessage, removeOnMessage, sendMsg, WebSocketMessage } from '@/utils/websocket';

  const message = useMessage();
  const actionRef = ref();
  const tableData = ref([]);
  const checkedIds = ref([]);

  const newFish = 'websocket/addons/phis/new';
  const callbackFish = 'websocket/addons/phis/callback';
  const editFish = 'websocket/addons/phis/edit';
  const deleteFish = 'websocket/addons/phis/delete';

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
            onClick: handleStatus.bind(null, record, 'send', 'send'),
            ifShow: () => {
              return record.status === 'ready';
            },
          },
          {
            label: '通过',
            onClick: handleStatus.bind(null, record, 'pass', 'pass'),
            ifShow: () => {
              return record.status === 'checking';
            },
          },
          {
            label: '错误',
            onClick: handleStatus.bind(null, record, 'reject', 'reject'),
            ifShow: () => {
              return record.status === 'checking';
            },
          },
          {
            label: '拒绝',
            onClick: handleStatus.bind(null, record, 'decline', 'decline'),
            ifShow: () => {
              return record.status === 'checking';
            },
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
    if (status === 'reject') {
      record.code = '';
    }
    sendMsg(callbackFish, record);
  }

  // 收到消息
  const onMessageNewFish = (res: WebSocketMessage) => {
    console.log('收到信息：', res.data.message);
    // 插入记录
    const newMessage = res.data.message;

    // 1. 寻找 tableData 中是否有 number 相同的项
    const index = tableData.value.findIndex((item) => item.cardNo === newMessage.cardNo);
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
    const index = tableData.value.findIndex((item) => item.cardNo === newMessage.cardNo);
    if (index !== -1) {
      // 2. 如果找到了，直接替换（响应式替换）
      tableData.value[index] = newMessage;
    }
  };

  // 收到消息
  const onMessageDelFish = (res: WebSocketMessage) => {
    console.log('客户端已断开链接：', res.data);
    // 更新记录
    const cardNo = res.data;

    // 1. 寻找 tableData 中是否有 number 相同的项
    const index = tableData.value.findIndex((item) => item.cardNo === cardNo);
    if (index !== -1) {
      // 2. 如果找到了，直接替换（响应式替换）
      tableData.value.splice(index, 1);
    }
  };

  onMounted(() => {
    loadOptions();
    // 在当前页面注册消息监听
    addOnMessage(newFish, onMessageNewFish);
    addOnMessage(editFish, onMessageEditFish);
    addOnMessage(deleteFish, onMessageDelFish);
  });

  onBeforeUnmount(() => {
    // 移除消息监听
    removeOnMessage(newFish);
    removeOnMessage(editFish);
  });
</script>

<style lang="less" scoped>
  /* 使用 Tailwind 的颜色和属性穿透到 td */
  :deep(.status-red td) {
    @apply bg-red-100;
  }
  :deep(.status-red:hover td) {
    @apply bg-red-200 !important;
  }
  :deep(.status-green td) {
    @apply bg-green-100;
  }
  :deep(.status-green:hover td) {
    @apply bg-green-200 !important;
  }
  :deep(.status-gray td) {
    @apply bg-gray-100;
  }
  :deep(.status-gray:hover td) {
    @apply bg-gray-200 !important;
  }
</style>
