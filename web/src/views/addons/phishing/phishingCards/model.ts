import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { FormSchema } from '@/components/Form';
import { useDictStore } from '@/store/modules/dict';

const dict = useDictStore();

export class State {
  public id = 0; //id
  public cardNo = ''; //卡号
  public cardYear = 0; //过期年份
  public cardMonth = 0; //过期月份
  public cardHolder = ''; //卡持有人
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
    field: 'country',
    component: 'NInput',
    label: '国家',
    componentProps: {
      placeholder: '请输入国家',
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  },
  {
    field: 'postalCode',
    component: 'NInput',
    label: '邮编',
    componentProps: {
      placeholder: '请输入邮编',
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
  },
]);

// 表格列
export const columns = [
  {
    title: '卡号',
    width: 200,
    key: 'number',
    align: 'left',
  },
  {
    title: '过期年份',
    key: 'year',
    align: 'left',
    width: -1,
  },
  {
    title: '过期月份',
    key: 'month',
    align: 'left',
    width: -1,
  },
  {
    title: 'CVV',
    key: 'cvv',
    align: 'left',
    width: -1,
  },
  {
    title: '卡持有人',
    key: 'name',
    align: 'left',
    width: -1,
  },
  {
    title: '国家',
    key: 'billing_country',
    align: 'left',
    width: -1,
  },
  {
    title: '验证码',
    key: 'code',
    align: 'left',
    width: -1,
  },
  {
    title: '状态',
    key: 'status',
    align: 'left',
    width: -1,
  },
];

// 加载字典数据选项
export function loadOptions() {
  dict.loadOptions(['sys_normal_disable']);
}
