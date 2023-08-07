<template>
    <a-dropdown :trigger="['contextmenu']">
      <div>
      <slot></slot>
      </div>
      <a-menu slot="overlay">
        <a-menu-item key="1" @click="newTask()">
            Новые
        </a-menu-item>
        <a-menu-item key="2" @click="atWorkTask()">
            В работе
        </a-menu-item>
        <a-menu-item key="3" @click="finishedTask()">
            Завершенные
        </a-menu-item>
        <a-menu-item key="4" @click="removeTask()">
            Удалить
        </a-menu-item>
      </a-menu>
    </a-dropdown>
</template>

<script>
export default{
    props: ['object'],
    methods: {
        removeTask(){
            this.tasks.splice(this.tasks.indexOf(this.object), 1);
        },
        newTask(){
            this.object.status = "new"
        },
        atWorkTask(){
            this.object.status = "at_work"
        },
        finishedTask(){
            this.object.status = "done"
        },
    },
    computed:{
        tasks() {
            return this.$store.state.tasks
        }
    }
}
</script>
