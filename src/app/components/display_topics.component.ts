import { Component, OnInit } from '@angular/core';
import {ClusterHome} from "../classes/clusterHome";
import {HomeService} from "../services/home.service";
import {Topic} from "../classes/topic";
import {Router} from "@angular/router";

@Component({
  selector: 'display_topic_list',
  templateUrl: '../../templates/display_topics.html',
})

export class DisplayTopicsComponent implements OnInit {
  topics: Topic[];

  constructor(private homeService: HomeService, private router: Router) {
    this.topics = this.homeService.loadedCluster.topics;

    this.homeService.selectedCluster.subscribe(cluster => {
      this.topics = cluster.topics;
    });
  }

  ngOnInit() {
  }

  public analyze(cluster: string, topic: string) {
    let url = "/AnalyzeTopic";
    this.router.navigate([url], {queryParams: { topic:topic, cluster:cluster }});
  }

}
