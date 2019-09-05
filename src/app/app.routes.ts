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
	ProfileComponent,
	AddTixComponent,
	ComingComponent,
	AlltixsComponent,
	NewMemberComponent

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
	{path:'alltixs',component:AlltixsComponent},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'tixs/add-tix',component:AddTixComponent, canActivate:[AuthGuard]},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent},	
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

