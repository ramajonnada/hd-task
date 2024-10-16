import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'form', component: MultiStepFormComponent },
	{ path: 'dash-board', component: DashBoardComponent }
];
