function hitKel () {
    let inputElement = document.getElementById("squareSide");
    let hasilElement = document.getElementById("hasil");

    // dapatkan nomor dari input\\
    let panjangSisi = inputElement.value;
    console.log(4 * panjangSisi);
    hasilElement.innerHTML = 4 * panjangSisi;
}

function hitLuas () {
    let inputElement = document.getElementById("squareSide");
    let hasilElement = document.getElementById("hasil");

    // dapatkan nomor dari input\\
    let panjangSisi = inputElement.value;
    console.log(panjangSisi * panjangSisi);
    hasilElement.innerHTML = panjangSisi * panjangSisi;
}


function hitLuasPerpan () {
    let inputElement1 = document.getElementById("inpPanjang");
    let inputElement2 = document.getElementById("inpLebar");
    let hasilElement = document.getElementById("hasil2");

    // dapatkan nomor dari input\\
    let panjang = inputElement1.value; 
    let lebar = inputElement2.value;
    console.log(panjang * lebar);
    hasilElement.innerHTML = panjang * lebar;
}

function hitKelPerpan () {
    let inputElement1 = document.getElementById("inpPanjang");
    let inputElement2 = document.getElementById("inpLebar");
    let hasilElement = document.getElementById("hasil2");

    // dapatkan nomor dari input\\
    let panjang = inputElement1.value; 
    let lebar = inputElement2.value;
    console.log( (panjang + lebar) * 2);
    hasilElement.innerHTML = (panjang + lebar) * 2;
}
