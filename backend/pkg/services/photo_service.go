package services

import (
	"context"
	"time"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
	"github.com/GirigiriG/GGshoot/backend/pkg/repository"
	"github.com/google/uuid"
)

type PhotoService struct {
	store repository.Repository
}

func NewPhotoService(repo repository.Repository) *PhotoService {
	return &PhotoService{
		store: repo,
	}
}

func (photo *PhotoService) CreateNewPhoto(ctx context.Context, metadata *models.Photo) (*models.Photo, error) {
	now := time.Now()
	formatted := now.Format(time.RFC3339)

	metadata.ID = uuid.NewString()
	//#TODO: This ID will be removed current used for a placeholder
	metadata.UserID = "a019cd6b-2385-4f8e-98c5-539b58b93e76"
	metadata.CreatedAt = formatted
	metadata.UpdatedAt = formatted
	metadata.IsPublished = true

	isSuccess, err := photo.store.CreateNewPhoto(metadata)
	if err != nil && !isSuccess {
		return &models.Photo{}, err
	}

	return metadata, nil
}

func (photo *PhotoService) GetPhotoById(ctx context.Context, ID string) ([]models.Photo, error) {
	return photo.store.GetPhotosByUserId(ID)
}
