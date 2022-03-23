import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MetaPagination } from '../meta-pagination';
import { PaginationComponentData } from '../pagination-component-data';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() data: PaginationComponentData;
  paginationInfo: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setPaginationInfo(this.data.pagination, this.data.itemsCount);
  }

  setPaginationInfo(pagination: MetaPagination, itemsCount: number) {
    if (!pagination) return;
    const firstElement =
      pagination.page * pagination.limit - pagination.limit + 1;
    const lastElement = firstElement + itemsCount - 1;

    if (lastElement === pagination.total) pagination.links.next = null;

    this.paginationInfo = `${firstElement}-${lastElement} of ${pagination.total}`;
  }
}
