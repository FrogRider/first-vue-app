<template>
  <div>
    <i 
      @click="removeTask(todo.id)" 
      class="material-icons remove">
        remove_circle_outline
    </i>
    <span 
      :class="{'done': todo.done}"
    >
      {{todo.title | capitalize | trim}}
    </span>

    <input 
      type="checkbox" 
      :checked="todo.done"
      @change="changeDone(todo.id)"
    >
    <i v-if="!todo.done" class="material-icons" @click="changeEditingMode(todo.id)">create</i>
<div :class="{'edit' : todo.editing_mode}" class="editing-field">
      <input type="text" v-model="currentTodo">
    </div>
    <br>
  </div>
</template>

<script>

import store from '../store'

export default {
  props: ['todo'],
  data: function() {
    return{
      currentTodo: this.todo.title
    }
  },
  methods: {
    changeDone: function(id) {
      store.commit('changeDone', id);
    },
    removeTask: function(id) {
      store.commit('removeTask', id)
    },
    changeEditingMode: function(id) {
      store.commit('changeEditingMode', id)
    }
  },
  watch: {
    currentTodo: function() {
      store.commit('changeTodoText', {id: this.todo.id, task: this.currentTodo})
    }
  },
  computed: {
    isCurrentTodoEditable: function() {
      return store.getters.getTaskById(this.todo.id)
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
    color: rgba(0,0,0, .3);
  }
  .remove {
    width: 1.2rem;
    height: 1.2rem;
    padding-right: 5px;
    color: rgb(197, 16, 16);
    /* background-color: red;
    color: #fff; */
    display: inline-block;
    /* text-align: center;
    border-radius: 50%; */
  }

  .editing-field {
    display: none;
  }

  .edit {
    display: block;
  }
  
</style>