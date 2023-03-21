import {Component, OnInit} from '@angular/core';
import {StudentInfoService} from "../../../services/student-info.service";
import {SnackBarService} from "../../../services/snack-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {StudentInfoAll} from "../../../models/studentInfoAll";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-scolar-form',
  templateUrl: './scolar-form.component.html',
  styleUrls: ['./scolar-form.component.scss']
})
export class ScolarFormComponent implements OnInit{
    newPromo!: String
    studentInfos!: StudentInfoAll
    private sub: any
    private studentNum!: number
    constructor(
        private studentInfoService: StudentInfoService,
        private snackBar: SnackBarService,
        private  dialog: MatDialog,
        private route: ActivatedRoute,
    ) {
    }
  ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => this.studentNum = +params['studentNum'])
      this.getStudentInfos();
  }

  getStudentInfos(){
    this.studentInfoService.getStudentInfosByNum(this.studentNum).subscribe(
        (next) => {
          this.studentInfos = next;
        },
        //error => this.snackBar.openSnackBar(error.error.message,'Close','red-snackbar')
        error => this.snackBar.openSnackBar(error? error.message : "Error : Something bad happen when fetching", 'Close', 'red-snackbar')
    );
  }

}
