package services

import (
	"fmt"
	"log"
	"mime/multipart"
	"os"
	"strings"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
	"github.com/GirigiriG/GGshoot/backend/pkg/storage"
	"github.com/GirigiriG/GGshoot/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

func CompressAndGenerateURL(ctx *gin.Context, files []*multipart.FileHeader, metadata *models.Photo) {
	bucket := storage.NewStorage()

	for _, file := range files {
		highResolutionPath := utils.CreateImageNameFromFile(file)
		ctx.SaveUploadedFile(file, highResolutionPath)
		lowResolutionPath := utils.CompressSavedImage(highResolutionPath)

		metadata.HighResolutionURL = bucket.UploadImage(highResolutionPath)
		metadata.LowResolutionURL = bucket.UploadImage(lowResolutionPath)

		go deleteImageAfterS3upload(highResolutionPath, lowResolutionPath)
	}
}

func deleteImageAfterS3upload(pathToImages ...string) {
	for _, path := range pathToImages {
		if err := os.Remove(path); err != nil {
			fmt.Printf("error occured while deleting file %s. error: %s\n", path, err.Error())
			continue
		}

		log.Printf("Successfully deleted %s from disk", strings.Split(path, "/")[2])
	}
}
