import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  template: `
    <div class="getting started">
      <div class="title"><h1>let's get started!</h1></div>
      <div class="sub-title"><h3>im so excited for you to start your journey with me</h3></div>
    </div>
  `,
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  constructor() {}

  /**
   * FORM
   * The basics--
   * first name, last name, email, phone number,
   * The fun stuff--
   * class type (dropdown), on class type selection, provide a link to the page
   * What level would you consider yourself?
   *    a. never done yoga!
   *    b. beginner, just starting my journey
   *    c. intermediate, ive been practicing for 1 - 2 years / i know how to move my body
   *    d. advanced, ive been practicing yoga for more than 2 years / i can do some pretty difficult poses
   * What would you like to work on for your first class? a. hips, b. shoulders (provide examples, pics)
   * The serious stuff-- (provide reason as to why this is necessary to know)
   * Do you have any physical insuries? (radio button) if yes, provide details in textbox
   * Are you pregnant? a. no, im a dude b. nope, TOM visited this month c. yes! im in my "x" trimester :)
   * How are you doing today? (textbox)
   */
  ngOnInit() {}
}
