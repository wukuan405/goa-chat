/**
 * goa study chat
 * goa study chat api
 *
 * OpenAPI spec version:
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var url = require("url");
var isomorphicFetch = require("isomorphic-fetch");
var assign = require("core-js/library/fn/object/assign");
var BASE_PATH = "http://localhost:8080/api".replace(/\/+$/, "");
var BaseAPI = (function () {
    function BaseAPI(fetch, basePath) {
        if (fetch === void 0) { fetch = isomorphicFetch; }
        if (basePath === void 0) { basePath = BASE_PATH; }
        this.basePath = basePath;
        this.fetch = fetch;
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
;
/**
 * MessageApi - fetch parameter creator
 */
exports.MessageApiFetchParamCreator = {
    /**
     * list message
     * Retrieve all messages.
     * @param roomID
     */
    messageList: function (params, options) {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messageList");
        }
        var baseUrl = "/rooms/{roomID}/messages"
            .replace("{" + "roomID" + "}", "" + params["roomID"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * post message
     * Create new message
     * @param roomID
     * @param payload
     */
    messagePost: function (params, options) {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messagePost");
        }
        // verify required parameter "payload" is set
        if (params["payload"] == null) {
            throw new Error("Missing required parameter payload when calling messagePost");
        }
        var baseUrl = "/rooms/{roomID}/messages"
            .replace("{" + "roomID" + "}", "" + params["roomID"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["payload"]) {
            fetchOptions.body = JSON.stringify(params["payload"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * show message
     * Retrieve message with given id
     * @param messageID
     * @param roomID
     */
    messageShow: function (params, options) {
        // verify required parameter "messageID" is set
        if (params["messageID"] == null) {
            throw new Error("Missing required parameter messageID when calling messageShow");
        }
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messageShow");
        }
        var baseUrl = "/rooms/{roomID}/messages/{messageID}"
            .replace("{" + "messageID" + "}", "" + params["messageID"])
            .replace("{" + "roomID" + "}", "" + params["roomID"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * MessageApi - functional programming interface
 */
exports.MessageApiFp = {
    /**
     * list message
     * Retrieve all messages.
     * @param roomID
     */
    messageList: function (params, options) {
        var fetchArgs = exports.MessageApiFetchParamCreator.messageList(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * post message
     * Create new message
     * @param roomID
     * @param payload
     */
    messagePost: function (params, options) {
        var fetchArgs = exports.MessageApiFetchParamCreator.messagePost(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * show message
     * Retrieve message with given id
     * @param messageID
     * @param roomID
     */
    messageShow: function (params, options) {
        var fetchArgs = exports.MessageApiFetchParamCreator.messageShow(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * MessageApi - object-oriented interface
 */
var MessageApi = (function (_super) {
    __extends(MessageApi, _super);
    function MessageApi() {
        _super.apply(this, arguments);
    }
    /**
     * list message
     * Retrieve all messages.
     * @param roomID
     */
    MessageApi.prototype.messageList = function (params, options) {
        return exports.MessageApiFp.messageList(params, options)(this.fetch, this.basePath);
    };
    /**
     * post message
     * Create new message
     * @param roomID
     * @param payload
     */
    MessageApi.prototype.messagePost = function (params, options) {
        return exports.MessageApiFp.messagePost(params, options)(this.fetch, this.basePath);
    };
    /**
     * show message
     * Retrieve message with given id
     * @param messageID
     * @param roomID
     */
    MessageApi.prototype.messageShow = function (params, options) {
        return exports.MessageApiFp.messageShow(params, options)(this.fetch, this.basePath);
    };
    return MessageApi;
}(BaseAPI));
exports.MessageApi = MessageApi;
;
/**
 * MessageApi - factory interface
 */
exports.MessageApiFactory = function (fetch, basePath) {
    return {
        /**
         * list message
         * Retrieve all messages.
         * @param roomID
         */
        messageList: function (params, options) {
            return exports.MessageApiFp.messageList(params, options)(fetch, basePath);
        },
        /**
         * post message
         * Create new message
         * @param roomID
         * @param payload
         */
        messagePost: function (params, options) {
            return exports.MessageApiFp.messagePost(params, options)(fetch, basePath);
        },
        /**
         * show message
         * Retrieve message with given id
         * @param messageID
         * @param roomID
         */
        messageShow: function (params, options) {
            return exports.MessageApiFp.messageShow(params, options)(fetch, basePath);
        },
    };
};
/**
 * RoomApi - fetch parameter creator
 */
exports.RoomApiFetchParamCreator = {
    /**
     * list room
     * Retrieve all rooms.
     */
    roomList: function (options) {
        var baseUrl = "/rooms";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * post room
     * Create new Room
     * @param payload
     */
    roomPost: function (params, options) {
        // verify required parameter "payload" is set
        if (params["payload"] == null) {
            throw new Error("Missing required parameter payload when calling roomPost");
        }
        var baseUrl = "/rooms";
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "POST" }, options);
        var contentTypeHeader = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["payload"]) {
            fetchOptions.body = JSON.stringify(params["payload"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * show room
     * Retrieve room with given id
     * @param roomID
     */
    roomShow: function (params, options) {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling roomShow");
        }
        var baseUrl = "/rooms/{roomID}"
            .replace("{" + "roomID" + "}", "" + params["roomID"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /**
     * watch room
     * Retrieve room with given id
     * @param roomID
     */
    roomWatch: function (params, options) {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling roomWatch");
        }
        var baseUrl = "/rooms/{roomID}/watch"
            .replace("{" + "roomID" + "}", "" + params["roomID"]);
        var urlObj = url.parse(baseUrl, true);
        var fetchOptions = assign({}, { method: "GET" }, options);
        var contentTypeHeader = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};
/**
 * RoomApi - functional programming interface
 */
exports.RoomApiFp = {
    /**
     * list room
     * Retrieve all rooms.
     */
    roomList: function (options) {
        var fetchArgs = exports.RoomApiFetchParamCreator.roomList(options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * post room
     * Create new Room
     * @param payload
     */
    roomPost: function (params, options) {
        var fetchArgs = exports.RoomApiFetchParamCreator.roomPost(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * show room
     * Retrieve room with given id
     * @param roomID
     */
    roomShow: function (params, options) {
        var fetchArgs = exports.RoomApiFetchParamCreator.roomShow(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    throw response;
                }
            });
        };
    },
    /**
     * watch room
     * Retrieve room with given id
     * @param roomID
     */
    roomWatch: function (params, options) {
        var fetchArgs = exports.RoomApiFetchParamCreator.roomWatch(params, options);
        return function (fetch, basePath) {
            if (fetch === void 0) { fetch = isomorphicFetch; }
            if (basePath === void 0) { basePath = BASE_PATH; }
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                else {
                    throw response;
                }
            });
        };
    },
};
/**
 * RoomApi - object-oriented interface
 */
var RoomApi = (function (_super) {
    __extends(RoomApi, _super);
    function RoomApi() {
        _super.apply(this, arguments);
    }
    /**
     * list room
     * Retrieve all rooms.
     */
    RoomApi.prototype.roomList = function (options) {
        return exports.RoomApiFp.roomList(options)(this.fetch, this.basePath);
    };
    /**
     * post room
     * Create new Room
     * @param payload
     */
    RoomApi.prototype.roomPost = function (params, options) {
        return exports.RoomApiFp.roomPost(params, options)(this.fetch, this.basePath);
    };
    /**
     * show room
     * Retrieve room with given id
     * @param roomID
     */
    RoomApi.prototype.roomShow = function (params, options) {
        return exports.RoomApiFp.roomShow(params, options)(this.fetch, this.basePath);
    };
    /**
     * watch room
     * Retrieve room with given id
     * @param roomID
     */
    RoomApi.prototype.roomWatch = function (params, options) {
        return exports.RoomApiFp.roomWatch(params, options)(this.fetch, this.basePath);
    };
    return RoomApi;
}(BaseAPI));
exports.RoomApi = RoomApi;
;
/**
 * RoomApi - factory interface
 */
exports.RoomApiFactory = function (fetch, basePath) {
    return {
        /**
         * list room
         * Retrieve all rooms.
         */
        roomList: function (options) {
            return exports.RoomApiFp.roomList(options)(fetch, basePath);
        },
        /**
         * post room
         * Create new Room
         * @param payload
         */
        roomPost: function (params, options) {
            return exports.RoomApiFp.roomPost(params, options)(fetch, basePath);
        },
        /**
         * show room
         * Retrieve room with given id
         * @param roomID
         */
        roomShow: function (params, options) {
            return exports.RoomApiFp.roomShow(params, options)(fetch, basePath);
        },
        /**
         * watch room
         * Retrieve room with given id
         * @param roomID
         */
        roomWatch: function (params, options) {
            return exports.RoomApiFp.roomWatch(params, options)(fetch, basePath);
        },
    };
};
