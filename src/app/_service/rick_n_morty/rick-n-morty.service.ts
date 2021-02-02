import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RickNMortyService {
    baseURL = 'https://rickandmortyapi.com/api';

    constructor(private http: HttpClient) {
    }

    public getRickAndMortyByName(name: string, type: string) {
        return this.http.get(this.baseURL + `/${type}/?name=${name}`);
    }

    public getRickAndMortyById(id: string, type: string) {
        return this.http.get(this.baseURL + `/${type}/${id}`);
    }

}
