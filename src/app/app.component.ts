import { Component, Inject, OnInit, Optional } from '@angular/core';
import { LoggerService } from './logger.service';
import { localstorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angulardemo';

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localstorageToken) private localStorage: any
  ) {}

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.localStorage.setItem('name', 'M.M.BAPIN');
  }
}
