// Include the confetti library
const confetti = require('canvas-confetti');

// Define your data
const modelsData = [
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: 'Blonde',
        //instagram: 5,800,
        image: 'images/abbybush.png', // Image URL for Abby Bush in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Aalyah Ross',
        height: 179,
        hair_color: 'black',
        //instagram: 1,800,
        image: 'images/aalyahross.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Africa Garcia',
        height: 179,
        hair_color: 'brown',
        //instagram: 4,200,
        image: 'images/africagarcia.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Akon Adichol',
        height: 175,
        hair_color: 'black',
        //instagram: 2,900,
        image: 'images/akonadichol.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'LIOR COLE THE BEST MODEL IN THE WORLD',
        height: 183,
        hair_color: 'brown',
        //instagram: 5,100,
        image: 'images/liorcole.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Alexis Carrington',
        height: 175,
        hair_color: 'brown',
        //instagram: 218,900,
        image: 'images/alexiscarrington.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Ally Barrows',
        height: 174,
        hair_color: 'blond',
        //instagram: 1,500,
        image: 'images/allybarrows.png', // Image URL for Aalyah Ross in your 'public' directory
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

        // Check if the name is "LIOR COLE THE BEST MODEL IN THE WORLD" and trigger confetti
        if (model.name === 'LIOR COLE THE BEST MODEL IN THE WORLD') {
            const duration = 5 * 1000; // Duration of confetti burst in milliseconds (5 seconds)
            const { clientWidth, clientHeight } = document.documentElement;
            confetti({
                particleCount: 100, // Number of confetti particles
                spread: 70, // Spread of confetti particles
                origin: { y: 0.6 },
            });
        }
    });
});
