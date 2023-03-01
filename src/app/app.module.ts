import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { DemoComponent } from './demo/demo.component';
import { PassGeneratorComponent } from './pass-generator/pass-generator.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { NgForPracticeComponent   } from './ng-for-practice/ng-for-practice.component';
import { NgForpractice1Component    } from './ng-forpractice1/ng-forpractice1.component';
import { NgForProductDataComponent } from './ng-for-product-data/ng-for-product-data.component';
import { NgIfPracticeComponent      } from './ng-if-practice/ng-if-practice.component';
import { NgIfUserDataComponent                          } from './ng-if-user-data/ng-if-user-data.component';
import { NgForNgIfPracticeComponent                          } from './ng-for-ng-if-practice/ng-for-ng-if-practice.component';
import { NgSwitchComponent                          } from './ng-switch/ng-switch.component';
import { DirectivesAssignComponent                          } from './directives-assign/directives-assign.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [

    AppComponent,
    DemoComponent,
    PassGeneratorComponent,
    NgforComponent,
    ReactiveFormComponent,
    NgForPracticeComponent ,  
NgForpractice1Component  , 
NgForProductDataComponent ,
NgIfPracticeComponent  ,   
NgIfUserDataComponent ,    
NgForNgIfPracticeComponent,
NgSwitchComponent   ,      
DirectivesAssignComponent ,
TemplateFormsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
