
import request from 'request'
import express, { Application } from 'express';
import cors from 'cors';
import cheerio from 'cheerio'
import cheerioTableparser from 'cheerio-tableparser'
require('console-stamp')(console, 'mm/dd HH:MM:ss.l');

// class App {
//     public application: Application;
  
//     constructor() {
//       this.application = express();
//     }
//   }
  
//   const app = new App().application;
//   app.use(cors());
//   app.all('/*', function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//     next(); 
//   });

// app.listen(3001,() => {
//     console.info('✅ Start Covid-19 crawl');
//   });

// app.get('/', function(req, res) {
//     res.status(200).send("covid-19 crawl");
//   });
// app.get('/all', function(req, res) {
//     res.status(200).send("covid-19 crawl");
//   });
// async function reqall(){
//    const url = "http://ncov.mohw.go.kr/index_main.jsp"
// request(url, async function(error, response, body){
//     const $ = cheerio.load(body);
//     let data =$(".num")
//     let alldata = data[0].children[0].data.split(" ")[0];
//     let cleardata = data[1].children[0].data.split(" ")[0]
//     let diedata = data[2].children[0].data.split(" ")[0];
// }
// }

// async function reqcity(city){
   const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun="
request(url, async function(error, response, body){
    const $ = cheerio.load(body);
    let table = $(".num")[0];
    console.log(table)
    cheerioTableparser(table);
    var data = $("#complex").parsetable(true, true, true);
})
// }