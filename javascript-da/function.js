


// function addName() {
//     return 'Andre Satria'
// }

// alert(addName())

// function addName(firstName, lastName) {
//     console.log('nama Depan :', firstName)
//     console.log('nama Belakang :', lastName)
// }

// addName('Andre', 'Satria')

// function addName() {
//     console.log('Nama Depan :', arguments[0])
//     console.log('Nama Belakang :', arguments[1])
// }

// addName('Andre', 'Satria')

// function addName() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log('Nama :', arguments[i])
//     }
// }

// addName('Andre', 'Satria', 'Fauzan', 'Rizal','Febiola')

// function addName (firstName, lastName) {
//     console.log (firstName, lastName)

// }

// // cara 1  keyworld new funciton
// const sum1 = new Function ('x', 'y', 'console.log (x + y)')
// console.log(sum1(3, 3))

// // cara 2 standard function
// function sum2 (x, y) {
//     console.log (x + y)
// }

// sum2(5, 3)

// const sum3 = (x, y) => {
//     console.log (x + y)
// }

// sum3(3,7)

// --------------------------------------------------------------------------------

// // TUGAS BESAR : 
// // 1. MEMBUAT PERHITUNGAN MATEMATIKA 
// -Luas lingkaran
// -luas segitiga 
// -luas persegi panjang
// -luas jajargenjang
// // 2. menghitung total gaji yang di dapatkan dalam satu bulan dengan input minimal :
// -nama karyawan 
// -gaji perhari
// -jumlah hari masuk kerja


// luas Lingkaran
function luasLingkaran() {
    const phi = 3.14;
    const r = 40;
    const total = phi * r * r;
    console.log('Luas Lingkaran :', total);
}


luasLingkaran();


// luas Segitiga
function luasSegitiga() {
    const a = 10;
    const t = 20;
    const total = 0.5 * a * t;
    console.log('Luas Segitiga :', total);
}

luasSegitiga();

// luas Persegi Panjang
function luasPersegiPanjang() {
    const p = 10;
    const l = 5;
    const total = p * l;
    console.log('Luas Persegi Panjang :', total);
}

luasPersegiPanjang();

// luas Jajar Genjang
function luasJajarGenjang() {
    const a = 10;
    const t = 20;
    const total = a * t;
    console.log('Luas Jajar Genjang :', total);
}

luasJajarGenjang();

// menghitung total gaji yang di dapatkan dalam satu bulan

function totalGaji() {
    const namaKaryawan = 'Andre Satria';
    const gajiPerHari = 10000; 
    const hariKerja = 30;
    let jumlahHariMasukKerja = 25; {
        if (gajiPerHari * jumlahHariMasukKerja < gajiPerHari * hariKerja) {
    } else {
        jumlahHariMasukKerja = hariKerja;
    }
    console.log('Jumlah Hari Masuk Kerja :', jumlahHariMasukKerja);
    console.log('Gaji kamu di potong karena tidak masuk kerja selama 10 hari');
    
    const totalGaji = gajiPerHari * jumlahHariMasukKerja;
    console.log('Nama Karyawan :', namaKaryawan);
    console.log('Total Gaji :', totalGaji);

    return totalGaji;
}}

const gajiAndre = totalGaji();
alert('Total Gaji Andre Satria : Rp.' + gajiAndre);