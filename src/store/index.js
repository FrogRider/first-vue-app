import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        title: 'lorem ipsum',
        done: true,
        editing_mode: false
      },
      {
        id: 1,
        title: 'dolor sit',
        done: false,
        editing_mode: false
      },
      {
        id: 2,
        title: 'amet consectetur',
        done: true,
        editing_mode: false
      },
      {
        id: 3,
        title: 'adipisicing elit',
        done: false,
        editing_mode: false
      }
    ]
  },
  mutations: {
    changeDone(state, id) {
      state.todos.map(t => t.id === id ? t.done = !t.done : 0)
    },
    removeTask(state, id) {
      const idx = state.todos.findIndex(e => e.id === id)
      state.todos.splice(idx, 1)
    },
    addTodo(state, task) {
      task.trim() &&
        state.todos.unshift({
          id: Date.now(),
          title: task,
          done: false,
          editing_mode: false
        })
    },
    clearTodos(state) {
      state.todos.splice(0, state.todos.length)
    },
    changeTodoText(state, payload) {
      // console.log('data in store: ' + id, task)
      state.todos.map(t => t.id === payload.id ? t.title = payload.task : 0)
    },
    changeEditingMode(state, id) {
      // state.todos.map(t => t.id === id ? t.editing_mode = !t.editing_mode : 0)
      state.todos.map(t => t.id === id ? t.editing_mode = !t.editing_mode : 0)
    }
  },
  actions: {
  },
  getters: {
    getTodos: state => {
      return state.todos;
    },
    todosExists: state => {
      return state.todos.length >= 1
    },
    unfinishedTasksQtty: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getTaskById: state => id => {
      return state.todos.find(t => t.id === id)
    }
  }
})
