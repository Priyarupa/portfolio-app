import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side-bar/side-bar';
import { NavBar } from './nav-bar/nav-bar';
import { About } from "./about/about";
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, NavBar, About,Resume,Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-app');
}
