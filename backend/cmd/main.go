package main

import (
	"github.com/GirigiriG/GGshoot/backend/pkg/routes"
)

func main() {
	routes.GinMuxRouteHandler().Run(":8080")
}
