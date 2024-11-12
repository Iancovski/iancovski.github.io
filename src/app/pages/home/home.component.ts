import { Component } from '@angular/core';
import { GradientButtonComponent } from "../../components/gradient-button/gradient-button.component";

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [GradientButtonComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    scrollToContact() {
        const element = document.getElementById('contact');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
