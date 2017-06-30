import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { IStackexTags, TagsService } from './tags.service';

describe('TagsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagsService],
      imports: [HttpModule]
    });
  });

  it('should result in 30 related tags', async(inject([TagsService], async (service: TagsService) => {

    const result = {
      has_synonyms: true,
      is_moderator_only: false,
      is_required: false,
      name: 'java'
    };

    // const stringResult = '[{"has_synonyms":true,"is_moderator_only":false,"is_required":false,"count":1259409,"name":"java"}]';

    expect(service).toBeTruthy();
    const java: Array<IStackexTags> = await service.getRelatedTags('java');
    // expect(JSON.stringify(java)).toEqual(stringResult);
    expect(java.length).toEqual(30); // default page size
  })));

  // async function asyncAwait() {
  //   console.log('Knock, knock!');

  //   await delay(1000);
  //   console.log('Who\'s there?');

  //   await delay(1000);
  //   console.log('async/await!');
  // }

  // function delay(ms: number) {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // }

  // it('Using a Promise with async/await that resolves successfully with wrong expectation!', async(async () => {
  //   const testPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('Hello World!');
  //     }, 200);
  //   });

  //   console.log('befor asyncAwait');
  //   await asyncAwait();
  //   console.log('after asyncAwait');
  //   const result = await testPromise;

  //   expect(result).toBe('Hello World!');

  // }));

});
