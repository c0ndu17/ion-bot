import {Component, OnInit, NgZone} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {NavController} from 'ionic-angular';
const _ = require('lodash');

/*
 * Actions
 */
import {userActions} from '../../actions/userActions';

/**
 *  Redux
 */
import {Observable} from 'rxjs';
import {NgRedux} from 'ng2-redux';

@Component({
  templateUrl : 'build/pages/home/home.html',
  pipes : [
    AsyncPipe
  ]
})
export class HomePage {
  constructor(private nav: NavController, private ngRedux: NgRedux<any>, private zone: NgZone) { }
   
  ngOnInit(){
  }

}
