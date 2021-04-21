import { Component } from '@angular/core';
import { AccountsService } from '../account.service';
// import { EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [ LoggingService ]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private LoggingService: LoggingService,
    private accountsService: AccountsService) {
      // this.accountsService.statusUpdated.subscribe(
      //   (status: string) => alert('New status:' + status)
      // )
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.LoggingService.logStatusChange(accountName, accountStatus);
  }
}
