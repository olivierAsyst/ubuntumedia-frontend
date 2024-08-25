/* tslint:disable */
/* eslint-disable */
import { Candidate } from '../models/candidate';
export interface Vote {
  candidates?: Array<Candidate>;
  createdBy?: number;
  createdDate?: string;
  endVote?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  startVote?: string;
  totalPoint?: number;
  usersVoted?: Array<string>;
  voteTitle?: string;
}
