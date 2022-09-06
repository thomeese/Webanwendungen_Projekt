import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings ={
    darkModeOn:false,
    theme:'light'
  };
  constructor() {
    if(localStorage.getItem('settings')){
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.activateTheme();
  }
  toggleDarkmode(event){
    console.log(event);
    if(event.detail.checked){
      this.settings.darkModeOn = true;
      this.settings.theme = 'dark';
      this.persist();
      this.activateTheme();
    }else{
      this.settings.darkModeOn = false;
      this.settings.theme = 'light';
      this.persist();
      this.activateTheme();
    }
  }
  persist(){
    localStorage.setItem('settings',JSON.stringify(this.settings));
  }
  activateTheme(){
    document.body.setAttribute('color-theme',this.settings.theme);
  }

}
