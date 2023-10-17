// Define your data
const modelsData = [
    {
        name: 'LIOR COLE THE BEST MODEL IN THE WORLD',
        height: 183,
        hair_color: ['brown', 'light brown'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 5100,
        image: 'images/liorcole.png',
        // Add other properties as needed
    },
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: ['Blonde', 'Strawberry blonde'],
        hair_type: ['Straight'],
        type: ['straight-size'],
        instagram: 5800,
        image: 'images/abbybush.png',
        // Add other properties as needed
    },
    {
        name: 'Aalyah Ross',
        height: 179,
        hair_color: ['black'],
        hair_type: ['curly', 'dreads'],
        type: ['straight-size', 'mid-size'],
        instagram: 1800,
        image: 'images/aalyahross.png',
        // Add other properties as needed
    },
    {
        name: 'Africa Garcia',
        height: 179,
        hair_color: ['brown', 'dark brown'],
        hair_type: ['wavy'],
        type: ['straight-size'],
        instagram: 4200,
        image: 'images/africagarcia.png',
        // Add other properties as needed
    },
    {
        name: 'Akon Adichol',
        height: 175,
        hair_color: ['black', 'dark brown'],
        hair_type: ['shaved', 'curly'],
        type: ['plus-size'],
        instagram: 2900,
        image: 'images/akonadichol.png',
        // Add other properties as needed
    },
    {
        name: 'Alexis Carrington',
        height: 175,
        hair_color: ['brown'],
        hair_type: ['wavy', 'curly'],
        type: ['straight-size'],
        instagram: 218900,
        image: 'images/alexiscarrington.png',
        // Add other properties as needed
    },
    {
        name: 'Ally Barrows',
        height: 174,
        hair_color: ['blond'],
        hair_type: ['Straight'],
        type: ['straight-size', 'mid-size'],
        instagram: 1500,
        image: 'images/allybarrows.png',
        // Add other properties as needed
    },
    {
        name: 'Andrea Pires',
        height: 175,
        hair_color: ['brown', 'black'],
        hair_type: ['wavy'],
        type: ['straight-size'],
        instagram: 'n/a',
        // image: 'images/andrea.png', // Add the image URL for Andrea in your 'public' directory
        // Add other properties as needed
    },
    {
        name: 'Anna Rose',
        height: 180,
        hair_color: ['brown'],
        hair_type: ['Straight', 'wavy'],
        type: ['straight-size'],
        instagram: 556,
        image: 'images/annarose.png',
        // Add other properties as needed
    },
    {
        name: 'Anne Harjes',
        height: 180,
        hair_color: ['blond', 'dirty blond'],
        hair_type: ['Straight'],
        type: ['plus-size'],
        instagram: 0,
        image: 'images/anneharjes.png',
        // Add other properties as needed
    },
    {
        name: 'Antonella Delgado',
        height: 178,
        hair_color: ['brown'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 2400,
        image: 'images/antonelladelgado.png',
        // Add other properties as needed
    },
    {
        name: 'Aria Polkey',
        height: 176,
        hair_color: ['dark brown', 'black'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 11000,
        image: 'images/ariapolkey.png',
        // Add other properties as needed
    },
    {
        name: 'Audrey Harrelson',
        height: 171,
        hair_color: ['brown', 'light brown', 'dirty blonde'],
        hair_type: ['straight'],
        type: ['mid-size'],
        instagram: 3800,
        image: 'images/audreyharrelson.png',
        // Add other properties as needed
    }
];

// Event listener for form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const hairColor = document.getElementById('hair-color').value.toLowerCase();
    const minHeightCm = parseFloat(document.getElementById('min-height-cm').value) || 0; // Set a default of 0
    const maxHeightCm = parseFloat(document.getElementById('max-height-cm').value) || 300; // Set a default of 300 cm
    const hairType = document.getElementById('hair-type').value.toLowerCase();
    const sizeType = document.getElementById('size-type').value.toLowerCase();
    const instagramFollowers = parseInt(document.getElementById('instagram-followers').value);

    // Your search logic using the modelsData array
    const filteredModels = modelsData.filter(model => {
        return (hairColor === "" || model.hair_color.some(color => color.toLowerCase() === hairColor)) &&
            (model.height >= minHeightCm) && // No need to check if minHeightCm is 0
            (model.height <= maxHeightCm) && // No need to check if maxHeightCm is 300
            (hairType === "" || model.hair_type.includes(hairType)) &&
            (sizeType === "" || model.type.includes(sizeType)) &&
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
