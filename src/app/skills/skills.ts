import { Component } from '@angular/core';
import { CardModule} from 'primeng/card'; 
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-skills',
  imports: [CardModule,ProgressBarModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {}
