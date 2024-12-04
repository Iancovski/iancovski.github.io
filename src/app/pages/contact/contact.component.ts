import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { GradientButtonComponent } from "../../components/gradient-button/gradient-button.component";
import { SnackbarService } from '../../services/snackbar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../../../environments/environment';

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

    async sendMessage() {
        if (!this.validForm) {
            return this.snackbarService.show('Fill in all mandatory fields.', { type: 'error' });
        }

        this.form.disable();
        this.sendingMessage = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...this.form.getRawValue(),
                    access_key: environment.emailAccessKey
                })
            });

            let json = await response.json();

            if (response.status == 200) {
                this.snackbarService.show('Message submitted successfully!');
                this.form.reset();
            } else {
                throw new Error(json.message);
            }
        } catch (error: any) {
            this.snackbarService.show('Something went wrong!\nPlease try again later.', { type: 'error' });
            console.error(error.message)
        } finally {
            this.form.enable();
            this.sendingMessage = false;
        }
    }

    protected open(social: string) {
        const socialUrl: Record<string, string> = {
            'email': 'mailto:iancovski.vinicius@gmail.com',
            'linkedin': 'https://www.linkedin.com/in/iancovski/',
            'fiverr': 'https://www.fiverr.com/iancovski'
        }

        window.open(socialUrl[social], '_blank')?.focus();
    }
}
