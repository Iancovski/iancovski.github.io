import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { SeparatorComponent } from "./components/separator/separator.component";
import { MobileMenuComponent } from "./components/mobile-menu/mobile-menu.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { SnackbarService } from './services/snackbar.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SeparatorComponent, MobileMenuComponent, SnackbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Vinícius Iancovski - Full Stack Developer';

    @ViewChild(SnackbarComponent) snackbar!: SnackbarComponent;

    constructor(private snackbarService: SnackbarService) { }

    ngAfterViewInit() {
        this.snackbarService.setComponent(this.snackbar);
    }

    openUrl() {
        window.open("https://icons8.com.br", '_blank')?.focus();
    }
}
