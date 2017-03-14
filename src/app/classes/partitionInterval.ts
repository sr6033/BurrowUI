export class PartitionInterval {

  constructor(
    public offset: number,
    public timestamp: number,
    public lag: number
  ) {}

}
