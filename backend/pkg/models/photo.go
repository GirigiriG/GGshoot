package models

type Photo struct {
	ID                string `json:"id"`
	HighResolutionURL string `json:"highResolutionURL"`
	LowResolutionURL  string `json:"lowResolutionURL"`
	PhotoType         string `json:"photoType"`
	Author            string `json:"author"`
	IsPublished       bool   `json:"published"`
	UserID            string `json:"userId"`
	CreatedAt         string `json:"created_at"`
	UpdatedAt         string `json:"updated_at"`
}

func NewPhoto() *Photo {
	return &Photo{}
}
