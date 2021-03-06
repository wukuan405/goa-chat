// Code generated by goagen v1.2.0-dirty, DO NOT EDIT.
//
// API "Chat API": Application Controllers
//
// Command:
// $ goagen
// --design=github.com/m0a-mystudy/goa-chat/design
// --out=$(GOPATH)/src/github.com/m0a-mystudy/goa-chat
// --version=v1.2.0-dirty

package app

import (
	"context"
	"github.com/goadesign/goa"
	"github.com/goadesign/goa/cors"
	"net/http"
)

// initService sets up the service encoders, decoders and mux.
func initService(service *goa.Service) {
	// Setup encoders and decoders
	service.Encoder.Register(goa.NewJSONEncoder, "application/json")
	service.Encoder.Register(goa.NewGobEncoder, "application/gob", "application/x-gob")
	service.Encoder.Register(goa.NewXMLEncoder, "application/xml")
	service.Decoder.Register(goa.NewJSONDecoder, "application/json")
	service.Decoder.Register(goa.NewGobDecoder, "application/gob", "application/x-gob")
	service.Decoder.Register(goa.NewXMLDecoder, "application/xml")

	// Setup default encoder and decoder
	service.Encoder.Register(goa.NewJSONEncoder, "*/*")
	service.Decoder.Register(goa.NewJSONDecoder, "*/*")
}

// AccountController is the controller interface for the Account actions.
type AccountController interface {
	goa.Muxer
	List(*ListAccountContext) error
	Post(*PostAccountContext) error
	Show(*ShowAccountContext) error
}

// MountAccountController "mounts" a Account resource controller on the given service.
func MountAccountController(service *goa.Service, ctrl AccountController) {
	initService(service)
	var h goa.Handler
	service.Mux.Handle("OPTIONS", "/api/accounts", ctrl.MuxHandler("preflight", handleAccountOrigin(cors.HandlePreflight()), nil))
	service.Mux.Handle("OPTIONS", "/api/accounts/:user", ctrl.MuxHandler("preflight", handleAccountOrigin(cors.HandlePreflight()), nil))

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewListAccountContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.List(rctx)
	}
	h = handleAccountOrigin(h)
	service.Mux.Handle("GET", "/api/accounts", ctrl.MuxHandler("list", h, nil))
	service.LogInfo("mount", "ctrl", "Account", "action", "List", "route", "GET /api/accounts")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewPostAccountContext(ctx, req, service)
		if err != nil {
			return err
		}
		// Build the payload
		if rawPayload := goa.ContextRequest(ctx).Payload; rawPayload != nil {
			rctx.Payload = rawPayload.(*MessagePayload)
		} else {
			return goa.MissingPayloadError()
		}
		return ctrl.Post(rctx)
	}
	h = handleAccountOrigin(h)
	service.Mux.Handle("POST", "/api/accounts", ctrl.MuxHandler("post", h, unmarshalPostAccountPayload))
	service.LogInfo("mount", "ctrl", "Account", "action", "Post", "route", "POST /api/accounts")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewShowAccountContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.Show(rctx)
	}
	h = handleAccountOrigin(h)
	service.Mux.Handle("GET", "/api/accounts/:user", ctrl.MuxHandler("show", h, nil))
	service.LogInfo("mount", "ctrl", "Account", "action", "Show", "route", "GET /api/accounts/:user")
}

// handleAccountOrigin applies the CORS response headers corresponding to the origin.
func handleAccountOrigin(h goa.Handler) goa.Handler {

	return func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		origin := req.Header.Get("Origin")
		if origin == "" {
			// Not a CORS request
			return h(ctx, rw, req)
		}
		if cors.MatchOrigin(origin, "http://test.com:3000") {
			ctx = goa.WithLogContext(ctx, "origin", origin)
			rw.Header().Set("Access-Control-Allow-Origin", origin)
			rw.Header().Set("Vary", "Origin")
			rw.Header().Set("Access-Control-Allow-Credentials", "false")
			if acrm := req.Header.Get("Access-Control-Request-Method"); acrm != "" {
				// We are handling a preflight request
				rw.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
				rw.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Csrftoken, Authorization")
			}
			return h(ctx, rw, req)
		}

		return h(ctx, rw, req)
	}
}

// unmarshalPostAccountPayload unmarshals the request body into the context request data Payload field.
func unmarshalPostAccountPayload(ctx context.Context, service *goa.Service, req *http.Request) error {
	payload := &messagePayload{}
	if err := service.DecodeRequest(req, payload); err != nil {
		return err
	}
	payload.Finalize()
	if err := payload.Validate(); err != nil {
		// Initialize payload with private data structure so it can be logged
		goa.ContextRequest(ctx).Payload = payload
		return err
	}
	goa.ContextRequest(ctx).Payload = payload.Publicize()
	return nil
}

// MessageController is the controller interface for the Message actions.
type MessageController interface {
	goa.Muxer
	List(*ListMessageContext) error
	Post(*PostMessageContext) error
	Show(*ShowMessageContext) error
}

// MountMessageController "mounts" a Message resource controller on the given service.
func MountMessageController(service *goa.Service, ctrl MessageController) {
	initService(service)
	var h goa.Handler
	service.Mux.Handle("OPTIONS", "/api/rooms/:roomID/messages", ctrl.MuxHandler("preflight", handleMessageOrigin(cors.HandlePreflight()), nil))
	service.Mux.Handle("OPTIONS", "/api/rooms/:roomID/messages/:messageID", ctrl.MuxHandler("preflight", handleMessageOrigin(cors.HandlePreflight()), nil))

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewListMessageContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.List(rctx)
	}
	h = handleMessageOrigin(h)
	service.Mux.Handle("GET", "/api/rooms/:roomID/messages", ctrl.MuxHandler("list", h, nil))
	service.LogInfo("mount", "ctrl", "Message", "action", "List", "route", "GET /api/rooms/:roomID/messages")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewPostMessageContext(ctx, req, service)
		if err != nil {
			return err
		}
		// Build the payload
		if rawPayload := goa.ContextRequest(ctx).Payload; rawPayload != nil {
			rctx.Payload = rawPayload.(*MessagePayload)
		} else {
			return goa.MissingPayloadError()
		}
		return ctrl.Post(rctx)
	}
	h = handleSecurity("jwt", h, "api:access")
	h = handleMessageOrigin(h)
	service.Mux.Handle("POST", "/api/rooms/:roomID/messages", ctrl.MuxHandler("post", h, unmarshalPostMessagePayload))
	service.LogInfo("mount", "ctrl", "Message", "action", "Post", "route", "POST /api/rooms/:roomID/messages", "security", "jwt")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewShowMessageContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.Show(rctx)
	}
	h = handleMessageOrigin(h)
	service.Mux.Handle("GET", "/api/rooms/:roomID/messages/:messageID", ctrl.MuxHandler("show", h, nil))
	service.LogInfo("mount", "ctrl", "Message", "action", "Show", "route", "GET /api/rooms/:roomID/messages/:messageID")
}

// handleMessageOrigin applies the CORS response headers corresponding to the origin.
func handleMessageOrigin(h goa.Handler) goa.Handler {

	return func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		origin := req.Header.Get("Origin")
		if origin == "" {
			// Not a CORS request
			return h(ctx, rw, req)
		}
		if cors.MatchOrigin(origin, "http://test.com:3000") {
			ctx = goa.WithLogContext(ctx, "origin", origin)
			rw.Header().Set("Access-Control-Allow-Origin", origin)
			rw.Header().Set("Vary", "Origin")
			rw.Header().Set("Access-Control-Allow-Credentials", "false")
			if acrm := req.Header.Get("Access-Control-Request-Method"); acrm != "" {
				// We are handling a preflight request
				rw.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
				rw.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Csrftoken, Authorization")
			}
			return h(ctx, rw, req)
		}

		return h(ctx, rw, req)
	}
}

// unmarshalPostMessagePayload unmarshals the request body into the context request data Payload field.
func unmarshalPostMessagePayload(ctx context.Context, service *goa.Service, req *http.Request) error {
	payload := &messagePayload{}
	if err := service.DecodeRequest(req, payload); err != nil {
		return err
	}
	payload.Finalize()
	if err := payload.Validate(); err != nil {
		// Initialize payload with private data structure so it can be logged
		goa.ContextRequest(ctx).Payload = payload
		return err
	}
	goa.ContextRequest(ctx).Payload = payload.Publicize()
	return nil
}

// RoomController is the controller interface for the Room actions.
type RoomController interface {
	goa.Muxer
	List(*ListRoomContext) error
	Post(*PostRoomContext) error
	Show(*ShowRoomContext) error
	Watch(*WatchRoomContext) error
}

// MountRoomController "mounts" a Room resource controller on the given service.
func MountRoomController(service *goa.Service, ctrl RoomController) {
	initService(service)
	var h goa.Handler
	service.Mux.Handle("OPTIONS", "/api/rooms", ctrl.MuxHandler("preflight", handleRoomOrigin(cors.HandlePreflight()), nil))
	service.Mux.Handle("OPTIONS", "/api/rooms/:roomID", ctrl.MuxHandler("preflight", handleRoomOrigin(cors.HandlePreflight()), nil))
	service.Mux.Handle("OPTIONS", "/api/rooms/:roomID/watch", ctrl.MuxHandler("preflight", handleRoomOrigin(cors.HandlePreflight()), nil))

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewListRoomContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.List(rctx)
	}
	h = handleRoomOrigin(h)
	service.Mux.Handle("GET", "/api/rooms", ctrl.MuxHandler("list", h, nil))
	service.LogInfo("mount", "ctrl", "Room", "action", "List", "route", "GET /api/rooms")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewPostRoomContext(ctx, req, service)
		if err != nil {
			return err
		}
		// Build the payload
		if rawPayload := goa.ContextRequest(ctx).Payload; rawPayload != nil {
			rctx.Payload = rawPayload.(*RoomPayload)
		} else {
			return goa.MissingPayloadError()
		}
		return ctrl.Post(rctx)
	}
	h = handleSecurity("jwt", h, "api:access")
	h = handleRoomOrigin(h)
	service.Mux.Handle("POST", "/api/rooms", ctrl.MuxHandler("post", h, unmarshalPostRoomPayload))
	service.LogInfo("mount", "ctrl", "Room", "action", "Post", "route", "POST /api/rooms", "security", "jwt")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewShowRoomContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.Show(rctx)
	}
	h = handleRoomOrigin(h)
	service.Mux.Handle("GET", "/api/rooms/:roomID", ctrl.MuxHandler("show", h, nil))
	service.LogInfo("mount", "ctrl", "Room", "action", "Show", "route", "GET /api/rooms/:roomID")

	h = func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		// Check if there was an error loading the request
		if err := goa.ContextError(ctx); err != nil {
			return err
		}
		// Build the context
		rctx, err := NewWatchRoomContext(ctx, req, service)
		if err != nil {
			return err
		}
		return ctrl.Watch(rctx)
	}
	h = handleRoomOrigin(h)
	service.Mux.Handle("GET", "/api/rooms/:roomID/watch", ctrl.MuxHandler("watch", h, nil))
	service.LogInfo("mount", "ctrl", "Room", "action", "Watch", "route", "GET /api/rooms/:roomID/watch")
}

// handleRoomOrigin applies the CORS response headers corresponding to the origin.
func handleRoomOrigin(h goa.Handler) goa.Handler {

	return func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		origin := req.Header.Get("Origin")
		if origin == "" {
			// Not a CORS request
			return h(ctx, rw, req)
		}
		if cors.MatchOrigin(origin, "http://test.com:3000") {
			ctx = goa.WithLogContext(ctx, "origin", origin)
			rw.Header().Set("Access-Control-Allow-Origin", origin)
			rw.Header().Set("Vary", "Origin")
			rw.Header().Set("Access-Control-Allow-Credentials", "false")
			if acrm := req.Header.Get("Access-Control-Request-Method"); acrm != "" {
				// We are handling a preflight request
				rw.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
				rw.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Csrftoken, Authorization")
			}
			return h(ctx, rw, req)
		}

		return h(ctx, rw, req)
	}
}

// unmarshalPostRoomPayload unmarshals the request body into the context request data Payload field.
func unmarshalPostRoomPayload(ctx context.Context, service *goa.Service, req *http.Request) error {
	payload := &roomPayload{}
	if err := service.DecodeRequest(req, payload); err != nil {
		return err
	}
	if err := payload.Validate(); err != nil {
		// Initialize payload with private data structure so it can be logged
		goa.ContextRequest(ctx).Payload = payload
		return err
	}
	goa.ContextRequest(ctx).Payload = payload.Publicize()
	return nil
}

// ServeController is the controller interface for the Serve actions.
type ServeController interface {
	goa.Muxer
	goa.FileServer
}

// MountServeController "mounts" a Serve resource controller on the given service.
func MountServeController(service *goa.Service, ctrl ServeController) {
	initService(service)
	var h goa.Handler
	service.Mux.Handle("OPTIONS", "/", ctrl.MuxHandler("preflight", handleServeOrigin(cors.HandlePreflight()), nil))
	service.Mux.Handle("OPTIONS", "/static/*filepath", ctrl.MuxHandler("preflight", handleServeOrigin(cors.HandlePreflight()), nil))

	h = ctrl.FileHandler("/", "./goa-chat-client/build/index.html")
	h = handleServeOrigin(h)
	service.Mux.Handle("GET", "/", ctrl.MuxHandler("serve", h, nil))
	service.LogInfo("mount", "ctrl", "Serve", "files", "./goa-chat-client/build/index.html", "route", "GET /")

	h = ctrl.FileHandler("/static/*filepath", "./goa-chat-client/build/static")
	h = handleServeOrigin(h)
	service.Mux.Handle("GET", "/static/*filepath", ctrl.MuxHandler("serve", h, nil))
	service.LogInfo("mount", "ctrl", "Serve", "files", "./goa-chat-client/build/static", "route", "GET /static/*filepath")

	h = ctrl.FileHandler("/static/", "goa-chat-client/build/static/index.html")
	h = handleServeOrigin(h)
	service.Mux.Handle("GET", "/static/", ctrl.MuxHandler("serve", h, nil))
	service.LogInfo("mount", "ctrl", "Serve", "files", "goa-chat-client/build/static/index.html", "route", "GET /static/")
}

// handleServeOrigin applies the CORS response headers corresponding to the origin.
func handleServeOrigin(h goa.Handler) goa.Handler {

	return func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
		origin := req.Header.Get("Origin")
		if origin == "" {
			// Not a CORS request
			return h(ctx, rw, req)
		}
		if cors.MatchOrigin(origin, "http://test.com:3000") {
			ctx = goa.WithLogContext(ctx, "origin", origin)
			rw.Header().Set("Access-Control-Allow-Origin", origin)
			rw.Header().Set("Vary", "Origin")
			rw.Header().Set("Access-Control-Allow-Credentials", "false")
			if acrm := req.Header.Get("Access-Control-Request-Method"); acrm != "" {
				// We are handling a preflight request
				rw.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
				rw.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Csrftoken, Authorization")
			}
			return h(ctx, rw, req)
		}

		return h(ctx, rw, req)
	}
}
