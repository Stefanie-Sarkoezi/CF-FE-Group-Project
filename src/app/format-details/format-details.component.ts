import { Component, OnInit } from '@angular/core';
import { Iformats } from '../Iformats';
import { ActivatedRoute, Params } from '@angular/router';
import { formats } from '../formats';

@Component({
  selector: 'app-format-details',
  templateUrl: './format-details.component.html',
  styleUrls: ['./format-details.component.scss']
})
export class FormatDetailsComponent implements OnInit {
  format: Iformats = {} as Iformats;
  index: number = 0;

  constructor(private route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
      this.format = formats[this.index];
      console.log(this.format);
    });
  }
}
