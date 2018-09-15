import {Routes} from '@angular/router'

import {ImcCalculatorComponent} from './imc-calculator/imc-calculator.component'

export const router: Routes = [
  {path:'', redirectTo:'imcCalculator', pathMatch:'full'},
  {path:'imcCalculator', component: ImcCalculatorComponent},
]