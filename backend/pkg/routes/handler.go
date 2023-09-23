package routes

import (
	"github.com/GirigiriG/GGshoot/backend/pkg/controllers"
	"github.com/GirigiriG/GGshoot/backend/pkg/middleware"
	"github.com/gin-gonic/gin"
)

func GinMuxRouteHandler() *gin.Engine {
	router := gin.Default()
	router.POST("/upload", controllers.UploadImage)
	router.GET("/jwt", middleware.HandlValidation, controllers.HandleGetPhotosByUserID)
	router.GET("/photos/:id", controllers.GetPhotosByUserID)
	return router
}
