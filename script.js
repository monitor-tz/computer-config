function generateSpecs() {
    // ... (unchanged code)

    // Save the generated specifications to local storage
    localStorage.setItem('configuredSpecs', JSON.stringify(specifications));

    // Redirect to the result page
    window.location.href = 'result.html';
}
