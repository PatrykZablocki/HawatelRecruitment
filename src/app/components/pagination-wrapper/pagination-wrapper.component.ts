import { Component, Input, OnInit } from '@angular/core';
import { PaginationComponentData } from 'src/app/interfaces/pagination-component-data';

@Component({
  selector: 'app-pagination-wrapper',
  templateUrl: './pagination-wrapper.component.html',
  styleUrls: ['./pagination-wrapper.component.scss'],
})
export class PaginationWrapperComponent implements OnInit {
  @Input() paginationData: PaginationComponentData;

  constructor() {}

  ngOnInit(): void {}
}
