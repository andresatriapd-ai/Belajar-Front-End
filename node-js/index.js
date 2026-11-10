const http = require('http');
const host = '127.0.0.1'
const port = 3002;
const rupiah = require('rupiah-format');
// Request adalah = data masuk dari luar
// Response adalah = data keluar dari server

const server = http.createServer(function (request, response) {
   const nama = 'Andre Satria';
   let uang = 100000;
   let  jajan = '50000';
   let sisa = uang - jajan;

   uang = rupiah.convert(uang);
   jajan = rupiah.convert(jajan);
   sisa = rupiah.convert(sisa);

   

   const hasil = `<p>hallo ${nama},uang saya sebesar ${uang},saya belanja sebesar ${jajan} sisa uang kamu adalah ${sisaUang}</p>`
   
    

    response.statusCode = 200;
    response.end (hasil)
    
   
    // listen(port,host,'',function () {

})
server.listen(port,host,'',function () {
    console.log(`Server is running di ${host} : ${port}`);
});