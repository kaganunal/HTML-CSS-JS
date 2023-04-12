// 1.SORU Browser' da herhangi bir değişkeni tanımlayıp kendi ismimizi yazdıralım
console.time("some_label");
console.timeEnd("some_label");

let isim = "Oguz Kagan";
console.log(isim);

//2.SORU  console tanımlanan iki sayının topmlamı yazdıralım

let sayi1 = 5;
let sayi2 = 10;

console.log(sayi1 + sayi2);

//obje oluşturalım name: "Bilge" age: 18 isDeveloper: true / false console a çıktısını verelim

var person = {
  name: "Bilge",
  age: 18,
  isDeveloper: true,
};

console.log(person.name + person.age + person.isDeveloper);
console.log(person);
console.log(person["name"]);
console.log(
  "Name: " +
    person.name +
    "Age: " +
    person.age +
    "IsDeveloper: " +
    person.isDeveloper
);

//4.SORU bu objeye country propunda Türkiye yi ekleyelim

person.country = "New Turkiye";

console.log(person.country);
console.log(person);

//5.SORU aynı nesnenin isDeveloper probunu silelim

delete person.isDeveloper;
console.log(person);

//6.SORU aynı nesnenin ismini Bilge Adam olarak değiştirelim

person.name = "Bilge Adam";
console.log(person.name);

//7.SORU

var liste = ["Bilge", "Adam", 18, 20, true, false];
console.log(liste);

//8.SORU
console.log(liste[0] + liste[4]);

//9.SORU Adamı Kadın yapalım

person.name.replace("Adam", "Kadın");
console.log(person.name);

liste[1] = "Kadın";
console.log(liste);

//10.SORU dizinin sonuna Merhaba ekleyelim

//11.SORU dizinin başına en sevdiğiniz kişiyi ekleyin size lahmacun borcu olsun

liste.unshift("Mustafa Ozcan");
console.log(liste);

//12.SORU dizinin son elemanını çıkartalım
liste.pop();
console.log(liste);

// 13.SORU en baştaki değeri çıkartalım
liste.shift();
console.log(liste);

//14.SORU bir double sayı tanımlayalım 9.4 13.5 bunu yukarı yuvarlayalım

let sayi = 9.4;
sayi1 = Math.ceil(sayi);
sayi2 = Math.round(sayi);

console.log(sayi1);
console.log(sayi2);

//15.SORU sayı ikiye tam bölünebiliyorsa konsolda bu sayı çifttir. bölünemiyorsa tektir

let sayi3 = 15;

if (sayi3 % 2 == 0) {
  console.log("Çift");
} else {
  console.log("Tek");
}

//16.SORU bir değişken ismi (insan ismi) tanımlayalım.  4 ayrı case içerisinde eşitlendiğinde Hoşgeldin {isim,}

let ad = "Oğuz";

switch (ad) {
  case "Oğuz":
    console.log("Hoşgeldin " + ad);
    break;
  case "Mustafa":
    console.log("Hoşgeldin " + ad);
    break;
  case "Fatih":
    console.log("Hoşgeldin " + ad);
    break;
  case "Atakan":
    console.log("Hoşgeldin " + ad);
    break;
  default:
    console.log("Siz kimsiniz?");
}

//17.SORU bir dizi tanımlayalım içerisinde

var isimler = ["Bilge", "Ayşe", "Fatma", "Ali", "Veli"];

for (let i = 0; i < isimler.length; i++) {
  console.log(i + 1 + ".isim: " + isimler[i]);
}

//18.SORU yaş tanımlayalım, kullanıcının yaşı 54 olduğunda emekli edelim. while yapalım

let age = 20;

while (age < 54) {
  console.log("Yaşınız: " + age + "");
  age++;
}
console.log("Emekli oldunuz, Yaşınız:" + age);

//19.SORU 85 yaş girelim. bu sefer 65 küçük olduğunda emekli olmasın büyükse emekli olsun. bunuda do while yapalım

let age2 = 85;

do {
  age2--;
  console.log("Emekli oldunuz, yaşınız:" + age2);
} while (age2 > 65);

//   var insan =
//   {
//     age: fonksiyon()
//   };
//   function fonksiyon() {
//     return 25;
//   }
