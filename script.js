function anmaAc(){
document.getElementById("anma").scrollIntoView({
behavior:"smooth"
});
}



const isimListesi = [

"Özgecan Aslan",
"Pınar Gültekin",
"Emine Bulut",
"Münevver Karabulut",
"Şule Çet",
"Başak Cengiz",
"Nagihan Akarsel",
"Ceren Özdemir",
"Aleyna Çakır",
"Gamze Açar",
"Şebnem Şirin",
"Büşra Nur Karabulut",
"Ayşe Paşalı",
"Zehra Yılmaz",
"Hatice Yıldız",
"Sevgi Kurt",
"Elif Doğan",
"Tuğba Demir",
"Zeynep Demir",
"Ayşe Demir",
"Fatma Kaya",
"Elif Yıldız",
"Sevda Korkmaz",
"Zehra Kaya",
"Nesrin Aladağ",
"Semiha Deniz",
"Nagihan Karadeniz",
"Fatma Nur Çelik",
"Hifa İkra Şengüler",
"Dilafruz Chulieva",
"Ceren Kıvrak",
"Mizgin Karademir",
"Gül Dağ",
"Sevim Özdemir",
"Yeliz İnci",
"Saliha Turan",
"Amine Duman",
"Nurcan Gündoğan",
"Gülten Ürkmez",
"Emine Yusuf",
"Cemile Yıldırım",
"Aysun İnam",
"Aylin Polat Dağ",
"Filiz Şağbangül",
"Gönül Alkan",
"İlknur Kor",
"Kübra Kılıç",
"Zeynep Ayas",
"Kübra Keleş",
"Songül Hakbilir",
"Emine Özer",
"Kezban Genç",
"Gülçin Bilgin Turna",
"Kübra Kölge",
"Medine Akpınar",
"Alev Koç",
"Azize Cengiz",
"Azra Cengiz",
"Beyzanur Uçan Cengiz",
"Nuran Çakaloğlu",
"Bahar Taş",
"Ceren Işık",
"Kadriye Alver",
"Sümeyye Satılmış",
"Özlem Arslan",
"Nimet Kılıç",
"Gül Seher Göksan",
"Fatma Demircan",
"Ülker Koçak",
"Rukiye Çakır",
"Pınar Karataş",
"Tuba Dinç",
"Nur Banu Ötünç",
"Gözde Akbaba",
"Helin Kutay",
"Ada Altunbaş",
"Ebru Dirici",
"Esra Murtatoğlu",
"Çiğdem Akyüz",
"Binnaz Eriş",
"Şerife Çınar",
"Esra Koca",
"İkbal Uzuner",
"Ayşenur Halil",
"Azra Gülendam Haytaoğlu"
];



const container = document.getElementById("isimler");

let index = 0;

function isimGoster(){

container.classList.remove("active");

setTimeout(()=>{

container.textContent = isimListesi[index];

container.classList.add("active");

index++;

if(index >= isimListesi.length){
index = 0;
}

},300)

}

setInterval(isimGoster,2500);

isimGoster();



let sayac = 0;

function cicekBirak(){

sayac++;

document.getElementById("cicekSayisi").innerText =
sayac + " kişi çiçek bıraktı";

}