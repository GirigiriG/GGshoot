package main

import (
	photo "github.com/GirigiriG/GGshoot/backend/pkg/models"
)

func NewPhoto(photoURL string, photoType string, author string, isPublished bool, photos []photo.Photo) *photo.Photo {
	return &photo.Photo{
		PhotoURL:  photoURL,
		PhotoType: photoType,
		Author:    author,
		Published: isPublished,
		Photos:    photos,
	}
}
