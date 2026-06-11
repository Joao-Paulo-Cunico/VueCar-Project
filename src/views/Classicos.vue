<script>
import '../assets/css/leo.css'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Gallery from '../components/Gallery.vue'

const items = [
    { id: 1, title: 'VW Fusca', year: '1959', tag: 'Ícone', desc: 'Fusca nacional clássico', image: '/src/assets/img_leo/fusca.jpg' },
    { id: 2, title: 'Chevrolet Opala', year: '1968', tag: 'Clássico', desc: 'Opala de 1968', image: '/src/assets/img_leo/opala.jpg' },
    { id: 3, title: 'Ford Maverick', year: '1973', tag: 'Muscle', desc: 'Maverick 1973', image: '/src/assets/img_leo/maverick.jpg' }
]

export default {
    components: { Header, Footer, Gallery },
    data() {
        return { items }
    }
}
</script>

<template>

    <!-- Usamos o componente Header para manter layout consistente -->
    <Header />

    <section class="hero hero-classico" id="hero">
        <div class="hero-content">
            <p class="hero-subtitulo">Uma viagem ao passado</p>
            <h1 class="hero-titulo">Carros <span>Clássicos</span></h1>
            <p class="hero-desc">
                A elegância, o charme e a história dos automóveis que definiram
                o design automotivo e conquistaram gerações inteiras.
            </p>
            <a href="#galeria" class="btn btn-primary">Ver Galeria</a>
        </div>
    </section>

    <section class="sobre" id="sobre">
        <div class="container">
            <div class="sobre-flex">
                <div class="sobre-texto">
                    <span class="tag">Era Clássica</span>
                    <h2 class="titulo-secao">O Início de <span>Tudo</span></h2>
                    <p>
                        Os carros clássicos são mais do que simples veículos — são obras de arte sobre rodas.
                        Construídos com atenção artesanal a cada detalhe, esses automóveis representam
                        uma época em que o design era a alma do carro.
                    </p>
                    <p>
                        De cromados brilhantes aos faróis redondos, cada curva conta uma história
                        de inovação e paixão pela engenharia.
                    </p>
                </div>
                <div class="sobre-img">
                    <img src="../assets/img_leo/iniciodetudo.jpg" alt="Carro Clássico">
                </div>
            </div>
        </div>
    </section>

    <section class="galeria secao-escura" id="galeria">
        <div class="container">
            <div class="secao-header">
                <span class="tag">Galeria</span>
                <h2 class="titulo-secao">Ícones <span>Imortais</span></h2>
                <p class="subtitulo-secao">Os automóveis que definiram uma era e nunca saíram de moda.</p>
            </div>

            <div class="galeria-bloco">
                <div class="galeria-subtitulo">
                    <span class="tag tag-br">Clássicos Brasileiros</span>
                </div>
                <div class="cards-grid">

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/fusca.jpg" alt="VW Fusca Nacional">
                            <div class="card-overlay"><span>O carro mais popular da história do Brasil</span>
                            </div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1959</span>
                            <h3>VW Fusca Nacional</h3>
                            <p>Produzido no Brasil a partir de 1959, o Fusca se tornou símbolo de uma geração
                                inteira.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/opala.jpg" alt="Chevrolet Opala">
                            <div class="card-overlay"><span>O carro mais querido do brasileiro </span></div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1968</span>
                            <h3>Chevrolet Opala</h3>
                            <p>Produzido exclusivamente para o Brasil, o Opala era sinônimo de potência e estilo
                                nos anos 70.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/maverick.jpg" alt="Ford Maverick">
                            <div class="card-overlay"><span>O esportivo favorito da época</span></div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1973</span>
                            <h3>Ford Maverick</h3>
                            <p>Produzido no Brasil entre 1973 e 1979, o Maverick virou lenda nas ruas — potente,
                                estiloso e disputadíssimo até hoje.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="galeria-divisor"></div>

            <div class="galeria-bloco">
                <div class="galeria-subtitulo">
                    <span class="tag tag-int">Clássicos Internacionais</span>
                </div>
                <div class="cards-grid">

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/landau.jpg" alt="Ford Landau">
                            <div class="card-overlay"><span>O luxo americano nas ruas do Brasil</span></div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1970</span>
                            <h3>Ford Landau</h3>
                            <p>Produzido no Brasil entre 1970 e 1983, o Landau era o topo de linha da Ford —
                                elegante, imponente e cheio de estilo.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/belair.jpg" alt="Chevrolet Bel Air">
                            <div class="card-overlay"><span>Símbolo dos anos dourados americanos</span></div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1957</span>
                            <h3>Chevrolet Bel Air</h3>
                            <p>Ícone dos anos 50, com design de cauda de foguete e cromados exuberantes.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-img-wrap">
                            <img src="../assets/img_leo/thunderbird.jpg" alt="Ford Thunderbird 1964">
                            <div class="card-overlay"><span>A elegância esportiva americana em seu auge</span>
                            </div>
                        </div>
                        <div class="card-corpo">
                            <span class="card-ano">1964</span>
                            <h3>Ford Thunderbird</h3>
                            <p>O "personal luxury car" que redefiniu o estilo americano — linhas limpas, motor
                                potente e um charme inconfundível.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>


    <div class="faixa-vintage">
        <p>✦ &nbsp; Descubra mais no EvoCar &nbsp; ✦</p>
    </div>

    <section class="cta-proxima">
        <div>
            <span class="tag">Explore Mais</span>
            <h2>Outras categorias do <span>EvoCar</span></h2>
            <p>Conheça as outras seções do projeto: esportivos e carros de luxo.</p>
            <div class="cta-row">
                <router-link to="/esportivos" class="btn btn-primary">Esportivos — Ligeiro →</router-link>
                <router-link to="/luxo" class="btn btn-outline">Luxo — João →</router-link>
            </div>
        </div>
    </section>




  <!-- Reaproveitamos o componente Gallery passando os itens via prop -->
  <Gallery :items="items" />

  <Footer />

</template>