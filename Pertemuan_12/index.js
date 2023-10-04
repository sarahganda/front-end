class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
}

class Toyota extends Mobil{
    constructor(merek, warna, transmisi, bahanBakar, mesin){
        super(transmisi, bahanBakar, mesin);
        this.warna = warna;
        this.merek = merek;
    }
}

const agya = new Toyota ("Agya", "putih", "Automatic", "Bensin", 1500)
console.log(agya);