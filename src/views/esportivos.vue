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
    data() {
        return {
            items,
            // Estrutura do formulário de contato
            form: { nome: '', email: '', carro: '', mensagem: '', newsletter: false },
            formErrors: {},
            submitted: false
        }
    },
    methods: {
        // Valida e processa o envio do formulário
        submitForm(e) {
            e.preventDefault()
            this.formErrors = {}
            if (!this.form.nome) this.formErrors.nome = 'Nome é obrigatório.'
            if (!this.form.email) this.formErrors.email = 'Email é obrigatório.'
            if (!this.form.mensagem) this.formErrors.mensagem = 'Mensagem é obrigatória.'
            if (Object.keys(this.formErrors).length === 0) {
                this.submitted = true
                this.form = { nome: '', email: '', carro: '', mensagem: '', newsletter: false }
                setTimeout(() => (this.submitted = false), 4000)
            }
        }
    }
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

        <!-- Formulário de contato (Ligeiro) -->
        <section class="contato" id="contato">
            <div class="container">
                <div class="contato-grid">
                    <div class="contato-info">
                        <span class="tag tag-gold">Contato</span>
                        <h2 class="titulo-secao">Fale com <span class="texto-gold">Ligeiro</span></h2>
                        <p>Fascinado por velocidade e performance? Entre em contato!</p>
                        <ul class="contato-lista">
                            <li>⚡ Tema: Carros Esportivos</li>
                            <li>👤 Responsável: Ligeiro</li>
                            <li>📚 Engenharia de Software — 3° Período</li>
                        </ul>
                    </div>
                    <form class="form" @submit.prevent="submitForm">
                        <div class="form-grupo">
                            <label for="nome">Nome *</label>
                            <input v-model="form.nome" type="text" id="nome" placeholder="Seu nome" />
                            <div v-if="formErrors.nome" class="erro">{{ formErrors.nome }}</div>
                        </div>
                        <div class="form-grupo">
                            <label for="email">E-mail *</label>
                            <input v-model="form.email" type="email" id="email" placeholder="seu@email.com" />
                            <div v-if="formErrors.email" class="erro">{{ formErrors.email }}</div>
                        </div>
                        <div class="form-grupo">
                            <label for="carro-favorito">Supercarro Favorito</label>
                            <select v-model="form.carro" id="carro-favorito">
                                <option value="">Selecione...</option>
                                <option value="mclaren">McLaren P1</option>
                                <option value="ferrari">Ferrari F8</option>
                                <option value="porsche">Porsche 911 GT3 RS</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        <div class="form-grupo">
                            <label for="mensagem">Mensagem *</label>
                            <textarea v-model="form.mensagem" id="mensagem" rows="4" placeholder="Sua mensagem..."></textarea>
                            <div v-if="formErrors.mensagem" class="erro">{{ formErrors.mensagem }}</div>
                        </div>
                        <div class="form-grupo form-check">
                            <input v-model="form.newsletter" type="checkbox" id="newsletter" />
                            <label for="newsletter">Quero receber novidades sobre esportivos</label>
                        </div>
                        <button type="submit" class="btn btn-gold btn-full">Enviar</button>
                        <div v-if="submitted" class="sucesso">Mensagem enviada com sucesso!</div>
                    </form>
                </div>
            </div>
        </section>

        <Footer />
    </main>

</template>