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
        'lenguaje de programación usado en el <em>software Adobe Flash</em>.',
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
        'Adobe.com. (Sin fecha). Importación de imágenes 3D desde Photoshop e Illustrator.',
      link:
        'https://helpx.adobe.com/es/after-effects/using/preparing-importing-3d-image-files.html',
    },
    {
      referencia:
        'Angelina, C.  (2013). Arquitectura del motor de videojuegos. Universidad de Castilla. Escuela Superior de Informática.',
      link: '',
    },
    {
      referencia:
        'Arquitectura del motor de videojuegos. Universidad de Castilla. Escuela Superior de Informática. Fernández Vallejo, D.; y Martín Angelina, C. (2015). Desarrollo de videojuegos: un enfoque práctico.',
      link:
        'https://books.google.com.co/books?id=ylnABAAAQBAJ&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia:
        'Arte y empresa. (Sin fecha). Diseño de personajes. Recuperado el 16 de julio de 2017.',
      link: 'http://www.arteyempresa.ugto.mx/docs/esp_personjaes.pdf ',
    },
    {
      referencia:
        'Creación de personajes y escenarios para entornos de video juegos en 3D.',
      link: 'https://riull.ull.es/xmlui/handle/915/1346',
    },
    {
      referencia:
        'EducaciónPlástica.net. (Sin fecha). Elementos del lenguaje gráfico-plástico.',
      link:
        'http://www.educacionplastica.net/epv1eso/impress/pdfs/elementos_del_lenguaje.pdf',
    },
    {
      referencia:
        'Garcerá Moreno, M. (2014). Diseño de personaje para animación. Recuperado el 10 de julio de 2017.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/49941/TFG.%20Dise%C3%B1o%20de%20personaje%20para%20animaci%C3%B3n.%20Magode%2C%20la%20bruja.%20Mar%C3%ADa%20Garcer%C3%A1%20Moreno.pdf?sequence=1',
    },
    {
      referencia:
        'McGraw-Hill Education. (Sin fecha). Elementos visuales de la imagen. Recuperado el 15 de julio de 2017.',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/844817724X.pdf',
    },
    {
      referencia:
        'Rhinoceros. (Sin fecha). Rhinoceros. Recuperado el 15 de julio de 2017.',
      link: 'https://www.rhino3d.com/es',
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
