// Code generated by goagen v1.2.0-dirty, DO NOT EDIT.
//
// Chat API JavaScript Client Example
//
// Command:
// $ goagen
// --design=github.com/m0a-mystudy/goa-chat/design
// --out=$(GOPATH)/src/github.com/m0a-mystudy/goa-chat/public
// --version=v1.2.0-dirty

package js

import (
	"github.com/goadesign/goa"
)

// MountController mounts the JavaScript example controller under "/js".
// This is just an example, not the best way to do this. A better way would be to specify a file
// server using the Files DSL in the design.
// Use --noexample to prevent this file from being generated.
func MountController(service *goa.Service) {
	// Serve static files under js
	service.ServeFiles("/js/*filepath", "/Users/m0a/go/src/github.com/m0a-mystudy/goa-chat/public/js")
	service.LogInfo("mount", "ctrl", "JS", "action", "ServeFiles", "route", "GET /js/*")
}
