
import path from 'path'
import formidable from 'formidable';



/**
 * POST /apis/ott
 * 
 * Bridge POST on http layer to bind it with otdmtools instance from `m_otdmtools.js`.
 * This way you can use it as a POST by `featch` on client site.
 * 
 * looks for `q` value in headers
 * 
 * #### use example:
 * ```bash
 * curl -x POST http://localhost:8080/apis/ott -d 'q=exeIt/{"v":"1"}'  | jq .
 * curl -x POST http://localhost:8080/apis/ott -d 'q=sum/3/2'  | jq .
 * ```
 * 
 */


class serverOtt{

    constructor(){
        
        this.method = "POST";
        this.url = "/apis/ott";
        this.ottO = undefined;
        this.server = undefined;
        
        
        this.cl(`init .... will handle ${this.method} at ${this.url}`);

    }
    
    cl( str ){
        console.log(` serOtt     ${this.method}  ${this.url}     `,str);
    }


    async doIt( req, res ){
        let form = formidable({
            uploadDir: path.join(process.cwd(), 'uploads'),
            keepExtensions: true,
            maxFileSize: 5 * 1024 * 1024, // 5MB limit 
        });
        let [fields, files] = await form.parse(req);
        //this.cl([`   field   `,fields,"\n\nfiles\n",files]);
        
        if( this.ottO == undefined ){
            for( let mod of this.server.modulesSrc){
                if( mod.oName == 'c_otdmtoolsPage' ){
                    this.ottO = mod.modinst[0].ott;
                    break;
                }
                
            }            


        }
        
        if( fields.q && fields.q.length == 1 ){
            let q = fields.q[0];

            this.ottO.doTask( `${q}` ).then((r)=>{
                let j = JSON.parse(r);
                tr = {
                    'q': q,
                    'res':j
                };
                res.end( JSON.stringify(tr) );
            });
        
        }else{
                res.end( JSON.stringify({"error":1,"msg":"No `q` value in fields."}) );
        }


        return 0;
       
    }

    handleRequest( args ){
        let {req, res, server } = args;

        if( req.method == 'POST' && req.url == this.url ){
            this.cl('in middle ....');
            this.server = server;
            return this.doIt( req,res );

        }



    }
}

export { serverOtt }
