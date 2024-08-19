import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  status: string = '';

  constructor() {
    // Initialize EmailJS with your User ID
    emailjs.init('aYfVqq0j599E6E3p9'); // Replace with your actual User ID
  }

  sendEmail(contactForm : NgForm) {
    const templateParams = {
      from_name: (document.getElementById('name') as HTMLInputElement).value,
      from_email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value
    };

    emailjs.send('service_qqpazec', 'template_necaza7', templateParams)
      .then((response: EmailJSResponseStatus) => {
        this.status = 'Thank you! Your message has been sent.';
        contactForm.reset(); // Reset the form after successful submission
      }, (error) => {
        this.status = 'Sorry, something went wrong. Please try again.';
        console.error("EmailJS Error:", error);
      });
  }
}
