document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const messageDiv = document.getElementById('message');
    const animationContainer = document.getElementById('animationContainer');

    function createFlyingObject() {
        const object = document.createElement('div');
        object.classList.add('flying-object');
        
        // CÁC ICON HIỆU ỨNG BẠN MUỐN (Trái tim, lấp lánh, cánh hoa)
        const icons = ['❤️', '✨', '⭐', '🌸']; 
        object.innerHTML = icons[Math.floor(Math.random() * icons.length)]; 

        // Vị trí X ngẫu nhiên (từ 0% đến 100% chiều rộng màn hình)
        object.style.left = `${Math.random() * 100}vw`; 
        
        // Kích thước ngẫu nhiên (từ 15px đến 30px)
        object.style.fontSize = `${15 + Math.random() * 15}px`; 
        
        // Thiết lập thời gian và độ trễ ngẫu nhiên cho animation
        const duration = 15 + Math.random() * 10; // 15s đến 25s
        const delay = Math.random() * 5; // Độ trễ 0s đến 5s
        object.style.animationDuration = `${duration}s`;
        object.style.animationDelay = `${delay}s`;

        animationContainer.appendChild(object);

        // Xóa vật thể sau khi hoàn thành animation
        object.addEventListener('animationend', () => {
            object.remove();
        });
    }

    function startAnimation() {
        // Tạo một vật thể mới sau mỗi 300-500ms
        setInterval(createFlyingObject, 300 + Math.random() * 200); 
    }

    startButton.addEventListener('click', () => {
        // 1. Ẩn nút Start
        startButton.style.display = 'none';

        // 2. Hiển thị phần lời chúc
        messageDiv.classList.remove('hidden');
        setTimeout(() => {
            messageDiv.classList.add('visible');
        }, 10); 

        // 3. Thay đổi màu nền
        document.body.style.backgroundColor = '#fce4ec'; 
        
        // 4. BẮT ĐẦU HIỆU ỨNG BAY
        startAnimation(); 
    });
});
