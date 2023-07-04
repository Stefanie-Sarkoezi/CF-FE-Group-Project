import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})
export class ScrollToTopButtonComponent {
  showButton: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.showButton = scrollY > 200; // Zeige den Button, wenn der Benutzer 200 Pixel nach unten gescrollt hat
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolle zur Oberseite des Dokuments mit einer sanften Animation
  }
}