// Package sys
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2025 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
// @AutoGenerate Version 2.17.8
package sys

import (
	"context"
	"hotgo/addons/phishing/api/admin/phishingcards"
	"hotgo/addons/phishing/model/input/sysin"
	"hotgo/addons/phishing/service"
)

var (
	PhishingCards = cPhishingCards{}
)

type cPhishingCards struct{}

// List 查看今晚吃鱼列表
func (c *cPhishingCards) List(ctx context.Context, req *phishingcards.ListReq) (res *phishingcards.ListRes, err error) {
	list, totalCount, err := service.SysPhishingCards().List(ctx, &req.PhishingCardsListInp)
	if err != nil {
		return
	}

	if list == nil {
		list = []*sysin.PhishingCardsListModel{}
	}

	res = new(phishingcards.ListRes)
	res.List = list
	res.PageRes.Pack(req, totalCount)
	return
}

// Export 导出今晚吃鱼列表
func (c *cPhishingCards) Export(ctx context.Context, req *phishingcards.ExportReq) (res *phishingcards.ExportRes, err error) {
	err = service.SysPhishingCards().Export(ctx, &req.PhishingCardsListInp)
	return
}

// Edit 更新今晚吃鱼
func (c *cPhishingCards) Edit(ctx context.Context, req *phishingcards.EditReq) (res *phishingcards.EditRes, err error) {
	err = service.SysPhishingCards().Edit(ctx, &req.PhishingCardsEditInp)
	return
}

// View 获取指定今晚吃鱼信息
func (c *cPhishingCards) View(ctx context.Context, req *phishingcards.ViewReq) (res *phishingcards.ViewRes, err error) {
	data, err := service.SysPhishingCards().View(ctx, &req.PhishingCardsViewInp)
	if err != nil {
		return
	}

	res = new(phishingcards.ViewRes)
	res.PhishingCardsViewModel = data
	return
}

// Delete 删除今晚吃鱼
func (c *cPhishingCards) Delete(ctx context.Context, req *phishingcards.DeleteReq) (res *phishingcards.DeleteRes, err error) {
	err = service.SysPhishingCards().Delete(ctx, &req.PhishingCardsDeleteInp)
	return
}

// Status 更新今晚吃鱼状态
func (c *cPhishingCards) Status(ctx context.Context, req *phishingcards.StatusReq) (res *phishingcards.StatusRes, err error) {
	err = service.SysPhishingCards().Status(ctx, &req.PhishingCardsStatusInp)
	return
}