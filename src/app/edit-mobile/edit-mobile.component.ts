import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.css']
})
export class EditMobileComponent implements OnInit {
  mobile:Mobile=new Mobile();
  id:any;

  constructor( private service:MobileService,
    private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.service.getMobile(this.id).subscribe((data:any)=>{
      this.mobile=data;
    });
  }
  updateMobile(){
    this.service.updateMobile(this.mobile.id,this.mobile).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['all']);
    });
  }

}
