import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Hero, Publisher } from '../../interfaces';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';



@Component( {
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
} )
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup( {
    id: new FormControl<string>( '' ),
    superhero: new FormControl<string>( '', { nonNullable: true } ),
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl( '' ),
    first_appearance: new FormControl( '' ),
    characters: new FormControl( '' ),
    alt_img: new FormControl( '' ),
  } );

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private heroesService: HeroesService,
    private router: Router,
    private snackBard: MatSnackBar,
  ) { }

  ngOnInit(): void {

    if ( !this.router.url.includes( 'edit' ) ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.heroesService.getHeroById( id ) )
      ).subscribe( hero => {
        if ( !hero ) return this.router.navigateByUrl( '/' );
        this.heroForm.reset( hero );
        return;
      } );
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {

    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {

      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          this.showSnackBard( `${ hero.superhero } updated!` );
        } );

      return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        this.router.navigate( [ '/heroes/edit', hero.id ] );
        this.showSnackBard( `${ hero.superhero } created!` );
      } );
  }

  onDeleteHero() {
    if ( !this.currentHero.id ) throw Error( 'Hero id is required' );

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    } );

    dialogRef.afterClosed()
      .pipe(
        filter( ( result: boolean ) => result ),
        switchMap( () => this.heroesService.deleteHeroById( this.currentHero.id ) ),
        filter( ( wasDeleted: boolean ) => wasDeleted ),
      )
      .subscribe( () => {
        this.router.navigate( [ '/heroes' ] );
      } );
  }

  showSnackBard( message: string ): void {
    this.snackBard.open( message, 'done', {
      duration: 2500
    } );
  }
}
