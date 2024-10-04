<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Animación y <em>software</em>
      
      .row.justify-content-center.mb-3
        .col-lg-4.col-md-8(data-aos="fade-right")
          figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p.mb Técnica por la cual se otorga movimiento cuadro a cuadro a un dibujo, imagen o un modelado 3D. En la animación existen diferentes técnicas dependiendo del resultado a requerir.
          .cajon.color-secundario.p-4(style="background: #FDEFF5")
            p.mt-0.mb-0 Las técnicas de animación son métodos utilizados para crear la ilusión de movimiento en imágenes estáticas. Estas técnicas varían en su enfoque y herramientas, y cada una ofrece diferentes resultados y niveles de complejidad.
      .row.justify-content-center.my-3.fondo-imagen.p-4
        .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
          SlyderA(tipo="b")
            .row.px-3.pt-3
              .col-lg-6.mb-4.mb-md-0.align-content-center
                h4 Dibujos animados 2D
                  p.mt-4 Técnica de animación tradicional que consiste en dibujar cuadro a cuadro cada dibujo con sus respectivos componentes, escenario y personajes.
                  p.mt-3 Fuente: Pinterest

              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
            .row.px-5.pt-3
              .col-md-6.mb-4.mb-md-0.align-content-center
                h4 Stop motion
                  p.mt-4 Técnica que consiste en generar movimiento cuadro a cuadro a figuras, generalmente a escala, por medio de fotografías.
                  p.mt-3 Fuente: <a href="Stop Motion o Animación en Volumen ¿Qué es? (monsuton.com">Stop Motion o Animación en Volumen</a>

              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
            .row.px-5.pt-3
              .col-md-6.mb-4.mb-md-0.align-content-center
                h4 Animación 3D
                  p.mt-4 Llamada animación digital, es una técnica que se realiza en software de diseño 3D y su  principio es la creación de personajes por medio de figuras geométricas con profundidad, altura y ancho.
                  p.mt-3 Fuente: <a href="https://www.renderforest.com/es/blog/3d-animation">Animación 3D</a>

              .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
              
      h3(data-aos="fade-left").mb-3.mt-3.blue_icon Software para desarrollo de personajes

      p.mt-3.mb-5 Después de identificar el tipo de animación a realizar, se debe seleccionar el software que apoyará el diseño y construcción del personaje, entre algunos de estos programas informáticos se encuentran:

      .row.justify-content-center.align-content-center(data-aos="zoom-in")
        .col-lg-12
          TabsA.mb-5
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="Adobe animate")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Software profesional para realizar animaciones en 2D para aplicaciones en la web, la televisión y para el desarrollo de videojuegos. - Es una evolución del software Adobe Flash. Dentro de sus lenguajes de programación cuenta con Actionscript para proyectos Flash y Javascript para proyectos web basados en html5.
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="3DS Max")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Software de modelado 3D más reconocido en el mercado. Permite realizar modelado, renderizado, generación de fuentes de iluminación, composiciones digitales y animaciones con aplicaciones entre los videojuegos, el diseño de productos industriales, escenarios y la simulación estética de materiales reales. 
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="Rhinoceros")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Software en el que se puede crear, editar, modelar, animar y renderizar, sobre guras geométricas y mallas poligonales. Es una plataforma muy flexible para el diseño y modelado de guras orgánicas, porque ofrece la precisión necesaria para su manufactura, por lo que su enfoque es el diseño de prototipos de ingeniería, el análisis, validación y la fabricación de cualquier producto.
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img9.png', alt='Imagen decorativa')
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="Construct 2")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Editor de diseño que proporciona una interfaz visual para diseñar por niveles. Se puede arrastrar, rotar y cambiar el tamaño de los objetos, visualizar los efectos aplicados.
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen decorativa')
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="Blender")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Software que inició para modelado 3D de uso y descarga libre. Su diseño modular y abierto ha permitido que los usuarios creen, modifiquen y mejoren sus aplicaciones, lo que ha generado un software polifacético, colaborativo, potente y versátil en su instalación, portabilidad y funcionalidad.
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen decorativa')
            .tarjeta.p-4(style="background: #E5E4FF")(titulo="Maya")
              .row.justify-content-center.p-3
                .col-lg-5.col-md-12.align-content-center  
                  p Software de la casa Autodesk, que surge para el modelado y animación de objetos en 3D como personajes, escenarios y motion graphics con un énfasis especial en efectos para cine.
                .col-lg-7.col.col-md-8
                  figure
                    img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')
          
          
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
