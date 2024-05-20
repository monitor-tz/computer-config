const newsArticles = [
    {
      title: "New Smartphone Released",
      description: "A new smartphone from NOTHING has been released, called the 2a, with improved features and performance at a cheaper price.",
      source: "NOTHING ",
      url: "https://intl.nothing.tech/pages/phone-2a"
    },
    {
        title: "New AI Chip",
        description: "NVIDIA have released a brand new AI chip called the B200, and it looks like the best one yet.",
        source: "BBC ",
        url: "https://www.bbc.com/news/business-68603198"
    },
    {
      title: "Tesla Have released the CyberTruck (finally)",
      description: "Tesla have officialy begun production of their CyberTruck, 4 years after it was announced.",
      source: "CarWow ",
      url: "https://www.carwow.co.uk/tesla/news/4408/tesla-cybertruck-price-specs-release-date#gref"
    }
  ];
  
  function populateNewsSection() {
    const newsSection = document.getElementById('newsSection');
  
    newsArticles.forEach(article => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
  
      const title = document.createElement('h2');
      title.textContent = article.title;
  
      const description = document.createElement('p');
      description.textContent = article.description;
  
      const source = document.createElement('span');
      source.textContent = `Source: ${article.source}`;
  
      // Create a clickable link to the full story
      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = 'Read Full Story';
      link.target = '_blank'; // Open link in a new tab
      link.classList.add('news-button'); // Add button class
  
      newsItem.appendChild(title);
      newsItem.appendChild(description);
      newsItem.appendChild(source);
      newsItem.appendChild(link);
  
      // Append each news item to the news section
      newsSection.appendChild(newsItem);
    });
  }
  
  populateNewsSection();
  