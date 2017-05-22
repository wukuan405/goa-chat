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

import * as querystring from "querystring";
import * as url from "url";

import * as isomorphicFetch from "isomorphic-fetch";
import * as assign from "core-js/library/fn/object/assign";

interface Dictionary<T> { [index: string]: T; }
export interface FetchAPI { (url: string, init?: any): Promise<any>; }

const BASE_PATH = "http://localhost:8080/api".replace(/\/+$/, "");

export interface FetchArgs {
    url: string;
    options: any;
}

export class BaseAPI {
    basePath: string;
    fetch: FetchAPI;

    constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) {
        this.basePath = basePath;
        this.fetch = fetch;
    }
};

/**
 * A account (default view)
 */
export interface Account {
    /**
     * Date of creation
     */
    "created": Date;
    /**
     * ID of room
     */
    "id": string;
    "password": string;
}

/**
 * AccountCollection is the media type for an array of Account (default view)
 */
export interface AccountCollection extends Array<Account> {
}

/**
 * Error response media type (default view)
 */
export interface Error {
    /**
     * an application-specific error code, expressed as a string value.
     */
    "code"?: string;
    /**
     * a human-readable explanation specific to this occurrence of the problem.
     */
    "detail"?: string;
    /**
     * a unique identifier for this particular occurrence of the problem.
     */
    "id"?: string;
    /**
     * a meta object containing non-standard meta-information about the error.
     */
    "meta"?: any;
    /**
     * the HTTP status code applicable to this problem, expressed as a string value.
     */
    "status"?: string;
}

/**
 * A Message (default view)
 */
export interface Message {
    "accountID": number;
    "body": string;
    "postDate": Date;
}

/**
 * MessageCollection is the media type for an array of Message (default view)
 */
export interface MessageCollection extends Array<Message> {
}

export interface MessagePayload {
    "accountID": number;
    "body": string;
    "postDate": Date;
}

/**
 * A room (default view)
 */
export interface Room {
    /**
     * Date of creation
     */
    "created"?: Date;
    /**
     * description of room
     */
    "description": string;
    /**
     * ID of room
     */
    "id"?: number;
    /**
     * Name of room
     */
    "name": string;
}

/**
 * RoomCollection is the media type for an array of Room (default view)
 */
export interface RoomCollection extends Array<Room> {
}

export interface RoomPayload {
    /**
     * Date of creation
     */
    "created"?: Date;
    /**
     * description of room
     */
    "description": string;
    /**
     * ID of room
     */
    "id"?: number;
    /**
     * Name of room
     */
    "name": string;
}



/**
 * AccountApi - fetch parameter creator
 */
export const AccountApiFetchParamCreator = {
    /** 
     * list account
     * Retrieve all accunts.
     */
    accountList(options?: any): FetchArgs {
        const baseUrl = `/accounts`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /** 
     * post account
     * Create new account
     * @param payload 
     */
    accountPost(params: {  "payload": MessagePayload; }, options?: any): FetchArgs {
        // verify required parameter "payload" is set
        if (params["payload"] == null) {
            throw new Error("Missing required parameter payload when calling accountPost");
        }
        const baseUrl = `/accounts`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (options.headers) {
            contentTypeHeader = assign(contentTypeHeader, options.headers);
        }
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
     * show account
     * Retrieve account with given id or something
     * @param user 
     */
    accountShow(params: {  "user": string; }, options?: any): FetchArgs {
        // verify required parameter "user" is set
        if (params["user"] == null) {
            throw new Error("Missing required parameter user when calling accountShow");
        }
        const baseUrl = `/accounts/{user}`
            .replace(`{${"user"}}`, `${ params["user"] }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
 * AccountApi - functional programming interface
 */
export const AccountApiFp = {
    /** 
     * list account
     * Retrieve all accunts.
     */
    accountList(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<AccountCollection> {
        const fetchArgs = AccountApiFetchParamCreator.accountList(options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * post account
     * Create new account
     * @param payload 
     */
    accountPost(params: { "payload": MessagePayload;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = AccountApiFetchParamCreator.accountPost(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * show account
     * Retrieve account with given id or something
     * @param user 
     */
    accountShow(params: { "user": string;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Account> {
        const fetchArgs = AccountApiFetchParamCreator.accountShow(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * AccountApi - object-oriented interface
 */
export class AccountApi extends BaseAPI {
    /** 
     * list account
     * Retrieve all accunts.
     */
    accountList(options?: any) {
        return AccountApiFp.accountList(options)(this.fetch, this.basePath);
    }
    /** 
     * post account
     * Create new account
     * @param payload 
     */
    accountPost(params: {  "payload": MessagePayload; }, options?: any) {
        return AccountApiFp.accountPost(params, options)(this.fetch, this.basePath);
    }
    /** 
     * show account
     * Retrieve account with given id or something
     * @param user 
     */
    accountShow(params: {  "user": string; }, options?: any) {
        return AccountApiFp.accountShow(params, options)(this.fetch, this.basePath);
    }
};

/**
 * AccountApi - factory interface
 */
export const AccountApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /** 
         * list account
         * Retrieve all accunts.
         */
        accountList(options?: any) {
            return AccountApiFp.accountList(options)(fetch, basePath);
        },
        /** 
         * post account
         * Create new account
         * @param payload 
         */
        accountPost(params: {  "payload": MessagePayload; }, options?: any) {
            return AccountApiFp.accountPost(params, options)(fetch, basePath);
        },
        /** 
         * show account
         * Retrieve account with given id or something
         * @param user 
         */
        accountShow(params: {  "user": string; }, options?: any) {
            return AccountApiFp.accountShow(params, options)(fetch, basePath);
        },
    };
};


/**
 * MessageApi - fetch parameter creator
 */
export const MessageApiFetchParamCreator = {
    /** 
     * list message
     * Retrieve all messages.
     * @param roomID 
     * @param limit 
     * @param offset 
     */
    messageList(params: {  "roomID": number; "limit"?: number; "offset"?: number; }, options?: any): FetchArgs {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messageList");
        }
        const baseUrl = `/rooms/{roomID}/messages`
            .replace(`{${"roomID"}}`, `${ params["roomID"] }`);
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "limit": params["limit"],
            "offset": params["offset"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
    messagePost(params: {  "roomID": number; "payload": MessagePayload; }, options?: any): FetchArgs {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messagePost");
        }
        // verify required parameter "payload" is set
        if (params["payload"] == null) {
            throw new Error("Missing required parameter payload when calling messagePost");
        }
        const baseUrl = `/rooms/{roomID}/messages`
            .replace(`{${"roomID"}}`, `${ params["roomID"] }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (options.headers) {
            contentTypeHeader = assign(contentTypeHeader, options.headers);
        }
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
    messageShow(params: {  "messageID": number; "roomID": number; }, options?: any): FetchArgs {
        // verify required parameter "messageID" is set
        if (params["messageID"] == null) {
            throw new Error("Missing required parameter messageID when calling messageShow");
        }
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling messageShow");
        }
        const baseUrl = `/rooms/{roomID}/messages/{messageID}`
            .replace(`{${"messageID"}}`, `${ params["messageID"] }`)
            .replace(`{${"roomID"}}`, `${ params["roomID"] }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
export const MessageApiFp = {
    /** 
     * list message
     * Retrieve all messages.
     * @param roomID 
     * @param limit 
     * @param offset 
     */
    messageList(params: { "roomID": number; "limit"?: number; "offset"?: number;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MessageCollection> {
        const fetchArgs = MessageApiFetchParamCreator.messageList(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
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
    messagePost(params: { "roomID": number; "payload": MessagePayload;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = MessageApiFetchParamCreator.messagePost(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
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
    messageShow(params: { "messageID": number; "roomID": number;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Message> {
        const fetchArgs = MessageApiFetchParamCreator.messageShow(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * MessageApi - object-oriented interface
 */
export class MessageApi extends BaseAPI {
    /** 
     * list message
     * Retrieve all messages.
     * @param roomID 
     * @param limit 
     * @param offset 
     */
    messageList(params: {  "roomID": number; "limit"?: number; "offset"?: number; }, options?: any) {
        return MessageApiFp.messageList(params, options)(this.fetch, this.basePath);
    }
    /** 
     * post message
     * Create new message
     * @param roomID 
     * @param payload 
     */
    messagePost(params: {  "roomID": number; "payload": MessagePayload; }, options?: any) {
        return MessageApiFp.messagePost(params, options)(this.fetch, this.basePath);
    }
    /** 
     * show message
     * Retrieve message with given id
     * @param messageID 
     * @param roomID 
     */
    messageShow(params: {  "messageID": number; "roomID": number; }, options?: any) {
        return MessageApiFp.messageShow(params, options)(this.fetch, this.basePath);
    }
};

/**
 * MessageApi - factory interface
 */
export const MessageApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /** 
         * list message
         * Retrieve all messages.
         * @param roomID 
         * @param limit 
         * @param offset 
         */
        messageList(params: {  "roomID": number; "limit"?: number; "offset"?: number; }, options?: any) {
            return MessageApiFp.messageList(params, options)(fetch, basePath);
        },
        /** 
         * post message
         * Create new message
         * @param roomID 
         * @param payload 
         */
        messagePost(params: {  "roomID": number; "payload": MessagePayload; }, options?: any) {
            return MessageApiFp.messagePost(params, options)(fetch, basePath);
        },
        /** 
         * show message
         * Retrieve message with given id
         * @param messageID 
         * @param roomID 
         */
        messageShow(params: {  "messageID": number; "roomID": number; }, options?: any) {
            return MessageApiFp.messageShow(params, options)(fetch, basePath);
        },
    };
};


/**
 * RoomApi - fetch parameter creator
 */
export const RoomApiFetchParamCreator = {
    /** 
     * list room
     * Retrieve all rooms.
     * @param limit 
     * @param offset 
     */
    roomList(params: {  "limit"?: number; "offset"?: number; }, options?: any): FetchArgs {
        const baseUrl = `/rooms`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query, {
            "limit": params["limit"],
            "offset": params["offset"],
        });
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
    roomPost(params: {  "payload": RoomPayload; }, options?: any): FetchArgs {
        // verify required parameter "payload" is set
        if (params["payload"] == null) {
            throw new Error("Missing required parameter payload when calling roomPost");
        }
        const baseUrl = `/rooms`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (options.headers) {
            contentTypeHeader = assign(contentTypeHeader, options.headers);
        }
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
    roomShow(params: {  "roomID": number; }, options?: any): FetchArgs {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling roomShow");
        }
        const baseUrl = `/rooms/{roomID}`
            .replace(`{${"roomID"}}`, `${ params["roomID"] }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
    roomWatch(params: {  "roomID": number; }, options?: any): FetchArgs {
        // verify required parameter "roomID" is set
        if (params["roomID"] == null) {
            throw new Error("Missing required parameter roomID when calling roomWatch");
        }
        const baseUrl = `/rooms/{roomID}/watch`
            .replace(`{${"roomID"}}`, `${ params["roomID"] }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
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
export const RoomApiFp = {
    /** 
     * list room
     * Retrieve all rooms.
     * @param limit 
     * @param offset 
     */
    roomList(params: { "limit"?: number; "offset"?: number;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<RoomCollection> {
        const fetchArgs = RoomApiFetchParamCreator.roomList(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
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
    roomPost(params: { "payload": RoomPayload;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = RoomApiFetchParamCreator.roomPost(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
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
    roomShow(params: { "roomID": number;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Room> {
        const fetchArgs = RoomApiFetchParamCreator.roomShow(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
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
    roomWatch(params: { "roomID": number;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = RoomApiFetchParamCreator.roomWatch(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * RoomApi - object-oriented interface
 */
export class RoomApi extends BaseAPI {
    /** 
     * list room
     * Retrieve all rooms.
     * @param limit 
     * @param offset 
     */
    roomList(params: {  "limit"?: number; "offset"?: number; }, options?: any) {
        return RoomApiFp.roomList(params, options)(this.fetch, this.basePath);
    }
    /** 
     * post room
     * Create new Room
     * @param payload 
     */
    roomPost(params: {  "payload": RoomPayload; }, options?: any) {
        return RoomApiFp.roomPost(params, options)(this.fetch, this.basePath);
    }
    /** 
     * show room
     * Retrieve room with given id
     * @param roomID 
     */
    roomShow(params: {  "roomID": number; }, options?: any) {
        return RoomApiFp.roomShow(params, options)(this.fetch, this.basePath);
    }
    /** 
     * watch room
     * Retrieve room with given id
     * @param roomID 
     */
    roomWatch(params: {  "roomID": number; }, options?: any) {
        return RoomApiFp.roomWatch(params, options)(this.fetch, this.basePath);
    }
};

/**
 * RoomApi - factory interface
 */
export const RoomApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /** 
         * list room
         * Retrieve all rooms.
         * @param limit 
         * @param offset 
         */
        roomList(params: {  "limit"?: number; "offset"?: number; }, options?: any) {
            return RoomApiFp.roomList(params, options)(fetch, basePath);
        },
        /** 
         * post room
         * Create new Room
         * @param payload 
         */
        roomPost(params: {  "payload": RoomPayload; }, options?: any) {
            return RoomApiFp.roomPost(params, options)(fetch, basePath);
        },
        /** 
         * show room
         * Retrieve room with given id
         * @param roomID 
         */
        roomShow(params: {  "roomID": number; }, options?: any) {
            return RoomApiFp.roomShow(params, options)(fetch, basePath);
        },
        /** 
         * watch room
         * Retrieve room with given id
         * @param roomID 
         */
        roomWatch(params: {  "roomID": number; }, options?: any) {
            return RoomApiFp.roomWatch(params, options)(fetch, basePath);
        },
    };
};

