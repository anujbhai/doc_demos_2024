import { Component, computed, signal } from "@angular/core";
import { ProfilePhoto } from "./ProfilePhoto/profile-photo";

const first_name = signal('Morgan')

console.log('first name:', first_name())

first_name.set('Jamwant')
first_name.update(name => name.toUpperCase())

first_name.set('Morgan')
const first_name_capitalized = computed(() => first_name().toUpperCase())

console.log('first name capitalized:', first_name_capitalized())

first_name.set('Jamwant')
console.log('first name capitalized:', first_name_capitalized())

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User Profile</h1>
    <profile-photo />
    <p>This is the user profile page.</p>
    <button [disabled]="isValidUserId()">Save changes</button>
    <button (click)="cancelSubscription()">Cancel subscription</button>
  `,
  // templateUrl: `user-profile.html`,
  // styleUrl: `styles.css`,
})
export class UserProfile {
  isValidUserId = signal(false)
  isTrial = signal(false)
  isTrialExpired = signal(false)
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired())

  acrivateTrial() {
    this.isTrial.set(true)
  }

  cancelSubscription() {
    console.log('Clicked cancel subscription')
  }
}

