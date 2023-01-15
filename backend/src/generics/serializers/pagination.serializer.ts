import { Expose } from 'class-transformer';

export class PaginationSerializer {
  @Expose()
  totalDocs: number;

  @Expose()
  offset: number;

  @Expose()
  limit: number;

  @Expose()
  totalPages: number;

  @Expose()
  page: number;

  @Expose()
  pagingCounter: number;

  @Expose()
  hasPrevPage: boolean;

  @Expose()
  hasNextPage: boolean;

  @Expose()
  prevPage: number | null;

  @Expose()
  nextPage: number | null;
}
