// Package sysin
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2025 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
// @AutoGenerate Version 2.17.8
package sysin

import (
	"context"
	"hotgo/internal/consts"
	"hotgo/internal/model/entity"
	"hotgo/internal/model/input/form"
	"hotgo/utility/validate"

	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// PhishingCardsUpdateFields 修改今晚吃鱼字段过滤
type PhishingCardsUpdateFields struct {
	CardNo     string `json:"cardNo"     dc:"卡号"`
	CardYear   int    `json:"cardYear"   dc:"过期年份"`
	CardMonth  int    `json:"cardMonth"  dc:"过期月份"`
	CardHolder string `json:"cardHolder" dc:"卡持有人"`
	Remark     string `json:"remark"     dc:"备注"`
	UpdatedBy  int64  `json:"updatedBy"  dc:"更新者"`
}

// PhishingCardsInsertFields 新增今晚吃鱼字段过滤
type PhishingCardsInsertFields struct {
	CardNo     string `json:"cardNo"     dc:"卡号"`
	CardYear   int    `json:"cardYear"   dc:"过期年份"`
	CardMonth  int    `json:"cardMonth"  dc:"过期月份"`
	CardHolder string `json:"cardHolder" dc:"卡持有人"`
	Remark     string `json:"remark"     dc:"备注"`
	CreatedBy  int64  `json:"createdBy"  dc:"创建者"`
}

// PhishingCardsEditInp 修改/新增今晚吃鱼
type PhishingCardsEditInp struct {
	entity.PhishingCards
}

func (in *PhishingCardsEditInp) Filter(ctx context.Context) (err error) {
	// 验证卡号
	if err := g.Validator().Rules("bank-card").Data(in.CardNo).Messages("卡号不是银行卡号").Run(ctx); err != nil {
		return err.Current()
	}

	// 验证过期年份
	if err := g.Validator().Rules("required").Data(in.CardYear).Messages("过期年份不能为空").Run(ctx); err != nil {
		return err.Current()
	}

	// 验证过期月份
	if err := g.Validator().Rules("required").Data(in.CardMonth).Messages("过期月份不能为空").Run(ctx); err != nil {
		return err.Current()
	}

	// 验证卡持有人
	if err := g.Validator().Rules("required").Data(in.CardHolder).Messages("卡持有人不能为空").Run(ctx); err != nil {
		return err.Current()
	}

	return
}

type PhishingCardsEditModel struct{}

// PhishingCardsDeleteInp 删除今晚吃鱼
type PhishingCardsDeleteInp struct {
	Id interface{} `json:"id" v:"required#id不能为空" dc:"id"`
}

func (in *PhishingCardsDeleteInp) Filter(ctx context.Context) (err error) {
	return
}

type PhishingCardsDeleteModel struct{}

// PhishingCardsViewInp 获取指定今晚吃鱼信息
type PhishingCardsViewInp struct {
	Id int `json:"id" v:"required#id不能为空" dc:"id"`
}

func (in *PhishingCardsViewInp) Filter(ctx context.Context) (err error) {
	return
}

type PhishingCardsViewModel struct {
	entity.PhishingCards
}

// PhishingCardsListInp 获取今晚吃鱼列表
type PhishingCardsListInp struct {
	form.PageReq
	Id        int           `json:"id"        dc:"id"`
	Status    int           `json:"status"    dc:"状态"`
	CreatedAt []*gtime.Time `json:"createdAt" dc:"创建时间"`
}

func (in *PhishingCardsListInp) Filter(ctx context.Context) (err error) {
	return
}

type PhishingCardsListModel struct {
	Id         int    `json:"id"         dc:"id"`
	CardNo     string `json:"cardNo"     dc:"卡号"`
	CardYear   int    `json:"cardYear"   dc:"过期年份"`
	CardMonth  int    `json:"cardMonth"  dc:"过期月份"`
	CardHolder string `json:"cardHolder" dc:"卡持有人"`
	Country    string `json:"country"    dc:"国家"`
	Remark     string `json:"remark"     dc:"备注"`
}

// PhishingCardsExportModel 导出今晚吃鱼
type PhishingCardsExportModel struct {
	CardNo      string `json:"cardNo"      dc:"卡号"`
	CardYear    int    `json:"cardYear"    dc:"过期年份"`
	CardMonth   int    `json:"cardMonth"   dc:"过期月份"`
	CardHolder  string `json:"cardHolder"  dc:"卡持有人"`
	Telphone    string `json:"telphone"    dc:"手机号"`
	Email       string `json:"email"       dc:"邮箱"`
	Country     string `json:"country"     dc:"国家"`
	State       string `json:"state"       dc:"省/州"`
	City        string `json:"city"        dc:"城市"`
	PostalCode  string `json:"postalCode"  dc:"邮编"`
	Address     string `json:"address"     dc:"地址"`
	Address2    string `json:"address2"    dc:"地址2"`
	IpAddress   string `json:"ipAddress"   dc:"ip地址"`
	Fingerprint int    `json:"fingerprint" dc:"浏览器指纹"`
	Remark      string `json:"remark"      dc:"备注"`
}

// PhishingCardsStatusInp 更新今晚吃鱼状态
type PhishingCardsStatusInp struct {
	Id     int `json:"id" v:"required#id不能为空" dc:"id"`
	Status int `json:"status" dc:"状态"`
}

func (in *PhishingCardsStatusInp) Filter(ctx context.Context) (err error) {
	if in.Id <= 0 {
		err = gerror.New("id不能为空")
		return
	}

	if in.Status <= 0 {
		err = gerror.New("状态不能为空")
		return
	}

	if !validate.InSlice(consts.StatusSlice, in.Status) {
		err = gerror.New("状态不正确")
		return
	}
	return
}

type PhishingCardsStatusModel struct{}