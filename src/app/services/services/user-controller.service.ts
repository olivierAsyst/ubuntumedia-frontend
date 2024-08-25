/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addUtilisateur } from '../fn/user-controller/add-utilisateur';
import { AddUtilisateur$Params } from '../fn/user-controller/add-utilisateur';
import { deleteUtilisateur } from '../fn/user-controller/delete-utilisateur';
import { DeleteUtilisateur$Params } from '../fn/user-controller/delete-utilisateur';
import { getAllUtilisateur } from '../fn/user-controller/get-all-utilisateur';
import { GetAllUtilisateur$Params } from '../fn/user-controller/get-all-utilisateur';
import { getUtilisateur } from '../fn/user-controller/get-utilisateur';
import { GetUtilisateur$Params } from '../fn/user-controller/get-utilisateur';
import { getUtilisateursByIds } from '../fn/user-controller/get-utilisateurs-by-ids';
import { GetUtilisateursByIds$Params } from '../fn/user-controller/get-utilisateurs-by-ids';
import { updateUtilisateur } from '../fn/user-controller/update-utilisateur';
import { UpdateUtilisateur$Params } from '../fn/user-controller/update-utilisateur';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUtilisateur()` */
  static readonly GetUtilisateurPath = '/utilisateurs/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtilisateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateur$Response(params: GetUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtilisateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateur(params: GetUtilisateur$Params, context?: HttpContext): Observable<{
}> {
    return this.getUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateUtilisateur()` */
  static readonly UpdateUtilisateurPath = '/utilisateurs/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUtilisateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUtilisateur$Response(params: UpdateUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUtilisateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUtilisateur(params: UpdateUtilisateur$Params, context?: HttpContext): Observable<string> {
    return this.updateUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getAllUtilisateur()` */
  static readonly GetAllUtilisateurPath = '/utilisateurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUtilisateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUtilisateur$Response(params?: GetAllUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUtilisateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUtilisateur(params?: GetAllUtilisateur$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addUtilisateur()` */
  static readonly AddUtilisateurPath = '/utilisateurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUtilisateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUtilisateur$Response(params: AddUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUtilisateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUtilisateur(params: AddUtilisateur$Params, context?: HttpContext): Observable<{
}> {
    return this.addUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteUtilisateur()` */
  static readonly DeleteUtilisateurPath = '/utilisateurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUtilisateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUtilisateur$Response(params?: DeleteUtilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteUtilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUtilisateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUtilisateur(params?: DeleteUtilisateur$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteUtilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getUtilisateursByIds()` */
  static readonly GetUtilisateursByIdsPath = '/utilisateurs/usersByIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtilisateursByIds()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateursByIds$Response(params?: GetUtilisateursByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getUtilisateursByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtilisateursByIds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateursByIds(params?: GetUtilisateursByIds$Params, context?: HttpContext): Observable<{
}> {
    return this.getUtilisateursByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
