
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Nation } from '../model/nation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit,OnDestroy
{
    nations: Nation[] = [];
    hilitedName = '...';
    bgColor = '';
    currentNation!: Nation;
    name = "notbasic";
    constructor(
        private http:HttpClient,
        private changeDetectorRef:ChangeDetectorRef,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getAllNations();
    }
    getAllNations() {
      const nations = this.http.get<Nation[]>( 'assets/data.json' )
        .pipe()
        .subscribe( (nations:Nation[]) => {
          this.nations = nations ? nations : [];
          this.changeDetectorRef.detectChanges();
        } );
    }
    unhilite( nation:Nation ) {

    nation.isSelected = false;
    this.changeDetectorRef.detectChanges();

    //alert(nation.name);
    //(document.querySelector('.app-alerts') as HTMLElement).style.top = '150px';

  }
    hilite( nation:Nation ) {
      this.currentNation = nation;
      this.hilitedName = nation.name;
      nation.isSelected = true;
      this.changeDetectorRef.detectChanges();
        //(document.querySelector('.app-alerts') as HTMLElement).style.top = '150px';
      this.location.replaceState('/' + nation.alpha3Code.toLowerCase());
    }

    ngOnDestroy(): void {
    }
}
