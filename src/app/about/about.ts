import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about',
  imports: [DividerModule,CardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
