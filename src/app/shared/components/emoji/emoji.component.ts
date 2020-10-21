import { Component, Output,EventEmitter, Input } from '@angular/core';

export interface Emoji {
  alt: any;
  unicode: string;
}

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent {

  @Input() textarea: HTMLTextAreaElement;
  @Output() selectEmoji = new EventEmitter<any>();

  emoji: Emoji;

  emojis = [
    '1F600',
    '1F603',
    '1F604',
    '1F601',
    '1F606',
    '1F605',
    '1F923',
    '1F602',
    '1F642',
    '1F643',
    '1F609',
    '1F60A',
    '1F607',
    '1F970',
    '1F60D',
    '1F929',
    '1F618',
    '1F617',
    '263A',
    '1F61A',
    '1F619',
    '1F60B',
    '1F61B',
    '1F61C',
    '1F92A',
  ]


  constructor() { }

  select($event, unicode) {
    if($event.target.classList.contains('emoji')) {
      this.emoji = {
        alt: $event.target.alt,
        unicode
      }
      this.selectEmoji.emit(this.emoji);

      if(this.textarea) {
        this.textarea.innerHTML += this.emoji.alt;
      }
    }
  }

}
