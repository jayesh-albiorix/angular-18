import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor() {
    this.initConfiguration()
  }

  initConfiguration() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '882236225416-3npbc928n3bqmshvs9frjbgn8v9v8pq3.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/dashboard',
      scope: 'openid profile email'
    }

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    return this.oAuthService.getIdentityClaims();
  }

  getAccessToken() {
    this.oAuthService.getAccessToken();
  }
}
