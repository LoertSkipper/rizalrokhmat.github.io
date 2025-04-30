document.addEventListener('DOMContentLoaded', function() {
    const kirimButton = document.querySelector('.kontak input[type="submit"]');

    kirimButton.addEventListener('click', function(event) {
        event.preventDefault();

        const nama = document.querySelector('.kontak input[type="text"]').value;
        const telepon = document.querySelector('.kontak input[type="number"]').value;
        const layanan = document.querySelector('.kontak select').value;

        if (nama === "" || telepon === "" || layanan === "") {
            alert("Mohon lengkapi semua data sebelum mengirim!");
        } else {
            alert(`Terima kasih ${nama}!\n\nKami akan menghubungi Anda di nomor ${telepon} untuk layanan: ${layanan}.`);
        }
    });
});
