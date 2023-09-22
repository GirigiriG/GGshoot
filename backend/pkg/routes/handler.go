package routes

import (
	"github.com/GirigiriG/GGshoot/backend/pkg/controllers"
	"github.com/GirigiriG/GGshoot/backend/pkg/repository"
	"github.com/GirigiriG/GGshoot/backend/pkg/services"
	"github.com/gin-gonic/gin"
)

func GinMuxRouteHandler() *gin.Engine {
	db := repository.NewDB()
	repo := repository.NewPhotoRepository(db)

	photoService := services.NewPhotoService(repo)
	app := gin.Default()
	app.POST("/upload", func(ctx *gin.Context) { controllers.Upload(ctx, photoService) })
	app.GET("/photos/:id", func(ctx *gin.Context) { controllers.GetPhotosByUserID(ctx, photoService) })
	return app
}
