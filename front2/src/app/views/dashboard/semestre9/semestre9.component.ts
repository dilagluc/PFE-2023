import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre9',
  templateUrl: './semestre9.component.html',
  styleUrls: ['./semestre9.component.scss']
})
export class Semestre9Component {
  displayedColumns = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = ELEMENT_DATA;
  columnsSchema = COLUMNS_SCHEMA;

  private sub: any;
  displayUploadButton: Boolean = false

  base64File: any = null;
  filename: any = null;
  file!: File

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      if(file.type === "text/csv")
      {
        this.filename = file.name;
        this.file = file;
        this.displayUploadButton = true;
      }
      else
      {
        this.filename = '';
        this.displayUploadButton = false;
        //this.file = undefined;
      }

      /*const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
      }*/
    } catch (error) {
      this.filename = '';
      this.base64File = '';
      console.log('no file was selected...');
    }
  }

}

export interface Semestre9Details {
  UE: string;
  CC: number | null;
  TP: number | null;
  Partiel1: number | null;
  Partiel2: number | null;
  Projet: number | null;
  Rapport: number | null;
  Expose: number | null;
  Stage: number | null;
  Coef: number | null;
  NoteFinale: number | null;
  isUE?: boolean
}

const ELEMENT_DATA: Semestre9Details[] = [
  { UE:'M.E. Langues Vivantes 9', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Culture d\'Entreprise 9', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Projet de fin d\'études et stage technicien', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Stage Technicien', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Projet de fin d\'études - PFE', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Traitement du Signal 3', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Codage et Traitement d\'Images', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Traitement Statistique du Signal', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Cryptographie', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Réseaux et informatique', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Unix utilisation', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Unix programmation système', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Système .Net, le langage C#', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Système .Net, interface graphique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Système .Net, bases de données', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Système .Net, développement Web en ASP.Net', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Administration réseau IP et sécurité', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Administration Windows', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Programmation Androïd sur plates-formes mobiles', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Méthodologie de conception de projets', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Simulation d\'entretiens d\'embauche', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Option A : Réseaux et applications distribuées', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Serveurs Web', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Système .Net, programmation système', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Java EE', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'XML', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Services Réseaux et Applications Distribuées', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Option B : Réseaux Mobiles', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Propagation', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Réseaux Cellulaires', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Réseaux locaux sans fil', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Transmission de la parole', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Gestion et supervision des services sur réseaux mobiles', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},

];

const COLUMNS_SCHEMA = [
  {
    key: "UE",
    type: "text",
    label: "UE"
  },
  {
    key: "CC",
    type: "number",
    label: "CC"
  },
  {
    key: "TP",
    type: "number",
    label: "TP"
  },
  {
    key: "Partiel1",
    type: "number",
    label: "Partiel1"
  },
  {
    key: "Partiel2",
    type: "number",
    label: "Partiel2"
  },
  {
    key: "Projet",
    type: "number",
    label: "Projet"
  },
  {
    key: "Rapport",
    type: "number",
    label: "Rapport"
  },
  {
    key: "Expose",
    type: "number",
    label: "Expose"
  },
  {
    key: "Stage",
    type: "number",
    label: "Stage"
  },
  {
    key: "Coef",
    type: "number",
    label: "Coef"
  },
  {
    key: "NoteFinale",
    type: "number",
    label: "NoteFinale"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]
