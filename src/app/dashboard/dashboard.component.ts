import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from '../shared/product';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<Product>;
  isAdmin: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( public dialog: MatDialog, private api:ApiService, private router:Router, private authService: AuthService){
  }

  ngOnInit(){
    this.isAdmin = this.authService.isAdmin();
    this.getProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(value => {
      if(value === 'saved'){
        this.getProducts();
      }
    })
  };

  getProducts(){
    this.api.getProduct().subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        alert(err);
      }
    })
  }

  editProduct(row:Product[]) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(value => {
      if(value === 'updated'){
        this.getProducts();
      }
    })
  }

  deleteProduct(id:number) {
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert('Product Deleted Successfully');
        this.getProducts();
      },
      error: (err)=>{
        alert('Problem deleting the product')
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logoutButton(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

}
