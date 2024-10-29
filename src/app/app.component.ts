import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SeparatorComponent, NgClass],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'landing-page';

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
