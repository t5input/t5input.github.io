document.addEventListener('DOMContentLoaded', () => {
    // const watchAdBtn = document.getElementById('watchAdBtn'); // 移除此行
    const adStatus = document.getElementById('adStatus');
    const tokenDisplay = document.getElementById('tokenDisplay');
    const tokenOutput = document.getElementById('tokenOutput');
    const copyTokenBtn = document.getElementById('copyTokenBtn');

    // 移除 watchAdBtn 的事件監聽器邏輯，改為自動觸發
    // if (watchAdBtn) {
    //     watchAdBtn.addEventListener('click', () => {
    //         watchAdBtn.disabled = true;
    //         adStatus.textContent = '廣告播放中，請稍候...';
    //         tokenDisplay.classList.remove('visible');
    //         tokenOutput.value = '';
    //         copyTokenBtn.textContent = '複製 Token';

    // 模擬廣告播放時間 (例如 5 秒)
    setTimeout(() => {
        adStatus.textContent = '廣告已載入！請複製您的 Token 碼並貼到擴充功能中。 ';
        const mockToken = 'MY_MOCK_TOKEN'; // 這是模擬的 Token
        tokenOutput.value = mockToken;
        tokenDisplay.classList.add('visible');
        
        // 自動選中 Token 文本
        tokenOutput.select();
        tokenOutput.setSelectionRange(0, 99999); // For mobile devices
        
        // 提示用戶複製
        alert('廣告已載入！請複製 Token 碼並貼到您的 Chrome 擴充功能中。');

        // watchAdBtn.disabled = false; // 重新啟用按鈕，如果用戶想再次觀看
    }, 5000); // 5 秒
    //     });
    // }

    if (copyTokenBtn) {
        copyTokenBtn.addEventListener('click', () => {
            tokenOutput.select();
            tokenOutput.setSelectionRange(0, 99999); // For mobile devices
            try {
                document.execCommand('copy');
                copyTokenBtn.textContent = '已複製!';
                // 幾秒後恢復按鈕文字
                setTimeout(() => {
                    copyTokenBtn.textContent = '複製 Token';
                }, 2000);
            } catch (err) {
                console.error('複製失敗', err);
                copyTokenBtn.textContent = '複製失敗';
            }
        });
    }
}); 