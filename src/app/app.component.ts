import { Component } from '@angular/core';

interface ContactData {
  img: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'asociation-jvc';
  contact: ContactData[] = [
    { img: '', text: 'Av. Solidaridad S/N Mz.T4 Lt 8<br> sector Alfonso Ugarte SJM' },
    { img: '', text: '(+51) 987654321' },
    { img: '', text: '(+51) 987654321' },
    { img: '', text: 'Lunes a Sábado: 8: 00 am a 7:00 pm' },
    { img: '', text: 'informes@opticasjvc.com' },
  ]

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit(): void {
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }
}
