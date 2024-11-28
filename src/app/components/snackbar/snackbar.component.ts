import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'snackbar',
    standalone: true,
    imports: [],
    templateUrl: './snackbar.component.html',
    styleUrl: './snackbar.component.scss',
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0, transform: 'translateX(1rem)' })),
            transition(':enter', [
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(1rem)' }))
            ])
        ])
    ]
})
export class SnackbarComponent {
    @Input() message: string = '';
    isVisible: boolean = false;

    open(message: string, duration: number = 3000) {
        this.message = message;
        this.isVisible = true;
        setTimeout(() => this.close(), duration);
    }

    close() {
        this.isVisible = false;
    }
}
