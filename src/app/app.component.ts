import { Component } from '@angular/core';
import { Adress } from './interface/interfaceAdress';
import { AdressService } from './service/adress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataAdress!: Adress
  adress: string = ''

  constructor(private httpService: AdressService){}

  getAdress(){
    this.httpService.getAdress(this.adress).subscribe((data) => {
      this.dataAdress = data
    })
  }
}
