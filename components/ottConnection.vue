<template>
<img :src="ledColor" /> {{ infoMsg }}
<!--
    {{ ledColor }}
    <pre>
        target: 
        res: {{ pingRes }}
        ({{ loopCount }}) taskRes: {{ taskRes }}
    </pre>
    -->
</template>
<script>
import { computed, ref } from 'vue'
import markdownit from 'markdown-it'

export default{
    data(){
        let icoSize = 16; // 32
        let infoMsg = ref('chking ...');
        let pingRes = ref('not send1');
        let loopCount = ref(0);
        let taskRes = ref('not send2');
        let otPingLoop = setInterval(()=>{
            console.log('ottCon iter... timer');
            this.doPing();
        },5000);
       

        return {
            icoSize,
            infoMsg,
            pingRes,
            loopCount,
            taskRes,
            otPingLoop,
        };

    },
    computed:{
        ledColor: function(){
            let tr = '';
            if(this.pingRes == 'not send1' )
                tr = 'Red';
            else if( this.pingRes == 'sending ...')
                tr = 'Orange';
            else if( this.pingRes == 'ok' )
                tr = 'Green';
            else
                tr = '?';

            return `${siteByKey.c_otdmtoolsPage.o.homeUrl}/assets/ico_led${tr}_${this.icoSize}_${this.icoSize}.png`;
        }
    },
    methods:{
        doPing(){
            console.log('ottCon making ping');
            this.loopCount++;
            this.taskRes = 'sending ...';
            ottO.newTask({
                'q':'ping'
            
            }).then((r)=>{ 
                this.infoMsg = '';
                this.pingRes = ( r == '[0, "pong"]')?'ok':'bad res';
                    
                this.taskRes = String(r);
                
            }).catch((error)=>{
                console.error('ottCon ottO task faild',error);
                this.infoMsg = 'ott tasker faild';
                this.pingRes == 'not send1';
            });
        
        }
    }

}

</script>