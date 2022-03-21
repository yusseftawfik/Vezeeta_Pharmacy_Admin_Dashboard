import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/medicine/list',
    pathMatch: 'full'
  },
  {
    path: 'medicine/list',
    component: MedicineListComponent,
  },
  {
    path: 'medicine/add',
    component: MedicineAddComponent,
  },
  {
    path: 'medicine/edit/:id',
    component: MedicineEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
