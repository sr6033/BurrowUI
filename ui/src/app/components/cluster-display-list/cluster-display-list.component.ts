import { Component, OnInit } from '@angular/core';
import { BurrowService } from '../../services/burrow.service';

@Component({
  selector: 'app-cluster-display-list',
  templateUrl: './cluster-display-list.component.html',
  styleUrls: ['./cluster-display-list.component.css']
})
export class ClusterDisplayListComponent implements OnInit {
  clusters: string[] = [];

  constructor(
    private burrow: BurrowService
  ) {
    this.burrow.clusters.subscribe(clusters => {
      this.clusters = clusters;
    });
  }

  ngOnInit() {
  }

}
