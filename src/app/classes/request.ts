export class Request {

  constructor(
    public url:     string,
    public host:    string,
    public cluster: string,
    public group:   string,
    public topic:   string
  ) {};

}
