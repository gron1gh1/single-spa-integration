<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  methods: {
    onClick: function() {
      console.log("AA",this.$router);
      this.count++;
      this.$router.push("main_v2")
    }
  },
  data(){
    return  {
      count: 9,
    }
  }
  
}

</script>