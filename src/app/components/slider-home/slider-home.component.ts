import { Component, OnInit,Inject } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';

declare var $: any;

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }




	ngOnInit(): void {
  this.getAllTixs();
   		//this.filter();
  		//$.getScript('assets/js/collage.js');
 	//	$.getScript('assets/js/custom.js');
		//this._ps.imagesG=[];
		//this.product=[]	;	
  	}

    getAllTixs(){
      this.dataApi.getAllTixs()
      .subscribe((tixs) => console.log(tixs));
    }


}
