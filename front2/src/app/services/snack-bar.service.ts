import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar) {}

  // this function will open up snackbar on top right position with custom background color (defined in css)
  openSnackBar(message: string, action: string, className: string) {

    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: [className],
    });
  }
}
