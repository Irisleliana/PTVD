// Lấy các phần tử
const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');

// Mở popup
openPopupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Đóng popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Đóng popup khi nhấp bên ngoài nội dung
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
