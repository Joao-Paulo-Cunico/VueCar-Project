<script>
import '../assets/css/luis.css'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Gallery from '../components/Gallery.vue'

const items = [
    { id: 1, title: 'McLaren P1', year: '2013', tag: 'Híbrido', desc: 'McLaren P1 amarela', image: '/src/assets/img/McLaren.jpg' },
    { id: 2, title: 'Ferrari F8', year: '2019', tag: 'V8', desc: 'Ferrari F8 Tributo', image: '/src/assets/img/ferrari.jpg' },
    { id: 3, title: 'Porsche 911 GT3 RS', year: '2022', tag: 'Pista', desc: 'Porsche 911 GT3 RS', image: '/src/assets/img/porsche.jpg' }
]

export default {
    components: { Header, Footer, Gallery },
    data() { return { items } }
}
</script>


<template>

    <Header />

    <main>
        <section class="hero hero-esportivo" id="hero">
            <div class="hero-content">
                <p class="hero-subtitulo">Adrenalina Sem Limites</p>
                <h1 class="hero-titulo">Carros <br><span>Esportivos</span></h1>
                <p class="hero-desc">
                    Onde a performance encontra a engenharia. Os supercarros esportivos redefinem
                    velocidade, aerodinâmica e precisão em cada curva meticulosamente projetada.
                </p>
                <a href="#galeria" class="btn btn-gold">Ver Galeria</a>
            </div>
        </section>

        <section class="sobre" id="sobre">
            <div class="container">
                <div class="sobre-flex">
                    <div class="sobre-texto">
                        <span class="tag tag-gold">Premium Performance</span>
                        <h2 class="titulo-secao">A Arte da <span>Velocidade</span></h2>
                        <p>Os carros esportivos são a representação máxima da performance automotiva. Cada detalhe é
                            elaborado com materiais nobres — fibra de carbono, titânio, ligas ultraleves — criando
                            máquinas que desafiam a física e os recordes do mundo.</p>
                        <p>Mais do que transporte, são declarações de engenharia pura e paixão por dirigir.</p>
                    </div>
                    <div class="destaque">
                        <img src="../assets/img/Carros esportivos.jpg" alt="Carro esportivo em estúdio escuro">
                    </div>
                </div>
            </div>
        </section>

        <section class="galeria" id="galeria">
          <!-- usamos o componente Gallery para mostrar os itens e permitir busca/filtro -->
          <Gallery :items="items" />
        </section>

        <Footer />
    </main>

</template>