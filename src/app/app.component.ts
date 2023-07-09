import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `is production: ${environment.production}, auth: ${environment.auth.clientID} - ${environment.auth.domain}, api: ${environment.apiEndpoint}`;

}
