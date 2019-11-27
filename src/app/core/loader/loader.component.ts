import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService ) { }
  isLoading: boolean;

  ngOnInit() {
    this.loaderService.loaderState.subscribe((status: {show: boolean}) => {
      this.isLoading = status.show;
    });
  }

}