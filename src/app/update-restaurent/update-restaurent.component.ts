import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert:boolean=false;
  editRestaurent= new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService,private router:ActivatedRoute ){ }

  ngOnInit(): void {
   
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(this.router.snapshot.params.id)
     })
  }
updateResto(){
  this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurent.value).subscribe((result)=>{
    console.log(result,"data updated successfully")
    this.alert=true;
  })
}
closeAlert(){
  this.alert=false;
}
}
