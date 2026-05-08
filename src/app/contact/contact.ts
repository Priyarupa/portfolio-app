import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-contact',
  imports: [CardModule,ButtonModule,DividerModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {

openmail()
{
  const link = document.createElement('a');
   link.href = 'mailto:you@email.com';
   link.click();

}

}
