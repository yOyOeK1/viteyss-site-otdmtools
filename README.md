# viteyss-site-otdmtools

Page is bringigng otdmtool from oiyshTerminal to node. So now with this site you have option to see and use it in full power from js code.


#### works with **ottO**

`ottO` is a instance of helper in using it as send recive. it have function return promise.
```js
ottO.newTask( { 'q': { "dfs": "/tmp" } } ).then((r)=>{
    ...
```
**r** - is String with result of your query


#### webSocket prefix

* **ott:**... to make reguast sapi query `ver/.json`. It's returnin result to client query value but you need to make your owne capturing handler.

* **otj**:... to make request in direct otdmTools. Send json example
```js
otj:{"h":"1"}
```
You need to implement capturing handler.



#### use example

check `./components/App.vue`
it's use a direct query by websocket, sending query by .... on client site

```
ott:ver/.raw
```


