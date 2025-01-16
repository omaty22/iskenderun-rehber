import iste from './iste.png';
import header_img from './header.jpg';
import menu_icon from './menu_icon.svg';
import city from './city.jpg';
import profilepic from './ProfilePic.png';
import PlacesHotel from './PlacesHotel.png';
import Sporİmg from './fitness.png';
import Cafeİmg from './coffee.png';
import Rentİmg from './CarRent.png';
import Marketİmg from './market.png';

const ElektrikCihazlar = [
    {
        title: "Lamasat",
        description: "+90 531 242 95 24",
        location: "tamir/alış-satış"
    },
    {
        title: "Ahmet Mendil",
        description: "+90 531 812 74 44",
        location: "Telefon tamiri/alış-satış"
    },
    {
        title: "Cihad Ramadan",
        description: "+90 536 544 98 31",
        location: "Elektrikçi"
    },
    {
        title: "Halil",
        description: "+90 535 383 14 19",
        location: "kamera ve bilgisayar tamiri/kurumu"
    },
    {
        title: "Ramez",
        description: "++90 553 048 06 88",
        location: "Cihaz alış/satışı"
    },
    {
        title: "Yamen",
        description: "+90 555 033 39 55",
        location: "Buzdolap/Ç.makinası alış/satışı"
    },
    {
        title: "umran zamzam",
        description: "+90 534 245 42 28",
        location: "makina tamiri"
    },
]

const  privatecarsdata = [
    {
        title: "Ahmet Alaabas",
        description: "+90 534 072 22 96",
        location: "özel araç"
    },
    {
        title: "Osama Bey",
        description: "+90 531 665 35 77",
        location: "Araba Tamiri"
    },
    {
        title: "adil",
        description: "+90 537 597 25 97",
        location: "araba kiralama/alış-satış"
    },
    {
        title: "madr",
        description: "+90 537 338 86 63",
        location: "Araba Elekrik parçaların tamiri"
    },
]

const BasımYayılım = [
    {
            title: "samer hafız",
            description: "+90 551 968 90 05",
            location: "basım/yayılım"
        },
        {
            title: "Muaz Bey",
            description: "+90 535 017 57 93",
            location: "basım/yayılım"
        },
        {
            title: "Mulham Garib",
            description: "+90 545 977 39 44",
            location: "basım/yayılım"
        },
]

const SağlıkData = [
    {
        title: "Hamza",
        description: "+90 536 070 68 81",
        location: "eczane/ilaç"
    },
    {
        title: "yusuf alkurdi",
        description: "+90 538 730 09 84",
        location: "tıbbi tahliller"
    },
    {
        title: "Hasan",
        description: "+90 534 023 00 65",
        location: "fizikoloji/masaj"
    },
]

const EmlakData = [
    {
        title: "betar emlak",
        description: "+90 506 859 74 90",
        location: "Emlakçı"
    },
    {
        title: "Serdar emlak",
        description: "+90 507 320 92 47",
        location: "Emlakçı"
    },
    {
        title   : "VEGA GAYRİMENKUL",
        description: "0326 617 77 73",
        location: "GAYRİMENKUL"
    },
    {
        title   : "MAJÖR GAYRİMENKUL",
        description: "0326 614 15 55",
        location: "GAYRİMENKUL"
    },
    {
        title   : "AYTEV GAYRİMENKUL",
        description: "0326 613 53 90",
        location: "GAYRİMENKUL"
    },
]

const PlacesOtel = [
    {
        title: "Anemon Kent",
        description: "444 0 387",
        location: "https://www.google.com/maps/place/Anemon+Kent+%C4%B0skenderun+Otel/@36.544863,36.1416291,17z/data=!3m1!4b1!4m9!3m8!1s0x1525f62605d213d5:0x5b413056db957aac!5m2!4m1!1i2!8m2!3d36.544863!4d36.144204!16s%2Fg%2F1hhwqhlmk?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Uğur Byc",
        description: "05492164646",
        location: "https://www.google.com/maps/place/U%C4%9Fur+Byc+Hotel/@36.5781415,36.1618672,17z/data=!4m10!3m9!1s0x152f590c9f1f26e9:0x96bb72b222ed5f79!5m3!1s2025-01-14!4m1!1i2!8m2!3d36.5781415!4d36.1618672!16s%2Fg%2F11y2k97b5b?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Bayazid",
        description: "03266142520",
        location: "https://www.google.com/maps/place/Bayazid+Hotel/@36.5857762,36.1668494,17z/data=!4m10!3m9!1s0x152f592dec060c0b:0xad1396c9c7d4e51d!5m3!1s2025-01-14!4m1!1i2!8m2!3d36.5857763!4d36.1717203!16s%2Fg%2F11bx56jy3w?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Sun İnn Otel",
        description: "03266135500",
        location: "https://www.google.com/maps/place/Sun+%C4%B0nn+Otel/@36.5840712,36.1690191,17z/data=!4m10!3m9!1s0x152f5ec7e974a39d:0xb3b5824c116a9d1a!5m3!1s2025-01-14!4m1!1i2!8m2!3d36.5840712!4d36.171594!16s%2Fg%2F1q6706bf1?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    }
]

const PlacesGym = [
    {
        title: "GOLDEN LIFE SPOR MERKEZİ",
        description: "0326 613 13 18",
        location: "https://www.google.com/maps/place/Golden+Life+Fitness+Center/@36.5889358,36.1755371,17z/data=!3m1!4b1!4m6!3m5!1s0x152f593342ee66fb:0x3356e24001c06aee!8m2!3d36.5889358!4d36.1755371!16s%2Fg%2F11cs3cgg49?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "FENİKS GYM (Murat Özoğlu)",
        description: "0326 618 69 69",
        location: "https://www.google.com/maps/place/Feniks+Gym+Sa%C4%9Fl%C4%B1k+ve+Ya%C5%9Fam+Merkezi/@36.5660891,36.150917,17z/data=!3m1!4b1!4m6!3m5!1s0x152f58eb4a95c895:0xb46e18184533fe82!8m2!3d36.5660891!4d36.150917!16s%2Fg%2F11gdqjbqqg?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "EFORM SPOR MERKEZİ",
        description: "03265025858",
        location: "https://www.google.com/maps/place/Eforms+Fitness+Center/@36.5859409,36.1728137,17z/data=!4m10!1m2!2m1!1sEFORM+SPOR+MERKEZ%C4%B0!3m6!1s0x152f58bdb8ba3e4d:0xd71c0357189a3300!8m2!3d36.5859409!4d36.1750024!15sChNFRk9STSBTUE9SIE1FUktFWsSwWhQiEmVmb3JtIHNwb3IgbWVya2V6aZIBA2d5beABAA!16s%2Fg%2F11c2qywrmd?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "MODERN SPOR MERKEZİ",
        description: "None",
        location: "https://www.google.com/maps/place/Modern+spor+merkezi/@36.5835692,36.1914547,17z/data=!3m1!4b1!4m6!3m5!1s0x152f59781fa10125:0x9b404333a4d2c8d1!8m2!3d36.5835692!4d36.1914547!16s%2Fg%2F11h644ksvl?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
]

const PlacesCafe = [
    {
        title: "Lima",
        description: "Dine in",
        location: "https://www.google.com/maps/place/Lima/@36.5919718,36.1555763,17z/data=!3m1!4b1!4m6!3m5!1s0x152f5922b6c468a3:0x382b6ca71b6bdde2!8m2!3d36.5919718!4d36.1555763!16s%2Fg%2F11t0vxhw2z?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Florian Cafe",
        description: "Dine in/Take away",
        location: "https://www.google.com/maps/place/Florian+Cafe+%C4%B0skenderun/@36.5713751,36.1482226,15z/data=!4m10!1m2!2m1!1s+CAFE+FL%C3%96R+(Raymond+Alexandre+Makzume)!3m6!1s0x152f59f8faceacdd:0x9fd08a2d649f6bb8!8m2!3d36.5713751!4d36.1569773!15sCiZDQUZFIEZMw5ZSIChSYXltb25kIEFsZXhhbmRyZSBNYWt6dW1lKVomIiRjYWZlIGZsw7ZyIHJheW1vbmQgYWxleGFuZHJlIG1ha3p1bWWSAQhhcnRfY2FmZeABAA!16s%2Fg%2F11jskn9_bd?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "NES BROST CAFE",
        description: "Dine in/Delivery 05317042131",
        location: "https://www.google.com/maps/place/NES+BROST+CAFE/@36.5613014,35.033248,8z/data=!4m10!1m2!2m1!1zIE5FxZ5WRSBDQUZFIChNdXN0YWZhIE3EsXPEsXJsxLFvxJ9sdSk!3m6!1s0x152f59403113d0cd:0x90cc6b4085456321!8m2!3d36.5613014!4d36.1538535!15sCiVORcWeVkUgQ0FGRSAoTXVzdGFmYSBNxLFzxLFybMSxb8SfbHUpIgOIAQFaJSIjbmXFn3ZlIGNhZmUgbXVzdGFmYSBtxLFzxLFybMSxb8SfbHWSAQRjYWZl4AEA!16s%2Fg%2F11vchhnhcw?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Mapido cafe",
        description: "Dine in/Takeaway 03266130137",
        location: "https://www.google.com/maps/place/Mapido+cafe/@36.5711254,36.1619428,14z/data=!4m10!1m2!2m1!1s+MAP%C4%B0DO+CAFE+(Muti+Baytar)!3m6!1s0x152f59372f34cce9:0xe93f1864d0f6fb23!8m2!3d36.5932202!4d36.1679494!15sChpNQVDEsERPIENBRkUgKE11dGkgQmF5dGFyKVoZIhdtYXBpZG8gY2FmZSBtdXRpIGJheXRhcpIBBGNhZmXgAQA!16s%2Fg%2F11c1v29h_y?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Korfez Cafe",
        description: "dine in/03266146123",
        location: "https://www.google.com/maps/place/Korfez+Cafe/@36.5711254,36.1619428,14z/data=!4m10!1m2!2m1!1s+K%C3%96RFEZ+CAFE+(Mehmet+Ali+Y%C3%BCksel)!3m6!1s0x152f5f2a6e490269:0x67d000b6823809c8!8m2!3d36.5897666!4d36.1712762!15sCiFLw5ZSRkVaIENBRkUgKE1laG1ldCBBbGkgWcO8a3NlbClaISIfa8O2cmZleiBjYWZlIG1laG1ldCBhbGkgecO8a3NlbJIBBGNhZmXgAQA!16s%2Fg%2F1hc7_y74y?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
]

const PlacesRent = [
    {
        title: "Zengin Oto Kiralama",
        description: "03266146766",
        location: "https://www.google.com/maps/place/%C4%B0skenderun+Zengin+Oto+Kiralama/@36.5855517,35.0463459,8z/data=!4m10!1m2!2m1!1zIEtJTEnDhyBBUkHDhyBLxLBSQUxBTUEg!3m6!1s0x152f592fa71bb9bd:0xa89db2e5d5555559!8m2!3d36.5855517!4d36.1669514!15sChZLSUxJw4cgQVJBw4cgS8SwUkFMQU1BkgERY2FyX3JlbnRhbF9hZ2VuY3ngAQA!16s%2Fg%2F1ptyg3th_?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Metin Oto Kiralama",
        description: "05322417868",
        location: "https://www.google.com/maps/place/Metin+Oto+Kiralama+iskenderun+oto+kiralama/@36.2350407,35.6077289,8.3z/data=!4m10!1m2!2m1!1zIE1FVMSwTiBPVE8gS8SwUkFMQU1BIC0gw4fEsMSeREVNIFRFS1NUxLBMIFBFVFJPTCBHSURBIFRVUsSwWk0gS1VZVU1DVUxVSyDEsE7FnkFBVCBPVE8gS8SwUkFMQU1BIFNBTi4gVkUgVMSwQy5MVEQuxZ5UxLAu!3m6!1s0x152f593048e9b1bd:0x151b5f7bc7c7f516!8m2!3d36.5895477!4d36.1671555!15sCndNRVTEsE4gT1RPIEvEsFJBTEFNQSAtIMOHxLDEnkRFTSBURUtTVMSwTCBQRVRST0wgR0lEQSBUVVLEsFpNIEtVWVVNQ1VMVUsgxLBOxZ5BQVQgT1RPIEvEsFJBTEFNQSBTQU4uIFZFIFTEsEMuTFRELsWeVMSwLlpsImptZXRpbiBvdG8ga2lyYWxhbWEgw6dpxJ9kZW0gdGVrc3RpbCBwZXRyb2wgZ2lkYSB0dXJpem0ga3V5dW1jdWx1ayBpbsWfYWF0IG90byBraXJhbGFtYSBzYW4gdmUgdGljIGx0ZCDFn3RpkgERY2FyX3JlbnRhbF9hZ2VuY3maASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTJiV055VEZwbkVBReABAPoBBAgAEEo!16s%2Fg%2F1v2gb3f0?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Karatoyuk Rent A Car",
        description: "0326 615 15 66",
        location: "https://www.google.com/maps/place/Karatoyuk+Rent+A+Car/@36.58282,36.169486,17z/data=!3m1!4b1!4m6!3m5!1s0x152f592eca845f03:0x43384f4f604796c7!8m2!3d36.58282!4d36.169486!16s%2Fg%2F113g7jxyt?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Seral Oto Kiralama",
        description: "0326 617 99 16",
        location: "https://www.google.com/maps/place/Seral+Oto+Kiralama/@36.5836406,36.1667976,17z/data=!4m10!1m2!2m1!1s+SERAL+RENT+A+CAR+(Ali+Sapmaz)!3m6!1s0x152f592ec902d3ad:0xc399e0f86c706fdd!8m2!3d36.5836406!4d36.1689863!15sCh1TRVJBTCBSRU5UIEEgQ0FSIChBbGkgU2FwbWF6KZIBEWNhcl9yZW50YWxfYWdlbmN54AEA!16s%2Fg%2F113j35533?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Çarşı Park Oto Kiralama",
        description: "05322878748",
        location: "https://www.google.com/maps/place/%C3%87ar%C5%9F%C4%B1+Park+Oto+Kiralama/@36.5852655,36.1673067,16z/data=!4m10!1m2!2m1!1zIMOHQVLFnkkgT1RPIEvEsFJBTEFNQSAow5ZtZXIgQXNsYW4gU2F2YcWfKQ!3m6!1s0x152f5969cec0b43b:0x14c8ce13a4322b9c!8m2!3d36.5896368!4d36.1699603!15sCirDh0FSxZ5JIE9UTyBLxLBSQUxBTUEgKMOWbWVyIEFzbGFuIFNhdmHFnymSARNjYXJfbGVhc2luZ19zZXJ2aWNl4AEA!16s%2Fg%2F11fn9dt2nx?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D",
    }
]

const PlacesMarket = [
    {
        title: "Aka Supermarket",
        description: "03266135461/Delivery",
        location: "https://www.google.com/maps/place/Aka+Supermarket/@36.58626,36.1698389,17z/data=!4m15!1m8!3m7!1s0x152f592e02599f3f:0x48b01687ae808ee5!2sAka+Supermarket!8m2!3d36.58626!4d36.1698389!10e1!16s%2Fg%2F11b7q3y516!3m5!1s0x152f592e02599f3f:0x48b01687ae808ee5!8m2!3d36.58626!4d36.1698389!16s%2Fg%2F11b7q3y516?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Tezcan Market",
        description: "03266138650/Delivery",
        location: "https://www.google.com/maps/place/Tezcan+Market/@36.57902,33.9240201,7z/data=!4m10!1m2!2m1!1s+TEZCAN+MARKET+(Erol+Tezcan)!3m6!1s0x152f58d803209c93:0x4358f1bc050db6d!8m2!3d36.57902!4d36.165231!15sChtURVpDQU4gTUFSS0VUIChFcm9sIFRlemNhbilaGyIZdGV6Y2FuIG1hcmtldCBlcm9sIHRlemNhbpIBDWdyb2Nlcnlfc3RvcmXgAQA!16s%2Fg%2F11b7q6vllb?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "HANÇER market",
        description: "05325648129/Delivery",
        location: "https://www.google.com/maps/place/HAN%C3%87ER+market/@36.57902,33.9240201,7z/data=!4m10!1m2!2m1!1s+HAN%C3%87ER+GIDA+(Hasan+Han%C3%A7er)!3m6!1s0x1525fb151963eeed:0xf63d12e6fc21feba!8m2!3d36.4789112!4d36.0621579!15sChxIQU7Dh0VSIEdJREEgKEhhc2FuIEhhbsOnZXIpWhwiGmhhbsOnZXIgZ2lkYSBoYXNhbiBoYW7Dp2VykgENZ3JvY2VyeV9zdG9yZeABAA!16s%2Fg%2F11f5vdh5wt?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        title: "Uçar Market",
        description: "0326 618 05 11",
        location: "https://www.google.com/maps/place/U%C3%A7ar+Market/@36.9132087,35.9062654,10z/data=!4m10!1m2!2m1!1sU%C3%87AR+MARKET+(Metin+U%C3%A7ar)!3m6!1s0x152f58bcf65aaa8f:0xb046880c30175597!8m2!3d36.5561582!4d36.1583216!15sChpVw4dBUiBNQVJLRVQgKE1ldGluIFXDp2FyKVoaIhh1w6dhciBtYXJrZXQgbWV0aW4gdcOnYXKSAQ1ncm9jZXJ5X3N0b3Jl4AEA!16s%2Fg%2F11cs3jpr_c?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
    },
]

const freedata = [
    {
        title: "yuş3",
        description: "+90 539 336 65 44",
        location: "Transfer"
    },
]
export const assets ={
    iste,
    header_img,
    menu_icon,
    city,
    profilepic,
    ElektrikCihazlar,
    privatecarsdata,
    BasımYayılım,
    SağlıkData,
    EmlakData,
    PlacesOtel,
    PlacesHotel,
    PlacesGym,
    Sporİmg,
    PlacesCafe,
    Cafeİmg,
    PlacesRent,
    Rentİmg,
    PlacesMarket,
    Marketİmg,
}





