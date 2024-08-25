/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Role } from '../../models/role';
import { Utilisateur } from '../../models/utilisateur';

export interface UpdateUtilisateur$Params {
  idUtilisateur: number;
  roles?: Array<Role>;
      body: Utilisateur
}

export function updateUtilisateur(http: HttpClient, rootUrl: string, params: UpdateUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, updateUtilisateur.PATH, 'put');
  if (params) {
    rb.path('idUtilisateur', params.idUtilisateur, {});
    rb.query('roles', params.roles, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

updateUtilisateur.PATH = '/utilisateurs/{idUtilisateur}';
