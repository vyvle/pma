import {Component} from '@angular/core';
import {StorageService} from '../_service/storage/storage.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    urlNoImg: string = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg';
    historyArray: any[] = [];

    constructor(private storageService: StorageService) {
    }

    ionViewWillEnter() {
        this.historyArray = this.storageService.getLastData();
        console.log(this.historyArray);
    }

    passData(data: any) {
        this.storageService.savedData = data;
    }
}
