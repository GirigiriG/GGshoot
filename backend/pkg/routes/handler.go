package routes

import (
	"net/http"

	"github.com/GirigiriG/GGshoot/backend/pkg/controllers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func MuxRouteHandler() http.Handler {
	mux := mux.NewRouter()
	
	mux.HandleFunc("/photos/{id}", controllers.GetPhotosByUserID).Methods(http.MethodGet)
	mux.HandleFunc("/upload", controllers.UploadImage).Methods(http.MethodPost)

	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	})

	router := cors.Handler(mux)
	return router
}
