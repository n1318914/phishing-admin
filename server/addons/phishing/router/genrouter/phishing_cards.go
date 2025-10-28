// Package genrouter
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2025 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
// @AutoGenerate Version 2.17.8
package genrouter

import "hotgo/addons/phishing/controller/admin/sys"

func init() {
	LoginRequiredRouter = append(LoginRequiredRouter, sys.PhishingCards) // 今晚吃鱼
}
