import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperEvents, SwiperOptions } from 'swiper/types';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-carousel',
  imports: [ProductImagePipe],
  templateUrl: './product-carousel.html',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `
})
export class ProductCarousel implements AfterViewInit, OnChanges {

  images = input.required<string[]>();
  swiperDiv = viewChild.required<ElementRef>('swiperDiv');

  swiper: Swiper | undefined = undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'].firstChange) {
      return;
    }
    // console.log(changes);
    if ( !this.swiper ) return;
    this.swiper.destroy(true, true)

    const paginationEl: HTMLDivElement =
    this.swiperDiv().nativeElement?.querySelector('.swiper-pagination');
    console.log(paginationEl);

    paginationEl.innerHTML ='';

setTimeout(() => {
  this.swiperinInit();

},100);
  }


  ngAfterViewInit(): void {
    this.swiperinInit();
  }

  swiperinInit() {
    const element = this.swiperDiv().nativeElement;
    if (!element) return;

    const swiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      modules: [
        Navigation,
        Pagination,
      ],
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}

function pagination(options: { params: SwiperOptions; swiper: Swiper; extendParams: (obj: { [name: string]: any; }) => void; on: <E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]) => void; once: <E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]) => void; off: { <E extends keyof SwiperEvents>(event: E, handler: SwiperEvents[E]): void; <E extends keyof SwiperEvents>(event: E): void; }; emit: <E extends keyof SwiperEvents>(event: E, ...args: any[]) => void; }): void {
    throw new Error('Function not implemented.');
  }

