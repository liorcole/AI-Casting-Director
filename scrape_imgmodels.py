import requests
from bs4 import BeautifulSoup

# Define the URL of the website to scrape
url = "https://www.imgmodels.com/new-york/women-development"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page using Beautiful Soup
soup = BeautifulSoup(response.text, "html.parser")

# Find the HTML elements containing the model information
model_elements = soup.find_all("a", class_="listItemcomponent__StyledListItem-sc-31qhyr-2")

# Initialize a list to store the model data
models_data = []

# Loop through the model elements and extract data
for model_element in model_elements:
    name = model_element.get("title")
    image = model_element.find("img")["src"]
    height_element = model_element.find("span", text="Height")
    height = int(height_element.find_next("p").text.split('-')[0].strip()[:-2])
    
    # Create the model data dictionary
    model_data = {
        "name": name,
        "height": height,
        "hair_color": "_",
        "image": image,
        "followers": 0,
        # You can add other properties here
    }
    
    # Append the model data to the list
    models_data.append(model_data)

# Print the scraped data
for model in models_data:
    print(model)

# You can save models_data to a file or use it as needed in your application
