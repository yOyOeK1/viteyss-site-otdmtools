<a name="serverOtt"></a>

## serverOtt
POST /apis/ott

Bridge POST on http layer to bind it with otdmtools instance from `m_otdmtools.js`.
This way you can use it as a POST by `featch` on client site.

looks for `q` value in headers

#### use example:
```bash
curl -x POST http://localhost:8080/apis/ott -d 'q=exeIt/{"v":"1"}'  | jq .
curl -x POST http://localhost:8080/apis/ott -d 'q=sum/3/2'  | jq .
```

**Kind**: global class  
