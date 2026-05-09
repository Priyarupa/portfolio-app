import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
  selector: 'app-education',
  imports: [Timeline,CardModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
events: EventItem[];

constructor() {
        this.events = [
                    { status: 'SRKR Engineering College', date: 'Aug. 2019 – April 2023(Grade:8.7)', icon: 'pi-graduation-cap', color:'#ffdb70' },
                    { status: 'Aditya Junior College', date: 'April 2017 – March 2019(Grade:10.00)', icon: 'pi-graduation-cap', color:'#ffdb70'},
                    { status: 'Vidhya Nidhi School', date: 'April 2016 – March 2017(Grade:9.7)', icon: 'pi-graduation-cap',color:'#ffdb70'},
                ];
      }

}
