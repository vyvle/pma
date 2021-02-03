import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    typeSaved: string;
    savedData: any;
    historyArray: any[] = [];

    constructor(private storage: Storage) {
    }

    updateLastMod(saved: string) {
        this.typeSaved = saved;
        this.storage.set('type', JSON.stringify(saved));
    }

    getLastType() {
        this.storage.get('type').then((val) => {
            this.typeSaved = JSON.parse(val);
        });
        return this.typeSaved;
    }

    updateLastData(saved: string) {
        this.savedData = saved;
        this.historyArray.unshift(saved);
        this.storage.set('data', JSON.stringify(this.historyArray));
    }

    getLastData() {
        this.storage.get('data').then((val) => {
            if (val) {
                this.historyArray = JSON.parse(val);
            }
        });
        return this.historyArray;
    }
}
