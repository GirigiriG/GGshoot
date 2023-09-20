package routes

import (
	"github.com/GirigiriG/GGshoot/backend/pkg/controllers"
	"github.com/gin-gonic/gin"
)

func GinMuxRouteHandler() *gin.Engine {
	app := gin.Default()
	app.POST("/upload", func(ctx *gin.Context) { controllers.Upload(ctx) })
	return app
}
