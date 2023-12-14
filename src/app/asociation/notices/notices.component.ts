import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalCompleteComponent } from './modal-complete/modal-complete.component';

export interface Notice {
  image: string[];
  title: string;
  resumen: string;
}

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent {

  private activatedRoute: ActivatedRoute;
  private dialog: MatDialog;

  @ViewChild('noticesSection') partnersSection!: ElementRef;

  modalSwitch: boolean = false;
  notices: Notice[] = [
    {
      image: ['assets/notices14_1.jpg','assets/notices14_2.jpg','assets/notices14_3.jpg','assets/notices14_5.jpg','assets/notices14_6.jpg','assets/notices14_7.jpg','assets/notices14_8.jpg','assets/notices14_9.jpg','assets/notices14_10.jpg','assets/notices14_11.jpg','assets/notices14_3.jpg','assets/notices14_12.jpg'],
      title: 'Presentes en Huancavelica',
      resumen: 'La Municipalidad de Pachacámac, a través de la Subgerencia de Recaudación y Ejecutoria Coactiva; Bienestar y Salud DCT y la Asociación JVC realizaron la “Campaña Tributaria” con el objetivo de acercar la municipalidad para que los vecinos cumplan con el pago de tributos, aprovechando descuentos y beneficios.'
    },
    {
      image: ['assets/notices13_1.jpg','assets/notices13_2.jpg','assets/notices13_3.jpg'],
      title: 'Presentes en Ayacucho',
      resumen: 'La Municipalidad de Pachacámac, a través de la Subgerencia de Recaudación y Ejecutoria Coactiva; Bienestar y Salud DCT y la Asociación JVC realizaron la “Campaña Tributaria” con el objetivo de acercar la municipalidad para que los vecinos cumplan con el pago de tributos, aprovechando descuentos y beneficios.'
    },
    {
      image: ['assets/notices01.jpg', 'assets/notices01_2.jpg', 'assets/notices01_3.jpg', 'assets/notices01_4.jpg', 'assets/notices01_5.jpg', 'assets/notices01_6.jpg', 'assets/notices01_7.jpg', 'assets/notices01_8.jpg', 'assets/notices01_9.jpg'],
      title: '¡Salud para Todos!',
      resumen: 'Estuvimos en el parque Raúl Abugattás, fue el escenario de una importante jornada de salud integral gratuita. Nuestros especialistas en diversas áreas estuvieron presentes para atender a los vecinos. Desde chequeos médicos hasta consultas especializadas.Seguimos trabajando para mejorar la calidad de vida de nuestra comunidad.'
    },
    {
      image: ['assets/notices02.jpg','assets/notices02_2.jpg'],
      title: '¡Cuidar de ti es nuestra prioridad!',
      resumen: 'El dia 19 de noviembre realizaremos una importante campaña de salud gratuita en el Parque Raúl Abugattás, desde las 8:30 am hasta las 5:30pm. ¿Qué podrás encontrar? Exámenes de agudeza visual, covertest, evaluaciones de baja visión y mucho más. Pero eso no es todo, también contaremos con servicios especializados a un costo social. '
    },
    {
      image: ['assets/notices03.jpg','assets/notices03_4.jpg','assets/notices03_5.jpg','assets/notices03_7.jpg','assets/notices03_8.jpg'],
      title: '¡Salud para todos nuestros hermanos y hermanas!',
      resumen: 'Gracias al apoyo de múltiples actores solidarios, logramos realizar una campaña de salud más en el distrito de Chorrillos, acercando la atención médica básica a decenas de personas de bajos recursos que no pueden acceder a los servicios de salud de forma regular. Logramos brindar 116 atenciones en los servicios de triaje, medicina general, vacunación, odontología, optometría y oftalmología, además de sesiones educativas en salud.'
    },
    {
      image: ['assets/notices04.jpg'],
      title: 'Campaña de salud integral para toda la familia',
      resumen: 'Auspicia la junta directiva de Ampliacion. 1 de Villa san Luis. Especialidades: Triaje, Oftalmologia, Resonancia Magnetica, Limpieza de Oidos, Limpieza Facial, Enfermeria. El Domingo 5 de Noviembre, a partir de las 9:00am hasta las 2:00pm. Frente al Local Santa Rosa, Pamplona Alta SJM'
    },
    {
      image: ['assets/notices05.jpg'],
      title: 'Campaña de Salud Visual',
      resumen: 'La Gerencia de Desarrollo Social de la Municipalidad de Punta Negra en coordinación con ópticas JVC, llevarán a cabo una nueva campaña de salud visual.📍Dia: Martes 31 de agosto📍Horario: 09:00 a.m. a 04:00 p.m.📍Lugar: Plaza San José de Punta Negra'
    },
    {
      image: ['assets/notices06.jpg'],
      title: 'Campaña Gratuita Oftalmológica',
      resumen: 'Sabado 22 de Mayo, en la Losa Deportiva del A.H Portada del Sol - Nueva Rinconada. Apartir de las 9:00 am hasta las 04:00 pm'
    },
    {
      image: ['assets/notices07.jpg','assets/notices07_1.jpg'],
      title: 'Campaña de Salud Gratuita',
      resumen: 'Chequeo para todos en general. Descarte de miopia, astigmatismo e hipermetropia, resinas c/ antireflejo policarbonato, blue defense.'
    },
    {
      image: ['assets/notices08.jpg'],
      title: 'Campaña de Salud Integral',
      resumen: 'Campaña de salud integral en VMT Parque Miguel Grau ( ref. Al lado de la Casa de la Juventud) - Vacunación COVID (todas las edades) - Examen visual gratuito Fecha y horarios: Solo por hoy de 9:00 a.m. - 1:30 p.m.'
    },
    {
      image: ['assets/notices09.jpg'],
      title: 'Promoción por el mes morado',
      resumen: 'Con OPTICAS Jvc, este mes Octubre morado los niños son premiados con sus resinas antireflex Gratis ..solo para la montura .*aplica medidas +2.00/-2.00.'
    },
    {
      image: ['assets/notices10_1.jpg','assets/notices10_2.jpg'],
      title: 'Jornada Integral de Salud en José Galvez',
      resumen: 'La Municipalidad de Villa María del Triunfo a través de la gerencia de Desarrollo Social en coordinación con la ONG Torres de Esperanza, Fisioterapia ZM Clinic, Optisalud, Asesoría Nutricional Asociación JVC, Podologia Pie Salud, Nutrición Clinica Lazos Rosados  y las agencias municipales del Distrito, llevaron a cabo una Jornada Social Integral de Salud,  para los villamarianos en LA ZONA DE JOSÉ GÁLVEZ, promoviendo la cultura de la prevención en la salud. '
    },
    {
      image: ['assets/notices11_1.jpg','assets/notices11_2.jpg'],
      title: 'Jornada Integral de Salud en Tablada de Lurín',
      resumen: 'Con el objetivo de acercamiento a la comunidad y que los vecinos conozcan que existen una serie de servicios de calidad a los que pueden acceder y empezar a crear una cultura del autocuidado para prevenir enfermedades que son prevenibles. Tu Municipalidad de Villa María del Triunfo  a través de la Gerencia de Desarrollo Social y las agencias municipales, llevó una exitosa Jornada Integral de Salud gratuita a los vecinos de Tablada de Lurín, en coordinación con la ONG MEDLIFE, ZM Clinic, SIDEM, Optisalud, Asociación JVC.🤝👩‍⚕️'
    },
    {
      image: ['assets/notices12_1.jpg','assets/notices12_2.jpg'],
      title: 'Trabajando por tu bienestar',
      resumen: 'La Municipalidad de Pachacámac, a través de la Subgerencia de Recaudación y Ejecutoria Coactiva; Bienestar y Salud DCT y la Asociación JVC realizaron la “Campaña Tributaria” con el objetivo de acercar la municipalidad para que los vecinos cumplan con el pago de tributos, aprovechando descuentos y beneficios.'
    },
    
  ]

  constructor(_injector: Injector) {
    this.activatedRoute = _injector.get(ActivatedRoute);
    this.dialog = _injector.get(MatDialog);
  }

  scrollToNotices() {
    const yOffset = this.partnersSection.nativeElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }

  openModal(notice: Notice) {
    const singleNoticeArray = [notice];
    this.dialog.open(ModalCompleteComponent, {
      data: {
        info: singleNoticeArray
      }
    });
  }
}
