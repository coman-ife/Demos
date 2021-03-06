const express=require("express")
const apiService=require("./apiService.js")

var apiRouter=express.Router()
apiRouter.get("/books",apiService.getAll)
apiRouter.post("/books",apiService.addBook)
apiRouter.get("/books/:id",apiService.getBook)
apiRouter.put("/books/:id",apiService.editBook)
apiRouter.delete("/books/:id",apiService.delBook)
module.exports=apiRouter

/*
GET /zoos：列出所有动物园
POST /zoos：新建一个动物园
GET /zoos/ID：获取某个指定动物园的信息
PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE /zoos/ID：删除某个动物园
GET /zoos/ID/animals：列出某个指定动物园的所有动物
DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物
*/