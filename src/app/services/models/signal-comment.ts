/* tslint:disable */
/* eslint-disable */
import { Comment } from '../models/comment';
import { Utilisateur } from '../models/utilisateur';
export interface SignalComment {
  causeOfSignal?: string;
  comment?: Comment;
  createdBy?: number;
  createdDate?: string;
  fullNameOfSignal?: string;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  utilisateur?: Utilisateur;
}
