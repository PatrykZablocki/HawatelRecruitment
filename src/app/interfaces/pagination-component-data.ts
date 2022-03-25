import { MetaPagination } from './meta-pagination';

export interface PaginationComponentData {
  showPagination: boolean;
  pagination: MetaPagination;
  itemsCount: number;
  getData: (page?: string | null) => void;
}
