export const fetchWrapper = {
  get,
  post,
  put,
  patch,
  delete: del,
};

function get(url: string, headers?: Record<string, string>) {
  return fetch(url, {
    ...makeHeaders(headers),
    method: "GET",
  }).then(handleResponse);
}

function post(url: string, body: any, headers: Record<string, string> = {}) {
  return fetch(url, {
    ...makeHeaders(headers),
    method: "POST",
    body: JSON.stringify(body),
  });
}

function put(url: string, body: any, headers: Record<string, string> = {}) {
  return fetch(url, {
    ...makeHeaders(headers),
    method: "PUT",
    body: JSON.stringify(body),
  });
}

function patch(url: string, body: any, headers: Record<string, string> = {}) {
  return fetch(url, {
    ...makeHeaders(headers),
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

function del(url: string, headers: Record<string, string> = {}) {
  return fetch(url, {
    ...makeHeaders(headers),
    method: "DELETE",
  });
}

const defaultHeaders = {
  "Content-Type": "application/json",
};

function makeHeaders(headers: Record<string, string> = {}) {
  return {
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };
}

function handleResponse(res: Response) {
  if (!res.ok) {
    return Promise.reject(res);
  }

  return res.json();
}
