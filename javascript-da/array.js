 
//  const arraySaya = ['😊','❤️','😍']
//  console.log(arraySaya)

//  const arrayKamu = []
//  arrayKamu [0] = '😎'
//  arrayKamu [1] = '😢'
//  arrayKamu [2] = '😡'
//  console.log(arrayKamu)
// ----------------------------------------------------
// const arraySaya = ['🥭','🥥','🍋','🍇','🍓']

// const anggur =arraySaya.includes('🍇') // true or false
// // menunjukan apakah arraySaya mengandung '🍇' atau tidak
// console.log(anggur) 
// const posisiAnggur = arraySaya.indexOf('🍇') // menunjukan posisi '🍇' di arraySaya
// const indexBefore= posisiAnggur - 1;  // menentukan posisi sebelum anggur
// const indexAfter = posisiAnggur + 1; // menentukan posisi sesudah anggur.
// const before = arraySaya[indexBefore]
// const after  = arraySaya[indexAfter]
// console.log (`posisi sebelum buah anggur adalah ${before}`)
// console.log (`posisi sesudah buah anggur adalah ${after}`)

// if (anggur) {
//     console.log(`ada buah anggur di posisi ${posisiAnggur}`)
// } else {
//     console.log('tidak ada buah anggur')
// }

// // short hand
// const buahAwal = arraySaya.shift()
// console.log(`buah awal adalah ${buahAwal}`)
// const buahAkhir = arraySaya.pop()
// console.log(`buah akhir adalah ${buahAkhir}`)

// const pisang = arraySaya.includes('🍌') // true or false
// console.log(pisang)
// -------------------------------------------------
// const arraySaya = []
// arraySaya ['alpukat'] = '🥑'
// arraySaya ['jeruk'] = '🍊'
// console.log(arraySaya)
// console.log(arraySaya['alpukat'])
// -----------------------------------------


// const arraySaya = ['🍋', '🍌', '🍍', '🍋‍🟩', '🍎', '🍇'] //Original Array
// const newArraySaya = arraySaya.slice()  //KW
//                     //array.from(arraySaya) //KW
//                     //JSON.parse(JSON.stringify(arraySaya)) //KW

// newArraySaya[0] = '❌'

// console.log ({arraySaya})
// console.log ({newArraySaya})

// -------------------------------  

// const arraySaya = ['🍌', 10,
//     {tomato : function () {
//     console.log ('ini tomato')}},
//     ['eat','food']] 
//                                              //array di dalam array
// console.log(arraySaya[3][1]) //menunjukan array di dalam array
//                     //menunjukan didalam arraySaya, array ke 3, dan menunjukan index ke 1 dari array tersebut

// console.log(arraySaya[2].tomato) //menunjukan object di dalam array

// -------------------------------------

// const arraySaya = ['🍇','🍌','🥑']
// const arrayKamu = ['💋','😍','😙']

// const mergeArray = arraySaya.concat(arrayKamu) //menggabungkan arraySaya dan arrayKamu
// console.log(mergeArray)

// for ( list of mergeArray) {
//     console.log(list)
// }

// mergeArray.map((value,index) => console.log(`index ke ${index} adalah ${value}`)) //menunjukan index dan value dari mergeArray
// mergeArray.map((value,index) => console.log(value,index)) //menunjukan index dan value dari mergeArray


// -----------------------------------------------------------------


const datas = [
    {
        "name": "John",
        "stack": "Front-end",
        "age": 25
    },
    {
        "name": "Andre",
        "stack": "Back-end",
        "age": 30
    },
    {
        "name": "Maria",
        "stack": "Full-stack",
        "age": 28
    },
    {
        "name": "Dewi",
        "stack": "Front-end",
        "age": 22
    },
    {
        "name": "Budi",
        "stack": "Back-end",
        "age": 35
    }
]

datas.map((values,index) => {
    console.log (values.name, values.age)
} )

// datas.sort((a,b) => a.age - b.age).map((values) => console.log (values)) //mengurutkan data berdasarkan umur dari yang termuda ke yang tertua

// datas.filter((x) => x.age > 25).map((values) => console.log (values)) //menunjukan data yang berumur lebih dari 25

datas .sort((a,b) => a.age - b.age)
      .filter((x) => x.age > 25)
      .map((values) => console.log (values)) //mengurutkan data berdasarkan umur dari yang termuda ke yang tertua, dan menunjukan data yang berumur lebih dari 25

