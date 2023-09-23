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
)

func CompressAndGenerateURL(image *multipart.FileHeader, metadata *models.Photo) {
	bucket := storage.NewStorage()

	highResolutionPath := utils.CreateImageNameFromFile(image)
	utils.SaveUploadedFile(image, highResolutionPath)
	lowResolutionPath := utils.CompressSavedImage(highResolutionPath)

	metadata.HighResolutionURL = bucket.UploadImage(highResolutionPath)
	metadata.LowResolutionURL = bucket.UploadImage(lowResolutionPath)

	go deleteImageAfterS3upload(highResolutionPath, lowResolutionPath)

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
