import {ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Nation } from '../model/nation';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

  });
  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });
  it('should have default name', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    expect(home.hilitedName).toEqual('...');
  });
  it('should have 250 nations', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const home = fixture.componentInstance;
    fixture.detectChanges();
    //home.ngOnInit();

    expect(home.nations.length).toBe(250);
  });
});
