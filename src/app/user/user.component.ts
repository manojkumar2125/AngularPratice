import { Component,EventEmitter,Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User ;
  @Input({required:true}) isSelected!: boolean;
  @Output() userSelected = new EventEmitter();

  get imagePath(){
    return 'asserts/users/' + this.user.avatar;
  }

  onUserSelected(){
    this.userSelected.emit(this.user.id);
  }
}
