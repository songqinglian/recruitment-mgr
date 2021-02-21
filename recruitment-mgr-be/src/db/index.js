const mongoose = require('mongoose');
//给哪个数据库的哪个集合 添加什么格式的文档

//schema 模式（文档）
//Modal 模型 可以理解成根据Schema生成的一套方法，这套方法用来操作MongoDB下集合和集合下的文档


//创建一个schema
const UserSchema = new mongoose.Schema({
    nickname: String,
    password: String,
    age:Number,
});

//生成一个model
const UserModal = mongoose.model('User',UserSchema);



const connect = ()=>{
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/recruitment-mgr');
    //当数据库打开时 做
    mongoose.connection.on('open',()=>{
        console.log('连接成功');

        const user = UserModal({
            nickname: '小明',
            password: '123456',
            age:12,

        });
        user.save(); //保存
    });
};
connect();