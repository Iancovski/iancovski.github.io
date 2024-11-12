import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'mobile-menu',
    standalone: true,
    imports: [NgClass],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

        if (this.isMenuOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
    }

    closeMenu() {
        this.isMenuOpen = false;
        document.body.classList.remove('disable-scroll');
    }

    scrollTo(id: string) {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.isMenuOpen = false;
        }
    }
}
