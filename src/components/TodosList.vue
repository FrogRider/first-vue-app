<template>
  <div class="todos-list">
    <AddTodo />
    <p v-if="!todosExists">Todos list is empty</p>
    <br>
    <div 
      v-for="todo in todos" 
      :key="todo.id"
    >
      <TodoItem :todo="todo"/>
    </div>
    <p v-if="todosExists">Unfinished tasks: {{unfinishedTasksQtty}}</p>
    <button @click="clearTodos">Clear</button>
  </div>
</template>

<script>

import store from '../store'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default {
  name: 'Home',
  data: function() {
    return{
      todos: store.getters.getTodos
      // unfinishedTasksQtty: store.getters.unfinishedTasksQtty
    }
  },
  computed: {
    todosExists: function() {return store.getters.todosExists},
    unfinishedTasksQtty: function() {return store.getters.unfinishedTasksQtty}
  },
  components: {
    TodoItem, AddTodo
  },
  methods: {
    clearTodos: function(){
      store.commit('clearTodos')
    }
  }
}
</script>