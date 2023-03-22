import http from 'http'
import fs from 'fs/promises'
import path from 'path'

// //서버 구동
// const server = http.createServer(function(request, response){
//   response.statusCode = 200;
//   response.setHeader = {'Content-Type':'text/html, charset=utf-8'}
//   response.end();
// })
// server.listen(2245,function(){
//   console.log('작동 한다!')
// })

const dirname = path.resolve()
const basehtml = '/homepage.html';


//html가져와서 서버 구동해보기
const server = http.createServer(async function(request, response){
  try {
    const htmldata = await fs.readFile(dirname + basehtml)
    response.writeHead(200, {'content-type':'text/html; charset=utf-8'})
    response.end(htmldata)
  } catch (error) {
    console.error(error)
    response.writeHead(500, {'content-tpye':'text/plain; charset=utf-8'})
    response.end(error.message)
  }
})
server.listen(2223, function(){
  console.log('2223포트 정상작동 중')
})



// //그냥 내맘대로 손대보기 (장난식이라 안되는게 맞다)
// const server = http.createServer(function(request, response){
//   try{
//     const htmldata = function(){
//       fs.readFile('\homepage.html')
//       response.writeHead(200, {'content-type':'text/html; charset=utf-8'})
//       response.end(htmldata)
//     }} catch (error) {
//       console.error(error)
//       response.writeHead(500, {'content-tpye':'text/plain; charset=utf-8'})
//       response.end(error.message)
//       }})
  
// server.listen(2220, function(){
//   console.log('2220포트 정상작동 중')
// })