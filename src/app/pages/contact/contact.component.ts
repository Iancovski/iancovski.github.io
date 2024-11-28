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
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
    });

    constructor(private snackbarService: SnackbarService) {
        this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
            this.validForm = this.form.valid;
        });
    }

    sendMessage() {
        if (!this.validForm) return;

        this.sendingMessage = true;

        // Simulate the message sending
        setTimeout(() => {
            this.form.reset();
            this.sendingMessage = false;
            this.snackbarService.show('Message sent successfully!');
        }, 3000);
    }
}
