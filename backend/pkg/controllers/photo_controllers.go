package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
	"github.com/GirigiriG/GGshoot/backend/pkg/services"
	"github.com/GirigiriG/GGshoot/backend/pkg/utils"
	"github.com/gin-gonic/gin"
)

func GetPhotosByUserID(c *gin.Context, srv *services.PhotoService) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	ID, ok := c.Params.Get("id")
	if !ok {
		fmt.Println("id not found!")
	}
	ctx := context.Background()
	photos, err := srv.GetPhotoById(ctx, ID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"stauts":  http.StatusBadRequest,
			"message": err.Error(),
			"body":    "",
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "success",
		"body":    photos,
	})
}

func Upload(c *gin.Context, srv *services.PhotoService) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	metadata := models.NewPhoto()

	form, _ := c.MultipartForm()
	files := form.File["images[]"]

	for _, JSONresult := range form.Value["metadata"] {
		if utils.IsJSON(JSONresult) {
			metadata = parsePhotoMetaData(JSONresult, metadata)
		}
	}

	services.CompressAndGenerateURL(c, files, metadata)

	_, err := srv.CreateNewPhoto(c, metadata)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"stauts":  http.StatusBadRequest,
			"message": err.Error(),
			"body":    "",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"stauts":  http.StatusOK,
		"message": err,
		"body":    metadata,
	})
}

func parsePhotoMetaData(data string, dst *models.Photo) *models.Photo {
	if err := json.Unmarshal([]byte(data), dst); err != nil {
		fmt.Println("Error parse photo metada: ", err.Error())
	}
	return dst
}
