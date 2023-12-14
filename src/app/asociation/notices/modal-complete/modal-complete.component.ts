import { Component, Inject, Injector, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-complete',
  templateUrl: './modal-complete.component.html',
  styleUrls: ['./modal-complete.component.scss']
})
export class ModalCompleteComponent {
  info: any[] = [];
  currentImageIndex: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<ModalCompleteComponent>) {
    this.info = data.info;
    console.log(this.info);
  }

  navigate(direction: string, notice: any) {
    if (direction === 'left') {
      this.currentImageIndex = (this.currentImageIndex - 1 + notice.image.length) % notice.image.length;
    } else if (direction === 'right') {
      this.currentImageIndex = (this.currentImageIndex + 1) % notice.image.length;
    }
  }

  getCurrentImage(notice: any): string {
    return notice.image[this.currentImageIndex];
  }

  closeModal(){
    this.dialogRef.close();
  }

}
