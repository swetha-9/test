import { Component } from '@angular/core';
import {OAuthService,AuthConfig} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private authService:OAuthService){
this.authService.configure(authConfig);
this.authService.loadDiscoveryDocumentAndLogin();
  }

}
export const authConfig:AuthConfig={
  issuer: 'https://dev-95438955.okta.com/oauth2/default',
  redirectUri:window.location.origin,
  clientId:'0oaa8v2d98KNdljBX5d6'
}