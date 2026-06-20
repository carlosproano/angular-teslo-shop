import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbar } from '@products/components/front-navbar/front-navbar';
// import { FrontNavbar } from '../../../products/components/front-navbar/front-navbar';

@Component({
  selector: 'app-store-front-layout',
  standalone: true,
  imports: [RouterOutlet, FrontNavbar],
  templateUrl: './store-front-layout.html',
})
export class StoreFrontLayout {}
