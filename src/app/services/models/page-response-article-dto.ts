/* tslint:disable */
/* eslint-disable */
import { ArticleDto } from '../models/article-dto';
export interface PageResponseArticleDto {
  contents?: Array<ArticleDto>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
