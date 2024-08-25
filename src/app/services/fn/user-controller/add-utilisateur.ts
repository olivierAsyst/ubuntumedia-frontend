/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Utilisateur } from '../../models/utilisateur';

export interface AddUtilisateur$Params {
  roles?: Array<number>;
      body: Utilisateur
}

export function addUtilisateur(http: HttpClient, rootUrl: string, params: AddUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, addUtilisateur.PATH, 'post');
  if (params) {
    rb.query('roles', params.roles, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

addUtilisateur.PATH = '/utilisateurs';
