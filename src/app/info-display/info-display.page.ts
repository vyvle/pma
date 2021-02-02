import {Component, OnInit} from '@angular/core';
import {StorageService} from '../_service/storage/storage.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-info-display',
    templateUrl: './info-display.page.html',
    styleUrls: ['./info-display.page.scss'],
})
export class InfoDisplayPage {
    noneText: string = 'None';
    data: any;
    //character
    dataName: string;
    dataGender: string;
    dataStatus: string;
    dataSpecies: string;
    dataOrigin: string;
    dataLocation: string;
    //location
    dataType: string;
    dataDimension: string;
    //episode
    dataAirDate: string;
    dataEpisode: string;

    urlNoImg: string = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg';

    constructor(private storageService: StorageService, private location: Location, private route: ActivatedRoute) {
    }

    ionViewWillEnter() {
        this.loadData();
        console.log(this.data);
    }

    loadData() {
        this.data = this.storageService.savedData;
        //all
        this.dataName = JSON.stringify(this.data?.name);
        //char
        this.dataGender = JSON.stringify(this.data?.gender);
        this.dataSpecies = JSON.stringify(this.data?.species);
        if (this.data.origin?.name) {
            this.dataOrigin = JSON.stringify(this.data.origin?.name);

        }
        this.dataLocation = JSON.stringify(this.data.location?.name);
        //location
        this.dataType = JSON.stringify(this.data?.type);
        this.dataDimension = JSON.stringify(this.data?.dimension);
        console.log(this.data.dimension);
        //episode
        this.dataAirDate = JSON.stringify(this.data?.air_date);
        if (!(this.data?.episode instanceof Array)) {
            this.dataEpisode = JSON.stringify(this.data?.episode);
        }

    }

    backButton() {
        this.location.back();
    }

}
