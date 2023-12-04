import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

   public characters: Character[] = [{
      id: uuid(),
      name: 'miguel',
      power: 1000,
   },{
      id: uuid(),
      name: 'roman',
      power: 9500
   },{
      id: uuid(),
      name: 'victorio',
      power: 5000
   }];

   onNewCharacter(character: Character): void {
      const newCharacter: Character = { id: uuid(), ...character };

      this.characters.push(newCharacter);
   }

   // onDeleteCharacter( id: number){
   //    this.characters.splice(id,1)
   // }

   onDeleteCharacter( id: string){
      this.characters = this.characters.filter(character => character.id !== id);
      // this.characters.splice(id,1)
   }

}
