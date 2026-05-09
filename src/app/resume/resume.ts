import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { ProgressBarModule } from 'primeng/progressbar';
import { FieldsetModule } from 'primeng/fieldset';

interface EventItem {
    status?: string;
    date?: string;
    role?:string;
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

        this.element=[
                   { status: 'Software Engineer', date: '2024 — present',role:'At my current role, I work as a .NET Full Stack Developer building scalable enterprise and government service applications using ASP.NET Core, Angular, and SQL Server. I develop secure RESTful APIs, integrate frontend and backend systems, and optimize database performance to deliver reliable and efficient user experiences. Along with feature development, I actively contribute to Agile delivery, production support, API testing, and CI/CD deployment processes.', icon: 'pi-graduation-cap', color:'#ffdb70' },
                   { status: 'Associate Software Engineer', date: '2023-2024',role:'Completed professional training in .NET Full Stack development with hands-on experience in ASP.NET Core, MVC, Web API, and SQL Server. Worked on developing REST APIs, SQL queries, and backend functionalities for enterprise applications while collaborating in Agile environments using Git version control. Also built an Online Movie Management System as part of practical project-based learning.', icon: 'pi-graduation-cap', color:'#ffdb70'},
                ];
          
        
    }
}
