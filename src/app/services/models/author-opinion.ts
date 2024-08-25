/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface AuthorOpinion {
  article?: Article;
  createdBy?: number;
  createdDate?: string;
  fonction?: string;
  fullName?: string;
  id?: number;
  imageUrl?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
}
