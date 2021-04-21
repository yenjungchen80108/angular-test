export class LoggingService {
    logStatusChange(name: string, status: string){
        console.log(name + ' status changes, new status: ' + status);
    }
}