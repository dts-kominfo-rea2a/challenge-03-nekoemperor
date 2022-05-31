// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (arrBelanja) => {
  const arrListBelanjaan = [];
  for (let counter = 0; counter < arrBelanja.length; counter++) {
    let belanjaan = `- ${arrBelanja[counter].nama} x ${arrBelanja[counter].kuantitas}`;
    arrListBelanjaan.push(belanjaan);
  }
  return arrListBelanjaan;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (arrBelanja) => {
  const arrHarga = [];
  let totalHarga = 0;

  for (let counter = 0; counter < arrBelanja.length; counter++) {
    let harga = arrBelanja[counter].harga * arrBelanja[counter].kuantitas
    arrHarga.push(harga);
  }
  for (let counter = 0; counter < arrHarga.length; counter++) {
    totalHarga += arrHarga[counter];
  }
  return totalHarga
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
