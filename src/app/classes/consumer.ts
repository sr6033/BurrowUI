import {PipeTransform, Injectable, Pipe} from "@angular/core";
import {Request} from "./request";
import {Status} from "./status";

export class Consumer {

  // Constructor
  constructor(
    public error:   boolean,
    public message: string,
    public status:  Status,
    public request: Request
  ) {

  }

}

// This is used for filtering partition results
@Pipe({
  name: 'consumerSort',
  pure: false
})

@Injectable()
export class ConsumerSortPipe implements PipeTransform {
  transform(array: Array<any>): Array<string> {
    if (array == null) return array;
    array.sort((a: any, b: any) => {
      if (a.request.group.toLowerCase() < b.request.group.toLowerCase()) {
        return -1;
      } else if (a.request.group.toLowerCase() > b.request.group.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
