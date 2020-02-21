
import request from 'request'
import express, { Application } from 'express';
import cors from 'cors';
import cheerio from 'cheerio'
require('console-stamp')(console, 'mm/dd HH:MM:ss.l');

class App {
    public application: Application;
  
    constructor() {
      this.application = express();
    }
  }
  
  const app = new App().application;
  app.use(cors());
  app.all('/*', function(req, res, next) {
  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

app.listen(3001,() => {
    console.info('✅ Start Covid-19 crawl');
  });

app.get('/', function(req, res) {
    res.status(200).send("covid-19 crawl");
  });
app.get('/all', function(req, res) {
    res.status(200).send("covid-19 crawl");
  });
async function reqall(){
    url = "http://ncov.mohw.go.kr/index_main.jsp"
request(url, async function(error, response, body){
    const main = cheerio.load(body);
    let alldata = main(".num")[0].children[0].data.split(" ")[0];
    let cleardata = main(".num”)[1].children[0].data.split(" ")[0]
    let diedata = main(".num”)[2].children[0].data.split(" ")[0]
}
}

async function reqcity(city){
    url = "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun="
request(url, async function(error, response, body){
    const main = cheerio.load(body);
    let alldata = main(".num")[0].children[0].data.split(" ")[0];
    let cleardata = main(".num”)[1].children[0].data.split(" ")[0]
    let diedata = main(".num”)[2].children[0].data.split(" ")[0]
}
}