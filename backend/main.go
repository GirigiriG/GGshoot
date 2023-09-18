package main

import (
	"fmt"
	"log"
	"mime/multipart"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/h2non/bimg"
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
			path := createImageNameFromFile(file)
			ctx.SaveUploadedFile(file, path)
			compressSavedImage(path)
		}
	})

	router.Run(":8080")
}

func compressSavedImage(path string) {
	log.Println(path)
	buffer, err := bimg.Read(path)
	if err != nil {
		fmt.Println("FAILED TO READ FILE: " + err.Error())
	}

	compressedImage, err := bimg.NewImage(buffer).Convert(bimg.JPEG)
	if err != nil {
		fmt.Println("image compression faild: " + err.Error())
	}

	processed, err := bimg.NewImage(compressedImage).Process(bimg.Options{Quality: 20})
	if err != nil {
		fmt.Println("image processing faild: " + err.Error())
	}
	fileName := strings.Split(path, "/")[2]
	
	bimg.Write(fmt.Sprintf("./images/cmp_%s", fileName), processed)

}

func createImageNameFromFile(file *multipart.FileHeader) string {
	mine := file.Header.Get("Content-Type")
	extention := strings.Split(mine, "/")[1]
	filePath := "./images/"
	fileName := uuid.NewString() + "." + extention

	return filePath + fileName
}
