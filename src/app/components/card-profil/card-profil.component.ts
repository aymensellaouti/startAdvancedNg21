import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-card-profil',
    templateUrl: './card-profil.component.html',
    styleUrls: ['./card-profil.component.css'],
    imports: [FormsModule]
})
export class CardProfilComponent {
  name = signal('sellaouti');
  firstname = signal('aymen');
  job = signal('teacher');
  path = signal('rotating_card_profile.png');
}
