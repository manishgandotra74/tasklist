import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';
import { ToDoComponentComponent } from './components/to-do-component/to-do-component.component';
import { ToDoListComponentComponent } from './components/to-do-list-component/to-do-list-component.component';
import { DoneListComponentComponent } from './components/done-list-component/done-list-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdModule } from './antd-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_ICONS, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskServicesService } from './task-services/task-services.service';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponentComponent,
    ToDoListComponentComponent,
    DoneListComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntdModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }, TaskServicesService, NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
