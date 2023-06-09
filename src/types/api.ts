export interface ListResponse<T> {
  Search: T[];
  totalResults: number;
  Response: boolean;
}
