import App from './components/App.vue'
import {createApp} from 'vue'




//a xx 3
class c_otdmtoolsPage{
  
  constructor(){
    cl(`${this.getName} init ....`);
    //this.vm = vm;
    //this.tasker = new ottTasker();
    //cl(vm);
  }
  
  get getName(){
    return `vys otdmTools`;
    
  }
  
  
  
  get getDefaultBackgroundColor(){
    return "#ffffff";
    
  }
  
  getHtml = () => {
    


    return `<b>${this.getName}</b><br>
    This is a npm package <i>viteyss-site-otdmtools</i><br>
    <pre>
    In Menu: ${this.getName}
    Home url: ${this.homeUrl}
    Ver: ${this.instanceOf.ver}
    More ditails in \`./site.json\`
    </pre>
    <div id="ottApp">ottApp</div>
    <!--
    <a href="javascript:siteByKey.c_otdmtoolsPage.o.sendBen('ott:sum/1/2/.raw');">sum</a> 
    <a href="javascript:siteByKey.c_otdmtoolsPage.o.sendBen('ott:ver/.raw');">ver</a> 
    <a href="javascript:siteByKey.c_otdmtoolsPage.o.sendBen('ott:help/.raw/.html');">help</a> 
    -->
    <a href="javascript:ottO.newTask({'q':'sum/1/2/.raw'}).then((r)=>{ $('#ottRes').html('<pre>'+JSON.stringify(r, null, 2)+'</pre>'); });">sum tasker</a> 
    
    
    <div id="ottRes" style="
    width: 100vw;
      min-height:50%;
      overflow-y: auto;
    "></div>`;
    
  }

  sendBen(msg){
    this.tStart = Date.now();
    sOutSend(msg);
  }
  
  getHtmlAfterLoad = () =>{
    cl(`${this.getName} - getHtmlAfterLoad()`);
    this.ottapp = createApp(App);
    this.ottapp.mount('#ottApp');

    
  }

  get svgDyno(){
    return '';

  }

  svgDynoAfterLoad(){

  }

  onMessageCallBack = ( r ) => {

    if( r.ott ){
      let msRes = (Date.now() - this.tStart)/1000.00;
      cl(`loop in ${msRes} sec`);

     cl( `[cb] ${this.getName} - got msg ${r}`);
      $('#ottRes').html('<pre>'+JSON.stringify(r, null, 4)+'</pre>');
    }
  }

}

export { c_otdmtoolsPage };
