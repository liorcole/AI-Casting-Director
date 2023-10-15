import requests
from bs4 import BeautifulSoup

# Define the URL of the website to scrape
url = "https://www.imgmodels.com/new-york/women-development"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page using Beautiful Soup
soup = BeautifulSoup(response.text, "html.parser")

# Find the HTML elements containing the model information
model_elements = soup.find_all("div", class_="model__details")

# Initialize a list to store the model data
models_data = []

# Loop through the model elements and extract data
for model_element in model_elements:
    name = model_element.find("div", class_="model__name").text.strip()
    height_element = model_element.find("div", class_="model__height")
    height = height_element.find("div", class_="number").text.strip()
    followers_element = model_element.find("div", class_="model__instaFollowers")
    followers = int(followers_element.find("div", class_="number").text.replace(",", ""))
    
    # Create the model data dictionary
    model_data = {
        "name": name,
        "height": int(height),
        "hair_color": "_",  # You can add this data if it's available on the site
        "image": f"images/{name.lower().replace(' ', '')}.png",
        "followers": followers
    }
    
    # Append the model data to the list
    models_data.append(model_data)

# Print the scraped data
for model in models_data:
    print(model)

# You can save models_data to a file or use it as needed in your application
