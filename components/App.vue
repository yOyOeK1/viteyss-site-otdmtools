<template>

<b>ott vue test set </b>{{ msgTest }}
<br>
<div class="ottoptions"v-for="( item, index ) in cmdList">
  <a @click="setCurrent(item[1])" :key="index">{{ item[0] }}</a>
</div>


</template>
<style>
.ottoptions{
  display: inline;
  margin: 2px;
  padding:2px;
  border: 1px solid gray;
  border-radius: 5px;
}

</style>
<script>
//import yssWiki from '/wikiSites/yss.md';
import { ref } from 'vue';

export default {
 // components: {
    //yssWiki:-1,
 // },
  data(){
    let msgTest = ref(':)');
    var cmdList = ref([
      ['sum','sum/1/2/.json'],
      ['ver','ver/.json'],
      ['help','help/.json'],
      ['-v','otdmTools/-v 1/.json'],
      ['a','a'],
    ]);

    return { msgTest, cmdList };
  },
  methods:{
    setCurrent( cmd ){
      console.log('exec on ott cmd '+cmd);
      siteByKey.c_otdmtoolsPage.o.sendBen(`ott:${cmd}`);
    }
  },
  /*
  mounted(){

    setTimeout(()=>{

      console.log('ott App.vue mounted ...');
      //this.setCurrent('echo/hello from otdmTools');
    },1000);
  },*/
}
</script>

