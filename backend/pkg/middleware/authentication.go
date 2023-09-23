package middleware

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

type Payload struct {
	jwt.RegisteredClaims
	CustomClaims map[string]string `json:"custom_claims"`
}

func AuthenticationMiddleWare() (string, error) {
	secret := "c0436953-aef8-4042-8117-36faa62d9ed2"
	claims := Payload{
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Hour * 24)},
		},
		CustomClaims: map[string]string{
			"user_id": "a019cd6b-2385-4f8e-98c5-539b58b93e76",
			"email":   "Gideongirigiri@gmail.com",
		},
	}

	tokenString := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenString.SignedString(secret)

	return token, err
}

func HandlValidation(c *gin.Context) {
	ValidateToken(c)
}

func ValidateToken(c *gin.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		secret := "c0436953-aef8-4042-8117-36faa62d9ed2"
		clamis := &Payload{}
		_, err := jwt.ParseWithClaims("", clamis, func(token *jwt.Token) (interface{}, error) {
			return secret, nil
		})

		if err != nil {
			if validationError, ok := err.(*jwt.ValidationError); ok {
				if validationError.Errors&jwt.ValidationErrorMalformed != 0 {
					fmt.Println("Token is malformed")
					c.Abort()
					return
				} else if validationError.Errors&(jwt.ValidationErrorExpired|jwt.ValidationErrorNotValidYet) != 0 {
					fmt.Println("Token is either expired or not active yet")
					return
				} else {
					fmt.Println(err.Error())
					c.Abort()
					return
				}
			} else {
				fmt.Println(err.Error())
				c.Abort()
				return
			}
		}

		c.Next()
	}
}
