let desktopThumb = document.querySelectorAll('.product-thumbnail');
let mobilePosition = document.querySelectorAll('.current-slide span');
let nextButton = document.querySelector('.chevron-right');
let prevButton = document.querySelector('.chevron-left');
let imageSelection = document.querySelector('.product-selection img');
let currentIndex = 0;
let nrImages = desktopThumb.length;

let tabTitles = document.querySelectorAll('.tab-title');

/* product description tab is open by default */
let descBlock = document.querySelector('.description-block');
descBlock.classList.add('active-block');
/*descBlock.children[1].style.maxHeight = descBlock.children[1].scrollHeight + 'px';*/


desktopThumb[currentIndex].classList.add("active-thumb");
mobilePosition[currentIndex].classList.add("active-slide");

const showImageSelection = (n) => {
    /* reset desktop borders and mobile position indicator */
    desktopThumb.forEach(img => img.classList.remove("active-thumb"));
    mobilePosition.forEach(img => img.classList.remove("active-slide"));

    imageSelection.src = desktopThumb[n].firstElementChild.src;
    desktopThumb[n].classList.add("active-thumb");
    mobilePosition[n].classList.add("active-slide");
}

/* clicking next */
nextButton.addEventListener('click', (e) => {
    currentIndex += 1;
    if (currentIndex > nrImages - 1) {
        currentIndex = 0;
    }
    showImageSelection(currentIndex)
});

/* clicking previous */
prevButton.addEventListener('click', (e) => {
    currentIndex -= 1;
    if (currentIndex === -1) {
        currentIndex = nrImages - 1;
    }
    showImageSelection(currentIndex)
});

/* clicking on mobile positional marker */
mobilePosition.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentIndex = index
        showImageSelection(currentIndex);
    })
});

/* clicking on desktop thumbnail */
desktopThumb.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        currentIndex = index
        showImageSelection(currentIndex);
    })
});

/* accordion mobile and desktop*/

tabTitles.forEach(tabTitle => {
    tabTitle.addEventListener("click", (e) => {

        tabTitles.forEach(tabTitle => {
            tabTitle.parentElement.classList.remove("active-block");
            /* tabTitle.nextElementSibling.style.maxHeight = 0;*/
        });

        tabTitle.parentElement.classList.add("active-block");
        /* tabTitle.nextElementSibling.style.maxHeight = tabTitle.nextElementSibling.scrollHeight + 'px';*/

    })
});