import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private serviceName: ServiceService) {
    
  }
  products: any[] = [];

  ngOnInit() {
    this.serviceName.getProduct().subscribe((results: any) => {
      this.products=results
    })

  }
}
