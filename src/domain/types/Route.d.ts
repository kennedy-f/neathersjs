interface Router {
  method: String;
  url: String;
  handler: Function | Promise<void>;
  schema?: Function;
}

export default Router;
