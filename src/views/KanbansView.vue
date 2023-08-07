<template>
    <div class="Kanban">
        <div class="flex pl-2 pt-5 justify-center">
        <KanbanColumn 
          type="new" 
          title="Новые" 
          :list="startedTasks"/>
        <KanbanColumn
          type="at_work" 
          title="В работе" 
          :list="testedTasks"/>
        <KanbanColumn 
          type="done" 
          title="Завершенные" 
          :list="doneTasks"/>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import KanbanColumn from '@/components/KanbanColumn.vue';
  
  export default {
    name: 'Kanbans',
    components: {
      KanbanColumn
    },
    data() {
      return{

      }
    },
    computed: {
      tasks() {
            return this.$store.state.tasks
        },
      startedTasks(){
        const taskList = this.tasks.filter(task => task.status === "new");
          // for(let i=0;i<this.tasks.length;i++){
          //   if(this.tasks[i].status === "new"){
          //     console.log(this.tasks[i].status)
          //     taskList.push(this.tasks[i])
          //   }
          // }
        return taskList
      },
      testedTasks(){
        const taskList = this.tasks.filter(task => task.status === "at_work");
        return taskList
      },
      doneTasks(){
        const taskList = this.tasks.filter(task => task.status === "done");
        return taskList
      }
      
    },
  }
  </script>