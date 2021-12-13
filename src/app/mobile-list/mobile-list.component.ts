import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';
import { Mobile } from '../mobile';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  mobile:Mobile[] | undefined;

  constructor( private service:MobileService ,private router:Router) { }

  ngOnInit(): void {
    this.getAllMobiles();
  }
  getAllMobiles(){
    this.service.getAllMobiles().subscribe((data)=>{
      this.mobile=data;
    });
  }
  deleteMobile(id:any){
    this.service.deleteMobile(id).subscribe((data:any)=>{
      console.log(data);
      this.getAllMobiles();
    });
  }
  editMobile(id:any){
    this.router.navigate(['edit',id]);
  }

}
