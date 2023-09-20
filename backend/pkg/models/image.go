package models

type Photo struct {
	HighResolutionURL string `json:"highResolutionURL"`
	LowResolutionURL  string `json:"lowResolutionURL"`
	PhotoType         string `json:"photoType"`
	Author            string `json:"author"`
	IsPublished         bool   `json:"published"`
	UserID            string `json:"userId"`
}
