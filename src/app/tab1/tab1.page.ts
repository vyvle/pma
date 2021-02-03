import {Component} from '@angular/core';
import {RickNMortyService} from '../_service/rick_n_morty/rick-n-morty.service';
import {StorageService} from '../_service/storage/storage.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    output: string;
    typeModel: string;
    inputString: string;
    dataObject: any;
    urlNoImg: string = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg';

    constructor(private rNm: RickNMortyService, private storageService: StorageService) {
    }

    public searchRnM() {
        this.rNm.getRickAndMortyByName(this.inputString, this.typeModel).subscribe((data) => {
            console.log(data);
            // @ts-ignore
            this.dataObject = data.results;
        });
    }

    public getData(data: any) {
        this.storageService.updateLastData(data);
    }

}
