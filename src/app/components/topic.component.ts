import { Component, OnInit } from '@angular/core';
import { Topic } from '../classes/topic';
import { Consumer } from '../classes/consumer';
import { TopicService } from '../services/topic.service';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'topic_application',
  templateUrl: '../../templates/topic.html',
})

export class TopicComponent implements OnInit {
  topicName: string;
  environmentName: string;
  observableTopic: Observable<Topic>;
  topic: Topic;
  observableConsumers: Observable<Consumer[]>;
  consumers: Consumer[];

  constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) {

  };

  ngOnInit(): void {
    this.getParams();
    this.observableTopic = this.topicService.topicDetail;
    this.observableConsumers = this.topicService.topicConsumers;

    // Subscribe to changes
    this.observableTopic.subscribe( topic => {
      this.topic = topic;
    });

    this.observableConsumers.subscribe(consumers => {
      this.consumers = consumers;
    });

    // Refresh every 10 seconds
    // Start by getting 5 snapshots of data at 2 second intervals; this helps build the graph quicker. Then move to the 10 second intervals.
    let startWindow = 0;
    let refresh = Observable.interval(2 * 1000).subscribe(x => {
      startWindow++;
      this.topicService.refreshData();
      if (startWindow == 5) {
        refresh.unsubscribe();
        refresh = Observable.interval(10 * 1000).subscribe(t => {
          this.topicService.refreshData();
        });
      }
    });
  }

  getParams(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.topicName = params['topic'];
      this.environmentName = params['environment'];
    });
  }

  public analyzeConsumer(cluster: string, consumer: string) {
    let url = "/AnalyzeConsumer";
    this.router.navigate([url], {queryParams: { consumer:consumer, cluster:cluster }});
  }

}
