// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Sign In button click event
    document.querySelector('.btn-red-sm').addEventListener('click', function () {
        // Navigate to the sign-in page
        window.location.href = 'signin.html';
    });

    // Get Started button click event
    document.querySelector('.btn-red').addEventListener('click', function () {
        scrollToSection('.first');
    });

    // Function to handle Get Started button click and scroll to a section
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Populate language dropdown options
    populateLanguageDropdown();
});

// Function to populate language dropdown options
function populateLanguageDropdown() {
    // Assuming you have a dropdown element with id 'languageDropdown'
    const dropdown = document.getElementById('languageDropdown');

    // Add language options
    const languages = ['English', 'Hindi', 'Marathi']; // Add more languages as needed

    languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.toLowerCase();
        option.text = language;
        dropdown.add(option);
    });
}
