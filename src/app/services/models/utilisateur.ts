/* tslint:disable */
/* eslint-disable */
import { Article } from '../models/article';
import { Comment } from '../models/comment';
import { GrantedAuthority } from '../models/granted-authority';
import { Role } from '../models/role';
export interface Utilisateur {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  articles?: Array<Article>;
  authorities?: Array<GrantedAuthority>;
  birthDate?: string;
  comments?: Array<Comment>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  description?: string;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  imageUrl?: string;
  lastModifiedDate?: string;
  lastname?: string;
  name?: string;
  password?: string;
  phoneNumber?: string;
  roles?: Array<Role>;
  username?: string;
}
