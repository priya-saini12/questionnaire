import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/Material/material/material.module';
import { InputFieldComponent } from './Shared/components/input-field/input-field.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from './Shared/components/checkbox/checkbox.component';
import { RadioComponent } from './Shared/components/radio/radio.component';
import { QuestionsService } from './Shared/Services/questions.service';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    DialogBoxComponent,
    CheckboxComponent,
    RadioComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
