export default {
  global: {
    componenteFormativo: 'Desarrollo de la ilustración',
    descripcionCurso:
      'La ilustración de personajes para medios digitales utiliza diferentes tipos de herramientas tecnológicas para su desarrollo, utilizando <em>software</em> especializado que permite generar productos, vectores, mapas de bits, animaciones digitales, modelado 3D, <em>renders</em> en variadas aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner_princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Animación y <em>software</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Representación final 2D-3D',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52460002_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Animación de personajes digitales.',
      referencia:
        'Técnicas de animación. (2020). Animatrópolis. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J9R7hBRzyYI&t=3s',
    },
  ],
  glosario: [
    {
      termino: '<em>ActionScript</em>',
      significado:
        'lenguaje de programación usado en el <em>software</em> Adobe Flash.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'conjunto de librerías que brindan funcionalidades  preconstruidas facilitando la producción de contenidos.',
    },
    {
      termino: '<em>Motion graphics</em>',
      significado:
        'término referido a un estilo de animación que comprende la transición formal de objetos en 2D o en 3D.',
    },
    {
      termino: '<em>Stop motion</em>',
      significado: 'técnica de animación cuadro a cuadro de imágenes.',
    },
    {
      termino: 'Cuadro a cuadro',
      significado:
        'técnica de generación de movimiento a partir de varias imágenes estáticas en secuencia que, agrupadas, evidencian un movimiento.',
    },
    {
      termino: 'Fotograma',
      significado: 'cada una de las imágenes que conforman una animación.',
    },
    {
      termino: 'Modelado 3D',
      significado:
        'tipo de ilustración que se basa en la construcción de objetos tridimensionales a partir de figuras geométricas desde un <em>software</em> de diseño 3D.',
    },
    {
      termino: 'Motor de render',
      significado:
        'es un <em>plugin</em>, generalmente integrado a un <em>software</em> de modelado 3D, que permite crear una vista realista del modelo a partir de la aplicación de materiales y la manipulación de la iluminación.',
    },
    {
      termino: 'Renderizar',
      significado:
        'proceso de otorgar materiales y elementos de iluminación a un modelado 3D.',
    },
  ],
  referencias: [
    {
      referencia:
        'AccesoPerú.com. (s.f.). Los esquemas de colores. El círculo cromático.',
      link:
        'https://s3.accesoperu.com/wp6/includes/htmlarea/mezclador/ayuda/ec.htm',
    },
    {
      referencia: 'Arte y empresa. (s.f.). Diseño de personajes.',
      link: 'http://www.arteyempresa.ugto.mx/docs/esp_personjaes.pdf',
    },
    {
      referencia:
        'Blackburn Berezina, V. (2016). Motion Capture History, Technologies and Applications. BerezinaBlackburnCV_2017.pdf (ohio-state.edu).',
      link:
        'https://www.asc.ohio-state.edu/berezina-blackburn.1/BerezinaBlackburnCV_2017.pdf',
    },
    {
      referencia: 'Cahuex, A. (2014). Ilustración digital.',
      link: 'https://dle.rae.es/anatom%C3%ADa',
    },
    {
      referencia: 'Canon del cuerpo humano. (s.f.).',
      link:
        'https://guiapolyclay.jimdofree.com/anatom%C3%ADa-art%C3%ADstica/canon-del-cuerpo-humano/',
    },
    {
      referencia:
        'Chacón Gordillo, P. D. (2011). ¿Cómo interpretan los niños y niñas de educación infantil las series y películas de animación y los videojuegos? Un análisis a través del dibujo (Tesis doctoral). Editorial de la Universidad de Granada.',
      link: 'https://digibug.ugr.es/handle/10481/18411',
    },
    {
      referencia:
        'Expresiones de un personaje (2024). Freepik.es. Personaje mostrando emociones | Vector Gratis (freepik.es).',
      link: '',
    },
    {
      referencia:
        'Garcerá Moreno, M. (s.f.). Diseño de personaje para animación.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/49941/TFG.%20Dise%C3%B1o%20de%20%20personaje%20para%20animaci%C3%B3n.%20Magode%2C%20la%20bruja.%20Mar%C3%ADa%20Garcer%C3%A1%20Moreno.pdf?sequence=1',
    },
    {
      referencia:
        'Garrido Domínguez, A. (1996). El texto narrativo. Diseño de personajes by Luz Deicy Garces Montano – Issuu.',
      link: '',
    },
    {
      referencia:
        'González, R. (2011). Apuntes generales de anatomía morfológica aplicada cánones y proporciones.',
      link:
        'https://docta.ucm.es/entities/publication/6e015a24-5080-44c4-93d3-5058aaccf127',
    },
    {
      referencia:
        'Hoja del personaje. Reddit Media. (s.f.) Custom Curse-of-Strahd Character Sheet 5e (download in comment) : r/CurseofStrahd (reddit.com).',
      link:
        'https://www.reddit.com/r/CurseofStrahd/comments/11pptos/custom_curseofstrahd_character_sheet_5e_download/?rdt=52008',
    },
    {
      referencia:
        'López Fumero, D. (2015). Creación de personajes y escenarios para entornos de video juegos en 3D.',
      link: 'https://riull.ull.es/xmlui/handle/915/1346',
    },
    {
      referencia:
        'Migliónico Molina, R. (s.f.). Qué es el brief y cómo realizarlo.',
      link:
        'https://rossami.com/kafka-y-praga-praga-y-kafka/lengua-mortal-no-dice-lo-que-dentro-sentia-leopardi/para-que-lean-y-con-gusto/que-es-el-brief-y-como-realizarlo/',
    },
    {
      referencia: 'Muñis, R. (s.f.). Atributos de producto.',
      link: 'https://www.marketing-xxi.com/atributos-de-producto-35.htm',
    },
    {
      referencia:
        'Navarro Lizandra, J. L. (s.f.). Fundamentos del diseño. Temas para la introducción a los fundamentos del diseño.',
      link:
        'https://books.google.com.co/books?id=hUyeuVdFgk8C&pg=PA38&lpg=PA38&dq=colores+principales+del+c%C3%ADrculo+que+no+se+obtienen+con+la+mezcla+de+ning%C3%BAn+otro+color.+Con+estos+surgen+la+mayor%C3%ADa+de+los+otros+colores.+Son+rojo,+amarillo+y+azul.&source=bl&ots=z9gr9owF4w&sig=XuMPPUrvWQVvNRt1BT0TxHL1WW8&hl=es&sa=X&ved=0ahUKEwiLpoTWzMDUAhVGQSYKHQIBDjIQ6AEIJDAA#v=onepage&q=colores%20principales%20del%20c%C3%ADrculo%20que%20no%20se%20obtienen%20con%20la%20mezcla%20de%20ning%C3%BAn%20otro%20color.%20Con%20estos%20surgen%20la%20mayor%C3%ADa%20de%20los%20otros%20colores.%20Son%20rojo%2C%20amarillo%20y%20azul.&f=false',
    },
    {
      referencia: 'Nogueira, P. (2011). Motion Capture Fundamentals.',
      link: 'https://paginas.fe.up.pt/~prodei/dsie12/papers/paper_7.pdf',
    },
    {
      referencia:
        'Personaje textura. Freepik.es (2024). Una figura caprichosa se levanta sin esfuerzo rodeada de luz etérea y sombras tranquilas. | Imagen Premium generada con IA (freepik.es).',
      link: '',
    },
    {
      referencia: 'Real Academia Española. (s.f.). Anatomía.',
      link: 'https://dle.rae.es/anatom%C3%ADa',
    },
    {
      referencia:
        'Reina Flores, M. del C. (s.f.). Series animadas y población infantil.',
      link:
        'https://www.revistacomunicar.com/verpdf.php?numero=25&articulo=25-2005-194',
    },
    {
      referencia:
        'Sotelino Couñago, A. (2015). Psicoviñetas: la psicología a través del cómic. GuiandenaprendizajenRAP2 385f12aca35d269 PDF | PDF | Diseño | Caso de estudio (scribd.com).',
      link:
        'https://es.scribd.com/document/471148693/GuiandenaprendizajenRAP2-385f12aca35d269-pdf',
    },
    {
      referencia:
        'Técnicas artísticas (s.f.). Estudio descriptivo. Recuperado el 8 de octubre de 2024.',
      link:
        'https://artistica.mineduc.cl/wp-content/uploads/sites/58/2016/04/TECNICAS-ARTISTICAS.pdf',
    },
    {
      referencia:
        'Trazos de lápiz de un personaje. (2024). Freepik.es. Fotografías renderizadas en 3D de dibujos de personajes de caricaturas y animales | Imagen Premium generada con IA (freepik.es).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de recursos educativos digitales (RED)',
          centro: 'Dirección general',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Elena Montoya Rendón',
          cargo: 'Asesora pedagógica',
          centro:
            'Centro de diseño e innovación tecnológica industrial – Regional Risaralda',
        },
        {
          nombre: 'Marcela María Cardona Molina',
          cargo: 'Instructora',
          centro:
            'Centro de diseño e innovación tecnológica industrial – Regional Risaralda',
        },
        {
          nombre: 'Luis Guillermo Álvarez García',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
