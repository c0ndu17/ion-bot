import {Component, ViewChild, enableProdMode} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController} from 'ionic-angular';

/**
 *  Native Plugins
 */
import {StatusBar} from 'ionic-native';

/**
 *  Redux
 */
import {provider, NgRedux} from 'ng2-redux';
import {Observable} from 'rxjs';
import store from './stores/store';

/*
 * Actions
 */
import {userActions} from './actions/userActions';


/*
 *  Pages
 */
import {HomePage} from "./pages/home/HomePage";

@Component({
  templateUrl: 'build/pages/app.html',
})
export class MyApp {
  @ViewChild('myNavRoot') nav: NavController;

  private rootPage: any = HomePage;

  constructor(private platform: Platform, private menu: MenuController, private ngRedux: NgRedux<any>) {

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  /*
   * init func
   */
  ngOnInit() {
  }


}

ionicBootstrap(MyApp, [provider(store)], {
  backButtonText : '',
})
