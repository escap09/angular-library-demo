import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lib';
  libAuthor: string;

  constructor(private libService: MyLibService) {
  }

  ngOnInit() {
    this.libService.getDemoData().subscribe(data => this.libAuthor = data);
  }
}
