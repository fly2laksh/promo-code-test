// Valid Promo Codes aur Discount Percentages
const validPromoCodes = {
    "FLY10": 10,   // 10% Discount
    "FLY20": 20,   // 20% Discount
    "SPECIAL50": 50 // 50% Discount
};

let currentDiscountPercent = 0;

// Promo Code Function
function applyPromoCode() {
    const promoInput = document.getElementById('promo-input').value.trim().toUpperCase();
    const promoMessage = document.getElementById('promo-message');

    if (validPromoCodes[promoInput]) {
        currentDiscountPercent = validPromoCodes[promoInput];
        promoMessage.style.color = "#10b981"; // Green
        promoMessage.innerHTML = `✓ Promo code applied! Get ${currentDiscountPercent}% OFF.`;
        updatePrices();
    } else {
        currentDiscountPercent = 0;
        promoMessage.style.color = "#ef4444"; // Red
        promoMessage.innerHTML = "✗ Invalid Promo Code. Try FLY10, FLY20 or SPECIAL50.";
        resetPrices();
    }
}

function updatePrices() {
    const priceBlocks = document.querySelectorAll('.price[data-min]');

    priceBlocks.forEach(block => {
        const minPrice = parseFloat(block.getAttribute('data-min'));
        const maxPrice = parseFloat(block.getAttribute('data-max'));

        const discountedMin = Math.round(minPrice - (minPrice * (currentDiscountPercent / 100)));
        const discountedMax = Math.round(maxPrice - (maxPrice * (currentDiscountPercent / 100)));

        const priceDisplay = block.querySelector('.price-display');
        
        priceDisplay.innerHTML = `<span style="text-decoration: line-through; opacity: 0.6; font-size: 0.8em; margin-right: 5px;">₹${minPrice.toLocaleString('en-IN')} – ₹${maxPrice.toLocaleString('en-IN')}</span> ₹${discountedMin.toLocaleString('en-IN')} – ₹${discountedMax.toLocaleString('en-IN')}`;
    });
}

function resetPrices() {
    const priceBlocks = document.querySelectorAll('.price[data-min]');

    priceBlocks.forEach(block => {
        const minPrice = parseFloat(block.getAttribute('data-min'));
        const maxPrice = parseFloat(block.getAttribute('data-max'));
        const priceDisplay = block.querySelector('.price-display');

        priceDisplay.innerHTML = `₹${minPrice.toLocaleString('en-IN')} – ₹${maxPrice.toLocaleString('en-IN')}`;
    });
}

// Modal Dialog Logic
function openConsultationModal() {
    document.getElementById('consultationModal').style.display = 'flex';
}

function closeConsultationModal() {
    document.getElementById('consultationModal').style.display = 'none';
}

function submitConsultationForm(event) {
    event.preventDefault();
    const name = document.getElementById('c_name').value;
    const phone = document.getElementById('c_phone').value;
    
    const message = `Hi, I am ${name}. Phone: ${phone}. I want to book a free consultation.`;
    const whatsappUrl = `https://wa.me/919891881990?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeConsultationModal();
}
