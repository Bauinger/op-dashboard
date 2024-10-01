import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface OperationLog {
  no: number;
  datetime: Date;
  operation: number;
  direction: 'input' | 'output' | '';
  person: string;
  information: string;
  note: string;
}

const EXAMPLE_DATA: OperationLog[] = [
  {
    no: 1,
    datetime: new Date(),
    operation: 1,
    direction: 'input',
    person: 'John Doe',
    information: 'Operation started',
    note: 'Initial log entry',
  },
  {
    no: 2,
    datetime: new Date(),
    operation: 2,
    direction: 'output',
    person: 'Jane Smith',
    information: 'Operation completed',
    note: 'All tasks finished',
  },
  {
    no: 3,
    datetime: new Date(),
    operation: 3,
    direction: 'input',
    person: 'Alan Walker',
    information: 'New operation initiated',
    note: 'Awaiting approval',
  },
  {
    no: 4,
    datetime: new Date(),
    operation: 4,
    direction: 'output',
    person: 'Sarah Connor',
    information: 'Output confirmed',
    note: 'Checked and verified',
  },
  {
    no: 5,
    datetime: new Date(),
    operation: 5,
    direction: 'input',
    person: 'Michael Jordan',
    information: 'Process started',
    note: 'Urgent priority',
  },
  {
    no: 6,
    datetime: new Date(),
    operation: 6,
    direction: 'output',
    person: 'Leonard Cohen',
    information: 'Processed successfully',
    note: 'No issues',
  },
  {
    no: 7,
    datetime: new Date(),
    operation: 7,
    direction: 'input',
    person: 'Elon Musk',
    information: 'Operation in progress',
    note: 'Under review',
  },
  {
    no: 8,
    datetime: new Date(),
    operation: 8,
    direction: 'output',
    person: 'Oprah Winfrey',
    information: 'Data output completed',
    note: 'Minor delay',
  },
  {
    no: 9,
    datetime: new Date(),
    operation: 9,
    direction: 'input',
    person: 'Isaac Newton',
    information: 'Initial input received',
    note: 'Expected follow-up',
  },
  {
    no: 10,
    datetime: new Date(),
    operation: 10,
    direction: 'output',
    person: 'Marie Curie',
    information: 'Processed output',
    note: 'All data checked',
  },
  {
    no: 11,
    datetime: new Date(),
    operation: 11,
    direction: 'input',
    person: 'Albert Einstein',
    information: 'Beginning new operation',
    note: 'Technical assistance required',
  },
  {
    no: 12,
    datetime: new Date(),
    operation: 12,
    direction: 'output',
    person: 'Thomas Edison',
    information: 'Output registered',
    note: 'Approved by manager',
  },
  {
    no: 13,
    datetime: new Date(),
    operation: 13,
    direction: 'input',
    person: 'Nikola Tesla',
    information: 'New data input',
    note: 'Technical review pending',
  },
  {
    no: 14,
    datetime: new Date(),
    operation: 14,
    direction: 'output',
    person: 'Ada Lovelace',
    information: 'Final output completed',
    note: 'Confirmed by team',
  },
  {
    no: 15,
    datetime: new Date(),
    operation: 15,
    direction: 'input',
    person: 'Charles Babbage',
    information: 'New operation initiated',
    note: 'Awaiting verification',
  },
  {
    no: 16,
    datetime: new Date(),
    operation: 16,
    direction: 'output',
    person: 'Grace Hopper',
    information: 'Process output completed',
    note: 'No issues reported',
  },
  {
    no: 17,
    datetime: new Date(),
    operation: 17,
    direction: 'input',
    person: 'Alan Turing',
    information: 'Data input started',
    note: 'Urgent priority',
  },
  {
    no: 18,
    datetime: new Date(),
    operation: 18,
    direction: 'output',
    person: 'Tim Berners-Lee',
    information: 'Process completed',
    note: 'Verified and approved',
  },
  {
    no: 19,
    datetime: new Date(),
    operation: 19,
    direction: 'input',
    person: 'Steve Jobs',
    information: 'Initial input data',
    note: 'Further review needed',
  },
  {
    no: 20,
    datetime: new Date(),
    operation: 20,
    direction: 'output',
    person: 'Bill Gates',
    information: 'Output successfully processed',
    note: 'All checks passed',
  },
];

export class TableDataSource extends DataSource<OperationLog> {
  data: OperationLog[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OperationLog[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.data);
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OperationLog[]): OperationLog[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }
}
