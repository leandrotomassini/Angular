import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountries: { term: '', countries: [] },
        byRegion: { region: '', countries: [] },
    }

    constructor(private http: HttpClient) {
        this.loadFromLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loadFromLocalStorage() {
        if (!localStorage.getItem('cacheStore')) return;
        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    }

    private getCountriesRequest(url: string): Observable<Country[]> {
        return this.http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url: string = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => of(null))
            );
    }

    searchCapital(term: string): Observable<Country[]> {
        const url: string = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCapital = { term: term, countries }),
                tap(() => this.saveToLocalStorage())
            );
    }

    searchCountry(term: string): Observable<Country[]> {
        const url: string = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byCountries = { term: term, countries }),
                tap(() => this.saveToLocalStorage())
            )
    }

    searchRegion(region: Region): Observable<Country[]> {
        const url: string = `${this.apiUrl}/region/${region}`;
        return this.getCountriesRequest(url)
            .pipe(
                tap(countries => this.cacheStore.byRegion = { region, countries }),
                tap(() => this.saveToLocalStorage())
            )
    }

}