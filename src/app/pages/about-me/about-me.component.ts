import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <div class="about-me">
      <img class="image" src="assets/images/alicia.jpg" />
      <div class="bio">
        <p>
          I am a fun, bubbly girl from <a href="">Hialeah 305</a> who found her
          true-calling in the active, yet calm practice of yoga.
        </p>
        <p>
          At first, yoga to me was about the physical practice, allowing me to
          do more of what I love -- move and eat. But now, it's much more than
          that. It's about getting the mind and body aligned. Even though I
          started practicing yoga in 2017, I feel like my journey has just
          begun.
        </p>
        <p>
          I completed my 200 hour yoga teacher training at Soma Yoga School in
          February 2019 and I'm honored to lead you to achieve your fullest
          potential and your best self.
          <b>My classes are all about YOU.</b> What would you like to work on?
          I'll help you get to where you want to be with fun and active
          postures, inspired by the amazing teachers from the
          <a href="">House of Yoga studio</a>. I teach to get you off your butt,
          off your phone, and into the present moment. I teach to remind you to
          breath and to let you know that everything will be okay. I am a strong
          believer that yoga is for everyone because if you believe you can do
          it, you will do it!
        </p>
        <div class="creds">
          <!--TODO: Create shared google doc links for documents-->
          <button mat-raised-button>Certification</button>
          <button mat-raised-button>Liability Insurance</button>
          <button mat-raised-button>My ultimate goal</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
