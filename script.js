document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const hairColor = document.getElementById('hair-color').value;
    const height = document.getElementById('height').value;
    const url = `/models?hair_color=${hairColor}&height=${height}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Clear previous results
            data.forEach(model => {
                const modelImage = document.createElement('img');
                modelImage.src = model.image_url;
                modelImage.alt = 'Model Image';

                const modelInfo = document.createElement('p');
                modelInfo.innerHTML = `Name: ${model.name}<br>Age: ${model.age}<br>Height: ${model.height}<br>Hair Color: ${model.hair_color}`;

                const modelCard = document.createElement('div');
                modelCard.appendChild(modelImage);
                modelCard.appendChild(modelInfo);

                resultsDiv.appendChild(modelCard);
            });
        })
        .catch(error => console.error('Error:', error));
});
