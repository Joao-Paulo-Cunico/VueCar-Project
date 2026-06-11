<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <router-link to="/" class="logo">Evo<span>Car</span></router-link>
        <p>EvoCar</p>
      </div>
      <div>
        <h4>Páginas</h4>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/classicos">Clássicos</router-link></li>
          <li><router-link to="/esportivos">Esportivos</router-link></li>
          <li><router-link to="/luxo">Luxo</router-link></li>
        </ul>
      </div>
    </div>
    <div class="footer-base">&copy; 2026 EvoCar</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer { padding:24px 0; }
.footer-inner { display:flex; justify-content:space-between; align-items:flex-start; }
.footer-base { text-align:center; margin-top:12px; font-size:0.9rem }
</style>