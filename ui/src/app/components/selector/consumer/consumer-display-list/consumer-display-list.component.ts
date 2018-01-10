import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TableElement } from '../../../../models/table-element';
import { BurrowService } from '../../../../services/burrow.service';

@Component({
  selector: 'app-consumer-display-list',
  templateUrl: './consumer-display-list.component.html',
  styleUrls: ['./consumer-display-list.component.css']
})
export class ConsumerDisplayListComponent implements OnInit, AfterViewInit {
  public consumers: string[];
  public displayedColumns = ['status', 'name', 'lag', 'cluster'];
  public dataSource = new MatTableDataSource();

  constructor(
    private burrow: BurrowService
  ) {
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    this.burrow.consumers.subscribe((consumers) => {
      this.consumers = consumers.consumers;
      this.loadDataTable();
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private loadDataTable() {
    this.consumers.forEach((consumer) => {
      this.burrow.getConsumer(this.burrow.activeCluster, consumer).subscribe((detail) => {
        const data = this.dataSource.data;
        data.push({
          name: consumer,
          cluster: this.burrow.activeCluster,
          status: detail.detail.status.status,
          lag: detail.detail.status.lag
        });
        this.dataSource.data = data;
      });
    });
  }

}
