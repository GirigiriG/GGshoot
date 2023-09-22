package utils

import (
	"fmt"
	_ "image/jpeg"
	_ "image/png"
	"mime/multipart"
	"strings"

	"github.com/google/uuid"
	"github.com/h2non/bimg"
)

func CompressSavedImage(path string) string {
	buffer, err := bimg.Read(path)
	if err != nil {
		fmt.Println("FAILED TO READ FILE: " + err.Error())
	}

	compressedImage, err := bimg.NewImage(buffer).Convert(bimg.JPEG)
	if err != nil {
		fmt.Println("image compression faild: " + err.Error())
	}

	processed, err := bimg.NewImage(compressedImage).Process(bimg.Options{Quality: 20})

	if err != nil {
		fmt.Println("image processing faild: " + err.Error())
	}
	fileName := strings.Split(path, "/")[2]

	absolutePath := fmt.Sprintf("./images/cmp_%s", fileName)
	bimg.Write(absolutePath, processed)

	return absolutePath
}

func CreateImageNameFromFile(file *multipart.FileHeader) string {
	mine := file.Header.Get("Content-Type")
	extention := strings.Split(mine, "/")[1]
	filePath := "./images/"
	fileName := strings.ReplaceAll(uuid.NewString(), "-", "") + "." + extention

	return filePath + fileName
}
