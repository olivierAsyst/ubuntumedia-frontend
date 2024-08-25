/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Article } from '../../models/article';

export interface UpdateArticle$Params {
  idArticle: number;
  categories?: Array<number>;
  tags?: Array<number>;
  pays?: Array<number>;
  personalites?: Array<number>;
      body: Article
}

export function updateArticle(http: HttpClient, rootUrl: string, params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, updateArticle.PATH, 'put');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
    rb.query('categories', params.categories, {});
    rb.query('tags', params.tags, {});
    rb.query('pays', params.pays, {});
    rb.query('personalites', params.personalites, {});
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

updateArticle.PATH = '/articles/{idArticle}';
