import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // remove child AccountService because parent will propagate to the child,
  // if added, child AccountService will run its own instance
  // providers: [ LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, name: string, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(name: string, status: string) {
    // this.statusChanged.emit({id: this.id, name: name, newStatus: status});
    // console.log(name + ' status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, name, status);
    // this.loggingService.logStatusChange(name, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
