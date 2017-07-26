import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export interface IGetListOptions {
  page: number;
  perPage: number;
  query: string;
}

export abstract class EntitiesService {
  abstract endpointUrl;
  abstract searchParamName;

  constructor(private http: Http) {
  }

  get(id) {
    return this.http
      .get(this.endpointUrl + '/' + id, {
        search: this.getBaseSearchParams()
      })
      .map(responce => responce.json())
      .map(body => body.data.results[0]);
  }

  getList(options: IGetListOptions) {
    return this.http.get(this.endpointUrl, {
      search: this.getListSearchParams(options)
    }).map(responce => responce.json());
  }

  private getBaseSearchParams() {
    let baseSearchParams = new URLSearchParams();
    // TODO: Add API key globally for all requests to Marvel Entities API
    // my public key: c810c6473deab0ebe70dd29f10bec5f8
    // old api key  : e82e1f8eb16da85c0260676f2cdb05b2
    // per Marvel docs we need timestamp (ts) and hash is ts+private_key+public_key
    // ex: For example, a user with a public key of "1234"
    // and a private key of "abcd" could construct a valid call as follows:
    // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
    // (the hash value is the md5 digest of 1abcd1234)
    // TODO: change this vary the time stamp and make a new MD5 hash for each request.
    baseSearchParams.set('apikey', 'c810c6473deab0ebe70dd29f10bec5f8');
    baseSearchParams.set('ts', '07-22-2017');
    baseSearchParams.set('hash', '11ab65fee700b4ae33ce761cf8bdee79');
    return baseSearchParams;
  }

  private getListSearchParams(options: IGetListOptions) {
    let searchParams = this.getBaseSearchParams();
    searchParams.set('limit', String(options.perPage));
    searchParams.set('offset', String(options.perPage * (options.page - 1)));
    if (this.searchParamName && options.query) {
      searchParams.set(this.searchParamName, options.query);
    }
    return searchParams;
  }
}
