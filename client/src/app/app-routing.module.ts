import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedPageComponent } from './pages/saved-page/saved-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'saved', component: SavedPageComponent },
  { path: '', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }