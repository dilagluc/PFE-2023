import { Component } from '@angular/core';

@Component({
  selector: 'app-semestre10',
  templateUrl: './semestre10.component.html',
  styleUrls: ['./semestre10.component.scss']
})
export class Semestre10Component {
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

export interface Semestre10Details {
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

const ELEMENT_DATA: Semestre10Details[] = [
  { UE:'M.E. Stage de Fin d\'Études', CC: null, TP: null, Partiel1: null, Partiel2: null, Projet: null, Rapport: null, Expose: null, Stage: null, Coef: null, NoteFinale: 10, isUE: true},
  { UE:'Stage de fin d\'études', CC: 10, TP: 10, Partiel1: 10, Partiel2: 10, Projet: 10, Rapport: 10, Expose: 10, Stage: 10, Coef: 1, NoteFinale: 10},

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
