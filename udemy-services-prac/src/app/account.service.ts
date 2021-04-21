import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// receiving logging service to be injected
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Test Account',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {}
    
    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(name, status)
    }

    updateStatus(id: number, name: string, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(name, status);
    }
}