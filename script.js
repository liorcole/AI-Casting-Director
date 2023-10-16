// Define your data
const modelsData = [
    {
        name: 'LIOR COLE THE BEST MODEL IN THE WORLD',
        height: 183,
        hair_color: ['brown', 'light brown'],
        instagram: 5100,
        image: 'images/liorcole.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: ['Blonde', 'Strawberry blonde'],
        instagram: 5800,
        image: 'images/abbybush.png', // Image URL for Abby Bush in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Aalyah Ross',
        height: 179,
        hair_color: ['black'],
        instagram: 1800,
        image: 'images/aalyahross.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Africa Garcia',
        height: 179,
        hair_color: ['brown', 'dark brown'],
        instagram: 4200,
        image: 'images/africagarcia.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Akon Adichol',
        height: 175,
        hair_color: ['black', 'dark brown'],
        instagram: 2900,
        image: 'images/akonadichol.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Alexis Carrington',
        height: 175,
        hair_color: ['brown'],
        instagram: 218900,
        image: 'images/alexiscarrington.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Ally Barrows',
        height: 174,
        hair_color: ['blond'],
        instagram: 1500,
        image: 'images/allybarrows.png', // Image URL for Aalyah Ross in your 'public' directory
        // Add other properties as needed
    },
];

// Event listener for form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const hairColor = document.getElementById('hair-color').value;
    const height = document.getElementById('height').value;
    const instagramFollowers = parseInt(document.getElementById('instagram-followers').value);

    // Your search logic using the modelsData array
    const filteredModels = modelsData.filter(model => {
        return (hairColor === "" || model.hair_color.includes(hairColor)) &&
            (height === "" || model.height == height) &&
            (model.instagram >= instagramFollowers);
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
        modelInfo.innerHTML = `Name: ${model.name}<br>Height: ${model.height}<br>Hair Color: ${model.hair_color.join(', ')}<br>Instagram: ${model.instagram}`;
        modelCard.appendChild(modelInfo);

        resultsDiv.appendChild(modelCard);
    });
});
