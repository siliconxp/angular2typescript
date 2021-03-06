import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, OpaqueToken, Inject} from '@angular/core';

export const BackendUrl  = new OpaqueToken('BackendUrl');

@Component({
  selector: 'app-root',
  template: 'URL: {{url}}'
})
class RootComponent {
  constructor(@Inject(BackendUrl) public url: string) {}
}

bootstrap(RootComponent, [
  {provide:BackendUrl, useValue: 'myQAserver.com'}
]);
