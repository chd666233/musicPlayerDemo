const fs=require('fs');
const express=require('express');
const server=express();
server.listen(3000,()=>{
  console.log('服务器创建成功，监听端口3000...');
});
server.use(express.static('public'));

server.get('/next',(req,res)=>{
  //Rolling star.lrc   东西（Cover：林俊呈） - 你的叽叽.lrc  그 남자의 거짓말 - 泰仁.lrc
  fs.readFile('public/lrc/Rolling star.lrc',(err,data)=>{
    if(err) throw err;
    var content=data.toString();
    res.send(content);
  })
})
server.get('/prev',(req,res)=>{
  fs.readFile('public/lrc/李学仕 - 直觉.lrc',(err,data)=>{
    if(err) throw err;
    var content=data.toString();
    res.send(content);
  })
})
