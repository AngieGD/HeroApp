import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './share/error/error.component';

const routes:Routes = [
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    //component: ErrorComponent
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
