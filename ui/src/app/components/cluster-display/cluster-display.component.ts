import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cluster-display',
  templateUrl: './cluster-display.component.html',
  styleUrls: ['./cluster-display.component.css']
})
export class ClusterDisplayComponent implements OnInit {
  @Input() cluster: string;

  constructor() { }

  ngOnInit() {
  }

}
