// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// PhishingCards is the golang structure of table hg_phishing_cards for DAO operations like Where/Data.
type PhishingCards struct {
	g.Meta      `orm:"table:hg_phishing_cards, do:true"`
	Id          interface{} //
	CardNo      interface{} // 卡号
	CardYear    interface{} // 过期年份
	CardMonth   interface{} // 过期月份
	CardHolder  interface{} // 卡持有人
	FirstName   interface{} // 持有人名
	LastName    interface{} // 持有人姓
	Telphone    interface{} // 手机号
	Email       interface{} // 邮箱
	Country     interface{} // 国家
	State       interface{} // 省/州
	City        interface{} // 城市
	PostalCode  interface{} // 邮编
	Address     interface{} // 地址
	Address2    interface{} // 地址2
	IpAddress   interface{} // ip地址
	Fingerprint interface{} // 浏览器指纹
	Remark      interface{} // 备注
	Status      interface{} // 状态
	CreatedBy   interface{} // 创建者
	UpdatedBy   interface{} // 更新者
	CreatedAt   *gtime.Time // 创建时间
	UpdatedAt   *gtime.Time // 修改时间
	DeletedAt   *gtime.Time // 删除时间
}
