function hitungLuasSegitiga() {
    let alas = parseInt($('#alasSegitiga').val());
    let tinggi = parseInt($('#tinggiSegitiga').val());
    let hasilLuasSegitiga = 0.5 * alas * tinggi;
    $('#hasilLuasSegitiga').val(hasilLuasSegitiga);
}

function resetLuasSegitiga() {
    $('#alasSegitiga').val('');
    $('#tinggiSegitiga').val('');
    $('#hasilLuasSegitiga').val('');
}

function hitungKelilingSegitiga() {
    let sisi1 = parseInt($('#sisiSegitiga1').val());
    let sisi2 = parseInt($('#sisiSegitiga2').val());
    let sisi3 = parseInt($('#sisiSegitiga3').val());
    let hitungKelilingSegitiga = sisi1 + sisi2 + sisi3;
    $('#hasilKelilingSegitiga').val(hitungKelilingSegitiga);
}

function resetKelilingSegitiga() {
    $('#sisiSegitiga1').val('');
    $('#sisiSegitiga2').val('');
    $('#sisiSegitiga3').val('');
    $('#hasilKelilingSegitiga').val('');
}

// ----------------------------------------------------------------

function hitungLuasJajargenjang() {
    let alas = parseInt($('#alasJajargenjang').val());
    let tinggi = parseInt($('#tinggiJajargenjang').val());
    let hitungLuasJajargenjang = alas * tinggi;
    $('#hasilLuasJajargenjang').val(hitungLuasJajargenjang);
}

function resetLuasJajargenjang() {
    $('#alasJajargenjang').val('');
    $('#tinggiJajargenjang').val('');
    $('#hasilLuasJajargenjang').val('');
}

function hitungKelilingJajargenjang() {
    let panjang = parseInt($('#panjangJajargenjang').val());
    let lebar = parseInt($('#lebarJajargenjang').val());
    let hitungKelilingJajargenjang = 2 * (panjang + lebar);
    $('#hasilKelilingJajargenjang').val(hitungKelilingJajargenjang);
}

function resetKelilingJajargenjang() {
    $('#panjangJajargenjang').val('');
    $('#lebarJajargenjang').val('');
    $('#hasilKelilingJajargenjang').val('');
}