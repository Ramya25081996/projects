import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transfer'
})
export class TransferPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
