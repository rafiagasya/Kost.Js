// === Kost Favorit === //
const kostFavorit = () => {
  console.log("\n== kost favorit ==");
  const kost = ["Kost Makmur", "Kost Jaya", "Kost Intan", "Kost Bela"];
  kost.forEach((item, index) => {
    console.log(`kost favorit ${index + 1}: ${item}`);
});
}
kostFavorit();

// === Harga dan fasilitas kost === //
const hargadanFasilitasKost = () => {
  console.log("\n== Harga dan Fasilitas Kost ==");

  const KostMakmur = {harga: 2500000, fasilitas: ["AC", "WI-FI"]};
  const KostJaya = {harga: 500000, fasilitas: ["Kamar Mandi", "AC", "WI-FI"]};
  const KostIntan = {harga: 300000, fasilitas: ["AC", "Parkir"]};
  const KostBela = {harga: 250000, fasilitas: ["WI-FI", "Laundry"]};


  console.log(`Kost Makmur:Rp ${KostMakmur.harga.toLocaleString()}, Fasilitas: ${KostMakmur.fasilitas.join(",")} `);
  console.log(`Kost Jaya: Rp ${KostJaya.harga.toLocaleString()}, Fasilitas: ${KostJaya.fasilitas.join(",")}`);
  console.log(`Kost Intan: Rp ${KostIntan.harga.toLocaleString()}, Fasilitas: ${KostIntan.fasilitas.join(",")}`);
  console.log(`Kost Bela: Rp ${KostBela.harga.toLocaleString()}, Fasilitas: ${KostBela.fasilitas.join(",")}`);
};
hargadanFasilitasKost();

// === Kategori Kost Berdasarkan Harga nya === //
const kategoriKost = () => {
  console.log("\n== kategori Kost Berdasarkan Harga ==");

  const kostMurah = ["Kost Makmur","Kost Intan"];
  const kostSedang = ["Kost Bela"];
  const kostMahal = ["Kost Jaya"];

  console.log(`Kost Murah: ${kostMurah.join(",")}`);
  console.log(`Kost Sedang: ${kostSedang.join(",")}`);
  console.log(`Kost Mahal: ${kostMahal.join(",")}`);
};
kategoriKost();

// === Kost Dengan Fasilitas Lengkap === //
const kostFasilitasLengkap = () => {
  console.log("\n== Kost dengan Fasilitas Lengkap ==");

  const kostLengkap = [
    {name: "Kost Makmur", fasilitas:["AC", "WI-FI"], harga: 2500000},
    {name: "Kost Bela", fasilitas:["WI-FI", "Laundry"], harga: 250000},
    {name: "Kost Jaya", fasilitas:["Kamar Mandi", "AC", "WI-FI"], harga: 500000},
  ];

  kostLengkap.forEach(kost => {
    console.log(`Nama: ${kost.name}, Harga: Rp ${kost.harga.toLocaleString()}, Fasilitas: ${kost.fasilitas.join(",")}`);

  });
};
kostFasilitasLengkap();