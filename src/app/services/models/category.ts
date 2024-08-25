/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface Category {
  articles?: Array<Article>;
  createdBy?: number;
  createdDate?: string;
  description?: string;
  iconUrl?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  name?: string;
}
