import { MetaPagination } from './meta-pagination';

export interface ApiResponse<DataType> {
  data: DataType[];
  meta: {
    pagination: MetaPagination;
  };
}
