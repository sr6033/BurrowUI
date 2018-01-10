import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvailableCluster } from 'burrow-backend/dist/models/available-cluster';
import { AvailableClusters } from 'burrow-backend/dist/models/available-clusters';
import { AvailableConsumers } from 'burrow-backend/dist/models/available-consumers';
import { AvailableTopics } from 'burrow-backend/dist/models/available-topics';
import { ConsumerDetail } from 'burrow-backend/dist/models/consumer-detail';
import { TopicDetail } from 'burrow-backend/dist/models/topic-detail';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BurrowService {
  private burrowUrl = '/api';

  private _activeCluster: string;
  get activeCluster(): string { return this._activeCluster; }

  private _clusters: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  get clusters(): Observable<string[]> { return this._clusters.asObservable(); }

  private _consumers: BehaviorSubject<AvailableConsumers> = new BehaviorSubject<AvailableConsumers>(undefined);
  get consumers(): Observable<AvailableConsumers> { return this._consumers.asObservable(); }

  private _topics: BehaviorSubject<AvailableTopics> = new BehaviorSubject<AvailableTopics>(undefined);
  get topics(): Observable<AvailableTopics> { return this._topics.asObservable(); }

  constructor(
    private http: HttpClient
  ) {
    this.getClusters().subscribe((clusters) => {
      this._clusters.next(clusters.clusters);
    });
  }

  public viewConsumers(cluster: string) {
    this._activeCluster = cluster;
    this.getConsumers(cluster).subscribe((consumers) => {
      this._consumers.next(consumers);
      this._topics.next(undefined);
    });
  }

  public viewTopics(cluster: string) {
    this._activeCluster = cluster;
    this.getTopics(cluster).subscribe((topics) => {
      this._topics.next(topics);
      this._consumers.next(undefined);
    });
  }

  public getClusters(): Observable<AvailableClusters> {
    return this.http.get<AvailableClusters>(this.burrowUrl);
  }

  public getCluster(cluster: string): Observable<AvailableCluster> {
    return this.http.get<AvailableCluster>(`${this.burrowUrl}/${cluster}`);
  }

  public getConsumers(cluster: string): Observable<AvailableConsumers> {
    return this.http.get<AvailableConsumers>(`${this.burrowUrl}/${cluster}/consumers`);
  }

  public getConsumer(cluster: string, consumer: string): Observable<ConsumerDetail> {
    return this.http.get<ConsumerDetail>(`${this.burrowUrl}/${cluster}/consumers/${consumer}`);
  }

  public getTopics(cluster: string): Observable<AvailableTopics> {
    return this.http.get<AvailableTopics>(`${this.burrowUrl}/${cluster}/topics`);
  }

  public getTopic(cluster: string, topic: string): Observable<TopicDetail> {
    return this.http.get<TopicDetail>(`${this.burrowUrl}/${cluster}/topics/${topic}`);
  }

}
