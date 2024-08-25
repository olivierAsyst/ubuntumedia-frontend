/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ChangeArticleStatus$Params {
  idArticle: number;
  isPublished: boolean;
}

export function changeArticleStatus(http: HttpClient, rootUrl: string, params: ChangeArticleStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, changeArticleStatus.PATH, 'put');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
    rb.query('isPublished', params.isPublished, {});
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

changeArticleStatus.PATH = '/articles/changestatus/{idArticle}';
