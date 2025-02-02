import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailDomainValidator } from './validators/emailDomainValidator';
import { NgIf } from '@angular/common';

const invalidEmailDomains = emailDomainValidator([
  'dctinc.com'
]);

@Component({
  selector: 'app-contact',
  imports: [
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomains]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  handleSubmitForm() {
    console.log('contact form values:', this.contactForm.value);
  }
}
