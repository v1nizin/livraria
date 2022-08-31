import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoriasView from '@/views/CategoriasView.vue';
import EditorasView from '@/views/EditorasView.vue';
import LivrosView from '@/views/LivrosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/categorias', name: 'categorias', component: CategoriasView },
    { path: '/editoras', name: 'editoras', component: EditorasView },
    { path: '/livros', name: 'livros', component: LivrosView },
  ],
});

export default router
