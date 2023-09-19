package main

import (
	"fmt"

	"github.com/GirigiriG/GGshoot/backend/pkg/utils"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("images", "./images")

	router.Use(cors.Default())

	router.GET("/", func(ctx *gin.Context) {

		ctx.JSON(200, gin.H{
			"image": fmt.Sprintf("http://localhost:8080/images/%s", "c566a8d1-4761-43a1-adfa-480b4548db0e.jpeg"),
		})
	})

	router.POST("/upload", func(ctx *gin.Context) {
		form, _ := ctx.MultipartForm()
		files := form.File["images[]"]

		for _, file := range files {

			path := utils.CreateImageNameFromFile(file)
			ctx.SaveUploadedFile(file, path)
			utils.CompressSavedImage(path)
		}
	})

	router.Run(":8080")
}
