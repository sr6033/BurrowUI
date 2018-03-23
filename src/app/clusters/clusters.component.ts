import { Component, OnInit } from '@angular/core';
import {BurrowBackendService} from '../services/burrow-backend.service';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {

  constructor(
    private burrow: BurrowBackendService
  ) { }

  ngOnInit() {
    this.burrow.clusters().subscribe((clusters) => {
      console.log(clusters);
    });
  }

}
