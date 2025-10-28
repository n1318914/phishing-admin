// ================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"
	"hotgo/addons/phishing/model"
	"hotgo/addons/phishing/model/input/sysin"
	"hotgo/internal/library/hgorm/handler"

	"github.com/gogf/gf/v2/database/gdb"
)

type (
	ISysConfig interface {
		// GetBasic 获取基础配置
		GetBasic(ctx context.Context) (conf *model.BasicConfig, err error)
		// GetConfigByGroup 获取指定分组配置
		GetConfigByGroup(ctx context.Context, in *sysin.GetConfigInp) (res *sysin.GetConfigModel, err error)
		// UpdateConfigByGroup 更新指定分组的配置
		UpdateConfigByGroup(ctx context.Context, in *sysin.UpdateConfigInp) error
	}
	ISysIndex interface {
		// Test 测试
		Test(ctx context.Context, in *sysin.IndexTestInp) (res *sysin.IndexTestModel, err error)
	}
	ISysPhishingCards interface {
		// Model 今晚吃鱼ORM模型
		Model(ctx context.Context, option ...*handler.Option) *gdb.Model
		// List 获取今晚吃鱼列表
		List(ctx context.Context, in *sysin.PhishingCardsListInp) (list []*sysin.PhishingCardsListModel, totalCount int, err error)
		// Export 导出今晚吃鱼
		Export(ctx context.Context, in *sysin.PhishingCardsListInp) (err error)
		// Edit 修改/新增今晚吃鱼
		Edit(ctx context.Context, in *sysin.PhishingCardsEditInp) (err error)
		// Delete 删除今晚吃鱼
		Delete(ctx context.Context, in *sysin.PhishingCardsDeleteInp) (err error)
		// View 获取今晚吃鱼指定信息
		View(ctx context.Context, in *sysin.PhishingCardsViewInp) (res *sysin.PhishingCardsViewModel, err error)
		// Status 更新今晚吃鱼状态
		Status(ctx context.Context, in *sysin.PhishingCardsStatusInp) (err error)
	}
)

var (
	localSysConfig        ISysConfig
	localSysIndex         ISysIndex
	localSysPhishingCards ISysPhishingCards
)

func SysConfig() ISysConfig {
	if localSysConfig == nil {
		panic("implement not found for interface ISysConfig, forgot register?")
	}
	return localSysConfig
}

func RegisterSysConfig(i ISysConfig) {
	localSysConfig = i
}

func SysIndex() ISysIndex {
	if localSysIndex == nil {
		panic("implement not found for interface ISysIndex, forgot register?")
	}
	return localSysIndex
}

func RegisterSysIndex(i ISysIndex) {
	localSysIndex = i
}

func SysPhishingCards() ISysPhishingCards {
	if localSysPhishingCards == nil {
		panic("implement not found for interface ISysPhishingCards, forgot register?")
	}
	return localSysPhishingCards
}

func RegisterSysPhishingCards(i ISysPhishingCards) {
	localSysPhishingCards = i
}
