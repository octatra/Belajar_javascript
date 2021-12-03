var mhs1 = {
    
    nama : "Octa Travelian",
    nim : '1901010035',
    email : 'octatravelian@gmail.com',
    jurusan : 'Ilmu Komputer'
}

var mhs2 = {
    
    nama : "Anggun Sukma Azani",
    nim : '1901060028',
    email : 'anggunsikma@gmail.com',
    jurusan : 'Gizi'
}

function buatobjek(nama, nis, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nis = nis;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatobjek('Octa','1901010035','octatravelian@gmail.com','Ilkom');

function Mahasiswa(nama, nim, email, jurusan){
    this.nama =nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Jupri','01010035','jupri@gmail.com','Sastra');