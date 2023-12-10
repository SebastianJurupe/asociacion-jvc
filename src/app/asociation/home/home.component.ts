import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

interface CounterData {
  aditional: string;
  value: number;
  text: string;
  initialCount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren('counterEl') counters!: QueryList<ElementRef>;

  countersData: CounterData[] = [
    { aditional: '+',value: 2000, text: 'Personas atendidas por nuestros especialistas', initialCount: 1800 },
    { aditional: '+',value: 500, text: 'Familias satisfechas por nuestra labor', initialCount: 300 },
    { aditional: '+',value: 200, text: 'Eventos que hemos participado', initialCount: 0 }
  ];

  imagePaths: string[] = [
    'assets/logo1.png',
    'assets/UNMS.png',
    'assets/logo2.png',
    'assets/UNC.png',
    'assets/logo3.png',
    'assets/UNTELS.png',
    'assets/logo4.png',
    'assets/UniversidadCajamarca.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    if (this.counters) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.counters.forEach(counter => observer.observe(counter.nativeElement));
    }
  }


  animateCounter(counter: HTMLElement): void {
    const targetAttribute = counter.getAttribute('data-target');
    if (targetAttribute !== null) {
      const targetNumber = +targetAttribute;
      const counterIndex = this.counters.toArray().findIndex(item => item.nativeElement === counter);

      const initialCount = this.countersData[counterIndex].initialCount;

      let currentCount = initialCount;
      const intervalTime = 0.3;

      const counterInterval = setInterval(() => {
        if (currentCount <= targetNumber) {
          const counterValue = counter.querySelector('.counter-value');
          if (counterValue) {
            counterValue.textContent = currentCount.toString();
          }
          currentCount++;
        } else {
          clearInterval(counterInterval);
        }
      }, intervalTime);
    }
  }
}
