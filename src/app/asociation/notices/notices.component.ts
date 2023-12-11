import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Notice {
  image: string;
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
  notices: Notice[] = [
    {
      image: 'assets/notices01.jpg',
      title: '¡Salud para Todos!',
      resumen: 'Estuvimos en el parque Raúl Abugattás, fue el escenario de una importante jornada de salud integral gratuita. Nuestros especialistas en diversas áreas estuvieron presentes para atender a los vecinos. Desde chequeos médicos hasta consultas especializadas.Seguimos trabajando para mejorar la calidad de vida de nuestra comunidad.'
    },
    {
      image: 'assets/notices02.jpg',
      title: '¡Cuidar de ti es nuestra prioridad!',
      resumen: 'El dia 19 de noviembre realizaremos una importante campaña de salud gratuita en el Parque Raúl Abugattás, desde las 8:30 am hasta las 5:30pm. ¿Qué podrás encontrar? Exámenes de agudeza visual, covertest, evaluaciones de baja visión y mucho más. Pero eso no es todo, también contaremos con servicios especializados a un costo social. '
    },
    {
      image: 'assets/notices03.jpg',
      title: '¡Salud para todos nuestros hermanos y hermanas!',
      resumen: 'Gracias al apoyo de múltiples actores solidarios, logramos realizar una campaña de salud más en el distrito de Chorrillos, acercando la atención médica básica a decenas de personas de bajos recursos que no pueden acceder a los servicios de salud de forma regular. Logramos brindar 116 atenciones en los servicios de triaje, medicina general, vacunación, odontología, optometría y oftalmología, además de sesiones educativas en salud.'
    },
    {
      image: 'assets/notices04.jpg',
      title: 'Campaña de salud integral para toda la familia',
      resumen: 'Auspicia la junta directiva de Ampliacion. 1 de Villa san Luis. Especialidades: Triaje, Oftalmologia, Resonancia Magnetica, Limpieza de Oidos, Limpieza Facial, Enfermeria. El Domingo 5 de Noviembre, a partir de las 9:00am hasta las 2:00pm. Frente al Local Santa Rosa, Pamplona Alta SJM'
    },
    {
      image: 'assets/notices05.jpg',
      title: 'Campaña de Salud Visual',
      resumen: 'La Gerencia de Desarrollo Social de la Municipalidad de Punta Negra en coordinación con ópticas JVC, llevarán a cabo una nueva campaña de salud visual.📍Dia: Martes 31 de agosto📍Horario: 09:00 a.m. a 04:00 p.m.📍Lugar: Plaza San José de Punta Negra'
    },
    {
      image: 'assets/notices06.jpg',
      title: 'Campaña Gratuita Oftalmológica',
      resumen: 'Sabado 22 de Mayo, en la Losa Deportiva del A.H Portada del Sol - Nueva Rinconada. Apartir de las 9:00 am hasta las 04:00 pm'
    },
    {
      image: 'assets/notices07.jpg',
      title: 'Campaña de Salud Gratuita',
      resumen: 'Chequeo para todos en general. Descarte de miopia, astigmatismo e hipermetropia, resinas c/ antireflejo policarbonato, blue defense.'
    },
    {
      image: 'assets/notices08.jpg',
      title: 'Campaña de Salud Integral',
      resumen: 'Campaña de salud integral en VMT Parque Miguel Grau ( ref. Al lado de la Casa de la Juventud) - Vacunación COVID (todas las edades) - Examen visual gratuito Fecha y horarios: Solo por hoy de 9:00 a.m. - 1:30 p.m.'
    },
    {
      image: 'assets/notices09.jpg',
      title: 'Promoción por el mes morado',
      resumen: 'Con OPTICAS Jvc, este mes Octubre morado los niños son premiados con sus resinas antireflex Gratis ..solo para la montura .*aplica medidas +2.00/-2.00.'
    },
  ]

  constructor(_injector:Injector){
    this.activatedRoute = _injector.get(ActivatedRoute);
  }
}
