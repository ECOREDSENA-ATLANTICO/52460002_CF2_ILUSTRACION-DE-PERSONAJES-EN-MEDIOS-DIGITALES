<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El desarrollo de la ilustración digital con <em>software</em> ha revolucionado el campo de la animación, permitiendo una mayor flexibilidad, creatividad y precisión en la creación de contenido visual animado. La animación es el proceso de crear la ilusión de movimiento al mostrar una serie de imágenes estáticas en rápida sucesión. Este campo se ha transformado significativamente con la evolución del <em>software</em>, ampliando las posibilidades creativas y técnicas en diversas industrias, desde el cine y la televisión hasta los videojuegos y la realidad virtual. Se utilizan variados tipos de <em>software</em> para 2D y 3D tales como Autodesk Maya, Blender, Construct2, y Rhinoceros.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
