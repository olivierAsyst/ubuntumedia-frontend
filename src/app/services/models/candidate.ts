/* tslint:disable */
/* eslint-disable */
import { Vote } from '../models/vote';
export interface Candidate {
  createdBy?: number;
  createdDate?: string;
  fullName?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  percentage?: number;
  point?: number;
  vote?: Vote;
}
