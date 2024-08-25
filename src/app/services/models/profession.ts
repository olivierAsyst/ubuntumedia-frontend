/* tslint:disable */
/* eslint-disable */
import { Personality } from '../models/personality';
export interface Profession {
  createdBy?: number;
  createdDate?: string;
  current?: boolean;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  miniDescription?: string;
  personality?: Personality;
  professsionName?: string;
}
