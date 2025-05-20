import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';
import { RecipelistComponent } from './feature/recipe/recipelist/recipelist.component';
import { RecipeformComponent } from './feature/recipe/recipeform/recipeform.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RecipedetailComponent } from './feature/recipe/recipedetail/recipedetail.component';
import { MyrecipesComponent } from './feature/recipe/myrecipes/myrecipes.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent },
   { path: '',
     component: LayoutComponent,
     children: [
       { path: 'recipies', component: RecipelistComponent },
       { path: 'recipies/my', component: MyrecipesComponent},
       { path: 'recipie/add', component: RecipeformComponent },
       { path: 'recipe/detail', component: RecipedetailComponent },
       { path: '', redirectTo: '/recipies', pathMatch: 'full' }
     ]
    },
   { path: '', redirectTo: '/login', pathMatch: 'full' }
];
