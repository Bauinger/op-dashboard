import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class OperationsComponent {
  private fb = inject(FormBuilder);
  operationForm = this.fb.group({
    type: [null, Validators.required],
    no: [null, Validators.required],
    id: [null, Validators.required],
    keyword: [null, Validators.required],
    text: null,
    location: {
      street: null,
      houseNo: null,
      door: null,
      cadastralCommunity: null,
      city: [null, Validators.required],
      postalCode: [null, Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(5)])
      ]
    },
    ownAreaOfOperation: [true, Validators.required],
    times: {
      dateOfMessage: [null, Validators.required],
      dateOfAlert: [null, Validators.required],
      dateOfExit: [null, Validators.required],
      dateOfReturn: [null, Validators.required],
    },
    situationOnArrival: null,
    activity: null,
    defects: null,
    commander: null,
    manager: null,
    lastChanged: null,    
    createdFrom: null
  });

  hasUnitNumber = false;

  opTypes = [
    {
      value: "",
      name: "",
      opKeywords: []
    },
    {
      value: "1",
      name: "Brandeinsatz",
      opKeywords: [
        {
          value: "",
          name: ""
        },
        {
          value: 21,
          name: "B1 - Autobahn - Fahrzeugbrand"
        },
        {
          value: 22,
          name: "B1 - Bahndammbrand"
        },
        {
          value: 23,
          name: "B1 - Brandverdacht"
        },
        {
          value: 24,
          name: "B1 - Flurbrand"
        },
        {
          value: 25,
          name: "B1 - Flurbrand-von Land nicht zugänglich"
        },
        {
          value: 26,
          name: "B1 - Kaminbrand"
        },
        {
          value: 27,
          name: "B1 - Kleinbrand"
        },
        {
          value: 28,
          name: "B1 - Kleinbrand-von Land nicht zugänglich"
        },
        {
          value: 29,
          name: "B1 - Müllbehälterbrand"
        },
        {
          value: 30,
          name: "B1 - TUS- od. Infranet-Alarm"
        },
        {
          value: 31,
          name: "B1 - Uferbrand-von Land nicht zugänglich"
        },
        {
          value: 32,
          name: "B1 - VIE - Alarmstufe 1"
        },
        {
          value: 33,
          name: "B1 - Überhitzter Ofen"
        },
        {
          value: 34,
          name: "B2 - Bootsbrand-vom Land zugänglich"
        },
        {
          value: 35,
          name: "B2 - Fahrzeugbrand"
        },
        {
          value: 36,
          name: "B2 - Kellerbrand"
        },
        {
          value: 37,
          name: "B2 - Küchenbrand"
        },
        {
          value: 38,
          name: "B2 - Trafobrand"
        },
        {
          value: 39,
          name: "B2 - VIE - Alarmstufe 2"
        },
        {
          value: 40,
          name: "B2 - Waldbrand"
        },
        {
          value: 41,
          name: "B2 - Wohnungsbrand"
        },
        {
          value: 42,
          name: "B2 - Zimmerbrand"
        },
        {
          value: 43,
          name: "B3 - Bootsbrand am Wasser"
        },
        {
          value: 44,
          name: "B3 - Brand in kl. Gewerbebetrieb"
        },
        {
          value: 45,
          name: "B3 - Dachstuhlbrand"
        },
        {
          value: 46,
          name: "B3 - Frachtschiffsbrand-von Land zugänglich"
        },
        {
          value: 47,
          name: "B3 - Geschäftsbrand"
        },
        {
          value: 48,
          name: "B3 - Gewerbebetrieb - klein"
        },
        {
          value: 49,
          name: "B3 - Passagierschiffsbrand-von Land zugänglich"
        },
        {
          value: 50,
          name: "B3 - Scheunen- od. Schuppenbrand"
        },
        {
          value: 51,
          name: "B3 - VIE - Alarmstufe 3"
        },
        {
          value: 52,
          name: "B3 - Wohnhausbrand"
        },
        {
          value: 53,
          name: "B4 - Frachtschiffsbrand am Wasser"
        },
        {
          value: 54,
          name: "B4 - Gewerbebetrieb - groß"
        },
        {
          value: 55,
          name: "B4 - Industrieobjekt"
        },
        {
          value: 56,
          name: "B4 - Landw. Objekt"
        },
        {
          value: 57,
          name: "B4 - Passagierschiffsbrand am Wasser"
        },
        {
          value: 58,
          name: "B4 - VIE - Alarmstufe 4"
        }
      ]
    },
    {
      value: "5",
      name: "Brandsicherheitswache bei brandgefährliche Tätigkeit"
    },
    {
      value: "3",
      name: "Brandsicherheitswache bei Veranstaltung(Messe)"
    },
    {
      value: "4",
      name: "Brandsicherheitswache bei Veranstaltung(Zirkus, Theater...)"
    },
    {
      value: "41",
      name: "Schadstoffeinsatz",
      opKeywords: [
        {
          value: "",
          name: ""
        },
        {
          value: 59,
          name: "S1 - Autobahn - Ölspur"
        },
        {
          value: 60,
          name: "S1 - Benzin- bzw. Ölaustritt"
        },
        {
          value: 61,
          name: "S1 - Benzin- bzw. Ölspur beseitigen"
        },
        {
          value: 62,
          name: "S1 - Gasaustritt bzw. -gebrechen"
        },
        {
          value: 63,
          name: "S1 - Unbekanntes Medium im Wasser"
        },
        {
          value: 64,
          name: "S1 - Ölaustritt aus Boot"
        },
        {
          value: 65,
          name: "S1 - Öltreiben auf Donau"
        },
        {
          value: 66,
          name: "S2 - Autobahn - Austritt geringer Mengen Schadst.(SST3)"
        },
        {
          value: 67,
          name: "S2 - Chlorgasaustritt"
        },
        {
          value: 68,
          name: "S2 - Kl. Gewässerschaden"
        },
        {
          value: 69,
          name: "S2 - Ölaustritt aus Schiff-Stauraum"
        },
        {
          value: 70,
          name: "S2 - Öltreiben auf Donau-Stauraum"
        },
        {
          value: 71,
          name: "S2 - Örtl. Chemieunfall"
        },
        {
          value: 72,
          name: "S3 - Autobahn - Schadstoffeinsatz"
        },
        {
          value: 73,
          name: "S3 - Chemieunfall m. größeren Umweltschäden"
        },
        {
          value: 74,
          name: "S3 - Tankwagenunfall"
        },
        {
          value: 75,
          name: "S3 - Ölaustritt aus Schiff-Fliessstrecke"
        },
        {
          value: 76,
          name: "S3 - Öltreiben auf Donau-Fliessstrecke"
        }
      ]
    },
    {
      value: "2",
      name: "Technischer Einsatz",
      opKeywords: [
        {
          value: "",
          name: ""
        },
        {
          value: 77,
          name: "T1 - Auspumparbeiten"
        },
        {
          value: 78,
          name: "T1 - Autobahn - Bergung"
        },
        {
          value: 79,
          name: "T1 - Autobahn - LKW wegschleppen"
        },
        {
          value: 80,
          name: "T1 - Boot in Notlage-auf Grund gelaufen"
        },
        {
          value: 81,
          name: "T1 - Boot in Notlage-treibend"
        },
        {
          value: 82,
          name: "T1 - Bootsbergung"
        },
        {
          value: 83,
          name: "T1 - Eisstoß"
        },
        {
          value: 84,
          name: "T1 - Fahrzeugbergung"
        },
        {
          value: 85,
          name: "T1 - Hochwasser"
        },
        {
          value: 86,
          name: "T1 - LKW-Bergung"
        },
        {
          value: 87,
          name: "T1 - Motorradbergung"
        },
        {
          value: 88,
          name: "T1 - Person(en) in Aufzug"
        },
        {
          value: 89,
          name: "T1 - Personensuche"
        },
        {
          value: 90,
          name: "T1 - Sturmschaden"
        },
        {
          value: 91,
          name: "T1 - Taucheinsatz"
        },
        {
          value: 92,
          name: "T1 - Technische Hilfeleistung"
        },
        {
          value: 93,
          name: "T1 - Technische Hilfeleistung (mit Notrufeingang)"
        },
        {
          value: 94,
          name: "T1 - Tierrettung"
        },
        {
          value: 95,
          name: "T1 - Türöffnung"
        },
        {
          value: 96,
          name: "T1 - Unwettereinsatz"
        },
        {
          value: 97,
          name: "T1 - Verkehrsunfall"
        },
        {
          value: 98,
          name: "T1 - Wassergebrechen"
        },
        {
          value: 99,
          name: "T1 - Wasserversorgung"
        },
        {
          value: 100,
          name: "T2 - Autobahn - Menschenrettung"
        },
        {
          value: 101,
          name: "T2 - Frachtschiff in Notlage-auf Grund gelaufen"
        },
        {
          value: 102,
          name: "T2 - Frachtschiff in Notlage-treibend"
        },
        {
          value: 103,
          name: "T2 - Menschenrettung"
        },
        {
          value: 104,
          name: "T2 - Menschenrettung (1 eingekl. Person)"
        },
        {
          value: 105,
          name: "T2 - Person in Notlage"
        },
        {
          value: 106,
          name: "T2 - Treibende Person (1) im Wasser"
        },
        {
          value: 107,
          name: "T2 - VU mit 1 eingekl. Person"
        },
        {
          value: 108,
          name: "T2 - Wasserrettung-sinkendes Boot"
        },
        {
          value: 109,
          name: "T3 - Autobahn - Schwere Bergung (LKW liegt)"
        },
        {
          value: 110,
          name: "T3 - Autobusunfall"
        },
        {
          value: 111,
          name: "T3 - Eisenbahnunglück"
        },
        {
          value: 112,
          name: "T3 - Menschenrettung (mehrere eingekl. Personen)"
        },
        {
          value: 113,
          name: "T3 - Menschenrettung (mehrere Personen)"
        },
        {
          value: 114,
          name: "T3 - Passagierschiff in Notlage-auf Grund gelaufen"
        },
        {
          value: 115,
          name: "T3 - Passagierschiff in Notlage-treibend"
        },
        {
          value: 116,
          name: "T3 - Treibende Personen (mehrere) im Wasser"
        },
        {
          value: 117,
          name: "T3 - VU mit mehreren eingekl. Personen"
        },
        {
          value: 118,
          name: "T3 - Wasserrettung-sinkendes Frachtschiff"
        },
        {
          value: 119,
          name: "T3 - Wasserrettung-sinkendes Passagierschiff"
        }
      ]
      
    }
  ]; 

  onSubmit(): void {
    alert('Thanks!');
  }
}
