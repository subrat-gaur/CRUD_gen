import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Aircraft, AircraftClass } from './aircraft-definition';

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

  getAircraft(id: any): Observable<any> {
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

  SaveAircraft(id: any, data: AircraftClass |undefined): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }
  deleteAircraft(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAllAircrafts(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: any): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}


// const AIRCRAFT_DATA: Aircraft[] =
// [
//   {registrationNumber: '1', typeIATACode: '1', aircraftName: '1'
//   , ownershipTypeCode: '1',aircraftOwner: '1', liveryCode: 'Hydrogen', serialNumber: '1.0079', engineManufacturer: 'H', engineModel: '1',
//   remarks: '11', weight: '1'
// },
//   {registrationNumber: '2', typeIATACode: '2', aircraftName: '3'
//   ,ownershipTypeCode: '2',  aircraftOwner: '2', liveryCode: '2', serialNumber: '2', engineManufacturer: '2', engineModel: '2',
//   remarks: '22', weight: '2'
// },
//   {registrationNumber: '3', typeIATACode: '3', aircraftName: '3'
//   , ownershipTypeCode: '3',  aircraftOwner: '3', liveryCode: '3', serialNumber: '3', engineManufacturer: '3', engineModel: '3',
//   remarks: '33', weight: '3'
// },
//   {registrationNumber: '4', typeIATACode: '4', aircraftName: '4'
//   , ownershipTypeCode: '4',  aircraftOwner: '41', liveryCode: '4', serialNumber: '4', engineManufacturer: '4', engineModel: '4',
//   remarks: '44', weight: '44'
// },
//   {registrationNumber: '5', typeIATACode: '5', aircraftName: '5'
//   , ownershipTypeCode: '5',   aircraftOwner: '51', liveryCode: '5', serialNumber: '5', engineManufacturer: '5', engineModel: '5',
//   remarks: '55', weight: '55'
// },
// ];
