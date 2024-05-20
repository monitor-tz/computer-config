document.addEventListener('DOMContentLoaded', displayConfiguredComputer);

function displayConfiguredComputer() {
    // Retrieve the configuration from local storage
    const configuredSpecs = JSON.parse(localStorage.getItem('configuredSpecs'));

    // Check if there's a configuration to display
    if (configuredSpecs) {
        const configuredSpecsDiv = document.getElementById('configuredSpecs');
        configuredSpecsDiv.innerHTML = '<h2>Configuration Summary</h2>';
        configuredSpecsDiv.innerHTML += '<ul>';
        for (const [key, value] of Object.entries(configuredSpecs)) {
            configuredSpecsDiv.innerHTML += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        configuredSpecsDiv.innerHTML += '</ul>';
    } else {
        // Redirect to the configuration page if no configuration is found
        alert('No configuration found. Please go back and configure your computer.');
        window.location.href = 'index.html';
    }
}
