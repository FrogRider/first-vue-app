<template>
  <form class="todos-list__add">
    <input type="text" placeholder="todo text" v-model="inputVal">
    <button @click.prevent="add">Add</button>
  </form>
</template>

<script>
import store from '../store'

  export default {
    name: 'AddTodo',
    data: function() {
    return{
      inputVal: ''
    }
  },
  methods: {
    add: function(){
      store.commit('addTodo', this.inputVal)
      this.inputVal = ''
    }
  }
  }
</script>
