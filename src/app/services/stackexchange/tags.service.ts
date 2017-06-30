import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Technology } from 'app/datamodel/technology';
import { Observable } from 'rxjs/Observable';
// import * as StackExchange from '../../../../node_modules/stackexchange/lib/stackexchange';

export interface IStackexTags {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;

}
export interface IRootObject {
  items: IStackexTags[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  backoff: number;
  error_id: number;
  error_message: string;
  error_name: string;
  page: number;
  page_size: number;
  total: number;
  type: string;
}

@Injectable()
export class TagsService {
  // tslint:disable-next-line:max-line-length
  private url = 'https://api.stackexchange.com/2.2/';
  private url2 = 'tags?order=desc&sort=popular&site=stackoverflow';
  private tagsUrl = 'https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow&page=1&pagesize=100';
  // private usersTagsUrl = 'https://api.stackexchange.com//2.2/users/1/tags?order=desc&sort=popular&site=stackoverflow'
  private relatedTags = 'tags/';
  private relatedTags2 = '/related';
  // private tagsUrl = 'assets/testdata/testdata.json'; // URL to JSON file
  private data: any;
  private site = '?site=stackoverflow';
  constructor(private http: Http) {

  }

  nameFilter(name1: IStackexTags, index: number, array: IStackexTags[]): boolean {
    return true;
  }

  async getRelatedTags(name: string): Promise<IStackexTags[]> {

    const response = await this.http.get(this.url + this.relatedTags + name + this.relatedTags2 + this.site).toPromise();

    const root: IRootObject = response.json();
    console.log('root', root);
    if (root.backoff) {
      console.log('backoff', root.backoff);
      setTimeout(root.backoff);
    }

    const items: IStackexTags[] = root.items;
    console.log('items', root.items);
    return response.json().items;
  }

  async getTag(name: string): Promise<IStackexTags> {
    const response = await this.http.get(this.tagsUrl).toPromise();

    const root: IRootObject = response.json();
    console.log('root', root);
    if (root.backoff) {
      console.log('backoff', root.backoff);
      setTimeout(root.backoff);
    }

    const items: IStackexTags[] = root.items;
    // console.log('items', root.items);
    return response.json().items.filter((item: IStackexTags) => {
      return item.name === name;
    })[0];

  }

}
