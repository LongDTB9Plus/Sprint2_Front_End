import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bidder} from './bidder';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  findBidderByAuctionId(auctionId: number): Observable<any> {
    return this.httpClient.get<Bidder>(`${this.URL}/get-bidder-auction/${auctionId}`);
  }
}