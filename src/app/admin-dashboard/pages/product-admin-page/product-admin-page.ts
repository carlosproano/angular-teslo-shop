import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductDetails } from "./product-details/product-details";

@Component({
  selector: 'app-product-admin-page',
  // standalone: true,
  imports: [ ProductDetails],
  templateUrl: './product-admin-page.html',
})
export class ProductAdminPage {
  ActivatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  productService = inject(ProductsService)

productId = toSignal(
  this.ActivatedRoute.params.pipe(map((params) => params['id']))
);

ProductsResource = rxResource( {
  params: () => ({ id: this.productId()! }),
  stream: ({ params }) => {
    return this.productService.getProductById(params.id)
  }
})

}
