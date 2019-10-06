var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(text){
  text.splice(1,1,"Roman Alamsyah Elsharawy");
  text.splice(2,1,"Provinsi Bandar Lampung");
  text.splice(4,1,"Pria","SMA Internasional Metro")

  console.log(text)

  var ex = text.splice(3,1)
  // console.log(ex)

  var tanggal = ex[0].split("/")
  // console.log(tanggal)
  
  var bulan = tanggal[1]
  // console.log(bulan)
  
  switch(Number(bulan)){
    case 01 : console.log('Januari');
    break;
    case 02 : console.log('Februari');
    break;
    case 03 : console.log('Maret');
    break;
    case 04 : console.log('April');
    break;
    case 05 : console.log('Mei');
    break;
    case 06 : console.log('Juni');
    break;
    case 07 : console.log('Juli');
    break;
    case 08 : console.log('Agustus');
    break;
    case 09 : console.log('September');
    break;
    case 10 : console.log('Oktober');
    break;
    case 11 : console.log('November');
    break;
    case 12 : console.log('Desember');
    break;
    default : console.log('Bulan tidak valid');
  }
  var date = tanggal.sort(function(a, b){return(b - a)})
  console.log(date)

  var tgl = ex[0].split('/').join('-')
  console.log(tgl)

  var nama = text[1]
  console.log(nama.slice(0,15))
}

dataHandling2(input)
