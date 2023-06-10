export interface ListResponse<T> {
  Search?: T[];
  totalResults?: number;
  Error?: string;
  Response: string;
}
