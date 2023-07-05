import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({ providedIn: 'root' })
export class VideosService {
  private videos: Video[] = [
    {
      title:
        'Embrace the Wealth of Possibilities: Embark on an Essential Programming Journey for Success and Impact',
      description: `Join us on this enlightening journey where passion meets purpose, as you explore the world of coding and unlock your full potential. Don't miss this invaluable opportunity to embark on a path towards professional fulfillment and personal growth, while finding deeper meaning in your life through the art of coding.`,
      link: 'https://www.youtube.com/embed/HhvJFxM02GQ',
    },
  ];

  getVideos(): Video[] {
    //shallow copy
    return this.videos.slice();
  }

  addVideos(): void {
    // ...
  }
}
