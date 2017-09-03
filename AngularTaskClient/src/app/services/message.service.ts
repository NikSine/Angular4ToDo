import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
    private message:string;

    sendMessage(message: string) {
        this.message = message
    }

    getMessage(){
        return this.message;
    }
}
