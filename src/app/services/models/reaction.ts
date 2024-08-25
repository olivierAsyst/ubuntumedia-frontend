/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface Reaction {
  article?: Article;
  createdBy?: number;
  createdDate?: string;
  dislike?: number;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  laugh?: number;
  likeCount?: number;
}
