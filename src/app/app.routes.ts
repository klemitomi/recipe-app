import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { RecipelistComponent } from './feature/recipe/recipelist/recipelist.component';
import { RecipeformComponent } from './feature/recipe/recipeform/recipeform.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RecipedetailComponent } from './feature/recipe/recipedetail/recipedetail.component';
import { MyrecipesComponent } from './feature/recipe/myrecipes/myrecipes.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'recipes', component: RecipelistComponent }, // 'recipies' -> 'recipes'
      { path: 'recipes/my', component: MyrecipesComponent },
      { path: 'recipes/add', component: RecipeformComponent }, // 'recipie' -> 'recipes'
      { path: 'recipes/detail/:id', component: RecipedetailComponent }, // hozzáadtam :id paramétert
      { path: '', redirectTo: 'recipes', pathMatch: 'full' } // eltávolítottam a /-t a elejéről
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // itt is eltávolítottam a /-t
  { path: '**', redirectTo: 'recipes' } // 404-es útvonal hozzáadva
];