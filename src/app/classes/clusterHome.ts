import {Request} from "./request";
import {Cluster} from "./cluster";
import {Consumer} from "./consumer";
import {Topic} from "./topic";

export class ClusterHome {
  public consumers:  Consumer[];
  public topics: Topic[];
  public isError: boolean = false;
  public isWarning: boolean = false;
  public isOkay: boolean = true;

  constructor(
    public error:      string,
    public message:    string,
    public cluster:    Cluster,
    public request:    Request,
  ) {
    this.consumers = [];
    this.topics = [];
  };

}
