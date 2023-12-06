import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {SharedContentService} from "../../../services/shared/user-Pages.Service/shared-content";
import {SharedFooterService} from "../../../services/shared/user-Pages.Service/shared-footer";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent implements OnInit{
  @ViewChild('sharedContent', { static: true }) sharedContent!: ElementRef;
  @ViewChild('sharedFooter', { static: true }) sharedFooter!: ElementRef;
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  constructor(
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    )
  {}

  ngOnInit(): void {
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
    this.slides[0] = {
      src: '/assets/images/donut.png',
    };
    this.slides[1] = {
      src: '/assets/images/intro.jpg',
    }
    this.slides[2] = {
      src: '/assets/images/take-away.png',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }





}
