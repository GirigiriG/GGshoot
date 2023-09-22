package repository

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"time"

	"github.com/GirigiriG/GGshoot/backend/pkg/models"
)

type Repository interface {
	GetPhotosByUserId(ID string) ([]models.Photo, error)
	CreateNewPhoto(photo *models.Photo) (bool, error)
}

type PhotoRepository struct {
	store *sql.DB
}

func NewPhotoRepository(db *sql.DB) *PhotoRepository {
	return &PhotoRepository{store: db}
}

func (repo *PhotoRepository) GetPhotosByUserId(ID string) ([]models.Photo, error) {
	var photos []models.Photo

	ctx, cancelFunc := context.WithTimeout(context.Background(), time.Second*3)
	defer cancelFunc()

	query := `SELECT 
				id, 
				high_resolution_url, 
				low_resolution_url, 
				author, 
				photo_type, 
				is_published, 
				user_id,
				created_at,
				updated_at 
			FROM photos WHERE user_id = ? AND is_published = true;`

	stmt, err := repo.store.PrepareContext(ctx, query)
	if err != nil {
		fmt.Println("error occured while querying photo by id: ", err.Error())
		return photos, errors.New("invalid sql")
	}
	defer stmt.Close()

	rows, err := stmt.QueryContext(ctx, ID)
	if err != nil {
		return photos, fmt.Errorf("record not found for %s", ID)
	}

	for rows.Next() {
		var photo models.Photo

		err := rows.Scan(
			&photo.ID,
			&photo.HighResolutionURL,
			&photo.LowResolutionURL,
			&photo.Author,
			&photo.PhotoType,
			&photo.IsPublished,
			&photo.UserID,
			&photo.CreatedAt,
			&photo.UpdatedAt,
		)
		if err != nil {
			fmt.Println(err.Error())
			return nil, fmt.Errorf("error retrieving %s", ID)
		}

		photos = append(photos, photo)
	}

	return photos, nil
}

func (repo *PhotoRepository) CreateNewPhoto(metadata *models.Photo) (bool, error) {
	query := `INSERT INTO photos(
		id, 
		high_resolution_url, 
		low_resolution_url, 
		author, photo_type, 
		is_published, 
		user_id,
		created_at,
		updated_at
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

	result, err := repo.store.ExecContext(context.Background(), query,
		metadata.ID,
		metadata.HighResolutionURL,
		metadata.LowResolutionURL,
		metadata.Author,
		metadata.PhotoType,
		metadata.IsPublished,
		metadata.UserID,
		metadata.CreatedAt,
		metadata.UpdatedAt,
	)
	if err != nil {
		fmt.Println("error occured while creating &record: ", err.Error())
		return false, fmt.Errorf("error creating record")
	}

	affected, _ := result.RowsAffected()
	return affected > 0, nil
}
