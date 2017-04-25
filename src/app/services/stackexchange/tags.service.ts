import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Technology } from 'app/datamodel/technology';
import { Observable } from 'rxjs/Observable';
// import * as StackExchange from '../../../../node_modules/stackexchange/lib/stackexchange';

@Injectable()
export class TagsService {
  // tslint:disable-next-line:max-line-length
  tagsUrl = 'https://api.stackexchange.com/2.2/questions?fromdate=1491091200&todate=1492992000&order=desc&sort=activity&tagged=java&site=stackoverflow';

  constructor(private http: Http) {

  }

  getTags(name: string): Technology[] {

    // this.http.get(this.tagsUrl)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error');



    // const options = { version: 2.2 };
    // const context = new StackExchange(options);

    // const filter = {
    //   key: 'YOUR_API_KEY',
    //   pagesize: 50,
    //   tagged: 'node.js',
    //   sort: 'activity',
    //   order: 'asc',
    // };

    // // Get all the questions (http://api.stackexchange.com/docs/questions)
    // context.questions.questions(filter, (err, results) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(results.items);
    //   console.log(results.has_more);
    // });

    return [];
  }

}
