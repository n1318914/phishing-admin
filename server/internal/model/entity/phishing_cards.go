// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package entity

import (
	"github.com/gogf/gf/v2/os/gtime"
)

// PhishingCards is the golang structure for table phishing_cards.
type PhishingCards struct {
	Id          int         `json:"id"          orm:"id"          description:""`
	CardNo      string      `json:"cardNo"      orm:"card_no"     description:"卡号"`
	CardYear    int         `json:"cardYear"    orm:"card_year"   description:"过期年份"`
	CardMonth   int         `json:"cardMonth"   orm:"card_month"  description:"过期月份"`
	CardHolder  string      `json:"cardHolder"  orm:"card_holder" description:"卡持有人"`
	FirstName   string      `json:"firstName"   orm:"first_name"  description:"持有人名"`
	LastName    string      `json:"lastName"    orm:"last_name"   description:"持有人姓"`
	Telphone    string      `json:"telphone"    orm:"telphone"    description:"手机号"`
	Email       string      `json:"email"       orm:"email"       description:"邮箱"`
	Country     string      `json:"country"     orm:"country"     description:"国家"`
	State       string      `json:"state"       orm:"state"       description:"省/州"`
	City        string      `json:"city"        orm:"city"        description:"城市"`
	PostalCode  string      `json:"postalCode"  orm:"postal_code" description:"邮编"`
	Address     string      `json:"address"     orm:"address"     description:"地址"`
	Address2    string      `json:"address2"    orm:"address2"    description:"地址2"`
	IpAddress   string      `json:"ipAddress"   orm:"ip_address"  description:"ip地址"`
	Fingerprint int         `json:"fingerprint" orm:"fingerprint" description:"浏览器指纹"`
	Remark      string      `json:"remark"      orm:"remark"      description:"备注"`
	Status      int         `json:"status"      orm:"status"      description:"状态"`
	CreatedBy   int64       `json:"createdBy"   orm:"created_by"  description:"创建者"`
	UpdatedBy   int64       `json:"updatedBy"   orm:"updated_by"  description:"更新者"`
	CreatedAt   *gtime.Time `json:"createdAt"   orm:"created_at"  description:"创建时间"`
	UpdatedAt   *gtime.Time `json:"updatedAt"   orm:"updated_at"  description:"修改时间"`
	DeletedAt   *gtime.Time `json:"deletedAt"   orm:"deleted_at"  description:"删除时间"`
}
