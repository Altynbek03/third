<template>
  <div class="container mx-auto sm:px-4 mt-5">
    <div class="flex justify-center pt-5">
      <div class="flex">
        <a-input v-model="newTask" placeholder="Введите задание" @keyup.enter="add"/>
        <a-button class="ml-3" variant="primary" @click="add">Добавить</a-button>
      </div>
    </div>

    <div id="app">
      <nav>
        <router-link to="/">Канбан</router-link> |
        <router-link to="/Table">Таблица</router-link> 
      </nav>
      <router-view/>
    </div>
      
  </div>
</template>

<script>
import KanbanColumn from "./components/KanbanColumn.vue";
import moment from 'moment'
import draggable from "vuedraggable";
import Table from "./components/DataTable.vue"
import { watch } from "vue";

export default{
  name: 'App',
  components: {
    draggable,
    KanbanColumn,
    Table,
    moment
},
  data(){
    return{
      newTask: "",
      taskId: 1,
    }
  },
  computed:  {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods:{
    add(){
      // if(this.newTask) {
      //   this.arrBackLog.push(
      //     {
      //       name: this.newTask,
      //       status: 'new',
      //       id: this.taskId,
      //       time: new Date()
      //     }
      //   )
      //   this.newTask = "";
      //   this.taskId += 1;
      // }
      if(this.newTask){
          const task = {
          name: this.newTask,
          status: 'new',
          id: this.taskId,
          time: new Date()
        }
        this.newTask = "";
        this.taskId += 1;
        this.$store.commit('createTask', task)
      }
    }
  }

}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:18px;
  text-align: center;
  color: #000000;
}
.kanban-column{
  min-height: 300px;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e6e6e6;

    &.router-link-exact-active {
      color: #35e79d;
    }
  }
}
</style>
