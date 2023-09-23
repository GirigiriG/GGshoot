package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
	"github.com/GirigiriG/GGshoot/backend/pkg/repository"
	"github.com/GirigiriG/GGshoot/backend/pkg/services"
	"github.com/gorilla/mux"
)

var service *services.PhotoService

// Set up servic
func init() {
	db := repository.NewDB()
	repo := repository.NewPhotoRepository(db)
	service = services.NewPhotoService(repo)
}

func GetPhotosByUserID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")

	params := mux.Vars(r)

	ID, ok := params["id"]

	if !ok {
		fmt.Println("id not found!")
	}
	ctx := context.Background()
	photos, err := service.GetPhotoById(ctx, ID)
	if err != nil {
		json.NewEncoder(w).Encode("Error")
	}

	if err != nil {
		json.NewEncoder(w).Encode(
			models.ResponseWrapper{
				Status:  http.StatusInternalServerError,
				Message: "Something went wrong",
				Body:    photos,
			},
		)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(models.ResponseWrapper{
		Status:  http.StatusOK,
		Message: "OK",
		Body:    photos,
	})
}

func UploadImage(w http.ResponseWriter, r *http.Request) {
	metadata := models.NewPhoto()
	_, fileHandler, _ := r.FormFile("images[]")
	userData := r.FormValue("metadata")

	services.CompressAndGenerateURL(fileHandler, metadata)
	parsePhotoMetaData(userData, metadata)

	ctx := context.Background()
	service.CreateNewPhoto(ctx, metadata)
}

func parsePhotoMetaData(data string, dst *models.Photo) *models.Photo {
	if err := json.Unmarshal([]byte(data), dst); err != nil {
		fmt.Println("Error parse photo metada: ", err.Error())
	}
	return dst
}
