/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AddUserOnArticle$Params {
  idArticle: number;
  utilisateur: Array<number>;
}

export function addUserOnArticle(http: HttpClient, rootUrl: string, params: AddUserOnArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, addUserOnArticle.PATH, 'put');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
    rb.query('utilisateur', params.utilisateur, {});
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

addUserOnArticle.PATH = '/articles/adduser/{idArticle}';
