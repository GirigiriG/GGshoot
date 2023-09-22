package repository

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func NewDB() *sql.DB {
	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/ggshoot")
	if err != nil {
		log.Panic(err)
	}

	return db
}
