import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Aircraft,AircraftSearch  } from './aircraft-definition';
import { tap } from 'rxjs/operators';

const baseURL = 'http://localhost:8080/aircrafts';

@Injectable({
  providedIn: 'root'
})

export class AircraftService {

  constructor(private httpClient: HttpClient)
  { }

  getAllAircrafts(): Observable<any> {
    return this.httpClient.get(`${baseURL}`) as Observable<Aircraft>;
  }

  getAircraftbyId(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`) as Observable<Aircraft>;
  }

  getAircraftByLiveryCode(id: any): Observable<any> {
    return this.httpClient.get(`${baseURL+"/findaircraftsByliveryCode"}/${id}`) as Observable<Aircraft>;
  }

  createAircraft(data: Aircraft): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  updateAircraft(id: any, data: Aircraft): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  SaveAircraft(id: any, data: Aircraft |undefined): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }
  deleteAircraft(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAllAircrafts(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchAircrafts(SearchParameters: AircraftSearch): Observable<any> {

    const ReturnedObject : Observable<Aircraft>  = this.httpClient.get(`${baseURL +"/getaircraftsbySearchParameters"}/${JSON.stringify(SearchParameters)}`) as Observable<Aircraft>;
    ReturnedObject.subscribe(obj=>{(console.log(obj));});

    return ReturnedObject;
    // return this.httpClient.get(`${baseURL}`) as Observable<Aircraft>;
  }
}



