import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CardModule,ButtonModule,DividerModule,FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  enteredsubject:string='';
  enteredname:string='';
  enteredemail:string='';
  enteredmessage:string='';

openmail()
{
  const subject=encodeURIComponent(this.enteredsubject);
  const name=encodeURIComponent(this.enteredname);
  const email=encodeURIComponent(this.enteredemail);
  const message=encodeURIComponent(this.enteredmessage);
  const link = document.createElement('a');
   link.href = 'mailto:priyanityasri002@gmail.com'+'?cc='+email+'&subject='+subject+'&body='+'hello%20'+name+'%20'+message;
   link.click();

}

}
