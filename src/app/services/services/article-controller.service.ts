/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addArticle } from '../fn/article-controller/add-article';
import { AddArticle$Params } from '../fn/article-controller/add-article';
import { addReaction } from '../fn/article-controller/add-reaction';
import { AddReaction$Params } from '../fn/article-controller/add-reaction';
import { addUserOnArticle } from '../fn/article-controller/add-user-on-article';
import { AddUserOnArticle$Params } from '../fn/article-controller/add-user-on-article';
import { changeArticleStatus } from '../fn/article-controller/change-article-status';
import { ChangeArticleStatus$Params } from '../fn/article-controller/change-article-status';
import { deleteArticle } from '../fn/article-controller/delete-article';
import { DeleteArticle$Params } from '../fn/article-controller/delete-article';
import { getAllArticles } from '../fn/article-controller/get-all-articles';
import { GetAllArticles$Params } from '../fn/article-controller/get-all-articles';
import { getAllArticlesByPage } from '../fn/article-controller/get-all-articles-by-page';
import { GetAllArticlesByPage$Params } from '../fn/article-controller/get-all-articles-by-page';
import { getAllArticlesByUserPages } from '../fn/article-controller/get-all-articles-by-user-pages';
import { GetAllArticlesByUserPages$Params } from '../fn/article-controller/get-all-articles-by-user-pages';
import { getArticle } from '../fn/article-controller/get-article';
import { GetArticle$Params } from '../fn/article-controller/get-article';
import { getArticlesByCategory } from '../fn/article-controller/get-articles-by-category';
import { GetArticlesByCategory$Params } from '../fn/article-controller/get-articles-by-category';
import { getArticlesByCountry } from '../fn/article-controller/get-articles-by-country';
import { GetArticlesByCountry$Params } from '../fn/article-controller/get-articles-by-country';
import { getArticlesByUser } from '../fn/article-controller/get-articles-by-user';
import { GetArticlesByUser$Params } from '../fn/article-controller/get-articles-by-user';
import { getTopArticles } from '../fn/article-controller/get-top-articles';
import { GetTopArticles$Params } from '../fn/article-controller/get-top-articles';
import { PageResponseArticleDto } from '../models/page-response-article-dto';
import { updateArticle } from '../fn/article-controller/update-article';
import { UpdateArticle$Params } from '../fn/article-controller/update-article';

@Injectable({ providedIn: 'root' })
export class ArticleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getArticle()` */
  static readonly GetArticlePath = '/articles/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticle$Response(params: GetArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticle(params: GetArticle$Params, context?: HttpContext): Observable<{
}> {
    return this.getArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateArticle()` */
  static readonly UpdateArticlePath = '/articles/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArticle$Response(params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArticle(params: UpdateArticle$Params, context?: HttpContext): Observable<{
}> {
    return this.updateArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `changeArticleStatus()` */
  static readonly ChangeArticleStatusPath = '/articles/changestatus/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changeArticleStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeArticleStatus$Response(params: ChangeArticleStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return changeArticleStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changeArticleStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  changeArticleStatus(params: ChangeArticleStatus$Params, context?: HttpContext): Observable<{
}> {
    return this.changeArticleStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addUserOnArticle()` */
  static readonly AddUserOnArticlePath = '/articles/adduser/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUserOnArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserOnArticle$Response(params: AddUserOnArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addUserOnArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUserOnArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addUserOnArticle(params: AddUserOnArticle$Params, context?: HttpContext): Observable<{
}> {
    return this.addUserOnArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllArticles()` */
  static readonly GetAllArticlesPath = '/articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllArticles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticles$Response(params?: GetAllArticles$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllArticles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllArticles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticles(params?: GetAllArticles$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllArticles$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addArticle()` */
  static readonly AddArticlePath = '/articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addArticle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addArticle$Response(params: AddArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addArticle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addArticle(params: AddArticle$Params, context?: HttpContext): Observable<{
}> {
    return this.addArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteArticle()` */
  static readonly DeleteArticlePath = '/articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle$Response(params?: DeleteArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle(params?: DeleteArticle$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `addReaction()` */
  static readonly AddReactionPath = '/articles/{idArticle}/react';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReaction$Response(params: AddReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addReaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReaction(params: AddReaction$Params, context?: HttpContext): Observable<{
}> {
    return this.addReaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getTopArticles()` */
  static readonly GetTopArticlesPath = '/articles/top';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTopArticles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopArticles$Response(params?: GetTopArticles$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getTopArticles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTopArticles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopArticles(params?: GetTopArticles$Params, context?: HttpContext): Observable<{
}> {
    return this.getTopArticles$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllArticlesByPage()` */
  static readonly GetAllArticlesByPagePath = '/articles/page';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllArticlesByPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticlesByPage$Response(params?: GetAllArticlesByPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseArticleDto>> {
    return getAllArticlesByPage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllArticlesByPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticlesByPage(params?: GetAllArticlesByPage$Params, context?: HttpContext): Observable<PageResponseArticleDto> {
    return this.getAllArticlesByPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseArticleDto>): PageResponseArticleDto => r.body)
    );
  }

  /** Path part for operation `getAllArticlesByUserPages()` */
  static readonly GetAllArticlesByUserPagesPath = '/articles/page/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllArticlesByUserPages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticlesByUserPages$Response(params?: GetAllArticlesByUserPages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseArticleDto>> {
    return getAllArticlesByUserPages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllArticlesByUserPages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllArticlesByUserPages(params?: GetAllArticlesByUserPages$Params, context?: HttpContext): Observable<PageResponseArticleDto> {
    return this.getAllArticlesByUserPages$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseArticleDto>): PageResponseArticleDto => r.body)
    );
  }

  /** Path part for operation `getArticlesByUser()` */
  static readonly GetArticlesByUserPath = '/articles/byuser/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticlesByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByUser$Response(params: GetArticlesByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getArticlesByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticlesByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByUser(params: GetArticlesByUser$Params, context?: HttpContext): Observable<{
}> {
    return this.getArticlesByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getArticlesByCountry()` */
  static readonly GetArticlesByCountryPath = '/articles/bycountry/{countryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticlesByCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByCountry$Response(params: GetArticlesByCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getArticlesByCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticlesByCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByCountry(params: GetArticlesByCountry$Params, context?: HttpContext): Observable<{
}> {
    return this.getArticlesByCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getArticlesByCategory()` */
  static readonly GetArticlesByCategoryPath = '/articles/bycategory/{categoryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticlesByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByCategory$Response(params: GetArticlesByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getArticlesByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticlesByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticlesByCategory(params: GetArticlesByCategory$Params, context?: HttpContext): Observable<{
}> {
    return this.getArticlesByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
