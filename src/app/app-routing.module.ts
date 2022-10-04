import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'detalhes-usuario', component: DetalhesUsuarioComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
