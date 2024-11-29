import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'snackbar',
    standalone: true,
    imports: [],
    templateUrl: './snackbar.component.html',
    styleUrl: './snackbar.component.scss',
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0, transform: 'translateY(1rem)' })),
            transition(':enter', [
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(1rem)' }))
            ])
        ])
    ]
})
export class SnackbarComponent {
    protected message: string = '';
    protected isVisible: boolean = false;
    protected type: 'success' | 'error' | undefined = 'success';

    private timeout!: NodeJS.Timeout;

    open(message: string, options?: { type?: 'success' | 'error', duration?: number }) {
        if (this.isVisible) {
            this.close();
        }

        options = {
            type: options?.type || 'success',
            duration: options?.duration || 3000
        }

        this.message = message;
        this.isVisible = true;
        this.type = options.type;
        this.timeout = setTimeout(() => this.close(), options.duration);
    }

    close() {
        clearTimeout(this.timeout);
        this.isVisible = false;
    }
}
