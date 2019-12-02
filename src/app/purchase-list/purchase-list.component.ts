import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  purchase: Observable<Purchase>;
  purchases: Observable<Purchase[]>;

  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  constructor(private purchaseservice: PurchaseService,private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.purchase = this.purchaseservice.getpurchaseList();
    this.purchases= this.purchaseservice.getpurchaseList();

}
cancelOrder(id: number){
    this.purchaseservice.cancelPurchase(id).subscribe(res=>{
      this.toastr.success('Order Cancelled');
      this.reloadData();
    })

}
}
