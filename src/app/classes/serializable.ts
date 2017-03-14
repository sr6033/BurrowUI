export class Serializable {
  fromJSON(json: string) {
    console.log("Entry: " + json + "from JSON");
    let jsonObj = JSON.parse(json);
    for (let propName in jsonObj) {
      this[propName] = jsonObj[propName];
    }
    return this;
  }
}
