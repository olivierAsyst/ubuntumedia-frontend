/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addRole } from '../fn/role-controller/add-role';
import { AddRole$Params } from '../fn/role-controller/add-role';
import { deleteRole } from '../fn/role-controller/delete-role';
import { DeleteRole$Params } from '../fn/role-controller/delete-role';
import { getRole } from '../fn/role-controller/get-role';
import { GetRole$Params } from '../fn/role-controller/get-role';
import { getRoles } from '../fn/role-controller/get-roles';
import { GetRoles$Params } from '../fn/role-controller/get-roles';
import { getRolesByIds } from '../fn/role-controller/get-roles-by-ids';
import { GetRolesByIds$Params } from '../fn/role-controller/get-roles-by-ids';
import { updateRole } from '../fn/role-controller/update-role';
import { UpdateRole$Params } from '../fn/role-controller/update-role';

@Injectable({ providedIn: 'root' })
export class RoleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRole()` */
  static readonly GetRolePath = '/roles/{idRole}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole$Response(params: GetRole$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole(params: GetRole$Params, context?: HttpContext): Observable<string> {
    return this.getRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `updateRole()` */
  static readonly UpdateRolePath = '/roles/{idRole}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params: UpdateRole$Params, context?: HttpContext): Observable<string> {
    return this.updateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getRoles()` */
  static readonly GetRolesPath = '/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoles$Response(params?: GetRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoles(params?: GetRoles$Params, context?: HttpContext): Observable<string> {
    return this.getRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addRole()` */
  static readonly AddRolePath = '/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRole$Response(params: AddRole$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRole(params: AddRole$Params, context?: HttpContext): Observable<{
}> {
    return this.addRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteRole()` */
  static readonly DeleteRolePath = '/roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole$Response(params: DeleteRole$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRole(params: DeleteRole$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getRolesByIds()` */
  static readonly GetRolesByIdsPath = '/roles/rolesByIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRolesByIds()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesByIds$Response(params: GetRolesByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getRolesByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRolesByIds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRolesByIds(params: GetRolesByIds$Params, context?: HttpContext): Observable<string> {
    return this.getRolesByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
