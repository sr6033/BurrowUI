import { Component, Input, OnInit } from '@angular/core';
import { AvailableCluster } from 'burrow-backend/dist/models/available-cluster';
import { BurrowService } from '../../services/burrow.service';

@Component({
  selector: 'app-cluster-display',
  templateUrl: './cluster-display.component.html',
  styleUrls: ['./cluster-display.component.css']
})
export class ClusterDisplayComponent implements OnInit {
  @Input() public cluster: string;
  public detail: AvailableCluster;

  constructor(
    private burrow: BurrowService
  ) { }

  public ngOnInit() {
    this.burrow.getCluster(this.cluster).subscribe((cluster) => {
      this.detail = cluster;
    });
  }

  public viewConsumers() {
    this.burrow.viewConsumers(this.cluster);
  }

  public viewTopics() {
    this.burrow.viewTopics(this.cluster);
  }

}
