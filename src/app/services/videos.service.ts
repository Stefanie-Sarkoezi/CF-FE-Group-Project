import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({ providedIn: 'root' })
export class VideosService {
  private videos: Video[] = [
    {
      title: 'Video Title',
      description: 'Video Description',
      link: '',
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
