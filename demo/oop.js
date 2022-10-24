

export default class Ev {
    constructor(oda,kat,cephe,aidat,fiyat)
    {
        this.oda=oda;
        this.kat=kat;
        this.cephe=cephe;
        this.aidat=aidat;
        this.fiyat=fiyat;
        

    }
    tanit()
    {
      console.log(this);  
    }
}

 // ev1= new Ev(3,2,"Kuzey",100,5000)