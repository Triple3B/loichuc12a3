document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const messageDiv = document.getElementById('message');

    startButton.addEventListener('click', () => {
        // 1. Ẩn nút Start
        startButton.style.display = 'none';

        // 2. Hiển thị phần lời chúc
        messageDiv.classList.remove('hidden');
        
        // Dùng setTimeout để đảm bảo trình duyệt đã bỏ class 'hidden' 
        // trước khi thêm class 'visible' để kích hoạt hiệu ứng transition
        setTimeout(() => {
            messageDiv.classList.add('visible');
        }, 10); // Độ trễ nhỏ 10ms

        // 3. Thay đổi màu nền
        document.body.style.backgroundColor = '#fce4ec'; 
    });
});
