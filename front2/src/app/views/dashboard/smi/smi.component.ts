import { Component } from '@angular/core';
import {StudentInfoAll} from "../../../models/studentInfoAll";
import {StudentInfo} from "../../../models/studentInfo";

@Component({
  selector: 'app-smi',
  templateUrl: './smi.component.html',
  styleUrls: ['./smi.component.scss']
})
export class SmiComponent {

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

export interface SuiviSMIDetails {
  Remarque: string | null;

}

const ELEMENT_DATA: SuiviSMIDetails[] = [
  { Remarque: "Lorem ipsum dolor"}
];

const COLUMNS_SCHEMA = [
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
