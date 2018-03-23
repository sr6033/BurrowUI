import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AvailableClusters } from 'burrow-backend/dist/models/available-clusters';
import { HttpClient } from '@angular/common/http';
import {AvailableCluster} from 'burrow-backend/dist/models/available-cluster';
import {AvailableConsumers} from 'burrow-backend/dist/models/available-consumers';
import {ConsumerDetail} from 'burrow-backend/dist/models/consumer-detail';
import {AvailableTopics} from 'burrow-backend/dist/models/available-topics';
import {TopicDetail} from 'burrow-backend/dist/models/topic-detail';
import {ConsumerStatus} from 'burrow-backend/dist/models/consumer-status';

@Injectable()
export class BurrowBackendService {
  private burrowApiUrl = '/api/burrow';

  constructor(
    private http: HttpClient
  ) {}

  getClusters(): Observable<AvailableClusters> {
    return this.http.get<AvailableClusters>(`${this.burrowApiUrl}/clusters`);
  }

  getCluster(cluster: string): Observable<AvailableCluster> {
    return this.http.get<AvailableCluster>(`${this.burrowApiUrl}/clusters/${cluster}`);
  }

  getConsumers(cluster: string): Observable<AvailableConsumers> {
    return this.http.get<AvailableConsumers>(`${this.burrowApiUrl}/clusters/${cluster}/consumers`);
  }

  getConsumer(cluster: string, consumer: string): Observable<ConsumerDetail> {
    return this.http.get<ConsumerDetail>(`${this.burrowApiUrl}/clusters/${cluster}/consumers/${consumer}`);
  }

  getConsumerStatus(cluster: string, consumer: string): Observable<ConsumerStatus> {
    return this.http.get<ConsumerStatus>(`${this.burrowApiUrl}/clusters/${cluster}/consumers/${consumer}/status`);
  }

  getTopics(cluster: string): Observable<AvailableTopics> {
    return this.http.get<AvailableTopics>(`${this.burrowApiUrl}/clusters/${cluster}/topics`);
  }

  getTopic(cluster: string, topic: string): Observable<TopicDetail> {
    return this.http.get<TopicDetail>(`${this.burrowApiUrl}/clusters/${cluster}/topics/${topic}`);
  }

}
