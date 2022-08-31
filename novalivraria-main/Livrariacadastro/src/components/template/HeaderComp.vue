<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Menu</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/livros/">Cadastrar Livros</RouterLink> </span>

    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  background-color: #1b212a;
  height: 15%;
  font-size: 1.3rem;
  padding-left: 2rem;
  color: rgb(255, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>