<template>
    <div>
        <Table :list="tasks">
        </Table>
    </div>
</template>

<script>
import Table from "@/components/DataTable.vue"

export default{
    components: {
        Table
    },
    computed:  {
        tasks() {
        return this.$store.state.tasks
        }   
    }
}
    
</script>