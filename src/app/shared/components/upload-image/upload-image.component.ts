import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Input() upload: string = '';
  @Output() outUpload = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeUpload(e) {
    this.upload = e.target.files.item(0).name
    this.outUpload.emit(e)
  }

}
