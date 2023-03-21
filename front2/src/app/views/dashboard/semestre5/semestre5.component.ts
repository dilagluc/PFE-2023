import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre5',
  templateUrl: './semestre5.component.html',
  styleUrls: ['./semestre5.component.scss']
})
export class Semestre5Component {
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

export interface Semestre5Details {
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

const ELEMENT_DATA: Semestre5Details[] = [
  { UE:'M.E. Langues Vivantes 5', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Culture d\'Entreprise 5', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Outils de Base pour l\'Ingénieur 1', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'M.E. Harmonisation', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Conférences d\'introduction aux Télécommunications', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Harmonisation Électromagnétisme', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Harmonisation Électronique analogique et numérique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Harmonisation Calcul', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Projet Électronique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'M.E. Électronique', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Électronique Analogique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Électronique Numérique', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},
  { UE:'Architecture et Structure des Ordinateurs', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},

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
