import { Component, Input, OnChanges } from "@angular/core";

@Component({
   selector: 'app-star',
   templateUrl: './star.component.html',
   styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

   @Input() // Permite receber informação de um componente externo, virando um atributo para uma tag do componente
   rating: number = 0

   starWidth!: number
   ngOnChanges(): void {
      this.starWidth = this.rating * 74 / 5
   }
}