import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import TodoList from '../components/TodoList.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: HelloWorld },
        {path: '/todo-list', name: 'todo-list', component: TodoList},
    ],
    strict: true,
})
