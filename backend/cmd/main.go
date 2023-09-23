package main

import (
	"log"
	"net/http"

	"github.com/GirigiriG/GGshoot/backend/pkg/routes"
)

func main() {
	router := routes.MuxRouteHandler()
	log.Fatal(http.ListenAndServe(":8080", router))
}
