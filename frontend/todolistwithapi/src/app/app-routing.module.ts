import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  { path: 'add-task', component: TodoListComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'tos', component: TosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
