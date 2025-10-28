import { http, jumpExport } from '@/utils/http/axios';

// 获取今晚吃鱼列表
export function List(params) {
  return http.request({
    url: '/phishing/phishingCards/list',
    method: 'get',
    params,
  });
}

// 删除/批量删除今晚吃鱼
export function Delete(params) {
  return http.request({
    url: '/phishing/phishingCards/delete',
    method: 'POST',
    params,
  });
}

// 添加/编辑今晚吃鱼
export function Edit(params) {
  return http.request({
    url: '/phishing/phishingCards/edit',
    method: 'POST',
    params,
  });
}

// 修改今晚吃鱼状态
export function Status(params) {
  return http.request({
    url: '/phishing/phishingCards/status',
    method: 'POST',
    params,
  });
}

// 获取今晚吃鱼指定详情
export function View(params) {
  return http.request({
    url: '/phishing/phishingCards/view',
    method: 'GET',
    params,
  });
}

// 导出今晚吃鱼
export function Export(params) {
  jumpExport('/phishing/phishingCards/export', params);
}