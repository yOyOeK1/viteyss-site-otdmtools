
console.log("m_draTabSS.js included ....");

import { hotHelperServer } from "./hotHelper.js";
import { otdmTools } from "nodeotdmtools";


class m_otdmtools extends hotHelperServer{
    constructor( ws ){
        super(ws);
        this.cl("m_otdmtools init ...");
        
        
        this.wsPrefferPrefix = [ 'ott:', 'otj:' ];
        this.ott = new otdmTools(1,1);

    }

    cl( str ){
        console.log('ott ',str);
    }    


    // try to invoce thisone by `sOutSend('xraTab: [aadde');`
    onWsByPrefix=(ws,event,msg)=>{
      
      let msgS = String(msg).substring(4);
      let actOpt = String(msg).substring(0,4);
      //this.cl(`ott:/otj: onWsByPrefix regived m_otdmtools.js !!!! [${msgS}] `);
      if( actOpt == 'ott:' ){
        this.ott.doTask( `${msgS}` ).then((r)=>{
          let j = JSON.parse(r);
          tr = {
            'ott': msgS,
            'res':j
          };
          ws.send( JSON.stringify(tr) );
        });
        
      }else if( actOpt == 'otj:' ){
        let jIn = JSON.parse(msgS);
        this.ott.doTask( jIn['q'] ).then((r)=>{
          let j = JSON.parse(r);
          tr = {
            'otj': jIn['id'],
            'res':r
          };
          ws.send( JSON.stringify(tr) );
        });
      }
      
      return 1;
    }

    onWsMessageCallBack=(ws, event, msg)=>{
        
        return 0;
    
    }
    
}

export { m_otdmtools }
