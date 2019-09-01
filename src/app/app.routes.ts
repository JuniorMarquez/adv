import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	MyTixsComponent,
	LoginComponent,
	PartnersComponent,
	AffiliatesComponent,
	PartnerDetailComponent,
	AffiliateDetailComponent,
	TixDetailComponent,
	SignupComponent,
	ProfileComponent

	}from "./components/index.paginas";
	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:SliderHomeComponent},
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard] },
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent,  canActivate:[AuthGuard] },		
	{path:'partners',component:PartnersComponent , canActivate:[AuthGuard] },
	{path:'profile',component:ProfileComponent , canActivate:[AuthGuard] },
	{path:'partner-detail/:id',component:PartnerDetailComponent, canActivate:[AuthGuard] },
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent, canActivate:[AuthGuard] },
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

