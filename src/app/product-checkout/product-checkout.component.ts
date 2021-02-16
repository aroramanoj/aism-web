import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})
export class ProductCheckoutComponent implements OnInit {

  constructor(private router: Router) { this.router = router;}

  ngOnInit(): void {
  }

  backHome = (): void =>{

    this.router.navigateByUrl('/home');

  }

}
