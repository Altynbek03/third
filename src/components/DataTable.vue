<template>
    <div class="pt-5" justify-center>
        <a-table
          rowKey="id" 
          :columns="columns" 
          :data-source="list">
          <div
            slot="name" 
            slot-scope="text">
            {{ text }}
          </div>
          <div 
            slot="time"
            slot-scope="text">
            {{ moment(text).format('HH:mm DD.MM.YYYY')}}
          </div>
          <div
            slot="status"
            slot-scope="text">
            {{ rusStatus(text) }}
          </div>
          <span slot="customTitle">Задача</span>
        </a-table>
    </div>
  </template>

  <script>
  import moment from 'moment'


  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      scopedSlots: { customRender: 'id' },
    },
    {
      title: 'Статус',
      key: 'status',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' },
    },
    {
      title: 'Время создания',
      key: 'time',
      dataIndex: 'time',
      scopedSlots: { customRender: 'time' },
    },

  ]
  
  
  export default {
    props:['list'],
    data() {
      return {
        columns,
      };
    }, 
    methods: {
      moment,
      rusStatus(status){
        if(status === "new"){
          status = "Новая"
          return status
        }
        if(status === "at_work"){
          status = "В работе"
          return status
        }
        if(status === "done"){
          status = "Завершён"
          return status
        }
      }
    },
  };
  </script>
  