/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
import { SignalComment } from '../models/signal-comment';
import { Utilisateur } from '../models/utilisateur';
export interface Comment {
  article?: Article;
  content?: string;
  createdBy?: number;
  createdDate?: string;
  display?: boolean;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  signalComments?: Array<SignalComment>;
  utilisateur?: Utilisateur;
}
