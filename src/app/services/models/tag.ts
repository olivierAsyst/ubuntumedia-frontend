/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface Tag {
  articles?: Array<Article>;
  createdBy?: number;
  createdDate?: string;
  description?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  name?: string;
}
