import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { MechanicalIntegrityService } from './mechanical-integrity.service';
import { ProductsTableComponent } from './products-table/products-table.component';
import { MechanicalIntegrityComponent } from './mechanical-integrity/mechanical-integrity.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    MechanicalIntegrityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule
  ],
  providers: [
    MechanicalIntegrityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
