

export interface Aircraft {
   id: number;
   registrationNumber: string;
   typeIATACode: string;
   aircraftName: string ;
   ownershipTypeCode: string  ;
   aircraftOwner: string;
   liveryCode: string;
   serialNumber: string;
   engineManufacturer: string;
   engineModel: string;
   remarks: string;
   AircraftWeight: string;
}

export class AircraftClass {
  public id: number=0;
  public registrationNumber: string = '';
  public typeIATACode: string= '' ;
  public aircraftName: string= '' ;
  public ownershipTypeCode: string= '' ;
  public aircraftOwner: string= '' ;
  public liveryCode: string= '';
  public serialNumber: string= '';
  public engineManufacturer: string= '';
  public engineModel: string= '';
  public remarks: string= '';
  public AircraftWeight: string= '';
}

export class AircraftSearch
{
  registrationNumber: string = "";
  liveryCode: string = "";
  serialNumber: string = "";
}

export class AircraftSearchResults
{
  registrationNumber: string = "";
  liveryCode: string = "";
  serialNumber: string = "";
}



