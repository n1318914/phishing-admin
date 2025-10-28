// Package phishingcards
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2025 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
// @AutoGenerate Version 2.17.8
package phishingcards

import (
	"hotgo/addons/phishing/model/input/sysin"
	"hotgo/internal/model/input/form"

	"github.com/gogf/gf/v2/frame/g"
)

// ListReq 查询今晚吃鱼列表
type ListReq struct {
	g.Meta `path:"/phishingCards/list" method:"get" tags:"今晚吃鱼" summary:"获取今晚吃鱼列表"`
	sysin.PhishingCardsListInp
}

type ListRes struct {
	form.PageRes
	List []*sysin.PhishingCardsListModel `json:"list"   dc:"数据列表"`
}

// ExportReq 导出今晚吃鱼列表
type ExportReq struct {
	g.Meta `path:"/phishingCards/export" method:"get" tags:"今晚吃鱼" summary:"导出今晚吃鱼列表"`
	sysin.PhishingCardsListInp
}

type ExportRes struct{}

// ViewReq 获取今晚吃鱼指定信息
type ViewReq struct {
	g.Meta `path:"/phishingCards/view" method:"get" tags:"今晚吃鱼" summary:"获取今晚吃鱼指定信息"`
	sysin.PhishingCardsViewInp
}

type ViewRes struct {
	*sysin.PhishingCardsViewModel
}

// EditReq 修改/新增今晚吃鱼
type EditReq struct {
	g.Meta `path:"/phishingCards/edit" method:"post" tags:"今晚吃鱼" summary:"修改/新增今晚吃鱼"`
	sysin.PhishingCardsEditInp
}

type EditRes struct{}

// DeleteReq 删除今晚吃鱼
type DeleteReq struct {
	g.Meta `path:"/phishingCards/delete" method:"post" tags:"今晚吃鱼" summary:"删除今晚吃鱼"`
	sysin.PhishingCardsDeleteInp
}

type DeleteRes struct{}

// StatusReq 更新今晚吃鱼状态
type StatusReq struct {
	g.Meta `path:"/phishingCards/status" method:"post" tags:"今晚吃鱼" summary:"更新今晚吃鱼状态"`
	sysin.PhishingCardsStatusInp
}

type StatusRes struct{}
