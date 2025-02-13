async function pesanAwal() {
    suratin.style = "display:none";
    ket.style = "display:none";
    
    // Hiển thị popup nhập tên
    const { value: ten } = await Swal.fire({
        title: 'Nhập tên của em nè! ❤️',
        input: 'text',
        inputPlaceholder: 'Nhập tên vào đây...',
        showCancelButton: false,
        confirmButtonText: 'Xác nhận',
        allowOutsideClick: false
    });
    
    await swalst.fire({
        title: 'Chào cục cưngg! ❤️',
        imageUrl: '' + stiker1.src,
    });
    await swalst.fire({
        title: 'Anh chỉ muốn nói là 😍',
        imageUrl: '' + stiker2.src,
    });
    await swalst.fire({
        title: 'Gửi đến em lời chúc Valentine🤭❤️',
        imageUrl: '' + stiker3.src,
    });
    await swalst.fire({
        title: 'Chúc em luôn luôn xinh đẹpp,vui vẻ và hạnh phúc❤️',
        imageUrl: '' + stiker4.src,
    });
    await swalst.fire({
        title: '😘💕',
        imageUrl: '' + stiker5.src,
    });
    
    if (ten) {
        halo.innerHTML = `Chèoo bé ${ten} iu dấu của anh 🥰`;
    }

    mulaikonten();
}


ftom = 0;
aksift = 0;
ftganti = 0;
flag = 1;
flagg = 1;
fungsi = 0;
fungsiAwal = 0;
fungsitimer = 0;
vketikhalo = halo.innerHTML;
halo.innerHTML = "";
var ahalo = 0,
    vketikhalo;
pesanwhatsapp = pesanWA.innerHTML;
Content.style = "opacity:1;margin-top:16vh;";

function memulai() {
    if (fungsiAwal == 0) {
        audio.play();
        fungsiAwal = 1;
        suratin.style = "transition:all .8s ease;transform:scale(10);opacity:0";
        wallpaper.style = "transform: scale(1.5);";
        ket.style = "display:none";
        setTimeout(pesanAwal, 700);
    }
}

async function mulaikonten() {
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style = "opacity:.7";
    wallpaper.style = "transform: scale(1);";
    stiker.style = "display:inline-flex;";
    setTimeout(ftmuncul, 200);
    setTimeout(kethalo, 500);
}

function kethalo() {
    if (ahalo < vketikhalo.length) {
        halo.innerHTML += vketikhalo.charAt(ahalo);
        ahalo++;
        setTimeout(kethalo, 60);
    }
    if (ahalo == vketikhalo.length) {
        setTimeout(bqmuncul, 200);
    }
}

function bqmuncul() {
    bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
    mulaiketik1();
    fungsi = 1;
}

kal1 = kalimat.innerHTML;
kalimat.innerHTML = "";
var aa = 0,
    kal1;

function mulaiketik1() {
    if (aa < kal1.length) {
        kalimat.innerHTML += kal1.charAt(aa);
        aa++;
        setTimeout(mulaiketik1, 150);
    }
    if (aa == kal1.length) {
        mulaiketik2();
    }
}

kal2 = kalimat2.innerHTML;
kalimat2.innerHTML = "";
var aaa = 0,
    kal2;

function mulaiketik2() {
    if (aaa < kal2.length) {
        kalimat2.innerHTML += kal2.charAt(aaa);
        aaa++;
        setTimeout(mulaiketik2, 180);
    }
    if (aaa == kal2.length) {
        setInterval(berjatuhan, 800);
        setTimeout(munculbwh, 1000);
        setTimeout(tombol, 1000);
    }
}
defkalimatbawah = kalimatbawah.innerHTML;
defkalimatbawah = kalimatbawah.innerHTML;
kalimatbawah4 = "Mãi là công chúa nhỏ của anh nhaaa💖";
kalimatbawah5 = "Cảm ơn em đã đến bên anh, yêu em nhiều lắm💕";
kalimatbawah6 = "Dù sau này thế nào, anh vẫn mãi thương em🥰";

function munculbwh() {
    kalimatbawah.innerHTML = defkalimatbawah;
    setTimeout(munculbwh2, 2000);
    otomatis();
}

function munculbwh2() {
    kalimatbawah.innerHTML = kalimatbawah2.innerHTML;
    setTimeout(munculbwh3, 2000);
    otomatis();
}

function munculbwh3() {
    kalimatbawah.innerHTML = kalimatbawah3.innerHTML;
    setTimeout(munculbwh4, 2000);
    otomatis();
}

function munculbwh4() {
    kalimatbawah.innerHTML = kalimatbawah4;
    setTimeout(munculbwh5, 2000);
    otomatis();
}

function munculbwh5() {
    kalimatbawah.innerHTML = kalimatbawah5;
    setTimeout(munculbwh6, 2000);
    otomatis();
}

function munculbwh6() {
    kalimatbawah.innerHTML = kalimatbawah6;
    setTimeout(munculbwh, 2000); // Quay lại nội dung đầu tiên
    otomatis();
}

function ftaksi() {
    if (aksift == 1) {
        aksift = 0;
    }
}

function ftmuncul() {
    if (ftganti == 0) {
        stiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
    }
    if (ftganti == 1) {
        stiker.src = stikerAkhir.src;
        stiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
    }
}

function fthilang() {
    stiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

function tombol() {
    ftom = 1;
    Tombol.style = "opacity:1;transform: scale(1);";
}

function multifungsi() {
    if (ftom == 1) {
        menuju();
    }
}

async function menuju() {
    window.location = "";
}

const body = document.querySelector("body");
const swalst = Swal.mixin({
    timer: 2500,
    allowOutsideClick: false,
    showConfirmButton: false,
    timerProgressBar: true,
    imageHeight: 90,
    imageWidth: 90,
});
const swals = Swal.mixin({
    allowOutsideClick: false,
    cancelButtonColor: '#FF0040',
    imageWidth: 100,
    imageHeight: 100,
});
audio = new Audio('' + linkmp3.src);

function otomatis() {
    kalimatbawah.style = "position:relative;opacity:0;transform:scale(.3);";
    setTimeout(anim, 300);
}

function anim() {
    kalimatbawah.style = "position:relative;opacity:1;transform:scale(1);";
}

function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(function () {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

document.getElementById('suratin').addEventListener('click', function() {
    document.getElementById('giftMessage').style.display = 'none';
    });

