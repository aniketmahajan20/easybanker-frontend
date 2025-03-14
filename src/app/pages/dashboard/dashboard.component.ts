import { Component, OnInit } from '@angular/core';
import { BankingService } from '../../services/banking.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.type';
import { TransactionRequest } from '../../models/transaction_request.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [ReactiveFormsModule]
})
export class DashboardComponent implements OnInit {
  account!: User;
  transactionForm: FormGroup;
  message: string = '';

  constructor(private bankingService: BankingService, private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // this.loadBankingInfo();
  }

  loadBankingInfo(): void {
    this.bankingService.getBankingInfo().subscribe({
      next: (data) => this.account = data,
      error: (err) => console.error('Error fetching banking info', err)
    });
  }

  deposit(): void {
    const transaction_request: TransactionRequest = {
      'transactionAmount': this.transactionForm.value.amount,
      'transactionDescription': null,
      'transactionReceiver': null,
      'transactionRemark': null,
      'transactionType': "DEBIT"
    };

    this.bankingService.deposit(transaction_request).subscribe({
      next: () => {
        this.message = `Deposited $${this.transactionForm.value.amount} successfully`;
        this.loadBankingInfo();
      },
      error: (err) => console.error('Deposit failed', err)
    });
  }

  // withdraw(): void {
  //   const amount = this.transactionForm.value.amount;
  //   this.bankingService.withdraw(amount).subscribe({
  //     next: () => {
  //       this.message = `Withdrawn $${amount} successfully`;
  //       this.loadBankingInfo();
  //     },
  //     error: (err) => console.error('Withdrawal failed', err)
  //   });
  // }

  // transfer(): void {
  //   const amounmg = this.transactionForm.value.amount;
  //   this.bankingService.transfer(amoung)
  // }
}
