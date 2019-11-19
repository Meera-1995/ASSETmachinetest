import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Router } from '@angular/router';
import { AssetDefService } from '../asset.service';
import { AssetDef } from '../asset';


@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  asset: Observable<AssetDef>;
  assets: Observable<AssetDef[]>;
 

  constructor(private assetdefService:AssetDefService,private router: Router) { }

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
      //this.toastr.success('Deleted Successfully..!!', 'Success');
      console.log(data);
    })
  }
}
searchAsset(assetname:string)
{
  this.asset=this.assetdefService.searchAsset(assetname);
  if(assetname="")
  {
    this.asset=this.assetdefService.getAssetList();
  }
}


}