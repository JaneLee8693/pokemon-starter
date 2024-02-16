import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from './shared/pokemon.service';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [PokemonService],
  exports: [PokemonListComponent],
})
export class PokemonStarterModule {}