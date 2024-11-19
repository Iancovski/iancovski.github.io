import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { GradientButtonComponent } from "../../components/gradient-button/gradient-button.component";

@Component({
    selector: 'contact-page',
    standalone: true,
    imports: [NgOptimizedImage, ReactiveFormsModule, FormFieldComponent, GradientButtonComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required)
    });

    sendMessage() {
    }
}
