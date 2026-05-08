import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { FieldsetModule } from 'primeng/fieldset';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
  selector: 'app-resume',
  imports: [Timeline,CardModule,ProgressBarModule,FieldsetModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  events: EventItem[];
  element:EventItem[];
  // education = [
  //   {
  //     title: 'Dhanekula Institute Of Engineering And Technology',
  //     year: '2019 — 2023',
  //     grade: 'Grade: A(First class with 7.73)'
  //   },
  //   {
  //     title: 'Narayana Junior College',
  //     year: '2017 — 2019',
  //     grade: 'CGPA-9.15'
  //   },
  //   {
  //     title: 'Dr.K.K.R\'S Gowtham Concept School',
  //     year: '2016 — 2017',
  //     grade: 'GPA: 9.7'
  //   }
  // ];
   constructor() {
        this.events = [
                    { status: 'Dhanekula Institute of Engineering and Technology', date: '2019 — 2023(Grade:10)', icon: 'pi-graduation-cap', color:'#ffdb70' },
                    { status: 'Aditya Junior College', date: '2017-2019(Grade:10)', icon: 'pi-graduation-cap', color:'#ffdb70'},
                    { status: 'Vidhya Nidhi School', date: '2015-2017(Grade:10)', icon: 'pi-graduation-cap',color:'#ffdb70'},
                ];

        this.element=[
                   { status: 'Tech Mahindra', date: '2019 — 2023(Grade:10)', icon: 'pi-graduation-cap', color:'#ffdb70' },
                    { status: 'Tech Mahindra', date: '2017-2019(Grade:10)', icon: 'pi-graduation-cap', color:'#ffdb70'},
                ];
          
        
    }
}
