import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { sharedComponentImports } from '../shared/components/shared-component-imports';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    sharedComponentImports,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
