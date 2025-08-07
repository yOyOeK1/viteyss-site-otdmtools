<template>

<b>ott vue test set </b>{{ msgTest }}
<br>

status of connection: <ottconnection/>
<br>

direct:<br>
<div class="ottoptions"v-for="( item, index ) in cmdList">
  <a @click="setCurrent(item[1],false)" :key="index">{{ item[0] }}</a>
</div><br>

by tasker (ottO):<br>
<div class="ottoptions"v-for="( item, index ) in cmdList">
  <a @click="setCurrent(item[1], true)" :key="index">{{ item[0] }}</a>
</div><br>



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
import OttConnection from './ottConnection.vue';
import markdownit from 'markdown-it'


export default {
  components: {
    ottconnection: OttConnection
    //yssWiki:-1,
  },
  data(){
    let msgTest = ref(':)');
    var cmdList = ref([
      ['sum','sum/1/2/.json'],
      ['ver','ver/.json'],
      ['help','help/.json'],
      ['-v','otdmTools/-v 1/.json'],
      ['exeIt -v', 'exeIt/{"v":"1"}/.json'],
      ['a','a'],
    ]);
    
    return { msgTest, cmdList };
  },
  methods:{
    setCurrent( cmd, byTasker ){
      console.log('exec on ott cmd '+cmd+` using tasker: ${byTasker}`);
      
      if( byTasker ){
        
        ottO.newTask({'q':cmd}).then((r)=>{
          let j = JSON.parse(r) 
          $('#ottRes').html(`<pre>from vue by using \`.then()\`\n\n`+
            JSON.stringify(j,null,2)+`\n\n
            </pre>`
          );

          if( cmd == 'help/.json'){
            let md = markdownit({ html:true });

            $('#ottRes').append( 
              `<hr>
              <b>After task</b> we can process data what we know. Like wiki of otdmTools help for **sapi**<br>
              Look at section \`list of sapis\`<br>
              <br><hr>`+
              md.render(String(j.msg)) 
            );
          }

        });


      
       }else{
        siteByKey.c_otdmtoolsPage.o.sendBen(`ott:${cmd}`);
      
      }
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

