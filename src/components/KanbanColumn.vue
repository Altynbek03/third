<template>
     <div class="flex pl-4">
        <div 
            class="p-2 w-60  border border-gray-500 rounded-md"
            :class="bgColumn">
          <h3 class="text-center text-xl">{{ title }}</h3>
          <draggable 
            @change="handleChange"
            class="kanban-column" 
            :list="list" 
            group="tasks"
            id_group="id">

            <ContextMenu 
              v-for="element in list"  
              :key="element.id"
              :object = "element">
                <a-card 
                    size="small" 
                    class="list-group-item">
                      {{ element.name }}
                </a-card>
            </ContextMenu>
             
            
          </draggable>
        </div>
      </div>
</template>

<script>
import draggable from "vuedraggable"
import ContextMenu from "./ContextMenu.vue"

export default {
    props: ['list', 'title', 'type'],
    components: {
    draggable,
    ContextMenu
},
    computed: {
        bgColumn() {
          if(this.type === 'new')
            return 'bg-sky-200'
          if(this.type === 'at_work')
            return 'bg-red-200'
          if(this.type === 'done')
            return 'bg-green-300'
          return 'bg-white'
        },
        tasks() {
            return this.$store.state.tasks
        }
    },
    methods: {
      handleChange(event) {
        console.log(event)
        if(event.added){
          event.added.element.status = this.type
        }
      }
    }
}

</script>
