import { Component, OnInit } from '@angular/core';
import { BurrowService } from '../../services/burrow.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  public showTopics = false;
  public showConsumers = false;

  constructor(
    private burrow: BurrowService
  ) {
    this.burrow.consumers.subscribe((consumers) => {
      this.showConsumers = !!consumers;
    });
    this.burrow.topics.subscribe((topics) => {
      this.showTopics = !!topics;
    });
  }

  public ngOnInit() {
  }

}
