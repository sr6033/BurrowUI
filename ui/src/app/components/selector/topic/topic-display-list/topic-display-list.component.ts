import { Component, OnInit } from '@angular/core';
import { BurrowService } from '../../../../services/burrow.service';

@Component({
  selector: 'app-topic-display-list',
  templateUrl: './topic-display-list.component.html',
  styleUrls: ['./topic-display-list.component.css']
})
export class TopicDisplayListComponent implements OnInit {
  public topics: string[];

  constructor(
    private burrow: BurrowService
  ) {
    this.burrow.topics.subscribe((topics) => {
      this.topics = topics.topics;
    });
  }

  public ngOnInit() {
  }

}
