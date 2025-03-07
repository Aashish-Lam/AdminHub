import { Component } from '@angular/core';
import { RouterOutlet ,Router, NavigationEnd} from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
