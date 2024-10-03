import { NonNullableFormBuilder } from "@angular/forms";

export interface IOperation {
    type: string;
    no: number;
    id: string;
    keyword?: number;
    text: string;
    location: {
      street: string;
      houseNo: number;
      door: number;
      cadastralCommunity: string;
      city: string;
      postalCode: number;
    };
    ownAreaOfOperation: boolean;
    times: {
      dateOfMessage: Date;
      dateOfAlert: Date;
      dateOfExit: Date;
      dateOfReturn: Date;
    };
    situationOnArrival: string;
    activity: string;
    defects: string;
    commander: number;
    manager: number;
    lastChanged: number;
    createdFrom: number;
    details: {
      weather: string[];
      alerting: string[];
      message: string [];
      present: string[];
    };
    technicalOperation: {
      hazardClass: string[];
      technicalOperations: string[];
    };
    fireOperation: {
      endOfFire: Date;
      fireWatchFrom: Date;
      fireWatchTo: Date;
      objects: string[];
      dimension: string[];
      falseAndDeceptiveAlarms : string[];
    };
    injuredExternal: IInjuredExternal[];
    injuredInternal: {
      injuredPersons: number;
      killedPersons: number;
      rescuedPersons: number;
      rescuedAnimals: number;
      injuredMembers: IInjuredMember[];
    };
    otherMembers: {
        //TODO
    };
    vehicles: {
        //TODO
    };
    otherAlertedFireStations: string[];
    usedEquiptment: {
        //TODO
    };
    consumables: {
        //TODO
    };   
}

export interface IInjuredExternal {
    injuredParty: IPerson;
    driver: IPerson;
    vehicle: IVehicle;
}
export interface IInjuredMember {
    member: number;
    status: number;
    note: string;
}

export interface IPerson {
    firstName: string;
    lastName: string;
    institution: string;
    location: {
        street: string;
        houseNo: number;
        door: number;
        cadastralCommunity: string;
        city: string;
        postalCode: number;
    }
}

export interface IVehicle {
    vehicleBrand: string;
    type: string;
    licensePlate: string;
    insurance: string;
    note: string;
}


export interface IMember {
    firstName: string,
    lastName: string,
    location: {
        street: string;
        houseNo: number;
        door: number;
        cadastralCommunity: string;
        city: string;
        postalCode: number;
    }
}
export interface IEmergencyVehicle extends IVehicle {
    radioName: string;
}