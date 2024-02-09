import { Component } from '@angular/core';
import { OurServicesService } from '../Services/our-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
constructor(private ourServices:OurServicesService){}
service=this.ourServices.services

handlePhoneNumberClick (){
  window.location.href = 'tel:50313616';
}
}
