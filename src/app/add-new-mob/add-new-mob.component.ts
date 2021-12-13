import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-add-new-mob',
  templateUrl: './add-new-mob.component.html',
  styleUrls: ['./add-new-mob.component.css']
})
export class AddNewMobComponent implements OnInit {
  mobile:Mobile=new Mobile();

  constructor( private service:MobileService,private router:Router) { }

  ngOnInit(): void {
    this.mobile=new Mobile();
  }
  addNewMobile(){
    this.service.addNewMobile(this.mobile).subscribe((data)=>{
      console.log(data);
      this.mobile=new Mobile();
      this.router.navigateByUrl('/all');
    });
  }

}
