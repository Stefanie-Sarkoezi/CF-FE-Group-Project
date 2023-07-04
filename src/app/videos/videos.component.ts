import { Component } from '@angular/core';
import { Video } from '../models/video';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  constructor(private readonly videosService: VideosService) {}
  videos: Video[] = [];

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }
}
