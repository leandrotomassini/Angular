import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponen } from './listado/listado.component';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponen
    ],
    exports: [
        ListadoComponen
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}