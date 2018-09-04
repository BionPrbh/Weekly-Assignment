var nama = 'dino';
var peran = 'Penyihir';

if (nama !== ''){
  console.log('Selamat datang di Dunia Proxytia, '+ nama);
}else{
  console.log('Nama harus diisi!');
}

if (peran == 'Ksatria'){
 console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}else if (peran == 'Tabib'){
 console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
}else if (peran == 'Penyihir'){
 console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}else {
 console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}





