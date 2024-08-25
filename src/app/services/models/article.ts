/* tslint:disable */
/* eslint-disable */
import { ArticleSuggestion } from '../models/article-suggestion';
import { AuthorOpinion } from '../models/author-opinion';
import { Category } from '../models/category';
import { Comment } from '../models/comment';
import { Country } from '../models/country';
import { Personality } from '../models/personality';
import { Tag } from '../models/tag';
import { Utilisateur } from '../models/utilisateur';
export interface Article {
  articleType?: 'NORMAL' | 'VIDEO' | 'POST' | 'OPINION' | 'INTERVIEW';
  authorOpinions?: Array<AuthorOpinion>;
  categories?: Array<Category>;
  comments?: Array<Comment>;
  content?: string;
  countries?: Array<Country>;
  createdBy?: number;
  createdDate?: string;
  externSources?: Array<string>;
  frontImageUrl?: string;
  frontPage?: boolean;
  id?: number;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  personalities?: Array<Personality>;
  postLink?: string;
  published?: boolean;
  suggestions?: Array<ArticleSuggestion>;
  tags?: Array<Tag>;
  title?: string;
  utilisateurs?: Array<Utilisateur>;
  videoUrl?: string;
  views?: number;
}
