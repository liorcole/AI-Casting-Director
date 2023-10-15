// Define your data
const modelsData = [
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: 'Blonde',
        image: 'images/abbybush.png', // Image URL for Abby Bush in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Aalyah Ross',
        height: 179,
        hair_color: 'black',
        image: 'images/aalyahross.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
];

// Event listener for form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const hairColor = document.getElementById('hair-color').value;
    const height = document.getElementById('height').value;

    // Your search logic using the modelsData array
    const filteredModels = modelsData.filter(model => {
        return model.hair_color.toLowerCase() === hairColor.toLowerCase() &&
            model.height === parseInt(height);
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    filteredModels.forEach(model => {
        const modelCard = document.createElement('div');

        // Create and append an image element
        const modelImage = document.createElement('img');
        modelImage.src = model.image; // Use the image URL from the model's data
        modelCard.appendChild(modelImage);

        // Create and append model information
        const modelInfo = document.createElement('p');
        modelInfo.innerHTML = `Name: ${model.name}<br>Height: ${model.height}<br>Hair Color: ${model.hair_color}`;
        modelCard.appendChild(modelInfo);

        resultsDiv.appendChild(modelCard);
    });
});
