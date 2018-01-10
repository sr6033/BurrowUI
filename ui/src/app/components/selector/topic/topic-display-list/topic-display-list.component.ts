import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BurrowService } from '../../../../services/burrow.service';

@Component({
  selector: 'app-topic-display-list',
  templateUrl: './topic-display-list.component.html',
  styleUrls: ['./topic-display-list.component.css']
})
export class TopicDisplayListComponent implements OnInit {
  public topics: string[];
  public displayedColumns = ['name', 'cluster'];
  public dataSource = new MatTableDataSource();

  constructor(
    private burrow: BurrowService
  ) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    this.burrow.topics.subscribe((topics) => {
      if (topics) {
        this.topics = topics.topics;
        this.loadDataTable();
      } else {
        this.topics = undefined;
      }
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private loadDataTable() {
    this.topics.forEach((topic) => {
      this.burrow.getTopic(this.burrow.activeCluster, topic).subscribe((detail) => {
        const data = this.dataSource.data;
        data.push({
          name: topic,
          cluster: this.burrow.activeCluster,
          status: undefined,
          lag: undefined
        });
        this.dataSource.data = data;
      });
    });
  }

}
