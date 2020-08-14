<template>
  <div>
    <span>todolist</span>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        id: 101,
        name: 'learn English'
      }, {
        id: 202,
        name: 'do some exercise'
      }]
    }
  }
}
</script>