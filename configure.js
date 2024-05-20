document.getElementById("configForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get selected option
    const usage = document.getElementById("usage").value;
  
    // Determine configuration based on usage
    let recommendation;
    switch (usage) {
      case "web-browsing":
        recommendation = "A basic laptop or desktop with at least 4GB of RAM and an SSD would be suitable for web browsing and email. if you are interested in buying a laptop for this puropse, consider the Lenovo Ideapad 1.";
        break;
      case "office":
        recommendation = "You'll need a computer with a decent processor and enough RAM for smooth office work. Consider a mid-range laptop or desktop. For example, the Dell Inspiron line.";
        break;
      case "media":
        recommendation = "For watching movies and listening to music, a computer with a good display and speakers is important. Look for a laptop or desktop with a decent multimedia setup. An example would be any of the HP Envy laptops.";
        break;
      case "gaming":
        recommendation = "Gaming requires a computer with a dedicated graphics card and powerful processor. Consider a gaming laptop or desktop with at least 16GB of RAM. An example of such a laptop is the Lenovo Legion 5.";
        break;
      default:
        recommendation = "Please select an option.";
    }
  
    // Display recommendation
    const configResult = document.getElementById("configResult");
    configResult.innerHTML = `
      <h2>Recommendation:</h2>
      <p>${recommendation}</p>
    `;
  });
  