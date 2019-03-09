//1.加载模块 express pool.js
const express=require("express");
const pool=require("./pool");
//2.创建服务器对象
var app=express();
//3.监听端口3000；
app.listen(3000);
//4.托管静态目录 public
app.use(express.static("public"));
//5.加载跨域访问模块
const cors=require("cors");
//6.配置跨域访问模块
app.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    credentials:true
}));
//7.加载第三方模块body-parser
const bodyParser=require("body-parser");
//8.配置对特殊json是否自动转换，不转
app.use(bodyParser.urlencoded({extended:false}));

//登录功能
app.post("/login",(req,res)=>{
    var obj=req.body;
    var sql=`SELECT * FROM sf_user WHERE phone=? AND upwd=?`;
    pool.query(sql,[obj.phone,obj.upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,data:result});
            
        }else{
            res.send({code:0});
        }
        
    });
});

//注册功能
app.post("/register",(req,res)=>{
    var obj=req.body;
    pool.query(`SELECT *FROM sf_user WHERE phone=?`,[obj.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("2");
        }else{
            pool.query('INSERT INTO sf_user SET ?',[obj],(err,result)=>{
                if(err)throw err;
                console.log(result);
                if(result.affectedRows>0){
                    
                    res.send("1");
                }else{
                    res.send("0");
                }
            });
        }
    })
});

app.get("/swiperlist",(req,res)=>{
	pool.query(`SELECT * FROM jj_laptop`,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
});
//轮播图片
app.get("/detailimg",(req,res)=>{
    var obj=req.query;
	pool.query(`SELECT * FROM jj_laptop_pic WHERE lid=?`,[obj.lid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
});
//商品详情
app.get("/detaillist",(req,res)=>{
    var obj=req.query;
	pool.query(`SELECT * FROM jj_laptop WHERE lid=?`,[obj.lid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
});

//加入购物车
app.get("/addshopcar",(req,res)=>{
    var obj=req.query;
    obj.isdelete=0;
    console.log(obj);
    obj.count=parseInt(obj.count);

    pool.query(`SELECT * FROM jj_shopcar WHERE uid=? AND lid=? AND isdelete=0`,[obj.uid,obj.lid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            /**/ pool.query(`UPDATE jj_shopcar SET count=count+? WHERE lid=?`,[obj.count,obj.lid],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    res.send("1");
                }else{
                    res.send("0");
                }
            }) 
        }else{
            var sql=`INSERT INTO jj_shopcar VALUES (NULL,?,?,?,?,?,?,?)`
            pool.query(sql,[obj.uid,obj.lid,obj.count,obj.title,obj.price,obj.pic,obj.isdelete],(err,result)=>{
                if(err)throw err;
                console.log(sql);
                if(result.affectedRows>0){
                    res.send("1");
                }else{
                    res.send("0");
                }
            })
        }
    })
    /*  */
})

//购物车列表
app.get("/shopcarlist",(req,res)=>{
    var obj=req.query;
    var pno=req.query.pno;
    var pagesize=parseInt(req.query.pagesize) ;
    var start=pno*pagesize;
    pool.query(`SELECT * FROM jj_shopcar WHERE isdelete=0 AND uid=? ORDER BY iid DESC LIMIT 0,?`,[obj.uid,start],
    (err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

//修改购物车数量
app.get("/updatecount",(req,res)=>{
    var obj=req.query;
    pool.query(`UPDATE jj_shopcar SET count=? WHERE iid=?  AND uid=?`,
    [obj.count,obj.iid,obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(result);
        }
    })
});


//删除购物车数据
app.get("/delete",(req,res)=>{
    var obj=req.query;
    pool.query(`UPDATE jj_shopcar SET isdelete=1 WHERE iid=? AND uid=?`,
    [obj.iid,obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(result);
        }
    })
});

//批量删除购物车数量
app.get("/delmore",(req,res)=>{
    var obj=req.query;
    console.log(obj);
    pool.query(`UPDATE jj_shopcar SET isdelete=1 WHERE iid IN (${obj.str}) AND uid=${obj.uid}`,
    (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(result);
        }
    })
});

//查询用户地址
app.get('/address',(req,res)=>{
    var obj=req.query;
    pool.query(`SELECT * FROM jj_address WHERE uid=?`,[obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
});


//添加用户地址
app.get('/addadr',(req,res)=>{
    var obj=req.query;
    var sql=`INSERT INTO jj_address VALUES (NULL,?,?,?,?)`
            pool.query(sql,[obj.uid,obj.phone,obj.address,obj.name],
                (err,result)=>{
                if(err)throw err;
                console.log(sql);
                if(result.affectedRows>0){
                    res.send("1");
                }else{
                    res.send("0");
                }
            })
});


//修改用户地址
app.get("/updadr",(req,res)=>{
    var obj=req.query;
    console.log(obj);
    pool.query(`UPDATE jj_address SET phone=?,address=?,name=? WHERE aid=?`,
    [obj.phone,obj.address,obj.name,obj.aid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(result);
        }
    })
});

//提交订单
app.get('/order',(req,res)=>{
    var obj=JSON.parse(req.query.list) ;
    console.log(obj);
    var str="";
    for(
        var i of obj){
        
        i.subtotal=parseFloat(i.subtotal);
        str+=`(NULL,1,${i.lid},'${i.title}',${i.price},${i.count},'${i.img}',${i.subtotal}),`;
    }
    console.log(str);
    var sql='INSERT INTO jj_order VALUES '+str.slice(0,-1);
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){
                res.send(result);
            }else{
                res.send("0");
            }
        })
});

//查询用户地址
app.get('/orderlist',(req,res)=>{
    var obj=req.query;
    var pno=parseInt(obj.pno);
    var pagesize=parseInt(obj.pagesize);
    var m =pno*pagesize;
    console.log(m);
    pool.query(`SELECT * FROM jj_order WHERE uid=? ORDER BY oid DESC LIMIT 0,?`,[obj.uid,m],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
});