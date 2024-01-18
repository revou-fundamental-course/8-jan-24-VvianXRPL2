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
    console.log( (2 * panjang) + (2 * lebar) );
    hasilElement.innerHTML = (2 * panjang) + (2 * lebar);
}

function fun () {
    document.getElementById("myForm").reset();
    document.getElementById("myFormResult").reset();
}

function funP () {
    document.getElementById("myForm2").reset()
}