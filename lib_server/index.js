const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')

const add=express()
add.use(cors())
add.use(bodyparser.json())
add.use(express.json())
add.use(bodyparser.urlencoded({extended:true}))
add.use(express.static('public'))

let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Kiruba#87",
    database:"library"
})
con.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Database is success full connect")
    }
})
add.post('/login',(request,response)=>{
    let {user_name,password}=request.body;
    let sql ='select * from lib_man where user_name=?';
    con.query(sql,[user_name],(error,result)=>{
        if(error){
            var a={"status":"error"}
            response.send(a)
        }
        else if(result.length>0){
            //password checking
            let username1 =result[0].user_name;
            let password1=result[0].password;
            if (username1===user_name && password1==password ){
                let s={"status":"success"};
                response.send(s);
                }else{
                    let s={"status" : "Invalid_data"};
                    response.send(s);
                }
                }
                else{
                    let s={"status":"Invalid"};
                    response.send(s);
                }
            })
        }
    )
    //addbooks
add.post('/insertdata',(request,response)=>{
    let{userk,name,phone,email}=request.body;
    let sql='INSERT INTO book_list (Book_Name,Author_Name,Publication,publication_year)values(?,?,?,?)';
    con.query(sql,[userk,name,phone,email],(error,result)=>{
        if(error){
                var a={"status":"error"}
                response.send(a)
            }
            else{
                var a={"status":"success"}
                response.send(a)
            } 
    })
   
})
//getallbooks
add.get('/allbook',(request,response)=>{
    let sql='select * from book_list';
    con.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
add.post('/deletebook',(request,response)=>{
    let {service_id}=request.body
    let sql='delete from book_list where Book_id=?';
    con.query(sql,[service_id],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
// getdata using bookid
add.get('/getdataupadte/:Book_id',(request,response)=>{
    let{Book_id}=request.params
    let sql='select * from  book_list where Book_id=?';
    con.query(sql,[Book_id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
// update book using book id
add.put('/updatedataserv/:Book_id',(request,response)=>{
    let {Book_id} = request.params;   // get the id of record to be updated
    let {experenice,charge,aboutven,worklink}=request.body
    let sql='update book_list set Book_name=?,Author_Name=?,Publication=?,publication_year=? where Book_id=?'
    con.query(sql,[experenice,charge,aboutven,worklink,Book_id],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
// for register student
add.post('/insertstudentdata',(request,response)=>{
    let{userk,name,phone,email,place,pass}=request.body;
    let sql='insert into stud_id(reg_number,Sname,phone_num,Email_id,department,batch)values(?,?,?,?,?,?)';
    con.query(sql,[userk,name,phone,email,place,pass,phone],(error,result)=>{
        if(error){
                var a={"status":"error"}
                response.send(a)
            }
            else{
                var a={"status":"success"}
                response.send(a)
            } 
    })
   
})
// for entering books data
add.post('/enterdetials',(request,response)=>{
    let{role,userk,name,phone,email,place}=request.body;
    let sql='INSERT INTO book_list (role,user_id,book_id,bookname,issued_date,Reneuwal_date)values(?,?,?,?.?,?)';
    con.query(sql,[role,userk,name,phone,email,place],(error,result)=>{
        if(error){
                var a={"status":"error"}
                response.send(a)
            }
            else{
                var a={"status":"success"}
                response.send(a)
            } 
    })
   
})
add.get('/getdataupadt',(request,response)=>{
    let{Book_id}=request.body
    let sql='select * from  book_list where Book_id=?';
    con.query(sql,[Book_id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
// insert daily status
add.post('/insertdatadaily',(request,response)=>{
    let{userk,name,phone,email,date,rdate,pass}=request.body;
    let sql='INSERT INTO std_user (role_number,book_id,bookname,issued_date,Reneuwal_date,return_date,fine_amount)values(?,?,?,?,?,?,?)';
    con.query(sql,[userk,name,phone,email,date,rdate,pass],(error,result)=>{
        if(error){
                var a={"status":"error"}
                response.send(a)
            }
            else{
                var a={"status":"success"}
                response.send(a)
            } 
    })
   
})
// get daily status
add.get('/getdata',(request,response)=>{
    let{user}=request.body
    let sql='select * from std_user where s_no=?';
    con.query(sql,[user],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
// update daily status
// add.put('/updatedataserver/:role_number',(request,response)=>{
//     let {role_number} = request.params;   // get the id of record to be updated
//     let {experenice,charge,aboutven,worklink,return,fine}=request.body
//     let sql='update book_list set Book_name=?,Author_Name=?,Publication=?,publication_year=? where role_number=?'
//     con.query(sql,[experenice,charge,aboutven,worklink,return,fine,role_number],(error,result)=>{
//     if(error){
//         var a={"status":"error"}
//         response.send(a)
//     }
//     else{
//         var a={"status":"success"}
//         response.send(a)
//     }
//     })
// })
    add.listen(3003,()=>{
        console.log("port is running in 3003")
    })