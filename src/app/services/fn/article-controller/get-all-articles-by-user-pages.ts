/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseArticleDto } from '../../models/page-response-article-dto';

export interface GetAllArticlesByUserPages$Params {
  page?: number;
  size?: number;
}

export function getAllArticlesByUserPages(http: HttpClient, rootUrl: string, params?: GetAllArticlesByUserPages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseArticleDto>> {
  const rb = new RequestBuilder(rootUrl, getAllArticlesByUserPages.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseArticleDto>;
    })
  );
}

getAllArticlesByUserPages.PATH = '/articles/page/user';
