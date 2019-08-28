import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	MyTixsComponent,
	LoginComponent,
	PartnersComponent,
	AffiliatesComponent,
	PartnerDetailComponent,
	AffiliateDetailComponent,
	TixDetailComponent

	}from "./components/index.paginas";

const app_routes: Routes = [
	{path:'',component:SliderHomeComponent},
	{path:'mytixs',component:MyTixsComponent},
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent},		
	{path:'partners',component:PartnersComponent},
	{path:'partner-detail/:id',component:PartnerDetailComponent},
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

