document.addEventListener('DOMContentLoaded', () => {
    console.log('Shaz Nails & Beauty Price List Loaded!');

    // You could add dynamic content here later, for example:
    // const categories = document.querySelectorAll('.category');
    // categories.forEach(category => {
    //     category.addEventListener('click', () => {
    //         category.classList.toggle('expanded');
    //     });
    // });

    // Simple image loading check (optional, but good for debugging)
    const logo = document.getElementById('companyLogo');
    if (logo) {
        logo.addEventListener('load', () => {
            console.log('Logo loaded successfully!');
        });
        logo.addEventListener('error', () => {
            console.error('Error loading logo. Check the path:', logo.src);
            // You could set a fallback image here
            // logo.src = 'placeholder.png';
            logo.src = 'images/IMG-20250730-WA0008.jpg';
        });
    }
});