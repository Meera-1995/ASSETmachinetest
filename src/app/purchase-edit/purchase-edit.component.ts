import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent implements OnInit {
  purchase:Purchase=new Purchase();
  purchaseForm: FormGroup;
  id:number;
  constructor(private purchaseservice: PurchaseService, private router:Router, private authService:AuthService, private route: ActivatedRoute, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];

    this.purchaseForm=this.formBuilder.group({
      pd_orderno : ['',Validators.compose([Validators.required])],
      pd_ad_id: ['',Validators.compose([Validators.required])],
      pd_type_id: ['',Validators.compose([Validators.required])],
      pd_qty: ['',Validators.compose([Validators.required])],
      pd_vendor_id: ['',Validators.compose([Validators.required])],
      pd_status: ['',Validators.compose([Validators.required])],
      pd_date: ['',Validators.compose([Validators.required])],
      pd_ddate: ['',Validators.compose([Validators.required])]
    }); 
    this.purchaseservice.getPurchase(this.id).subscribe(x=>{
      this.purchase=x;
    })

  }
get formControls(){
    return this.purchaseForm.controls;
  }
    updatePurchase(){
    this.purchase.pd_id=this.id;
    this.purchase.pd_date=this.purchaseForm.controls.pd_date.value;
    this.purchase.pd_ddate=this.purchaseForm.controls.pd_ddate.value;
    this.purchase.pd_status='Consignment Received';
    this.purchase.pd_orderno=this.purchaseForm.controls.pd_orderno.value;
    this.purchase.pd_ad_id=this.purchase.pd_ad_id;
    this.purchase.pd_qty=this.purchase.pd_qty;
    this.purchase.pd_type_id=this.purchase.pd_type_id;
    this.purchase.pd_vendor_id=this.purchase.pd_vendor_id;
    if(this.purchase.pd_date<this.purchase.pd_ddate)
    {
      this.purchaseservice.updatePurchase(this.id, this.purchase).subscribe(res=>{
        this.toastr.success('Purchase Updated');
        this.router.navigateByUrl("purchase");
      });
    }
    else
    {
      this.toastr.warning('date error');
    }

  }

  cancelOrder(value: number){



  }

  }


