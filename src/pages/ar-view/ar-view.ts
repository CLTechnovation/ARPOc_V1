///<reference path="../../app/WikitudePlugin.d.ts" />
import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

/*
  Generated class for the ARView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ar-view',
  templateUrl: 'ar-view.html'
})
export class ARView {

  wikitudePlugin: any;
  requiredFeatures = [ "2d_tracking", "geo" ];
  arExperienceUrl = "www/assets/experience/world/property-search/index.html";
  startupConfiguration = {
    "camera_position": "back"
  };

  constructor(public platform: Platform) {
     platform.ready().then(() => {
      this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
      this.wikitudePlugin._sdkKey = "jKuUJoH52FmJsUiA3U8899kmfZs5QIuZAu/XR5RPaamXD47uKLkf9G5qPXJxC/9DNPO33B8qqJ5tX0Q4kDvzbfeSf3rHWDk5Z5YnzGm+SmkqOPGI8DrZ6klk53SsdTRMfpgns6PSf3tWimcX2ch9MuxR1NxzSuu5XDyfSglJ0IhTYWx0ZWRfXwl9RcC1Pax/U7R/wPp+EW0/zyjkFPQK0G+3fd6Anhe+LuMNSJxYUXgqgUiTh9SPEO+JnKZD5e425xfn5W5MmVi7UNZ71anHzFvqJqj0CFP3thBKdSi6jL+ClXMByko852bMc64BYGuTNGKU3MhzpqAUDKjmVZ3X9yq1rWTzJfuK0oW7g7VlyBm097h2HHihHLGwJ7j9VWst47I27o5AxsC8pX5F1RmcAgpo/0EFR24cxfzJKfi16k26YU+N3ScCpGA6yceFCQJNFKBzkzxpyBoowYBAOBy6M+kF5r3kfEv02HcIqVDuq7n8UR1SJeNcDf7f88u5TjsUpPAQZLE1vbuK850ATuz9uowYqDd5kL9iBniWE22OcgRqbi7vy48t7wi6LeLuQkM6KrmmrkgjOPjfLcsmXX1zu9D7gNJv7ck14yMkJeBNe4MIe8N0rciYilxdFelaB5JYvH4ATK5WtXWvIh77c+rMTCjvK1m9heNuLHZYTa9zIfY=";

      this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
    });
  }

  onDeviceSupported = () => {
    console.log('device supported');
    this.launchWorld();
  }

  launchWorld() {
    this.wikitudePlugin.loadARchitectWorld(
      this.onARExperienceLoadedSuccessful,
      this.onARExperienceLoadError,
      this.arExperienceUrl,
      this.requiredFeatures,
      this.startupConfiguration
    );
  }

  onDeviceNotSupported () {
    console.log('device not supported');
  }

  onARExperienceLoadError (err) {
    console.log('error load', err)
  }

  onARExperienceLoadedSuccessful () {
    console.log('good load')
  }

}
