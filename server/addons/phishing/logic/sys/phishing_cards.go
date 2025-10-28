// Package sys
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2025 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
// @AutoGenerate Version 2.17.8
package sys

import (
	"context"
	"fmt"
	"hotgo/addons/phishing/model/input/sysin"
	"hotgo/addons/phishing/service"
	"hotgo/internal/dao"
	"hotgo/internal/library/contexts"
	"hotgo/internal/library/hgorm/handler"
	"hotgo/internal/model/input/form"
	"hotgo/utility/convert"
	"hotgo/utility/excel"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gconv"
)

type sSysPhishingCards struct{}

func NewSysPhishingCards() *sSysPhishingCards {
	return &sSysPhishingCards{}
}

func init() {
	service.RegisterSysPhishingCards(NewSysPhishingCards())
}

// Model 今晚吃鱼ORM模型
func (s *sSysPhishingCards) Model(ctx context.Context, option ...*handler.Option) *gdb.Model {
	return handler.Model(dao.PhishingCards.Ctx(ctx), option...)
}

// List 获取今晚吃鱼列表
func (s *sSysPhishingCards) List(ctx context.Context, in *sysin.PhishingCardsListInp) (list []*sysin.PhishingCardsListModel, totalCount int, err error) {
	mod := s.Model(ctx)

	// 字段过滤
	mod = mod.Fields(sysin.PhishingCardsListModel{})

	// 查询id
	if in.Id > 0 {
		mod = mod.Where(dao.PhishingCards.Columns().Id, in.Id)
	}

	// 查询状态
	if in.Status > 0 {
		mod = mod.Where(dao.PhishingCards.Columns().Status, in.Status)
	}

	// 查询创建时间
	if len(in.CreatedAt) == 2 {
		mod = mod.WhereBetween(dao.PhishingCards.Columns().CreatedAt, in.CreatedAt[0], in.CreatedAt[1])
	}

	// 分页
	mod = mod.Page(in.Page, in.PerPage)

	// 排序
	mod = mod.OrderDesc(dao.PhishingCards.Columns().Id)

	// 查询数据
	if err = mod.ScanAndCount(&list, &totalCount, false); err != nil {
		err = gerror.Wrap(err, "获取今晚吃鱼列表失败，请稍后重试！")
		return
	}
	return
}

// Export 导出今晚吃鱼
func (s *sSysPhishingCards) Export(ctx context.Context, in *sysin.PhishingCardsListInp) (err error) {
	list, totalCount, err := s.List(ctx, in)
	if err != nil {
		return
	}

	// 字段的排序是依据tags的字段顺序，如果你不想使用默认的排序方式，可以直接定义 tags = []string{"字段名称", "字段名称2", ...}
	tags, err := convert.GetEntityDescTags(sysin.PhishingCardsExportModel{})
	if err != nil {
		return
	}

	var (
		fileName  = "导出今晚吃鱼-" + gctx.CtxId(ctx)
		sheetName = fmt.Sprintf("索引条件共%v行,共%v页,当前导出是第%v页,本页共%v行", totalCount, form.CalPageCount(totalCount, in.PerPage), in.Page, len(list))
		exports   []sysin.PhishingCardsExportModel
	)

	if err = gconv.Scan(list, &exports); err != nil {
		return
	}

	err = excel.ExportByStructs(ctx, tags, exports, fileName, sheetName)
	return
}

// Edit 修改/新增今晚吃鱼
func (s *sSysPhishingCards) Edit(ctx context.Context, in *sysin.PhishingCardsEditInp) (err error) {
	return g.DB().Transaction(ctx, func(ctx context.Context, tx gdb.TX) (err error) {

		// 修改
		if in.Id > 0 {
			in.UpdatedBy = contexts.GetUserId(ctx)
			if _, err = s.Model(ctx).
				Fields(sysin.PhishingCardsUpdateFields{}).
				WherePri(in.Id).Data(in).Update(); err != nil {
				err = gerror.Wrap(err, "修改今晚吃鱼失败，请稍后重试！")
			}
			return
		}

		// 新增
		in.CreatedBy = contexts.GetUserId(ctx)
		if _, err = s.Model(ctx, &handler.Option{FilterAuth: false}).
			Fields(sysin.PhishingCardsInsertFields{}).
			Data(in).OmitEmptyData().Insert(); err != nil {
			err = gerror.Wrap(err, "新增今晚吃鱼失败，请稍后重试！")
		}
		return
	})
}

// Delete 删除今晚吃鱼
func (s *sSysPhishingCards) Delete(ctx context.Context, in *sysin.PhishingCardsDeleteInp) (err error) {

	if _, err = s.Model(ctx).WherePri(in.Id).Unscoped().Delete(); err != nil {
		err = gerror.Wrap(err, "删除今晚吃鱼失败，请稍后重试！")
		return
	}
	return
}

// View 获取今晚吃鱼指定信息
func (s *sSysPhishingCards) View(ctx context.Context, in *sysin.PhishingCardsViewInp) (res *sysin.PhishingCardsViewModel, err error) {
	if err = s.Model(ctx).WherePri(in.Id).Scan(&res); err != nil {
		err = gerror.Wrap(err, "获取今晚吃鱼信息，请稍后重试！")
		return
	}
	return
}

// Status 更新今晚吃鱼状态
func (s *sSysPhishingCards) Status(ctx context.Context, in *sysin.PhishingCardsStatusInp) (err error) {
	if _, err = s.Model(ctx).WherePri(in.Id).Data(g.Map{
		dao.PhishingCards.Columns().Status:    in.Status,
		dao.PhishingCards.Columns().UpdatedBy: contexts.GetUserId(ctx),
	}).Update(); err != nil {
		err = gerror.Wrap(err, "更新今晚吃鱼状态失败，请稍后重试！")
		return
	}
	return
}