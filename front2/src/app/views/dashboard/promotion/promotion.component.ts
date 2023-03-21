import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StudentInfoService} from "../../../services/student-info.service";
import {SnackBarService} from "../../../services/snack-bar.service";
import {MatDialog} from "@angular/material/dialog";
import {PromotionAddDialogComponent} from "../promotion-add-dialog/promotion-add-dialog.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {PromotionRemoveDialogComponent} from "../promotion-remove-dialog/promotion-remove-dialog.component";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements  OnInit{

  @Input() promotionsList!: String[]
  newPromo!: String
  constructor(
      private studentInfoService: StudentInfoService,
      private snackBar: SnackBarService,
      private  dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getPromotionsList();
  }

  getPromotionsList(){
    this.studentInfoService.getPromotions().subscribe(
        (next) => {
          this.promotionsList = next;
          this.promotionsList.sort();
        },
        //error => this.snackBar.openSnackBar(error.error.message,'Close','red-snackbar')
        error => this.snackBar.openSnackBar(error? error.message : "Error : Something bad happen when fetch teams", 'Close', 'red-snackbar')
    );
  }



  openDialogAddPromotion() {
    console.log(this.promotionsList)
    const dialogRef = this.dialog.open(PromotionAddDialogComponent,
        {data: "", height: '250px', width: '300px', hasBackdrop: false});

    dialogRef.afterClosed().subscribe((result: String) => {
      //console.log(result);
      if(result != undefined)
      {
        //console.log(result);
        this.newPromo = result;
        console.log(this.newPromo)
        if(this.promotionsList != undefined)
        {
          if(this.promotionsList.includes(this.newPromo))
          {
            this.snackBar.openSnackBar("Error : cette promotion existe déjà", 'Close', 'red-snackbar')
          }
          else
          {
            this.promotionsList = [...this.promotionsList, this.newPromo.toString()]
            this.promotionsList.sort();
            //this.promotionsList = Array.from((new Set(this.promotionsList).values()));
          }
          //this.promotionsList = [...this.promotionsList, this.newPromo]
          //this.promotionsList = Array.from((new Set(this.promotionsList).values()));
        }

        else
          this.promotionsList= [this.newPromo.toString()]
      }
      //window.location.reload();
    },
        error => this.snackBar.openSnackBar(error? error.message : "Error : Something bad happen when fetching", 'Close', 'red-snackbar')

    );
  }

  removePromotion()
  {
    if(this.promotionsList != undefined && this.promotionsList.length > 0)
    {
      //console.log(this.promotionsList)
      const dialogRef = this.dialog.open(PromotionRemoveDialogComponent,
          {data: "", height: '250px', width: '300px', hasBackdrop: false});

      dialogRef.afterClosed().subscribe((result: string) => {
            //console.log(result);
            if(result != undefined)
            {
              //console.log(result);
              const toRemove = result.toString();
              if(this.promotionsList != undefined)
              {
                console.log(this.promotionsList)
                console.log(toRemove)
                if(this.promotionsList.includes(toRemove))
                {
                  //this.promotionsList.;
                  const index = this.promotionsList.indexOf(toRemove);
                  const x = this.promotionsList.splice(index, 1);
                  this.studentInfoService.removeAPromotion(toRemove).subscribe(
                      (next) => {
                      },
                      error => this.snackBar.openSnackBar("Delete", 'Close', 'red-snackbar')
                  );
                }
              }

              //else
                //this.promotionsList= [this.newPromo]
            }
            //window.location.reload();
          },
          error => this.snackBar.openSnackBar(error? error.message : "Error : Something bad happen when fetch teams", 'Close', 'red-snackbar')

      );
    }

  }
}
