class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  suara() {
    return `${this.nama} mengeluarkan suara.`;
  }
}

class Kucing extends Hewan {
  suara() {
    return `${this.nama} berkata: Meow!`;
  }
}

const kucing = new Kucing("Milo");
console.log(kucing.suara());
