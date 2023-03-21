import { Component } from '@angular/core';

@Component({
  selector: 'app-resultat-toeic',
  templateUrl: './resultat-toeic.component.html',
  styleUrls: ['./resultat-toeic.component.scss']
})
export class ResultatToeicComponent {

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

export interface ToeicDetails {
  StudentNumber: number;
  Score: number;
  Date: string;
  Remarque: string;
}

const ELEMENT_DATA: ToeicDetails[] = [
  { StudentNumber: 11808943, Score: 700, Date: '06-02-2023', Remarque: 'Very Good'},
];

const COLUMNS_SCHEMA = [
  {
    key: "StudentNumber",
    type: "number",
    label: "StudentNumber"
  },
  {
    key: "Score",
    type: "number",
    label: "Score"
  },
  {
    key: "Date",
    type: "text",
    label: "Date"
  },
  {
    key: "Remarque",
    type: "text",
    label: "Remarque"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]
