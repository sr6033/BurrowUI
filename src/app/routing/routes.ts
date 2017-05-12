import { ConsumerComponent } from "../components/consumer.component";
import { HomeComponent } from "../components/home.component";
import { ErrorComponent } from "../components/error.component";
import { TopicComponent } from "../components/topic.component";

export const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'AnalyzeConsumer',
    component: ConsumerComponent
  },
  {
    path: 'AnalyzeTopic',
    component: TopicComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
