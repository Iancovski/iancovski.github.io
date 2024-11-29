import { Injectable } from '@angular/core';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private snackbarComponent!: SnackbarComponent;

    setComponent(snackbar: SnackbarComponent) {
        this.snackbarComponent = snackbar;
    }

    show(message: string, options?: { type?: 'success' | 'error', duration?: number }) {
        this.snackbarComponent.open(message, options);
    }
}
