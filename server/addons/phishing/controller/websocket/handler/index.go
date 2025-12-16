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
	// 收到鱼入池消息
	// 1. 随机取一个用户端发出去（目标用户端拿到鱼之后，发送消息给拿鱼的客户端，拿鱼的客户端收到消息显示不同页面）
	response := &websocket.WResponse{
		Event: req.Event,
		Data:  req.Data,
	}
	websocket.SendToUser(1, response)
	// 2.
	// 将收到的消息原样发送给客户端
	//websocket.SendSuccess(client, req.Event, req.Data)

	//websocket.SendToAll(response)
	//websocket.SendToClientID("2222222222222", response)

}
