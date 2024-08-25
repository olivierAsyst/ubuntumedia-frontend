/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
import { Personality } from '../models/personality';
export interface Country {
  articles?: Array<Article>;
  capitalCity?: string;
  codeAlpha2?: string;
  codeAlpha3?: string;
  codePhone?: string;
  continent?: string;
  createdBy?: number;
  createdDate?: string;
  description?: string;
  flagUrl?: string;
  id?: number;
  independanceDay?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  nameEnglish?: string;
  nameFrench?: string;
  nationality?: string;
  personalityList?: Array<Personality>;
  population?: string;
  shortHisory?: string;
  superficie?: string;
}
