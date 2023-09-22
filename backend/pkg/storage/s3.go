package storage

import (
	"fmt"
	"os"
	"strings"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type Bucket struct {
	srv *s3manager.Uploader
}

func NewStorage() *Bucket {
	aws_session := session.Must(session.NewSession())

	return &Bucket{
		srv: s3manager.NewUploader(aws_session),
	}
}

func (bucket *Bucket) UploadImage(filePath string) string {
	bucketName := "ggshoot"
	f, err := os.Open(filePath)
	if err != nil {
		fmt.Printf("error opening file %s, err: %s\n", filePath, err.Error())
		return ""
	}

	result, err := bucket.srv.Upload(&s3manager.UploadInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(strings.Split(filePath, "/")[2]),
		Body:   f,
		ACL:    aws.String("public-read"),
	})
	if err != nil {
		fmt.Printf("error occurred while uploading %s to %s . err: %s\n", filePath, bucketName, err.Error())
		return ""
	}
	defer f.Close()

	return result.Location
}
