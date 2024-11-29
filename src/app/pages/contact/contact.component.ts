import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { GradientButtonComponent } from "../../components/gradient-button/gradient-button.component";
import { SnackbarService } from '../../services/snackbar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'contact-page',
    standalone: true,
    imports: [NgOptimizedImage, ReactiveFormsModule, FormFieldComponent, GradientButtonComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    protected sendingMessage: boolean = false;
    protected validForm: boolean = false;

    protected form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        message: new FormControl('', [Validators.required, Validators.maxLength(2000)])
    });

    constructor(private snackbarService: SnackbarService) {
        this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
            this.validForm = this.form.valid;
        });
    }

    sendMessage() {
        if (!this.validForm) {
            return this.snackbarService.show('Fill in all mandatory fields.', { type: 'error' });
        }

        this.form.disable();
        this.sendingMessage = true;

        // Simulate the message sending
        setTimeout(() => {
            this.form.reset();
            this.form.enable();
            this.sendingMessage = false;

            this.snackbarService.show('Message sent successfully!');
        }, 3000);
    }
}
