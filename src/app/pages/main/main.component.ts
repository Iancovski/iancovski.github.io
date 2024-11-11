import { Component } from '@angular/core';
import { GradientButtonComponent } from "../../components/gradient-button/gradient-button.component";

@Component({
    selector: 'main-page',
    standalone: true,
    imports: [GradientButtonComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    scrollToContact() {
        const element = document.getElementById('contact');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
