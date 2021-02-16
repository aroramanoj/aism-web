import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  game = game;
  constructor(private router: Router) { this.router = router;}

  ngOnInit(): void {
  }

  broadcast = (): void =>{
    this.router.navigateByUrl('/product-services');

  }

  watch = function(){
    alert('Navigate to VOD/Live Broadcast');
  }

}
