import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { AboutMeComponent } from './pages/about-me/about-me.component';
// import { ClassesComponent } from './pages/classes/classes.component';
// import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { FlyerComponent } from './pages/flyer/flyer.component';

// TODO: feature flags

const routes: Routes = [
  {
    path: 'flyer',
    component: FlyerComponent
  },
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'about-me',
  //   component: AboutMeComponent
  // },
  // {
  //   path: 'group-classes',
  //   component: ClassesComponent
  // },
  // {
  //   path: 'private-classes',
  //   component: ClassesComponent
  // },
  // {
  //   path: 'getting-started',
  //   component: GettingStartedComponent
  // },
  {
    path: '**',
    redirectTo: '/flyer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
