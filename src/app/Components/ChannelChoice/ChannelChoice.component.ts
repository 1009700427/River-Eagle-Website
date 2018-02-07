/**
 * Created by siyuanxu on 2/4/18.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'channel-choice',
  templateUrl: './ChannelChoice.component.html',
  styleUrls: ['./ChannelChoice.component.css']
})
export class ChannelChoiceComponent {
  constructor(private router: Router){

  }
  btnClick= function (i) {
    this.router.navigate(['/channel',i]);
  };

  channelList = [
    {
      name: 'Sports Channel',
      link: "#"
    },
    {
      name: 'Food Channel',
      link: "#"
    },
    {
      name: 'Fashion Channel',
      link: "#"
    },
    {
      name: 'Travel Channel',
      link: "#"
    },
    {
      name: 'Romance Channel',
      link: "#"
    },
    {
      name: 'Comedy Channel',
      link: "#"
    },
    {
      name: 'ABA Los Angeles Smooth Basketball Channel',
      link: "#"
    },
    {
      name: 'Health & Wellness Channel',
      link: "#"
    },
    {
      name: 'Talk Show Channel',
      link: "#"
    },
    {
      name: 'News Channel',
      link: "#"
    },
    {
      name: 'Entrepreneurial Channel',
      link: "#"
    },
    {
      name: 'Pay-Per-View Channel',
      link: "#"
    },
    {
      name: 'Kid’s Korner Channel',
      link: "#"
    },
    {
      name: 'Senior’s Channel',
      link: "#"
    },
    {
      name: 'Enlightenment Channel',
      link: "#"
    },{
      name: 'Business Channel',
      link: "#"
    },
    {
      name: 'Jazz Channel',
      link: "#"
    },
    {
      name: 'Financial Channel',
      link: "#"
    },{
      name: 'Movie Channel',
      link: "#"
    },
    {
      name: 'Examples of Excellence Foundation Channel',
      link: "#"
    },{
      name: 'Java Love International Channel',
      link: "#"
    }
  ];
}
