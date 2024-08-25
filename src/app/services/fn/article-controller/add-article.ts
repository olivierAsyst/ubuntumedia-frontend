/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Article } from '../../models/article';

export interface AddArticle$Params {
  categories: Array<number>;
  tags: Array<number>;
  pays?: Array<number>;
  personalites?: Array<number>;
      body: Article
}

export function addArticle(http: HttpClient, rootUrl: string, params: AddArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, addArticle.PATH, 'post');
  if (params) {
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

addArticle.PATH = '/articles';
