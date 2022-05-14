export function wrapPromise<T>(promise: Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let response: T | Error;

  const suspender = promise
    .then((res) => {
      status = "success";
      response = res;
    })
    .catch((err) => {
      status = "error";
      response = err;
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      case "success":
      default:
        return response;
    }
  };

  return {
    read,
  };
}
