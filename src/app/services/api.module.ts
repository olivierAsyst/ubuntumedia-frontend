/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { VoteControllerService } from './services/vote-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { TagControllerService } from './services/tag-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { ProfessionControllerService } from './services/profession-controller.service';
import { PersonalityControllerService } from './services/personality-controller.service';
import { CountryControllerService } from './services/country-controller.service';
import { CategoryControllerService } from './services/category-controller.service';
import { ArticleControllerService } from './services/article-controller.service';
import { SuggestionControllerService } from './services/suggestion-controller.service';
import { SignalControllerService } from './services/signal-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    VoteControllerService,
    UserControllerService,
    TagControllerService,
    RoleControllerService,
    ProfessionControllerService,
    PersonalityControllerService,
    CountryControllerService,
    CategoryControllerService,
    ArticleControllerService,
    SuggestionControllerService,
    SignalControllerService,
    AuthenticationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
