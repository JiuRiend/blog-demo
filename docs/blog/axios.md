# axios

### axios 源码解析

```js
function axios(){
  
}

Axios.prototype.request = function (){
}
axios.get('url?a=123')
axios.post('url',{});

const arr = ['delete','get','post','put']
arr.forEach(methods=>{
    Axios.prototype[methods] = function(url,config){
        return this.request(utils.merge(config || {},{
                 methods:methods,
                  url:url
        }))
    }
})
```