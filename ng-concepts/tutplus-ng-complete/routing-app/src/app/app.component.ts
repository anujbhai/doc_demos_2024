import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { sharedImports } from '../shared/shared-imports';
import { SharedComponentImports } from '../shared/components/shared-component-imports';

@Component({
  selector: 'app-root',
  imports: [
    sharedImports,
    SharedComponentImports,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'routing-app';

  goToContact():void {
    console.log("clicked on go to contact.");
    this.router.navigate(['contact'])
  }
}
