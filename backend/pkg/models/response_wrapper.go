package models

type ResponseWrapper struct {
	Status  int     `json:"status"`
	Message string  `json:"message"`
	Body    []Photo `json:"body"`
}
