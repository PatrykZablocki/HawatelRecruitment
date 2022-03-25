import { ResponseMeta } from './response-meta';

export interface ApiResponse<DataType> {
  data: DataType[];
  meta: ResponseMeta;
}
