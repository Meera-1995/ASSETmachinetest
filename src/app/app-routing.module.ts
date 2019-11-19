import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';



const routes: Routes = [
  //{path:'',pathMatch:'full',redirectTo:'create'},
  
  {path:'',pathMatch:'full',redirectTo:'create'},

  {path:'create',component:AssetAddComponent},
  
  {path:'assets',component:AssetListComponent},
  {path:'edit/:id',component:AssetEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
