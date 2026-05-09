import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-side-bar',
  imports: [CardModule, ButtonModule, ImageModule],
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.scss'],
})
export class SideBar {

  showContact = false; // State for mobile arrow toggle

  toggleContact() {
    this.showContact = !this.showContact;
  }

  downloadPdf() {

    const link = document.createElement('a');

    link.href = 'priya_p.pdf';

    link.download = 'Priya_resume.pdf';

    link.click();
  }

}
