

enum HttpMethod {
    Get = 1,
    Post = 2,
    PUT = 3,
    DELETE = 4
}


struct KeyValue {
    1: required string key,
    2: required string value
}

struct HttpReq {
    1: optional HttpMethod method = HttpMethod.Get,
    2: required string url,
    3: optional list<KeyValue> headers,
    4: optional binary body
}

struct HttpResp {
    1: optional i32 httpStatus,
    2: optional list<KeyValue> headers,
    3: required binary body

    4: optional string errorMsg = ""
    5: optional i32 status = 0
}

service HttpProxy {
    HttpResp Proxy(1: HttpReq req)
}