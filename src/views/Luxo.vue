<script>
import '../assets/css/joao.css'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import Gallery from '../components/Gallery.vue'

// Lista de itens da galeria como exemplo. Mantive este array localmente para
// mostrar como o `Gallery` consome dados via `props`. Em produção, isso
// pode vir de uma API ou de um store centralizado.
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
      // Estrutura do formulário convertida para `v-model`:
      // - mais fácil de validar e limpar após envio
      form: { nome: '', email: '', carro: '', mensagem: '', newsletter: false },
      formErrors: {},
      submitted: false
    }
  },
  methods: {
    // submitForm: validação simples no cliente. Substitui o uso de `action`/`method`
    // que antes causaria reload da página (não desejável em SPA).
    submitForm(e) {
      e.preventDefault()
      this.formErrors = {}
      if (!this.form.nome) this.formErrors.nome = 'Nome é obrigatório.'
      if (!this.form.email) this.formErrors.email = 'Email é obrigatório.'
      if (!this.form.mensagem) this.formErrors.mensagem = 'Mensagem é obrigatória.'
      if (Object.keys(this.formErrors).length === 0) {
        // Simula envio bem-sucedido: limpa o form e mostra mensagem temporária
        this.submitted = true
        this.form = { nome: '', email: '', carro: '', mensagem: '', newsletter: false }
        setTimeout(() => (this.submitted = false), 4000)
      }
    }
  }
}
</script>


<template>

    <!--
      Observações de refactor:
      - Removi tags <body> e links estáticos para páginas HTML (index.html, leo.html, etc.)
        porque esta é uma SPA com Vue Router; usar links estáticos causaria reloads
        e perderia o estado da aplicação.
      - Uso `Header`/`Footer` componentes para manter layout consistente entre views
        e para centralizar alterações de navegação (router-link).
      - A galeria foi movida para um componente `Gallery` reutilizável para evitar
        duplicação de código entre as páginas e permitir busca/filtro reativos.
    -->

    <Header />

        <!--HERO-->
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

        <!--Formulario com v-model e validação simples -->
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