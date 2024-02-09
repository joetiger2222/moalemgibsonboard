import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  constructor() { }

   services=[
    {name:'بارتشن',description:'نقوم بعمل اجود انواع البارتشن'},
    {name:'جبسن بورد',description:'نقوم بعمل اجود انواع الجبسن بورد'},
    {name:'  اسمنت بورد',description:' نقوم بعمل اجود انواع اسمنت بورد'},
    {name:'بديل خشب',description:'نقوم بعمل اجود انواع بديل خشب'},
    {name:'بديل رخام',description:'نقوم بعمل اجود انواع بديل الرخام'},
    {name:'سقف امريكي',description:'نقوم بعمل اجود انواع سقف امريكي'},
    {name:'بلاطات 60*60',description:'نقوم بعمل اجود انواع بلاطات 60*60'},
    {name:'صبغ ايطالي',description:'نقوم بعمل اجود انواع صبغ ايطالي'},
    {name:'مساح',description:'لدينا فريق من اجود  المساحين'},
    
  ]

}
