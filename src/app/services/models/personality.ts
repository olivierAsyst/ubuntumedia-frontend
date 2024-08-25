/* tslint:disable */
/* eslint-disable */
import { Country } from '../models/country';
import { Profession } from '../models/profession';
export interface Personality {
  birthDate?: string;
  country?: Country;
  createdBy?: number;
  createdDate?: string;
  dead?: boolean;
  deadDate?: string;
  fullName?: string;
  id?: number;
  imageUrl?: string;
  lastModifiedBy?: number;
  lastModifiedDate?: string;
  miniBiography?: string;
  professions?: Array<Profession>;
}
