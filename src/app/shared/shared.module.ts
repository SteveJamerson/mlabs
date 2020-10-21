import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { EmojiPipe } from '../share/pipes/emoji.pipe';
import { EmojiComponent } from '../share/components/emoji/emoji.component';
import { HeaderComponent } from '../share/components/header/header.component';
import { FooterComponent } from '../share/components/footer/footer.component';
import { CalendarComponent } from '../share/components/calendar/calendar.component';
import { PostsComponent } from '../share/components/posts/posts.component';
import { SocialMidiaComponent } from '../share/components/social-midia/social-midia.component';


@NgModule({
  declarations: [
    EmojiPipe,
    EmojiComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    PostsComponent,
    SocialMidiaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
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
    SocialMidiaComponent
  ]
})
export class SharedModule { }
