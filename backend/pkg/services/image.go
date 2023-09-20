package services

import (
	photo "github.com/GirigiriG/GGshoot/backend/pkg/models"
)

func NewPhoto(highResURL, lowResURL, photoType, author string, isPublished bool) *photo.Photo {
	return &photo.Photo{
		HighResolutionURL: highResURL,
		LowResolutionURL:  lowResURL,
		PhotoType:         photoType,
		Author:            author,
		IsPublished:         isPublished,
	}
}
