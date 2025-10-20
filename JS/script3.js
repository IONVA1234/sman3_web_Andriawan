// Tangkap semua tombol "Baca Selengkapnya"
const readButtons = document.querySelectorAll('.read-more');
const closeButtons = document.querySelectorAll('.close-popup');

// Saat tombol "Baca Selengkapnya" diklik
readButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const popup = document.getElementById(targetId);
        if (popup) popup.style.display = 'flex';
    });
});

// Saat tombol "Kembali" diklik
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup').style.display = 'none';
    });
});

// Jika klik di luar popup-content, popup tertutup
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = 'none';
    }
});
