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

  constructor(
    private sharedContentService: SharedContentService,
    private sharedFooterService: SharedFooterService,
    )
  {}

  ngOnInit(): void {
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
  }



}
