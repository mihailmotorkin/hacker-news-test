import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {
  transform(url: string): string {
    try {
      const hostname = new URL(url).hostname;
      return hostname.startsWith('www.') ? hostname.substring(4) : hostname;
    } catch (error) {
      console.error('Invalid URL:', url);
      return url;
    }
  }
}