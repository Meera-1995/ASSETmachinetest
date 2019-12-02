import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';
import { AssetDefService } from '../asset.service';
import { AssetDef } from '../asset';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  asset: Observable<AssetDef>;
  assets: Observable<AssetDef[]>;
 

  constructor(private assetdefService:AssetDefService,private router: Router,private toastr:ToastrService) { 
   
   }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.assets = this.assetdefService.getAssetList();
}
deleteAsset(id:number){
  if(confirm('Do you want to delete this record?'))
  {
    this.assetdefService.deleteAsset(id).subscribe(data=>{
      this.toastr.warning('Deleted Successfully..!!');
      console.log(data);
    });
    this.reloadData();
  }
}
search(ad_name:string)
{
  this.asset=this.assetdefService.searchAsset(ad_name);
  if(ad_name="")
  {
    this.asset=this.assetdefService.getAssetList();
  }
}


}