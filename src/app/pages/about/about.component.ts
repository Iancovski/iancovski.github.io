import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'about-page',
    standalone: true,
    imports: [NgClass],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    protected expanded: boolean = false;
}
