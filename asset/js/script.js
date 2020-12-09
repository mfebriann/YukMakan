// Alert klik cart and message (chat)
const cart1 = document.getElementById('cart');
const cart2 = document.querySelector('.cart');
const messageMobile = document.getElementById('chat-mobile');
const messageDesktop = document.getElementById('chat-desktop');


// Memberikan popup alert untuk cart / keranjang
cart1.addEventListener('click', function cart1() {
    alert('Total belanja kamu ada 4')
});

cart2.addEventListener('click', function cart2() {
    alert('Total belanja kamu ada 4')
});


// Menuju kebuah sebuah link ketika kita menekan YES pada chat
messageMobile.addEventListener('click', function chatMobile() {
    let pesan = confirm ('Beri tanggapan tentang kekurangan pada website ini berupa saran dan kritik nya');
        pesan === true ?  window.location = "https://wa.wizard.id/2e4cb9" : alert('Anda tidak memberi tanggapan tentang website ini'); 
});

messageDesktop.addEventListener('click', function chatDesktop(){
    let pesan = confirm ('Beri tanggapan tentang kekurangan pada website ini berupa saran dan kritik nya');
    pesan === true ? window.location = "https://wa.wizard.id/2e4cb9" : alert('Anda tidak memberi tanggapan tentang website ini');
})



// Menampilkan hamburger menu 
const checkbox = document.querySelector('#checkbox');;
const menuNavigasi = document.querySelector('.menu-navigasi');
const search = document.querySelector('form');

checkbox.addEventListener('click', function() {
    menuNavigasi.classList.toggle('tampil'),
    search.classList.toggle('tampil');
});

// Button pesan
function button() {
    alert('Kamu telat, stok sudah habis :(')
}

// Pesan lihat lainnya 
const more = document.getElementById('arrow-more');
more.addEventListener('click', function() {
    alert('Belum ada menu yang lainnya')
})

// Memberikan loading ketika sedang load halaman
const loading = document.querySelector('.wrap-loading');

window.addEventListener('load', function() {
    loading.style.display = 'none'; 
} )



// Agar nav tidak menutupi
const links = document.querySelectorAll('.link-menu');
for (const link of links) {
    link.addEventListener("click", clickText);
}

function clickText(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 120;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
