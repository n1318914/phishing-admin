// Package router
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2024 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
package router

import (
	"context"
	"hotgo/addons/phishing/controller/websocket/handler"
	"hotgo/addons/phishing/global"
	"hotgo/internal/consts"
	"hotgo/internal/library/addons"
	"hotgo/internal/service"
	"hotgo/internal/websocket"
	ws "hotgo/internal/websocket"

	"github.com/gogf/gf/v2/net/ghttp"
)

// WebSocket ws路由配置
func WebSocket(ctx context.Context, group *ghttp.RouterGroup) {
	prefix := addons.RouterPrefix(ctx, consts.AppWebSocket, global.GetSkeleton().Name)
	group.Group(prefix, func(group *ghttp.RouterGroup) {
		// socket/phishing
		group.GET("/", websocket.WsPage)

		// ws连接中间件
		group.Middleware(service.Middleware().WebSocketAuth)

	})

	// 注册消息路由
	ws.RegisterMsg(ws.EventHandlers{
		"websocket/addons/phishing/newFish":      handler.Fish.NewFish,      // A发送鱼塘消息
		"websocket/addons/phishing/callbackFish": handler.Fish.CallbackFish, // B接收鱼塘消息，通知app端做出反应
		"websocket/addons/phishing/editFish":     handler.Fish.EditFish,     // app端根据响应发出的消息
	})
}
