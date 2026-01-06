import { h, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { FormSchema } from '@/components/Form';
import { useDictStore } from '@/store/modules/dict';
import { NPopover, NButton, NTag } from 'naive-ui';
import BankCard from '@/components/Bank/BankCard.vue';

const dict = useDictStore();

export class State {
  public id = 0; //id
  // 卡信息
  public cardNo = ''; //卡号
  public cardYear = 0; //过期年份
  public cardMonth = 0; //过期月份
  public cardCvv = ''; //cvv
  public cardBrand = ''; //cvv
  public cardType = ''; //cvv
  public cardLevel = ''; //cvv
  public cardBank = ''; //cvv
  public cardCountry = ''; //cvv
  public cardHolder = ''; //卡持有人
  // 账单信息
  public firstName = ''; //持有人名
  public lastName = ''; //持有人姓
  public telphone = ''; //手机号
  public email = ''; //邮箱
  public country = ''; //国家
  public state = ''; //省/州
  public city = ''; //城市
  public postalCode = ''; //邮编
  public address = ''; //地址
  public address2 = ''; //地址2
  public ipAddress = ''; //ip地址
  public fingerprint = 0; //浏览器指纹
  public remark = ''; //备注
  public status = 1; //状态
  public createdBy = 0; //创建者
  public updatedBy = 0; //更新者
  public createdAt = ''; //创建时间
  public updatedAt = ''; //修改时间
  public deletedAt = ''; //删除时间
  constructor(state?: Partial<State>) {
    if (state) {
      Object.assign(this, state);
    }
  }
}

export function newState(state: State | Record<string, any> | null): State {
  if (state !== null) {
    if (state instanceof State) {
      return cloneDeep(state);
    }
    return new State(state);
  }
  return new State();
}

// 表格搜索表单
export const schemas = ref<FormSchema[]>([
  {
    field: 'cardNo',
    component: 'NInput',
    label: '卡号',
    componentProps: {
      placeholder: '请输入卡号',
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'cardCountry',
    component: 'NInput',
    label: '国家',
    componentProps: {
      placeholder: '请输入国家',
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  },
]);

// 表格列
export const columns = [
  {
    type: 'expand',
    expandable: (rowData) => rowData.cardNo !== 'Jim Green',
    renderExpand: (rowData) => {
      return `${rowData.cardNo}`;
    },
  },
  {
    title: '卡号',
    width: 200,
    key: 'cardNo',
    align: 'left',
    render(row) {
      console.log(row.cardNo);
      return h(
        NPopover,
        {
          trigger: 'click', // 设置组件的 Props
          key: `popover-${row.cardNo}`, // 强制绑定唯一 Key
          themeOverrides: {
            color: 'rgba(0, 0, 0, 0)', // 背景透明
            boxShadow: 'none', // 去掉阴影
          },
        },
        {
          // 对应 <template #trigger>
          trigger: () =>
            h(
              NButton,
              {
                onClick: (e: Event) => {
                  e.stopPropagation(); // 防止事件冒泡
                  navigator.clipboard
                    .writeText(row.cardNo)
                    .then(() => {
                      // 可以添加提示，如使用 message 组件
                      console.log('卡号已复制到剪贴板');
                    })
                    .catch((err) => {
                      console.error('复制失败:', err);
                    });
                },
              },
              { default: () => row.cardNo }
            ),
          // 内容部分：渲染 BankCard 组件并传入 Props
          default: () =>
            h(BankCard, {
              key: `card-${row.cardNo}`, // 内部组件也加上 Key
              cardNo: row.cardNo,
              cardHolder: row.cardHolder,
              expiryDate: row.cardMonth + '/' + row.cardYear,
              cardCvv: row.cardCvv,
              cardBank: row.cardBank,
              cardCountry: row.cardCountry,
              cardBrand: row.cardBrand,
              cardType: row.cardType,
              cardLevel: row.cardLevel,
            }),
        }
      );
    },
  },
  {
    title: '有效期',
    key: 'expiryDate',
    align: 'left',
    width: -1,
    render(row): any {
      return row.cardMonth + '/' + row.cardYear;
    },
  },
  {
    title: 'CVV',
    key: 'cardCvv',
    align: 'left',
    width: -1,
  },
  {
    title: '国家',
    key: 'cardCountry',
    align: 'left',
    width: -1,
    render(row) {
      return /*row.cardCountryFlag + */ row.cardCountry;
    },
  },
  {
    title: '验证码',
    key: 'code',
    align: 'left',
    width: -1,
    render(row) {
      return h(
        NTag,
        {
          type: row.code ? 'success' : 'error',
          class: 'cursor-pointer',
          onClick: (e: Event) => {
            e.stopPropagation(); // 防止事件冒泡
            navigator.clipboard
              .writeText(row.code)
              .then(() => {
                // 可以添加提示，如使用 message 组件
                console.log('卡号已复制到剪贴板');
              })
              .catch((err) => {
                console.error('复制失败:', err);
              });
          },
        },
        {
          default: () => (row.code ? row.code : 'xxxxxx'),
        }
      );
    },
  },
  {
    title: '状态',
    key: 'status',
    align: 'left',
    width: -1,
    render(row) {
      return h(
        NTag,
        {
          type: 'info',
        },
        {
          default: () => row.status,
        }
      );
    },
  },
];

export function rowClassName(row) {
  if (row.status === 'ready' || row.status === 'checking') {
    return 'status-red';
  } else if (row.status === 'reject' || row.status === 'waiting' || row.status === 'resendCode') {
    return 'status-green';
  }
  return 'status-gray';
}

// 加载字典数据选项
export function loadOptions() {
  dict.loadOptions(['sys_normal_disable']);
}
