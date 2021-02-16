import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})
export class ProductServicesComponent implements OnInit {

  constructor(private router: Router) { this.router = router;}

  ngOnInit(): void {
  }

  checkOut = (): void =>{
    this.router.navigateByUrl('/checkout');
  }
  goBack = (): void =>{

    this.router.navigateByUrl('/home');

  }

}
