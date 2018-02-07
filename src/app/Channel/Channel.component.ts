import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.css']
})
export class ChannelComponent {
  constructor(private route: ActivatedRoute) {
  };
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
      var channel = this.channelList[this.index];
      this.description = channel.description;
      this.videoLink = channel.link;
      this.name = channel.name;
      console.log(this.videoLink);
      var that = this;
      // fixes video reload issue
      setTimeout(function(){
        document.getElementById('player').src = that.videoLink[0];
      }, 10);
    });

  }
  channelList = [
  {
    name: 'Sports Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to sporting events; athletic training workouts and disciplines; player profiles and interviews; special sporting event attractions; fan-based contests; and various live sports broadcasts for your enjoyment and viewing pleasure. You’ll be able to see everything from pro sports highlights, youth sports, sporting news and one-of-a-  kind history making elements of the sporting world! And, home of the: “I FEEL THE NEED FOR SPEED” – Invitational Sprinters Championship, held during the month of May each year! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Sports/1.mp4",
      "./assets/videos/Sports/2.mp4",
      "./assets/videos/Sports/3.mp4"
    ]
  },
  {
    name: 'Food Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to featured restaurants, where you will receive recommendations on where to find and experience exceptional fine-dining and amazing customer service experiences. Here, great recipes await you! Meet and learn from top chefs from around the world! We’ll also be showcasing unique mouth-watering recipes from some of our amazingly creative “RiverEagle.tv” viewers each month as well. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Food/1.mp4",
      "./assets/videos/Food/2.mp4",
      "./assets/videos/Food/3.mp4"
    ]
  },
  {
    name: 'Fashion Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to fashion from around the world. See the latest styles and trends. Become aware of what’s hot and what’s not! See different cultural fashions, along with the people who create, influence and design the best in fashion today! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Fashion/1.mp4",
      "./assets/videos/Fashion/2.mp4",
      "./assets/videos/Fashion/3.mp4"
    ]
  },
  {
    name: 'Travel Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to trending eye-catching, destinations. What makes a destination special? How’s this for a start, being able to get access to some of the best deals on the planet to visit your very favorite port-of-call locations! We’ll also be highlighting some of the most exciting times of the year to visit your favorite “must-see” locations. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Travel/1.mp4",
      "./assets/videos/Travel/2.mp4",
      "./assets/videos/Travel/3.mp4"
    ]
  },
  {
    name: 'Romance Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to relationship longevity, true love, real life challenges, and healthy disciplines that will show you how to become the very best version of yourself today. Experience being your highest and best self, with a mindful-consciousness and contentment! Find out how to avoid future relationship pain, while evolving to become a smarter,  wiser, stronger loving mate and partner! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Romance/1.mp4",
      "./assets/videos/Romance/2.mp4",
      "./assets/videos/Romance/3.mp4"
    ]
  },
  {
    name: 'Comedy Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to laughter, and the people who make you do it best! How important, in your opinion, is it to laugh from day to day in your life? We recommend that you get your daily dose of joy, fun, special comedy promotions and events, as well as your daily laughter, right here! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Comedy/1.mp4",
      "./assets/videos/Comedy/2.mp4",
      "./assets/videos/Comedy/3.mp4"
    ]
  },
  {
    name: 'ABA Los Angeles Smooth Basketball Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to the “RiverEagle.tv” professional basketball team; ABA “Los Angeles Smooth”! Here, you will also see their games played “live”! Also watch, insightful and informative segments on our coaches and players, and our one-of-a-kind dance team; the amazing “L.A. Smooth Dance Team”! See individual profiles and stories of the dance team members, watch training sessions, preparation of dance routines, with interviews of the basketball players and dancers! Also,  you’ll find video and profiles of our youth basketball program, and our NBA jr. affiliation, as it pertains to our “L.A. Smooth” youth summer camps, tournaments and special events. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/ABA Los Angeles Smooth Basketball/1.mp4",
      "./assets/videos/ABA Los Angeles Smooth Basketball/2.mp4",
      "./assets/videos/ABA Los Angeles Smooth Basketball/3.mp4"
    ]
  },
  {
    name: 'Health & Wellness Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to our encouragement of you living a very vital, well-balanced, energetic and healthy life, on a daily basis! See shows that will guide, inform and challenge you to become your healthy best self, everyday of your life! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Health & Wellness/1.mp4",
      "./assets/videos/Health & Wellness/2.mp4",
      "./assets/videos/Health & Wellness/3.mp4"
    ]
  },
  {
    name: 'Talk Show Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to our signature talk shows that will provide you the viewer, with insightful news and trends, and knowledge that will highlight the lifestyles of our unique and diversified viewers! You, our very vital, intelligent and well-informed viewing audience. Here you will find topics that will be engaging and intriguing to audiences from 24, to 74 years of age! Stay tuned, when we go “live” with our “first”, originally “scripted content” show, on April 1st, 2018! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Talk Show/1.mp4",
      "./assets/videos/Talk Show/2.mp4",
      "./assets/videos/Talk Show/3.mp4"
    ]
  },
  {
    name: 'News Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to today’s news-makers, game-changers, innovators, content creators, world-leaders, and digital media entertainment. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      // not a video
    ]
  },
  {
    name: 'Entrepreneurial Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to those business game-changers who are willing to take the financial risks in the hope of accomplishing their hearts’ purpose, vision, goals, dreams, and a profit, while at the same time, providing advice, insight, profiles and guidance for established, and aspiring entrepreneurs world-wide! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Entrepreneurial/1.mp4",
      "./assets/videos/Entrepreneurial/2.mp4",
      "./assets/videos/Entrepreneurial/3.mp4"
    ]
  },
  {
    name: 'Pay-Per-View Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to our special events that command a global appeal to our audiences located around the world. Get your ticket early for our annual signature sporting event: “I FEEL THE NEED FOR SPEED”; Invitational Sprinters Championship! It’s our annual RiverEagle.tv world-  class track event, held each year during the month of May. It will take place in Los Angeles, California in 2018; New York, NY in 2019; and London, England in 2020! You won’t want to miss it! Stay tuned for much more exciting new “content” to be added soon!",
    link: [

    ]
  },
  {
    name: 'Kid’s Korner Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to our youth audience and their items of interest. Items like imagination, dreams, recreation, personality, including creative new design ideas for your child to create a living space that serves both as their bedroom, but also functions as a young persons’ own unique refuge and comfort space! Join us for the fun and intrigue! Stay tuned for much more exciting new “content” to be added soon!" ,
    link: [
      "./assets/videos/Kid’s Korner/1.mp4",
      "./assets/videos/Kid’s Korner/2.mp4",
      "./assets/videos/Kid’s Korner/3.mp4",
    ]
  },
  {
    name: 'Senior’s Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to people of a certain age of wisdom, experience, understanding and grace. Here, we’ll focus on topics like, senior living, wisdom, understanding, senior shopping, knowledge,  retirement, and aging in style. Our content will provide ways to help seniors avoid isolation, and to encourage them to maintain their social lives joyfully, as they age. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Senior’s/1.mp4",
      "./assets/videos/Senior’s/2.mp4",
      "./assets/videos/Senior’s/3.mp4"
    ]
  },
  {
    name: 'Enlightenment Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to enlightenment, which is awareness or education that brings change, insights, influence, inspiration and challenges, to name just a few topic items. Here, you will hear from the people and groups that represent some of the leading voices of this amazingly engaging topic. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Enlightenment/1.mp4",
      "./assets/videos/Enlightenment/2.mp4",
      "./assets/videos/Enlightenment/3.mp4"
    ]
  },{
    name: 'Business Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to planning, organizing, directing, controlling,  coordinating, marketing, accounting, team-building, sales, work ethic,  training, coaching, critical thinking, strategic vision and fundraising. Whether you want to build your own company or help a non-profit organization to succeed, this channel is for you! Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "https://www.youtube.com/watch?v=Ga3maNZ0x0w"
    ]
  },
  {
    name: 'Jazz Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of premium content relating to this epic jazz destination. Our goal here, is to help promote the art of jazz, its’ musicians, the culture of writers,  producers and arrangers, supper clubs, jazz fans, and of course, to air our signature annual award show event: “ALL THINGS JAZZ HONORS”, held at the Waldrof-Astoria Beverly Hills Hotel, this takes place on the first Saturday of each November, starting in 2018. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Jazz/1.mp4"
    ]
  },
  {
    name: 'Financial Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to investment strategy, retirement planning,  quality of living disciplines and structural thinking, risk management skills training, and much, much more! In finance, an investment strategy is a set of rules, behaviors or procedures, designed to guide an investor’s selection of an investment portfolio. Individuals have different profit objectives, and their individual skills make different tactics & strategies appropriate for different investors, depending on their specific goals. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Financial/1.mp4",
      "./assets/videos/Financial/2.mp4",
      "./assets/videos/Financial/3.mp4"
    ]
  },{
    name: 'Movie Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to some of our personal favorites! With genres ranging from drama, action-adventure, comedy, thriller, suspense and more! Stay tuned for much more exciting new “content” to be added soon!",
    link: [

    ]
  },
  {
    name: 'Examples of Excellence Foundation Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to the philanthropic endeavors of our flagship foundation, the “Examples of Excellence Foundation”, founded by the Chairman and President, of River Eagle Broadcasting Network, Dr. G.E. Jackson. Our foundation exists to facilitate our desire to support, inspire,  challenge, and promote the spirit of giving, both by ourselves as a company, and to highlight the kindness of other kind-hearted givers from around the world. Cheerful givers, who also believe in the spirit of our mission, to give to worthy charities and non-profit organizations around the nation, and the world. Here you’ll find content of various fundraisers and special events that illustrate these kind of activities that are taking place all year long. Stay tuned for much more exciting new “content” to be added soon!",
    link: [
      "./assets/videos/Examples of Excellence Foundation/1.mp4"
    ]
  },{
    name: 'Java Love International Channel',
    description: "Welcome to RiverEagle.tv! On this channel you will enjoy the best of our premium content relating to an amazing relationship marketing company. Here, become the very best version of yourself today! Java Love International, is a relationship marketing company that offers our brand partners and product customers “four” very appreciable benefits! Our product line directly benefits the mind, heart, body and finances! Java Love International has developed a simple and well-structured system for our team members. This is a truly unique opportunity, which will allow you to put in part-time hours each week, around less than 10 hours per week, and make the equivalent of full-time pay! See it for yourself! Start your informational first step right here now, by calling and listening to this very brief two minute overview, today: (641) 715-  3900 ext 435875. One, of our very friendly brand partners will be more than happy to follow up with you, and answer any additional question that you may have. Give us a call today, and tell us what you think about our “four” amazing and unique product benefits! Are you in? We certainly hope that you are! Take advantage of this incredible, and unique opportunity, to transform your life, and the life of your wonderful family, and the rest of your valued loved ones! Call today, experience this for yourself! You won’t want to miss it! Cheers!",
    link: [
      "./assets/videos/Java Love International/1.mp4"
    ]
  }
  ];
}
