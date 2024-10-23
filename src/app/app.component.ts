import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SeparatorComponent } from "./components/separator/separator.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MainComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SeparatorComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'landing-page';
}
