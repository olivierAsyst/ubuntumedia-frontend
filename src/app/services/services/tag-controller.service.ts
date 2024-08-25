/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addTag } from '../fn/tag-controller/add-tag';
import { AddTag$Params } from '../fn/tag-controller/add-tag';
import { deleteTag } from '../fn/tag-controller/delete-tag';
import { DeleteTag$Params } from '../fn/tag-controller/delete-tag';
import { getTag } from '../fn/tag-controller/get-tag';
import { GetTag$Params } from '../fn/tag-controller/get-tag';
import { getTagByName } from '../fn/tag-controller/get-tag-by-name';
import { GetTagByName$Params } from '../fn/tag-controller/get-tag-by-name';
import { getTags } from '../fn/tag-controller/get-tags';
import { GetTags$Params } from '../fn/tag-controller/get-tags';
import { updateTag } from '../fn/tag-controller/update-tag';
import { UpdateTag$Params } from '../fn/tag-controller/update-tag';

@Injectable({ providedIn: 'root' })
export class TagControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTag()` */
  static readonly GetTagPath = '/tags/{idTag}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTag$Response(params: GetTag$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTag(params: GetTag$Params, context?: HttpContext): Observable<{
}> {
    return this.getTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateTag()` */
  static readonly UpdateTagPath = '/tags/{idTag}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTag()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTag$Response(params: UpdateTag$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTag$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTag(params: UpdateTag$Params, context?: HttpContext): Observable<{
}> {
    return this.updateTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getTags()` */
  static readonly GetTagsPath = '/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTags$Response(params?: GetTags$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getTags(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTags(params?: GetTags$Params, context?: HttpContext): Observable<{
}> {
    return this.getTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addTag()` */
  static readonly AddTagPath = '/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTag()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTag$Response(params: AddTag$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTag$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTag(params: AddTag$Params, context?: HttpContext): Observable<{
}> {
    return this.addTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteTag()` */
  static readonly DeleteTagPath = '/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTag$Response(params?: DeleteTag$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteTag(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTag(params?: DeleteTag$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getTagByName()` */
  static readonly GetTagByNamePath = '/tags/name/{tagName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTagByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagByName$Response(params: GetTagByName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getTagByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTagByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagByName(params: GetTagByName$Params, context?: HttpContext): Observable<{
}> {
    return this.getTagByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
