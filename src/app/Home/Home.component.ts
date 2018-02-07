import { Component } from '@angular/core';
@Component({
  selector: 'home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {
  sponserImg: any;
  constructor(){
  };
  // switchVideo = function(){
  //   var myvid = document.getElementById("video2");
  //   console.log(myvid);
  //   var myvids = [
  //     "../../assets/videos/Delta/1.mp4",
  //     "../../assets/videos/HomeVid/sports.mp4",
  //     "../../assets/videos/HomeVid/basketball.mp4"
  //   ];
  //   var activeVideo = 0;
  //
  //   var that = this;
  //   var videoLength = 7000;
  //   if(activeVideo==0){
  //     setInterval(function(){
  //       // update the active video index
  //       that.activeVideo = (++activeVideo) % myvids.length;
  //
  //       // update the video source and play
  //       myvid.src = myvids[activeVideo];
  //       myvid.play();
  //     }, 7000);
  //   }
  //   else {
  //     // update the active video index
  //     that.activeVideo = (++activeVideo) % myvids.length;
  //
  //     // update the video source and play
  //     myvid.src = myvids[activeVideo];
  //     myvid.play();
  //   }
  // };
  ngOnInit(){
    // fixes video reload issue
    this.sponserImg = [
      "Coca Cola Logo.jpg",
      "Cadillac Logo.png",
      "ABA L.A. Smooth Logo - PNG.png",
      "Callaway Golf Logo.png",
      "City of Carson Logo.jpg",
      "City of Inglewood Logo.JPG",
      "Delta Airlines Logo.png",
      "Google Logo.jpg",
      "Hyatt Hotels Logo.png",
      "Jr NBA Logo.jpg",
      "LogoColorTextBelow.jpeg",
      "Patron Silver Logo.jpg",
      "PayPal Logo.png",
      "Powerade Logo.jpg",
      "Puma Logo.jpg",
      "Radisson Hotel Logo.png",
      "Streaming Media Hosting Logo.png",
      "UPS Logo.jpeg",
      "USATF Logo Pic.png",
      "USC Logo.jpg",
      "Verizon Wireless Logo.png",
      "Waldorf Astoria Logo.jpg",
      "Wells Fargo Bank Logo.jpg"
    ];
    for(var i = 0; i<this.sponserImg.length; i++)
    {
      this.sponserImg[i] ="../../assets/img/Sponsors/"+this.sponserImg[i];
    }
  }
}
