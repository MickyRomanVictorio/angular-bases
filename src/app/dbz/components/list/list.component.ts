import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
   selector: 'dbz-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css'],
})
export class ListComponent {

   @Input()
   public characterList: Character[] = [{
      name: 'Trunk',
      power: 10
   }]

   @Output()
   public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

   onDelete(index: string){
      // console.log(index);
      this.onDeleteCharacter.emit(index);
   }

   /*
   onDeleteCharacter(index: number):void {
      console.log(index);
   }
   */
}
