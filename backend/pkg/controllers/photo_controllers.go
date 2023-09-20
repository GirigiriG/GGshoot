package controllers

import (
	"encoding/json"
	"fmt"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
	"github.com/GirigiriG/GGshoot/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

func Upload(ctx *gin.Context) {
	photoMetadata := models.Photo{}

	form, _ := ctx.MultipartForm()
	files := form.File["images[]"]

	for _, metadata := range form.Value["metadata"] {

		if utils.IsJSON(metadata) {
			parsePhotoMetaData(metadata, &photoMetadata)
		}
	}

	for _, file := range files {
		highResolutionPath := utils.CreateImageNameFromFile(file)
		ctx.SaveUploadedFile(file, highResolutionPath)
		lowResolutionPath := utils.CompressSavedImage(highResolutionPath)

		photoMetadata.HighResolutionURL = highResolutionPath
		photoMetadata.LowResolutionURL = lowResolutionPath
	}
}

func parsePhotoMetaData(data string, dst *models.Photo) {
	photoMetadata := &models.Photo{}
	if err := json.Unmarshal([]byte(data), photoMetadata); err != nil {
		fmt.Println("Error parse photo metada: ", err.Error())
	}
}
