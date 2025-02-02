import { LayoutModule } from "@angular/cdk/layout";
import { AsyncPipe, CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

export const sharedImports = [
  AsyncPipe,
  CommonModule,
  LayoutModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
];

