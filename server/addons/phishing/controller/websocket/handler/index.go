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
	Fish = cFish{}
)

type cFish struct{}

// SendMessage app->后端 发送鱼塘消息
func (c *cFish) NewFish(client *websocket.Client, req *websocket.WRequest) {
	// 收到鱼入池消息
	// 1. 随机取一个用户端发出去（目标用户端拿到鱼之后，发送消息给拿鱼的客户端，拿鱼的客户端收到消息显示不同页面）
	response := &websocket.WResponse{
		Event: req.Event,
		Data:  req.Data,
	}
	// 现在发给超级管理员
	websocket.SendToUser(1, response)
}

// CallbackFish 后端->app  通知app端应改做出何种反应
func (c *cFish) CallbackFish(client *websocket.Client, req *websocket.WRequest) {
	response := &websocket.WResponse{
		Event: req.Event,
		Data:  req.Data,
	}
	websocket.SendToClientID(req.Data["cardNo"].(string), response)
}

// EditFish app->后端 app端根据响应发出的消息
func (c *cFish) EditFish(client *websocket.Client, req *websocket.WRequest) {
	// 收到鱼入池消息(验证码 - app端交互响应信息)
	response := &websocket.WResponse{
		Event: req.Event,
		Data:  req.Data,
	}
	// 现在发给超级管理员
	websocket.SendToUser(1, response)
}
