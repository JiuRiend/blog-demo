# vue

### 项目的组件和方法多个页面都会用
```js
const requireComponent = require.context('./',true,/\.vue$/)
const install = (Vue) =>{
    if(intsall.installed) return 
    intsall.installed
    requireComponent.keys().forEach(fileName=>{
        // 第i个
        const config = requireComponent(fileName);
        const componentName = config.default.name;
        Vue.component(componentName, config.default || config);
    })
}
// 确保是正常环境
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install
}
```