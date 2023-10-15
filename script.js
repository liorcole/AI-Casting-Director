// Define your data
const modelsData = [
    {
        name: 'Abby Bush',
        height: 180,
        hair_color: 'Blonde',
        image: 'https://raw.githubusercontent.com/liorcole/AI-Casting-Director/main/images/abbybush.png', // Image URL for Abby Bush
        // Add other properties as needed
    },
    {
        name: 'Aalyah Ross',
        height: 179,
        hair_color: 'Black',
        image: 'https://raw.githubusercontent.com/your-username/your-repo/main/images/aalyahross.png', // Image URL for Aalyah Ross
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

    filteredModels.forEach(async model => {
        const modelCard = document.createElement('div');

        // Create and append an image with the custom URL
        const modelImage = document.createElement('img');
        modelImage.src = model.image; // Use the image URL from the model's data
        modelCard.appendChild(modelImage);

        // Create and append model information
        const modelInfo = document.createElement('p');
        modelInfo.innerHTML = `Name: ${model.name}<br>Height: ${model.height}<br>Hair Color: ${model.hair_color}`;
        modelCard.appendChild(modelInfo);

        resultsDiv.appendChild(modelCard);

        // THIS IS WHERE THE PERSONAL ACCESS TOKEN STUFF IS
        // Use the code below to fetch private GitHub images with your personal access token.

        // Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual personal access token.
        const accessToken = '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';

        // Create a function to fetch data using the token
        async function fetchDataWithToken() {
            const imageUrl = model.image; // Get the specific image URL for the current model.

            const response = await fetch(imageUrl, {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            });

            if (response.status === 200) {
                const imageBlob = await response.blob();
                // Create an image element and set its source to the fetched image
                const imageElement = document.createElement('img');
                imageElement.src = URL.createObjectURL(imageBlob);
                // Append the image to the model card
                modelCard.appendChild(imageElement);
            } else {
                console.error('Failed to fetch data');
            }
        }

        // Call the function to fetch the image with the token for the current model.
        fetchDataWithToken();
    });
});
