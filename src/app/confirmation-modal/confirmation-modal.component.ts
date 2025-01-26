import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  template: `
    <div class="modal-overlay" *ngIf="isVisible">
      <div class="modal-container">
        <div class="modal-header">
          <h5>{{ title }}</h5>
          <button class="close-btn" (click)="onCancel()">×</button>
        </div>
        <div class="modal-body">
          <p class="text-danger">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <strong>Warning: {{ message }}</strong>
          </p>
          <p>{{ details }}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
          <button class="btn btn-danger" (click)="onConfirm()">
            {{ confirmButtonText || 'Yes, Delete' }}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  @Input() title: string = 'Confirm Action';
  @Input() message: string = 'Are you sure you want to proceed?';
  @Input() details?: string; // Optional details to display
  @Input() confirmButtonText?: string; // Customizable confirm button text
  @Input() isVisible: boolean = false; // Controls modal visibility

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm(): void {
    this.confirm.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
