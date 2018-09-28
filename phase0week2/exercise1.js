//1.NEWTON SECOND LAW

STORE massa benda with 200
STORE percepatan benda with 2
STORE resultanGaya with no value
CALCULATE "massa benda" times "percepatan benda"
SET resultanGaya" value with calculation result
DISPLAY "resultan gaya"


//2.Tahun Kabisat

STORE year with any value
STORE divider1 with 4
STORE divider2 with 100
STORE divider3 with 400
 IF year modulo divider1 is equal 0 and year modulo divider2 is not equal 0 
  DISPLAY "Leap year"
 ELSE IF year modulo divider1 is equal to 0 and year modulo divider2 is equal to 0 and year modulo divider3 is equal to 0
  DISPLAY "Leap year"
 ELSE 
  DISPLAY "Not leap year"
 ENDIF

/*
ALGORITMA:
buat variabel year dengan nilai yang akan diberikan
buat variabel divider1 dengan nilai 4
buat variabel divider2 dengan nilai 100
buat variabel divider3 dengan nilai 400
  jika year dibagi dengan divider1 menghasilkan nilai 0 dan year dibagi divider 2 menghasilkan nilai bukan 0
    tampilkan "Leap year"
  atau jika year dibagi dengan divider1 menghasilkan nilai 0 dan year dibagi divider2 menghasilkan nilai 0 dan year dibagi divider3 menghasilkan nilai 0
    tampilkan "Leap year"
  atau
    tampilkan "Not a leap year"
*/


//3.Laundry Day

STORE PakaianYangAkanDicuci with no value  
 WHILE PakaianYangAkanDicuci < 20
  DISPLAY "Pakaian yang telah masuk " and PakaianYangAkanDicuci
  ADD PakaianYangAkanDicuci by 1
  IF PakaianYangAkanDicuci is equal to 20
    DISPLAY "Mesin cuci dinyalakan"
  ELSE
    DISPLAY "Jumlah pakaian belum mencukupi"

/*
ALGORITMA:
buat variabel PakaianYangAkanDicuci dengan nilai yang akan diberikan
  selama PakaianYangAkanDicuci kurang dari 20,
    tampilkan "Pakaian yang telah masuk " dan PakaianYangAkanDicuci
    tambahkan PakaianYangAkanDicuci sebanyak 1
    jika PakaianYangAkanDicuci bernilai 20,
      tampilkan "Mesin cuci dinyalakan"
    atau 
      tampilkan "Jumlah pakaian belum mencukupi"
*/


//4.Periksa Kuku

STORE SiswaYangTelahDiperiksa with 0
STORE Siswa with no value
STORE a with "kuku sudah dipotong"
WHILE Siswa < 40
  IF Siswa is equal to a
    DISPLAY "kuku siswa sudah dirapihkan dan siswa patut dipuji"
  ELSE 
    DISPLAY "kuku siswa belum dirapihkan dan siswa patut dihukum"
  ADD SiswaYangTelahDiperiksa by 1
    DISPLAY "jumlah siswa yang telah diperiksa= " + siswa

/*
ALGORITMA: 
buat variabel SiswaYangTelahDiperiksa dengan nilai 0
buat variabel Siswa dengan nilai yang akan diberikan
buat variabel KukuSudahDiPotong dengan nilai a
selama Siswa kurang dari 40
  jika Siswa sama dengan a
    tampilkan "kuku siswa sudah dirapihkan dan siswa patut dipuji"
  atau 
    tampilkan "kuku siswa belum dirapihkan dan siswa patut dihukum"
  tambahkan siswa yang telah diperiksa sebanyak 1
  tampilkan "jumlah siswa yang telah diperiksa= " + siswa
*/


