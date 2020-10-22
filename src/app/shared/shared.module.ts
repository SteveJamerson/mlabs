import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { EmojiPipe } from './pipes/emoji.pipe';
import { EmojiComponent } from './components/emoji/emoji.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PostsComponent } from './components/posts/posts.component';
import { SocialMidiaComponent } from './components/social-midia/social-midia.component';
import { Routes, RouterModule } from '@angular/router';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    EmojiPipe,
    EmojiComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    PostsComponent,
    SocialMidiaComponent,
    UploadImageComponent,
    TableComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    EmojiPipe,
    EmojiComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    PostsComponent,
    SocialMidiaComponent,
    UploadImageComponent,
    TableComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
