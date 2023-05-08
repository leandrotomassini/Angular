import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter.component';


@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule { }