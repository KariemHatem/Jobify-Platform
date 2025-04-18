import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-button',
  templateUrl: './chatbot-button.component.html',
  styleUrl: './chatbot-button.component.css',
})
export class ChatbotButtonComponent {
  openChat(): void {
    // Open chatbot in new tab or modal
    window.open(
      'https://huggingface.co/spaces/jobify00/Chatbot-using-machine-learning',
      '_self'
    );
  }
}
