const Koa = require('koa');
const app = new Koa();

//通过app.use 组测中间件
//中间件本质上 就是一个函数
app.use((ctx) => {
    const {request: rep} =ctx;
    const {url} = rep;
    if (url === '/user/123'){
        //ctx.body='返回用户123' //响应体
        //里面也可以是html语言
        ctx.body='<h1>hahahhaah</h1>'
    }
    if (url === '/user/124'){
        //ctx.body='返回用户123' //响应体
        //里面也可以是html语言
        ctx.body='<h1>哈哈哈哈</h1>'
    }
    


});

//开启一个http服务
//接受http 请求并作处理 处理完后响应
app.listen(3000,()=> {
    console.log('启动成功');


}  );
console.log('123')

