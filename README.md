# iBIS: Chatbot for Learning Algorithms 
This chatbot is designed to help users learn about different search and sort algorithms in computer science.
## Getting Started With Rasa
To get started with this chatbot, follow these instructions:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/NIGHTMARE-NIGHTMARE-NIGHTMARE/Senior-Capstone.git
   ```
3. Install necessary dependencies
   ```bash
   cd Senior-Capstone/rasa
   pip install -r requirements.txt
   ```
4. Make a virtual environment with the necessary depenencies and activate it
   ```bash
   [path to python 3.8] -m venv [virtual environment name]
   [virtual environment name]/Scripts/activate
   ```
6. Train the NLU
   ```bash
   rasa train nlu
   ```
7. Train the chatbot model
   ```bash
   rasa train
   ```
 8. Run in terminal to test
    ```bash
    rasa shell
    ````
## Conversation Flow
The chatbot is designed to guide users through learning about search and sort algorithms. It supports the following conversation flow:
1. User selects a category: search algorithms or sort algorithms.
2. User chooses a specific algorithm within the selected category.
3. The chatbot provides information, definitions, pseudocode, visualizations, and additional resources about the selected algorithm.

## Supported Algorithms
### Search Algorithms
1. Linear Search

### Sort Algorithms
1. Quicksort
2. Bubble Sort

To support additional algorithms, data for them needs to be added to domain.yml and stories needs to be modified to include that data. Additionally, if the algorithms are not recognized by NLU, it will need to be trained on those entities.

## Getting Started With Djagno
To get started with Django, follow these instructions:
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/NIGHTMARE-NIGHTMARE-NIGHTMARE/Senior-Capstone.git
   ```
3. Install necessary dependencies
   ```bash
   cd Senior-Capstone/django
   pip install -r requirements.txt
   ```
4. Make a virtual environment with the necessary depenencies and activate it
   ```bash
   [path to python 3.12] -m venv [virtual environment name]
   [virtual environment name]/Scripts/activate
   ```
6. Start the Django server
   ```bash
   py manage.py runserver
   ```

## Why we are using Django
We chose to use Django that way we can easily connect our front-end with the Rasa server. We talk to it through API calls. Each response is cleaned up and then returned to our front-end.
