                                                                                                                                                /*
⎲
 ▎
【 ᛗᚴ 360 Image Module 】 

👑
💀
360 Image viewer with click and drag rotation, click auto rotate with toggle direction and loading screen

【 ᛗᚴ 360 Image Module 】
 ▎
⎳
                                                                                                                                                */


                                                                                                                                                /*
⎲
 ▎
【 ᛗᚴ 360 click and Drag Module Feature 】 
                                                                                                                                                */
        let imgIndex = 0;
        let images = [];
        let fullResImages = [];
        let halfResImages = [];
        let thirdResImages = [];
        let setResolution = "";
        const allRanges = [fullResImages, halfResImages, thirdResImages];
        let isDragging = false;
        let startX;
        let currentImgIndex = 0;
        const default360PlaceholderImage = "images/3D/360s/placeholder-image-360.png";

        const baseName = "images/3D/360s/it-pennywise-mirrors-statue/Pennywise-statue-360-";
        const fullResTurnsName = "full-res-";
        const halfResTurnsName = "half-res-";
        const thirdResTurnsName = "third-res-";
        const resTurnNames = ["full-res-","half-res-","third-res-"];
        const extension = ".png";
        const totalImages = 120;

        // Loop to generate 5 images (image_1.jpg to image_5.jpg)
        for (let i = 1; i <= totalImages; i++) {
            allRanges.forEach((resGroup, index) => {
                resGroup.push(`${baseName}${resTurnNames[index]}${i.toString().padStart(4, '0')}${extension}`);
            });
        }


        const viewer = document.getElementById("viewer");
        const setResolutionSDBtn = document.getElementById("setResolutionSDBtn");
        const setResolutionHDBtn = document.getElementById("setResolutionHDBtn");
        const setResolutionUHDBtn = document.getElementById("setResolutionUHDBtn");

        setResolutionSDBtn.addEventListener('click', () => {
            preloadImages(thirdResImages)
            .then(images => console.log("All images loaded!", images))
            .catch(err => console.error(err));
            images = thirdResImages;
            setResolution = "SD";
            updateViewerSource();
        });

        setResolutionHDBtn.addEventListener('click', () => {
            preloadImages(halfResImages)
            .then(images => console.log("All images loaded!", images))
            .catch(err => console.error(err));
            images = halfResImages;
            setResolution = "HD";
            updateViewerSource();
        });

        setResolutionUHDBtn.addEventListener('click', () => {
            preloadImages(fullResImages)
            .then(images => console.log("All images loaded!", images))
            .catch(err => console.error(err));
            images = fullResImages;
            setResolution = "UHD";
            updateViewerSource();
        });

        async function preloadImages(urls) {
                const promises = urls.map(url => {
                    return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(`Failed to load ${url}`);
                    });
                });

                // Wait for all images to load
                return await Promise.all(promises);
            }

           function updateViewerSource(){
                    viewer.src = setResolution === "SD" ? thirdResImages[currentImgIndex] : setResolution === "HD" ? halfResImages[currentImgIndex] : setResolution === "UHD" ? fullResImages[currentImgIndex] : default360PlaceholderImage;
            console.log(viewer.src);
            }
            

        viewer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startTime = Date.now();
            e.preventDefault(); // Prevent default browser dragging
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const currentX = e.clientX;
            const diff = currentX - startX;

            // Change image based on drag distance threshold
            if (Math.abs(diff) > 2) { 
                imgIndex = (diff < 0) ? 
                    (imgIndex - 1 + images.length) % images.length : 
                    (imgIndex + 1) % images.length;
                    currentImgIndex = imgIndex;
                viewer.src = images[imgIndex];
                startX = currentX; // Reset startX for next swap
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
                                                                                                                                                /*
【 ᛗᚴ 360 click and Drag Module Feature 】
 ▎
⎳
                                                                                                                                                */
                                                                                                                                                /*
⎲
 ▎
【 ᛗᚴ 360 Toggle Auto Module Feature 】 
                                                                                                                                                */
        let startTime;

        viewer.addEventListener('click', () => {
            const duration = Date.now() - startTime;
            if (duration > 200 ) {
                const intervalId = setInterval(() => {
                    currentImgIndex++;
                    console.log(currentImgIndex);
                    }, 100);
                return;
            }
            
            });

                                                                                                                                                /*
【 ᛗᚴ 360 Toggle Auto Module Feature 】
 ▎
⎳
                                                                                                                                                */