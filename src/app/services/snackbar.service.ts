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

    show(message: string, duration: number = 3000) {
        this.snackbarComponent.open(message, duration);
    }
}
