import {Partition} from "./partition";
export class Status {
  constructor(
    public cluster:         string,
    public group:           string,
    public status:          string,
    public complete:        boolean,
    public partitions:      Partition[],
    public partition_count: number,
    public maxlag:          string,
    public totallag:        number
  ) {

  }
}
