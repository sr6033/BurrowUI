import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {AvailableClusters} from 'burrow-backend/dist/models/available-clusters';
import {HttpClient} from '@angular/common/http';
import {AvailableCluster} from 'burrow-backend/dist/models/available-cluster';
import {AvailableConsumers} from 'burrow-backend/dist/models/available-consumers';
import {ConsumerDetail} from 'burrow-backend/dist/models/consumer-detail';
import {AvailableTopics} from 'burrow-backend/dist/models/available-topics';
import {TopicDetail} from 'burrow-backend/dist/models/topic-detail';
import {ConsumerStatus} from 'burrow-backend/dist/models/consumer-status';

@Injectable()
export class BurrowService {
  private _clusters: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  get clusters(): Observable<string[]> { return this._clusters.asObservable(); }

  constructor(
    private http: HttpClient
  ) {
    this.getClusters().subscribe(clusters => {
      this._clusters.next(clusters.clusters);
    });
  }

  private burrowUrl = '/api';

  getClusters(): Observable<AvailableClusters> {
    return this.http.get<AvailableClusters>(this.burrowUrl);
  }

  getCluster(cluster: string): Observable<AvailableCluster> {
    return this.http.get<AvailableCluster>(`${this.burrowUrl}/${cluster}`);
  }

  getConsumers(cluster: string): Observable<AvailableConsumers> {
    return this.http.get<AvailableConsumers>(`${this.burrowUrl}/${cluster}/consumers`);
  }

  getConsumer(cluster: string, consumer: string): Observable<ConsumerDetail> {
    return this.http.get<ConsumerDetail>(`${this.burrowUrl}/${cluster}/consumers/${consumer}`);
  }

  getConsumerStatus(cluster: string, consumer: string): Observable<ConsumerStatus> {
    return this.http.get<ConsumerStatus>(`${this.burrowUrl}/${cluster}/consumers/${consumer}/status`);
  }

  getTopics(cluster: string): Observable<AvailableTopics> {
    return this.http.get<AvailableTopics>(`${this.burrowUrl}/${cluster}/topics`);
  }

  getTopic(cluster: string, topic: string): Observable<TopicDetail> {
    return this.http.get<TopicDetail>(`${this.burrowUrl}/${cluster}/topics/${topic}`);
  }

}
