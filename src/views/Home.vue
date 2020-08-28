<template>
  <div class="home">
    <TodosList />
  </div>
</template>

<script>

import TodosList from '../components/TodosList'

export default {
  name: 'Home',
  components: {
    TodosList
  }
}
</script>
