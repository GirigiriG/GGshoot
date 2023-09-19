package photo

type Photo struct {
	PhotoURL      string 
	PhotoType     string 
	Author        string
	Published     bool
	Width, Height int16
	Photos        []Photo
}
