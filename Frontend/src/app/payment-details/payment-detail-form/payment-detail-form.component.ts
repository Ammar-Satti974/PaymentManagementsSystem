import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService){

  }
  onSubmit(form: NgForm){
    this.service.formSubmitted = true;
    if(form.valid){
      if(this.service.formData.paymentDeatailId==0)
      this.insertRecord(form)
    else
    this.updateRecord(form)
    }
  }
  insertRecord(form: NgForm){
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.postPaymentDetail()
    .subscribe({
      next: res=>{
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form);
        this.toastr.success("Inserted Successfully!", "Payment Detail Register")
      },
      error: err =>{
        console.log(err);
      }
    })
    }
  }
  updateRecord(form: NgForm){
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.putPaymentDetail()
    .subscribe({
      next: res=>{
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form);
        this.toastr.info("Updated Successfully!", "Payment Detail Register")
      },
      error: err =>{
        console.log(err);
      }
    })
    }
    
  }
}
