// ==========================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// ==========================================================================

package internal

import (
	"context"

	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/frame/g"
)

// PhishingCardsDao is the data access object for the table hg_phishing_cards.
type PhishingCardsDao struct {
	table    string               // table is the underlying table name of the DAO.
	group    string               // group is the database configuration group name of the current DAO.
	columns  PhishingCardsColumns // columns contains all the column names of Table for convenient usage.
	handlers []gdb.ModelHandler   // handlers for customized model modification.
}

// PhishingCardsColumns defines and stores column names for the table hg_phishing_cards.
type PhishingCardsColumns struct {
	Id          string //
	CardNo      string // 卡号
	CardYear    string // 过期年份
	CardMonth   string // 过期月份
	CardHolder  string // 卡持有人
	FirstName   string // 持有人名
	LastName    string // 持有人姓
	Telphone    string // 手机号
	Email       string // 邮箱
	Country     string // 国家
	State       string // 省/州
	City        string // 城市
	PostalCode  string // 邮编
	Address     string // 地址
	Address2    string // 地址2
	IpAddress   string // ip地址
	Fingerprint string // 浏览器指纹
	Remark      string // 备注
	Status      string // 状态
	CreatedBy   string // 创建者
	UpdatedBy   string // 更新者
	CreatedAt   string // 创建时间
	UpdatedAt   string // 修改时间
	DeletedAt   string // 删除时间
}

// phishingCardsColumns holds the columns for the table hg_phishing_cards.
var phishingCardsColumns = PhishingCardsColumns{
	Id:          "id",
	CardNo:      "card_no",
	CardYear:    "card_year",
	CardMonth:   "card_month",
	CardHolder:  "card_holder",
	FirstName:   "first_name",
	LastName:    "last_name",
	Telphone:    "telphone",
	Email:       "email",
	Country:     "country",
	State:       "state",
	City:        "city",
	PostalCode:  "postal_code",
	Address:     "address",
	Address2:    "address2",
	IpAddress:   "ip_address",
	Fingerprint: "fingerprint",
	Remark:      "remark",
	Status:      "status",
	CreatedBy:   "created_by",
	UpdatedBy:   "updated_by",
	CreatedAt:   "created_at",
	UpdatedAt:   "updated_at",
	DeletedAt:   "deleted_at",
}

// NewPhishingCardsDao creates and returns a new DAO object for table data access.
func NewPhishingCardsDao(handlers ...gdb.ModelHandler) *PhishingCardsDao {
	return &PhishingCardsDao{
		group:    "default",
		table:    "hg_phishing_cards",
		columns:  phishingCardsColumns,
		handlers: handlers,
	}
}

// DB retrieves and returns the underlying raw database management object of the current DAO.
func (dao *PhishingCardsDao) DB() gdb.DB {
	return g.DB(dao.group)
}

// Table returns the table name of the current DAO.
func (dao *PhishingCardsDao) Table() string {
	return dao.table
}

// Columns returns all column names of the current DAO.
func (dao *PhishingCardsDao) Columns() PhishingCardsColumns {
	return dao.columns
}

// Group returns the database configuration group name of the current DAO.
func (dao *PhishingCardsDao) Group() string {
	return dao.group
}

// Ctx creates and returns a Model for the current DAO. It automatically sets the context for the current operation.
func (dao *PhishingCardsDao) Ctx(ctx context.Context) *gdb.Model {
	model := dao.DB().Model(dao.table)
	for _, handler := range dao.handlers {
		model = handler(model)
	}
	return model.Safe().Ctx(ctx)
}

// Transaction wraps the transaction logic using function f.
// It rolls back the transaction and returns the error if function f returns a non-nil error.
// It commits the transaction and returns nil if function f returns nil.
//
// Note: Do not commit or roll back the transaction in function f,
// as it is automatically handled by this function.
func (dao *PhishingCardsDao) Transaction(ctx context.Context, f func(ctx context.Context, tx gdb.TX) error) (err error) {
	return dao.Ctx(ctx).Transaction(ctx, f)
}
