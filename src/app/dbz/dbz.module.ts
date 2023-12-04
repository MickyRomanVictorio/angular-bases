import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { mainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add/add.character.component';

@NgModule({
   declarations: [mainPageComponent, ListComponent, AddCharacterComponent],
   imports: [CommonModule, FormsModule],
   exports:[mainPageComponent]
})
export class DbzModule {}
