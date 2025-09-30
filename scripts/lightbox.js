document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = 9999;
        overlay.style.cursor = 'pointer';

        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';
        fullImg.style.borderRadius = '8px';
        overlay.appendChild(fullImg);

        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
    });
});