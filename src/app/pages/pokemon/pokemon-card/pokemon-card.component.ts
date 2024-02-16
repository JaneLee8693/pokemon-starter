import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../shared/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() select: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  selectPokemon() {
    this.select.emit(this.pokemon);
  }
}
