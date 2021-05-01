// let valTracker = document.querySelector('.tracker');
let slider     = document.querySelector('.slider-bar');
let contentData = [
    {pageViews: 10, c: 'K pageviews', price: 8},
    {pageViews: 50, c: 'K pageviews', price: 12},
    {pageViews: 100, c: 'K pageviews', price: 16},
    {pageViews: 500, c: 'k pageviews', price: 24},
    {pageViews: 1, c: 'M pageviews', price: 36}
];
let checkInp            = document.querySelector('.checkbox-label input');
let monthWord           = document.createTextNode('/month');
// Initialize App
initApp(cta = slider, itemsArr = contentData);

checkInp.addEventListener('input', () => {
    if(checkInp.checked){
        contentData.map((ele) => {
            // [1] Calculate The Price of Year (price of one Month * 12)
            ele.price = (ele.price * 12) / 4;
            monthWord = document.createTextNode('/year');
            // [2] Apply Discount On All Content Data
            
        });
    }else{
        contentData.map((ele) => {
            ele.price = (ele.price / 12) * 4;
            monthWord = document.createTextNode('/month');
        });
    }
    // ReInitialize App For Tracking Changed Data
    initApp(cta = slider, itemsArr = contentData);
});

// ReInitialize App Based on Changes Of Slider Input 
slider.addEventListener('input', () => initApp(cta = slider, itemsArr = contentData));


function initApp(cta, itemsArr) {
    // Declare & Initialize Variables
    let pageViewsElement    = document.querySelector('.page-views');
    let priceElement        = document.querySelector('.price');
    let monthSpan           = document.createElement('span');
    monthSpan.appendChild(monthWord);
    monthSpan.className = 'month';
    // Adjust slider Bar background colors
    cta.parentElement.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${cta.value * 20}%, hsl(224, 65%, 95%) ${cta.value * 20}%)`;
    // Limit the available Min-Max Value
    if(slider.value > 0 && slider.value <= 5){
        // Operate & Print Final Values
        pageViewsElement.textContent = itemsArr[slider.value - 1].pageViews + itemsArr[slider.value - 1].c;
        priceElement.textContent = `$${itemsArr[slider.value - 1].price}.00`;
        priceElement.appendChild(monthSpan);
    }else if(slider.value == 0){
        pageViewsElement.textContent = '--';
        priceElement.textContent = '--';
        priceElement.appendChild(monthSpan);
    }
}

/* 
    - 10K pageviews /   $8 per month
    - 50K pageviews /   $12 per month
    - 100K pageviews /  $16 per month
    - 500k pageviews /  $24 per month
    - 1M pageviews /    $36 per month
*/