import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { About } from '../about/about';
import { Resume } from '../resume/resume';
import { Contact } from '../contact/contact';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,RouterLink,RouterLinkActive,About,Resume,Contact,TabsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  
}
