import { Component } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { MobileMenuComponent } from "./components/mobile-menu/mobile-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SeparatorComponent, MobileMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'landing-page';
}
