import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var channelList = require('./ChannelDataStore');
@Component({
  selector: 'channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.css']
})
export class ChannelComponent {
  index: number;
  description: string;
  name: string;
  videoLink: any;


  btnClick = function(i){
    document.getElementById('player').src = this.videoLink[i];
  };
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.index = +params['index']; // (+) converts string 'id' to a number
      console.log(this.index);
      // In a real app: dispatch action to load the details here.
      var channel = channelList.getChannelList()[this.index];
      this.description = channel.description;
      this.videoLink = channel.link;
      this.name = channel.name;
      console.log(this.videoLink);
      var that = this;
      // fixes video reload issue
      setTimeout(function(){
        document.getElementById('player').src = that.videoLink[0];
      }, 1);
    });

  }
  constructor(private route: ActivatedRoute) {

  };
}
