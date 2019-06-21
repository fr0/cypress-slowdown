import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'adt-root',
  template: `
    <div class="app-main" id="main">
      <div class="page-main">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(private http: HttpClient,
              private router: Router) { }

}
