document.addEventListener('DOMContentLoaded', (event) => {
    const startButton = document.getElementById('startButton');
    const messageDiv = document.getElementById('message');
    const animationContainer = document.getElementById('animationContainer');
    let animationInterval;

    function createFlyingObject() {
        const object = document.createElement('div');
        object.classList.add('flying-object');
        
        // SỬ DỤNG DẤU NHÁY KÉP " " CHUẨN ĐỂ KHÔNG GẶP LỖI CÚ PHÁP
        const icons = ["❤️", "✨", "⭐", "🌸"]; 
        object.innerHTML = icons[Math.floor(Math.random() * icons.length)]; 

        // Ngẫu nhiên vị trí, kích thước, thời gian
        object.style.left = `${Math.random() * 100}vw`; 
        object.style.fontSize = `${15 + Math.random() * 15}px`; 
        
        const duration = 15 + Math.random() * 10; 
        const delay = Math.random() * 5; 
        object.style.animationDuration = `${duration}s`;
        object.style.animationDelay = `${delay}s`;

        animationContainer.appendChild(object);

        // Xóa vật thể sau khi hoàn thành animation
        object.addEventListener('animationend', () => {
            object.remove();
        });
    }

    function startAnimation() {
        // Tạo vật thể lặp lại với tần suất cao hơn để hiệu ứng rõ ràng
        animationInterval = setInterval(() => {
            // Tạo 1-3 vật thể cùng lúc
            for (let i = 0; i < 1 + Math.floor(Math.random() * 3); i++) {
                 createFlyingObject();
            }
        }, 200); // Rất nhạy, cứ 200ms tạo nhóm mới
    }

    startButton.addEventListener('click', () => {
        // 1. Ẩn nút Start
        startButton.style.display = 'none';

        // 2. Hiện lời chúc 
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
