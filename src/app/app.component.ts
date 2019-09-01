import { Component,OnInit } from '@angular/core';

//import { InformacionService } from "./services/informacion.service";
import { TixsService } from "./services/tixs.service";
import { ProductInfoService } from "./services/product-info.service";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor (public _ps:TixsService, public _pi:ProductInfoService,private spinner: NgxSpinnerService){}

 ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }



}
