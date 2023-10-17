// Define your data
const modelsData = [
    {
        name: 'LIOR COLE THE BEST MODEL IN THE WORLD',
        height: 183,
        hair_color: ['brown', 'light-brown'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 5100,
        image: 'images/liorcole.png',
        // Add other properties as needed
    },
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: ['blonde', 'strawberry-blonde'],
        hair_type: ['straight'],
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
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['wavy'],
        type: ['straight-size'],
        instagram: 4200,
        image: 'images/africagarcia.png',
        // Add other properties as needed
    },
    {
        name: 'Akon Adichol',
        height: 175,
        hair_color: ['black', 'dark-brown'],
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
        hair_color: ['blonde'],
        hair_type: ['straight'],
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
        hair_type: ['straight', 'wavy'],
        type: ['straight-size'],
        instagram: 556,
        image: 'images/annarose.png',
        // Add other properties as needed
    },
    {
        name: 'Anne Harjes',
        height: 180,
        hair_color: ['blond', 'light-brown'],
        hair_type: ['straight'],
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
        hair_color: ['dark-brown', 'black'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 11000,
        image: 'images/ariapolkey.png',
        // Add other properties as needed
    },
    {
        name: 'Audrey Harrelson',
        height: 171,
        hair_color: ['brown', 'light-brown'],
        hair_type: ['straight'],
        type: ['mid-size'],
        instagram: 3800,
        image: 'images/audreyharrelson.png',
        // Add other properties as needed
    },
    {
        name: 'Awet',
        height: 179,
        hair_color: ['brown', 'black'],
        hair_type: ['cornrows', 'shaved'],
        type: ['straight-size'],
        instagram: 3000,
        image: 'images/awet.png',
        // Add other properties as needed
    },
    {
        name: 'Blayse',
        height: 179,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['cornrows', 'braids'],
        type: ['straight-size'],
        instagram: 1200,
        image: 'images/blayse.png',
        // Add other properties as needed
    },
    {
        name: 'Boyka Matova',
        height: 175,
        hair_color: ['brown'],
        hair_type: ['bob', 'straight'],
        type: ['straight-size'],
        instagram: 0,
        image: 'images/boykamatova.png',
        // Add other properties as needed
    },
    {
        name: 'Brooks Baldwin',
        height: 173,
        hair_color: ['blond'],
        hair_type: ['straight'],
        type: ['straight-size'],
        instagram: 11100,
        image: 'images/brooksbaldwin.png',
        // Add other properties as needed
    },
    {
        name: 'Claire Smith',
        height: 175,
        hair_color: ['blond'],
        hair_type: ['straight'],
        type: ['mid-size'],
        instagram: 1000,
        image: 'images/clairesmith.png',
        // Add other properties as needed
    },
    {
        name: 'Ebony Francisco',
        height: 173,
        hair_color: ['brown'],
        hair_type: ['dreads'],
        type: ['straight-size'],
        instagram: 3300,
        image: 'images/ebonyfrancisco.png',
        // Add other properties as needed
    },
    {
        name: 'Eduarda Bretas',
        height: 179,
        hair_color: ['blond'],
        hair_type: ['straight'],
        type: ['straight-size'],
        instagram: 11600,
        image: 'images/eduardabretas.png',
        // Add other properties as needed
    },
    {
        name: 'Eleanor Chromy',
        height: 178,
        hair_color: ['blond'],
        hair_type: ['wavy'],
        type: ['straight-size'],
        instagram: 1900,
        image: 'images/eleanorchromy.png',
        // Add other properties as needed
    },
    {
        name: 'Emma Waters',
        height: 174,
        hair_color: ['brown'],
        hair_type: ['straight'],
        type: ['straight-size'],
        instagram: 857,
        image: 'images/emmawaters.png',
        // Add other properties as needed
    },
    {
        name: 'Flo',
        height: 179,
        hair_color: ['red'],
        hair_type: ['buzzed'],
        type: ['mid-size', 'straight-size'],
        instagram: 2200,
        image: 'images/flo.png',
        // Add other properties as needed
    },
    {
        name: 'Flynn Wilburn',
        height: 179,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['dreads', 'curly'],
        type: ['straight-size'],
        instagram: 3200,
        image: 'images/flynnwilburn.png',
        // Add other properties as needed
    },
    {
        name: 'Grace Leasure',
        height: 180,
        hair_color: ['dark-brown', 'black'],
        hair_type: ['wavy', 'straight'],
        type: ['straight-size'],
        instagram: 1200,
        image: 'images/graceleasure.png',
        // Add other properties as needed
    },
    {
        name: 'Ines Pamela',
        height: 178,
        hair_color: ['dark-brown', 'black'],
        hair_type: ['buzzed', 'afro'],
        type: ['straight-size'],
        instagram: 2400,
        image: 'images/inespamela.png',
        // Add other properties as needed
    },
    {
        name: 'Inka Williams',
        height: 165,
        hair_color: ['brown', 'light-brown'],
        hair_type: ['straight', 'wavy', 'bangs'],
        type: ['straight-size'],
        instagram: 2000000,
        image: 'images/inkawilliams.png',
        // Add other properties as needed
    },
    {
        name: 'Jiri Braxton',
        height: 175,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['curly', 'afro'],
        type: ['straight-size'],
        instagram: 3900,
        image: 'images/jiribraxton.png',
        // Add other properties as needed
    },
    {
        name: 'Kait Leigh',
        height: 175,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['curly'],
        type: ['mid-size', 'plus-size'],
        instagram: 1600,
        image: 'images/kaitleigh.png',
        // Add other properties as needed
    },
    {
        name: 'Kayla Valentin',
        height: 175,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['straight'],
        type: ['plus-size'],
        instagram: 1100,
        image: 'images/kaylavalentin.png',
        // Add other properties as needed
    },
    {
        name: 'Keira Phillips',
        height: 177,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['curly'],
        type: ['straight-size'],
        instagram: 11100,
        image: 'images/keiraphillips.png',
        // Add other properties as needed
    },
    {
        name: 'Kenzie Stimack',
        height: 168,
        hair_color: ['blonde'],
        hair_type: ['straight', 'wavy'],
        type: ['straight-size'],
        instagram: 2000,
        image: 'images/kenziestimack.png',
        // Add other properties as needed
    },
    {
        name: 'Kimberly Gelabert',
        height: 1900,
        hair_color: ['brown', 'dark-brown'],
        hair_type: ['afro', 'curly'],
        type: ['straight-size'],
        instagram: 1900,
        image: 'images/kimberlygelabert.png',
        // Add other properties as needed
    },
    {
        name: 'Leelou',
        height: 2900,
        hair_color: ['light-brown'],
        hair_type: ['straight'],
        type: ['straight-size'],
        instagram: 2900,
        image: 'images/leelou.png',
        // Add other properties as needed
    },
    {
        name: 'Leyla Greiss',
        height: 3600,
        hair_color: ['dark-brown', 'black'],
        hair_type: ['curly', 'wavy'],
        type: ['straight-size'],
        instagram: 3600,
        image: 'images/leylagreiss.png',
        // Add other properties as needed
    },
];

// Event listener for form submission
document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const hairColors = Array.from(document.querySelectorAll('input[name="hair_color"]:checked')).map(input => input.value);
    const minHeightCm = parseFloat(document.getElementById('min-height-cm').value) || 0; // Set a default of 0
    const maxHeightCm = parseFloat(document.getElementById('max-height-cm').value) || 300; // Set a default of 300 cm
    const selectedHairTypes = Array.from(document.querySelectorAll('input[name="hair_type"]:checked')).map(input => input.value);
    const sizeType = document.getElementById('size-type').value.toLowerCase();
    const instagramFollowers = parseInt(document.getElementById('instagram-followers').value);

    // Your search logic using the modelsData array
    const filteredModels = modelsData.filter(model => {
        return (hairColors.length === 0 || hairColors.some(color => model.hair_color.includes(color))) &&
            (model.height >= minHeightCm) && // No need to check if minHeightCm is 0
            (model.height <= maxHeightCm) && // No need to check if maxHeightCm is 300
            (selectedHairTypes.length === 0 || selectedHairTypes.some(type => model.hair_type.includes(type))) &&
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
