<template>

  <section class="galeria" id="galeria">
    <div class="container">
      <!-- Cabeçalho da galeria -->
      <div class="secao-header">
        <span class="tag">Galeria</span>
        <h2 class="titulo-secao">Obras-Primas <span>Automotivas</span></h2>
        <p class="subtitulo-secao">Explore nossa coleção e utilize o campo abaixo para filtrar.</p>
      </div>

      <div class="busca-container">
        <input 
          v-model="query" 
          type="text"
          placeholder="Buscar por modelo, ano ou marca..." 
          class="input-busca" 
        />
      </div>


      <div class="cards-grid">

        <article v-for="item in filteredItems" :key="item.id" class="card">
          <div class="card-img-wrap">

            <img :src="item.image" :alt="item.title" />
            <div class="card-overlay">
              <span>{{ item.desc }}</span>
            </div>
          </div>
          <div class="card-corpo">

            <span class="card-ano">{{ item.year }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </article>

        <div v-if="filteredItems.length === 0" class="nenhum-resultado">
          <p>Nenhum veículo encontrado para "<strong>{{ query }}</strong>"</p>
          <p style="font-size: 0.9rem; color: #999;">Tente outro termo de busca.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [] 
    }
  },
  

  data() {
    return {
      query: ''
    }
  },
  

  computed: {
    filteredItems() {
      if (!this.query.trim()) {
        return this.items
      }
      
      const searchTerm = this.query.trim().toLowerCase()
      
      return this.items.filter(item => {
        const searchText = (
          item.title + ' ' + 
          item.year + ' ' + 
          (item.tag || '') + ' ' + 
          (item.desc || '')
        ).toLowerCase()
        
        return searchText.includes(searchTerm)
      })
    }
  }
}
</script>

<style scoped>


:root {
  --dourado: #d4af37;
  --vermelho: #e63946;
  --preto: #0d0d0d;
  --cinza-escuro: #1a1a1a;
  --branco: #f5f5f5;
  --texto: #cccccc;
  --raio: 8px;
  --transicao: 0.3s ease;
}

.galeria {
  padding: 60px 0;
  background: linear-gradient(135deg, rgba(13, 13, 13, 0.95), rgba(26, 26, 26, 0.98));
  border-top: 1px solid rgba(212, 175, 55, 0.3);
}

.busca-container {
  margin: 30px 0 50px 0;
  text-align: center;
  animation: fadeUp 0.6s ease;
}


.input-busca {
  width: 100%;
  max-width: 600px;
  padding: 14px 20px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: var(--branco);
  background: rgba(26, 26, 26, 0.8);
  border: 2px solid rgba(212, 175, 55, 0.5);
  border-radius: var(--raio);
  outline: none;
  transition: all var(--transicao);
  letter-spacing: 0.5px;
}

.input-busca::placeholder {
  color: rgba(204, 204, 204, 0.6);
  font-style: italic;
}

.input-busca:focus {
  border-color: var(--dourado);
  background: rgba(26, 26, 26, 1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3), inset 0 0 10px rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
}


.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}


.card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: var(--raio);
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: all var(--transicao);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.6);
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.2), 0 0 20px rgba(212, 175, 55, 0.1);
}


.card-img-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8), rgba(13, 13, 13, 0.9));
}

.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transicao);
}

.card:hover .card-img-wrap img {
  transform: scale(1.08);
}


.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(230, 57, 70, 0.8), rgba(13, 13, 13, 0.95));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transicao);
  color: var(--branco);
  text-align: center;
  padding: 16px;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-overlay span {
  font-size: 0.95rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}


.card-corpo {
  padding: 16px;
  background: rgba(13, 13, 13, 0.5);
}

.card-ano {
  display: inline-block;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(230, 57, 70, 0.2));
  padding: 6px 12px;
  border-left: 3px solid var(--dourado);
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--dourado);
  margin-bottom: 8px;
}

.card-corpo h3 {
  margin: 12px 0 8px 0;
  font-size: 1.2rem;
  color: var(--branco);
  font-weight: 600;
}

.card-corpo p {
  font-size: 0.95rem;
  color: var(--texto);
  line-height: 1.4;
  margin: 0;
}


.nenhum-resultado {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  color: var(--texto);
  animation: fadeUp 0.4s ease;
}

.nenhum-resultado p {
  margin: 8px 0;
}

.nenhum-resultado strong {
  color: var(--dourado);
}
</style>
