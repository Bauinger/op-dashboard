import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableDataSource, OperationLog } from './table-datasource';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserverService } from '../services/breakpoint-observer.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class TableComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<OperationLog>;
  private breakpointObserverService = inject(BreakpointObserverService);

  dataSource = new TableDataSource();
  displayedColumns: string[] = [];
  onDestroy = new Subject();

  constructor() {
    this.breakpointObserverService.isHandset$
      .pipe(takeUntil(this.onDestroy))
      .subscribe((isHandset) => {
        if (isHandset) {
          this.displayedColumns = ['no', 'datetime'];
        } else {
          this.displayedColumns = [
            'no',
            'datetime',
            'operation',
            'direction',
            'person',
            'information',
            'note',
          ];
        }
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy(): void {
    this.onDestroy.next(true);
    this.onDestroy.complete();
  }
}
