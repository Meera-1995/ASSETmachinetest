import { Component, OnInit } from '@angular/core';
import { AssetDef } from '../asset';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { AssetDefService } from '../asset.service';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})
export class AssetAddComponent implements OnInit {
  assetform:FormGroup
  asset:AssetDef=new AssetDef();
 
  constructor(private formBuilder:FormBuilder,private service:AssetDefService,private route:Router) { }

  ngOnInit() {
    this.assetform=this.formBuilder.group({
      ad_name:['',Validators.compose([Validators.required])],
      ad_type_id:['',Validators.compose([Validators.required])],
      ad_class:['',Validators.compose([Validators.required])],
     
    });

}
get formcontrol()
  {
    return this.assetform.controls;
  }
  addAssets()
  {

  /**  this.product.productname=this.productform.controls.productname.value;
   this.product.productdescription=this.productform.controls.productdescription.value;
   this.product.manfdate=this.productform.controls.manfdate.value;
   this.product.productprice=this.productform.controls.productprice.value;*/
    this.asset=this.assetform.value;
    console.log(this.asset)
    this.service.addAsset(this.asset).subscribe(x=>{alert("Asset added")});
    this.ngOnInit();

  }


}

