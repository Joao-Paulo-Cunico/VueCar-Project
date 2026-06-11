<template>
  <!-- Header: componente reutilizável com navegação via Vue Router -->
  <header class="navbar">
    <router-link to="/" class="logo">Evo<span>Car</span></router-link>
    <nav>
      <router-link to="/" class="nav-link">Início</router-link>
      <router-link to="/classicos" class="nav-link">Clássicos</router-link>
      <router-link to="/esportivos" class="nav-link">Esportivos</router-link>
      <router-link to="/luxo" class="nav-link">Luxo</router-link>
    </nav>
  </header>
</template>

<script>
// Componente simples de header — usa router-link para navegação SPA
export default {
  name: 'Header'
}
</script>

<!-- Estilos mínimos locais podem ser sobrescritos pelos arquivos CSS globais -->
<style scoped>
.navbar { display:flex; align-items:center; justify-content:space-between; padding:16px 24px; }
.logo { font-weight:700; font-size:1.25rem; }
.nav-link { margin-left:16px; }
</style>