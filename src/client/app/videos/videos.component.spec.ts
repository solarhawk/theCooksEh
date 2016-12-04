import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { async } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NameListService } from '../shared/index';
import { VideosModule } from './videos.module';

export function main() {
  describe('Videos component', () => {
    // setting module for testing
    // Disable old forms
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterModule, HttpModule, VideosModule],
        declarations: [TestComponent],
        providers: [
          BaseRequestOptions,
          MockBackend,
          {provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            // Do Tests?
          });

      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-videos></sd-videos>'
})
class TestComponent { }
