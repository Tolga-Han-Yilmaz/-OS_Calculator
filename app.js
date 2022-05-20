const key_ac = document.querySelectorAll(".content")[0];
const key_isaret = document.querySelectorAll(".content")[1];
const key_mod = document.querySelectorAll(".content")[2];
const key_bölüm = document.querySelectorAll(".content")[3];
const key_7 = document.querySelectorAll(".content")[4];
const key_8 = document.querySelectorAll(".content")[5];
const key_9 = document.querySelectorAll(".content")[6];
const key_carpi = document.querySelectorAll(".content")[7];
const key_4 = document.querySelectorAll(".content")[8];
const key_5 = document.querySelectorAll(".content")[9];
const key_6 = document.querySelectorAll(".content")[10];
const key_eksi = document.querySelectorAll(".content")[11];
const key_1 = document.querySelectorAll(".content")[12];
const key_2 = document.querySelectorAll(".content")[13];
const key_3 = document.querySelectorAll(".content")[14];
const key_topla = document.querySelectorAll(".content")[15];
const key_0 = document.querySelectorAll(".content")[16];
const key_nokta = document.querySelectorAll(".content")[17];
const key_esit = document.querySelectorAll(".content")[18];
const textResult = document.getElementById("textResult");
const deger = document.querySelectorAll(".content");

// const liste = [];

selected();

function selected() {
  degerYazdır();
  sonuc();
  // myList();
}

function degerYazdır() {
  for (let i = 0; i < deger.length; i++) {
    deger[i].addEventListener("click", function () {
      textResult.innerHTML += deger[i].innerHTML;
      // liste.push(Number(deger[i].innerHTML));
      // toplama(i);
      //   çıkarma(i);
      //   bölme(i);
      //   çarpma(i);
      //   eşit(i);
      //   modül(i);
      // console.log(liste);
    });
  }
}
function sonuc() {
  key_ac.addEventListener("click", function () {
    textResult.innerHTML = "";
  });
}
// function toplama(i) {
//   if (deger[i].innerHTML === "+") {
//   }
// }

// function myList() {
//   textResult.innerHTML = liste;
// }
