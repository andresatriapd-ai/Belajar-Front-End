document.title= 'Andre Satria';
// // checking trouble seting lewat console.log

// console.log(document.title) // untuk menampilkan title di console   

// ----------------------------------------------------------------------------------//

// document.title = "Mamat Engkol";
// const body = document.body;

// body.style.backgroundColor = "lightblue";
// body.append ('<marquee>Hello World</marquee>');

// const h1 = document.createElement('h1')
// h1.innerHTML = "<marquee>Belajar DOM Javascript</marquee>";  //pakai yang ini 

// const p =document.createElement('p')
// p.innerHTML = "belajar gerak layar";

// const div =document.createElement('div')
// div.innerText = "<marquee>Belajar DOM Javascript adalah belajar untuk memanipulasi element HTML menggunakan Javascript</marquee>";





// body.append(h1);   
// body.append(p);
// body.append(div);

// ----------------------------------------------------------------------------------//
const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2'); 
const body = document.body


btn1.style.border = 'none'
btn1.style.padding = '8px' //memperbesar
btn1.style.backgroundColor = 'blue'
btn1.style.color = 'white'





function clickButton() {
    btn1.style.background = 'red';

    // yang ngebuat ketika di klik ada paragraf
    const newText = document.createElement('p')
    newText.textContent = 'Belajar DOM Javascript adalah belajar untuk memanipulasi element HTML menggunakan Javascript';
    body.append(newText);

    
}

function ubahText(){
    btn1.textContent = 'OKE';
    console.log('button  aman');
}

const defaultText = 'Klik Saya 1'
btn1.textContent = defaultText
// ketika memanggil defaultText ,isi tersebut adalah Klik saya 1
function oriText (){
    btn1.textContent = defaultText;
}


// ----------------------------------------------------------------------------------//
// tugas kecil ,munculkan  text ketika mouse di geser ke klik 2 ,pas mouse keluar ubah warna text yang baru di paragraf//

const paragrafText = 'Andre Satria Putra Dwifa'




function tampilText(){
    const newText = document.createElement('p')
    newText.textContent = paragrafText;
    body.append(newText);
    newText.style.color = 'red';
    newText.setAttribute('id', 'newText');
}

function gantiWarna (){
    const newText = document.getElementById('newText');
    newText.style.color = 'blue';
}


    





   
