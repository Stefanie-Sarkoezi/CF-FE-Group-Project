import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})
export class ScrollToTopButtonComponent implements OnInit {
  showButton: boolean = false;

  ngOnInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const scrollY = window.scrollY;
    this.showButton = scrollY > 200; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
}
