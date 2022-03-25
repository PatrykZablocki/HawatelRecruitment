export interface MetaPagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: {
    previous: string | null;
    current: string | null;
    next: string | null;
  };
}
