import qs from "qs";

// 最基础的request，各个平台的实现需保持接口一致
//
// 参数:
// {
//   baseURL,
//   url,
//   method,
//   timeout,
//   withCredentials,
//
//   # 设置的请求头name都小写，尤其是content-type
//   headers,
//
//   # data在Message中的具体表现形式有method和content-type共同决定
//   data,
//
//   # 返回的数据类型，默认json
//   responseType,
// }
//
// 返回Promise
// - 成功(只要成功接收到服务器返回，无论statusCode是多少，都算成功)
// {
//   statusCode,
//   headers,
//   body
// }
// - 失败
// Error
//
export default rawRequest;
function rawRequest(options) {
  let url = options.url;
  let method = options.method || "GET";
  let headers = options.headers || {};
  let contentType = headers["content-type"];
  let responseType = options.responseType || "json";
  let data = "";

  if (options.baseURL && !isAbsoluteUrl(url)) {
    url = options.baseURL.replace(/\/+$/, "") + "/" + url.replace(/^\/+/, "");
  }

  if (options.data) {
    if (method === "GET") {
      url += "?" + qs.stringify(options.data);
      data = "";
    } else {
      if (/^application\/x-www-form-urlencoded/.test(contentType)) {
        data = qs.stringify(options.data);
      } else if (/^application\/json/.test(contentType)) {
        data = JSON.stringify(options.data);
      } else {
        data = options.data;
      }
    }
  }

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);

    for (let k in headers) {
      xhr.setRequestHeader(k, headers[k]);
    }

    if (options.withCredentials) {
      xhr.withCredentials = true;
    }

    if (options.timeout !== undefined) {
      xhr.timeout = options.timeout;
    }

    // caniuse显示低版本Android和iOS不支持直接设置json，还是自己转
    // xhr.responseType = responseType;
    xhr.responseType = "";

    xhr.onload = () => {
      resolve(response());
    };
    xhr.onerror = () => {
      const err = new Error("网络异常");
      err.errType = "NETWORK_ANOMALY";
      err.url = options.url;
      reject(err);
    };
    xhr.ontimeout = () => {
      const err = new Error("请求超时");
      err.errType = "TIME_OUT";
      err.url = options.url;
      reject(err);
    };

    xhr.send(data);

    function response() {
      let statusCode = xhr.status || 200;
      let headers = parseHeaders(xhr.getAllResponseHeaders() || "");
      let body = xhr.response;
      let r = {
        statusCode,
        headers,
      };

      // caniuse显示低版本Android和iOS不支持直接设置json，还是自己转
      if (responseType === "json") {
        try {
          r.body = JSON.parse(body);
        } catch (e) {
          r.body = body;
        }
      }

      return r;
    }
  });
}

// 没有单独弄个功能完整的Header，所有field name全部小写
function parseHeaders(rawHeaders) {
  let keys = [],
    entries = [],
    headers = {};

  rawHeaders.replace(/^(.*?):\s*([\s\S]*?)$/gm, (m, key, value) => {
    key = key.toLowerCase();
    keys.push(key);
    entries.push([key, value]);
    if (headers[key]) {
      headers[key] += "," + value;
    } else {
      headers[key] = value;
    }
  });

  return headers;
}

function isAbsoluteUrl(url) {
  // 绝对地址以`<scheme>://`或`//`开头
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
