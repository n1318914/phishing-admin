// Package handler
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2023 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
package handler

import (
	"hotgo/internal/websocket"
)

var (
	ReceiveFish = cReceiveFish{}
	SendFish    = cSendFish{}
)

type cReceiveFish struct{}
type cSendFish struct{}

// ReceiveMessage 接受鱼塘消息
func (c *cReceiveFish) ReceiveMessage(client *websocket.Client, req *websocket.WRequest) {
	// 收到鱼就发送给客户端

	websocket.SendSuccess(client, req.Event, req.Data)
}

// SendMessage 发送鱼塘消息
func (c *cSendFish) SendMessage(client *websocket.Client, req *websocket.WRequest) {
	// 将A客户端消息发送给B客户端
	// 将收到的消息原样发送给客户端
	websocket.SendSuccess(client, req.Event, req.Data)
}
