<script>
import '../assets/css/joao.css'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Gallery from '../components/Gallery.vue'

const items = [
  { id: 1, title: 'Rolls-Royce Phantom', year: '1925', tag: 'Luxo', desc: 'Rolls-Royce Phantom', image: '/src/assets/img_luxo/img_luxo1.webp' },
  { id: 2, title: 'Bentley Continental GT', year: '2003', tag: 'GT', desc: 'Bentley Continental GT', image: '/src/assets/img_luxo/img_luxo2.jfif' },
  { id: 3, title: 'Mercedes Classe S', year: '1972', tag: 'Luxo', desc: 'Mercedes Classe S', image: '/src/assets/img_luxo/img_luxo3.jpg' }
]

export default {
  components: { Header, Footer, Gallery },
  data() {
    return {
      items,
      form: { nome: '', email: '', carro: '', mensagem: '', newsletter: false },
      formErrors: {},
      submitted: false
    }
  },
  methods: {
  
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

        <section class="hero hero-luxo" id="hero">
            <div class="hero-content">
                <p class="hero-subtitulo">Sofisticação sem limites</p>
                <h1 class="hero-titulo">Carros de <span class="texto-gold">Luxo</span></h1>
                <p class="hero-desc">
                    Onde a engenharia encontra a arte. Os automóveis de luxo redefinem
                    conforto, exclusividade e elegância em cada detalhe meticulosamente trabalhado.
                </p>
                <a href="#galeria" class="btn btn-gold">Ver Galeria</a>
            </div>
        </section>

        <!--SOBRE-->
        <section class="sobre" id="sobre">
            <div class="container">
                <div class="sobre-flex">
                    <div class="sobre-texto">
                        <span class="tag tag-gold">Premium</span>
                        <h2 class="titulo-secao">A Arte do <span class="texto-gold">Luxo</span></h2>
                        <p>
                            Os carros de luxo são a representação máxima do requinte automotivo.
                            Cada detalhe é elaborado com materiais nobres — couro genuíno, madeiras
                            exóticas, metais preciosos — criando ambientes que rivalizam com os
                            melhores hotéis do mundo.
                        </p>
                        <p>
                            Mais do que transporte, são declarações de status e conquista pessoal.
                        </p>
                    </div>
                    <div class="sobre-img">
                        <img src="../assets/img_luxo/bmw_sobre.png" alt="Carro de Luxo">
                    </div>
                </div>
            </div>
        </section>

        <!--Galeria: componente reutilizável -->
        <section class="galeria secao-escura" id="galeria">
          <Gallery :items="items" />
        </section>

        <section class="contato" id="contato">
          <div class="container">
            <div class="contato-grid">

              <div class="contato-info">
                <span class="tag tag-gold">Contato</span>
                <h2 class="titulo-secao">Fale com <span class="texto-gold">João</span></h2>
                <p>Aprecia o refinamento e a exclusividade? Entre em contato!</p>
                <ul class="contato-lista">
                  <li>👑 Tema: Carros de Luxo</li>
                  <li>👤 Responsável: João</li>
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
                  <label for="carro-favorito">Carro de Luxo Favorito</label>
                  <select v-model="form.carro" id="carro-favorito">
                    <option value="">Selecione...</option>
                    <option value="rolls-royce">Rolls-Royce Phantom</option>
                    <option value="bentley">Bentley Continental GT</option>
                    <option value="mercedes-s">Mercedes Classe S</option>
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
                  <label for="newsletter">Quero receber novidades sobre carros de luxo</label>
                </div>
                <button type="submit" class="btn btn-gold btn-full">Enviar</button>

                <div v-if="submitted" class="sucesso">Mensagem enviada com sucesso!</div>
              </form>

            </div>
          </div>
        </section>

        <!-- Footer componente -->
        <Footer />

</template>