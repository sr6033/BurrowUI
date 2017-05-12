import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, BehaviorSubject, Subject } from "rxjs/Rx";
import { Topic } from "../classes/topic";
import { Consumer } from "../classes/consumer";
import { BurrowService } from "./burrow.service";
import {Params, ActivatedRoute} from "@angular/router";

@Injectable()
export class TopicService {

	// Variables
	topicName: string;
	clusterName: string;

	// Observable Topic
	private _topicDetail: Subject<Topic> = new Subject();
	get topicDetail(): Observable<Topic> { return this._topicDetail.asObservable() };

	// Observable Consumers
	private _topicConsumers: BehaviorSubject<Consumer[]> = new BehaviorSubject([]);
	get topicConsumers(): Observable<Consumer[]> { return this._topicConsumers.asObservable() }

	constructor(private burrowService: BurrowService, private route: ActivatedRoute) {
		this.route.queryParams.subscribe((params: Params) => {
			this.topicName = params['topic'];
			this.clusterName = params['cluster'];
			this.burrowService.getTopic(this.clusterName, this.topicName).subscribe(topic => {
				this._topicDetail.next(topic);
				this.getTopicsConsumers();
			});
		});
	}

	private getTopicsConsumers() : void {
		this.burrowService.clusters.subscribe(clusters => {
			clusters.forEach(cluster => {
				cluster.consumers.forEach(consumer => {
					// Get Consumer
					for (let i=0; i<consumer.status.partitions.length; i++) {
						if (consumer.status.partitions[i].topic == this.topicName && consumer.request.cluster == this.clusterName) {
							// Add this consumer to the active consumers for the topic
							let currentConsumers = this._topicConsumers.getValue();
							currentConsumers.push(consumer);
							this._topicConsumers.next(currentConsumers);
							break;
						}
					}
				});
			});
		});
	}

	public refreshData() : void {
		console.log("Refreshing Data for Topic");
	}

}