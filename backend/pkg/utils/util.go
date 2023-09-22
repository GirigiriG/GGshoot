package utils

import "encoding/json"

func IsJSON(jsonData string) bool {
	var js json.RawMessage
	return json.Unmarshal([]byte(jsonData), &js) == nil
}
