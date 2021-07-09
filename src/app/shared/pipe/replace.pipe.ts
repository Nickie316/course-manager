import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'replace'
})
export class ReplacePipe implements PipeTransform {

   transform(value: string, char: string,valueToReplace: string) { 
         // 1º Parametro é o Valor da Propriedade
         // 2º Parametro é o valor que vai ser trocado
         // 3º Parametro é o novo valor escolhido
      return value.replace(char, valueToReplace)
   }

}