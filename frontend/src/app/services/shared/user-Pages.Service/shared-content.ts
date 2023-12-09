import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SharedContentService {
    getSharedContent(): string {
        return `
      <title>FlavorFrame</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossorigin="anonymous" />
     <!--<link href="/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/style.css" rel="stylesheet" type="text/css"/>
      <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css"/>-->

    `;
    }
}
