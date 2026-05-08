import { Routes } from '@angular/router';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {
      path:'',
      component:About
    },

    {
        path:'about',
        component:About
    },
    {
        path:'resume',
        component:Resume
    },
    {
        path:'contact',
        component:Contact
    }
];
