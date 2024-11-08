<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: white")
      h1 Introducción
    p.mb-3 El componente formativo desarrollo de la ilustración, se enfoca en describir la utilización de diferentes medios digitales, <em>software</em> y representaciones en 2D y 3D para personajes digitales. De esta manera, en este material de formación se estudiarán estas herramientas, para que el aprendiz utilice de la mejor manera diferentes tipos de herramientas tecnológicas. Bienvenido a este componente formativo:
    
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/CtVZeUImYlA?si=nwr7Ma1C6USiDJK7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Desarrollo de la ilustración.
    p.my-3 El cine, la televisión y los videojuegos se potencializan día a día, gracias al uso de los adelantos tecnológicos en su desarrollo, por lo que diseñar e ilustrar personajes es de gran importancia para la producción audiovisual, acciones consolidadas a través de la utilización de <em>software</em> especializado que permite generar productos de mayor calidad y cada vez, más cercanos a la realidad.

    .cajon.color-secundario.p-4(style="background: #FDEFF5")
          p.mt-0.mb-0 De esta manera, es necesario revisar en este material de formación los diferentes tipos de animación ejecutables, el <em>software</em> usado para ilustrar por medio de vectores, los distintos programas para la edición de mapas de bits, las distintas opciones de <em>software</em> para el modelado 3D, personajes, generación de productos, renderizado, animación y los diferentes motores de render existentes, con el fin de diseñar personajes para diferentes aplicaciones.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
