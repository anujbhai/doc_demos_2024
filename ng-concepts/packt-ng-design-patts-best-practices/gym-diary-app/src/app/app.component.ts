import { Component, inject } from '@angular/core';
import { DiaryComponent } from './diary/diary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoadService } from './loading-overlay/load.service';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadService = inject(LoadService);
}
