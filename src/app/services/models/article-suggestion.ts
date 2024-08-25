/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
export interface ArticleSuggestion {
  article?: Article;
  countryOfRequested?: string;
  createdBy?: number;
  createdDate?: string;
  emailOfRequested?: string;
  fullNameOfRequested?: string;
  id?: number;
  isrequestHasSent?: boolean;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  numberOfRequested?: string;
  professionOfRequested?: string;
  requestContent?: string;
  requestHasConsidered?: boolean;
  requestHasConsideredAndIncluded?: boolean;
  townOfRequested?: string;
}
