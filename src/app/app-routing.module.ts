import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'group-classes',
    component: ClassesComponent
  },
  {
    path: 'private-classes',
    component: ClassesComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
