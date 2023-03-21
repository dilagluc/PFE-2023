import { Component } from '@angular/core';

@Component({
  selector: 'app-fin-etudes',
  templateUrl: './fin-etudes.component.html',
  styleUrls: ['./fin-etudes.component.scss']
})
export class FinEtudesComponent {
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

export interface FinEtudesDetails {
  Colonne1: string;
  Colonne2: string;
}

const ELEMENT_DATA: FinEtudesDetails[] = [
  {Colonne1: 'Entreprise', Colonne2: 'Thales'},
  {Colonne1: 'Tél. entreprise', Colonne2: '+33 11 11 11 11 11'},
  {Colonne1: 'Email. entreprise', Colonne2: 'contact@gmail.com'},
  {Colonne1: 'Durée de stage', Colonne2: '4 semaines'},
  {Colonne1: 'Sujet de dtage', Colonne2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo. Penatibus et magnis dis parturient. Sed odio morbi quis commodo. Elit eget gravida cum sociis natoque penatibus et magnis dis. Tristique nulla aliquet enim tortor at auctor urna nunc. Adipiscing bibendum est ultricies integer quis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Felis eget velit aliquet sagittis id consectetur purus. Quis varius quam quisque id diam vel quam elementum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Magna etiam tempor orci eu. Ante metus dictum at tempor commodo ullamcorper a. Ut pharetra sit amet aliquam id. Amet dictum sit amet justo. Morbi non arcu risus quis varius quam quisque id. Duis at consectetur lorem donec massa. Augue mauris augue neque gravida in fermentum et.'},
  {Colonne1: 'Tuteur de stage', Colonne2: 'Thales'},
  {Colonne1: 'Tél. tuteur de stage', Colonne2: 'contact@gmail.com'},
  {Colonne1: 'Date de soutenance', Colonne2: '01/09/2023'},
  {Colonne1: 'Créneaux de soutenance', Colonne2: '15H'},

];

const COLUMNS_SCHEMA = [
  {
    key: "Colonne1",
    type: "text",
    label: ""
  },
  {
    key: "Colonne2",
    type: "text",
    label: ""
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]
