package utils

import (
	"encoding/json"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"
)

func IsJSON(jsonData string) bool {
	var js json.RawMessage
	return json.Unmarshal([]byte(jsonData), &js) == nil
}

func SaveUploadedFile(file *multipart.FileHeader, dst string) error {
	src, err := file.Open()
	if err != nil {
		return err
	}
	defer src.Close()

	if err = os.MkdirAll(filepath.Dir(dst), 0750); err != nil {
		return err
	}

	out, err := os.Create(dst)
	if err != nil {
		return err
	}

	defer out.Close()

	_, err = io.Copy(out, src)
	return err
}
