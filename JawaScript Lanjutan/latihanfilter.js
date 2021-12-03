// ambil semua element videonya
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang 'Javascript Lanjutan'
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi video
    .map(item => item.dataset.duration)
// ubah durasi menjadi int, ubah menit ke detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
// jumlah semua detik
    .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - 2 * 3600;
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;

// simpan di DOM
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = `${jam}:${menit}:${detik}`;
const jmlvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pvideo = document.querySelector('.jumlah-video');
pvideo.textContent = `${jmlvideo} Video` ;

console.log(detik);