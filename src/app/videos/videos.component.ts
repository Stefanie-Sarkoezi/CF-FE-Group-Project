import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Video } from '../models/video';
import { VideosService } from '../services/videos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideosComponent {
  constructor(
    private readonly videosService: VideosService,
    private readonly domSanitizer: DomSanitizer
  ) {}
  videos: Video[] = [];

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }

  toSafeVideoLink(video: Video): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(video.link);
  }
}
