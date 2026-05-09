import { Routes } from '@angular/router';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Education } from './education/education';
import { Skills } from './skills/skills';

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
    },
    {
        path:'education',
        component:Education
    },
    {
        path:'skills',
        component:Skills
    }

];
