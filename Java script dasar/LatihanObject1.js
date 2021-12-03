function Angkot(Sopir,Trayek,penumpang,kas){
    this.Sopir = Sopir;
    this.Trayek = Trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangnaik = function(namapenumpang){
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }

    this.penumpangturun = function(namapenumpang,bayar){
        if(this.penumpang.length === 0){
            alert("Angkot masih kosong");
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
           if (this.penumpang[i] == namapenumpang){
               this.penumpang[i] = undefined;
               this.kas += bayar;
               return this.penumpang;
           }
            
        }

    }
}

var angkot1 = new Angkot('Jupri',['Matram','Senggigi'],[],0);
var angkot2 = new Angkot('Mansur',['Matram','Senggigi'],[],0);



