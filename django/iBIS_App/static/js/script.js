function sendMessage() {
    const message = document.querySelector("textarea.msg-input");
    const area = document.querySelector(".message-area");
    

    fetch(`http://10.10.19.11:5005/webhooks/rest/webhook`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "message": message.value,
            "sender": "User"
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Response:", response);
        return response.json();  // Parse response as JSON
    })
    .then(data => {
        console.log("Message to send:", message.value);
        const userMessage = document.createElement('p');
        userMessage.textContent = message.value;
        userMessage.className = `user message`;
        area.appendChild(userMessage);


        console.log("Response JSON:", data);
        // Handle your response data here
        if (data && data.length > 0) {
            const messageDiv = document.createElement('div');
            const ibisName = document.createElement('p');
            ibisName.textContent = "Oliver";
            ibisName.className = `ibis-top`;
            messageDiv.appendChild(ibisName);
            // Assuming Rasa returns an array of messages
            data.forEach(item => {
                const ibisMessage = document.createElement('p');
                ibisMessage.textContent = item.text;
                ibisMessage.className = `ibis message`;
                messageDiv.appendChild(ibisMessage);
                
                area.appendChild(messageDiv);

                console.log("Rasa Message:", item.text);
            });
        } else {
            console.log("No response from Rasa.");
        }
        // Clear input after sending
        message.value = "";
    })
    .catch(error => {
        const main = document.querySelector("main");

    console.error("Error:", error);
        const errorMessage = document.createElement('div');
        const header = document.createElement('h2');
        const errorText = document.createElement('p');
        header.textContent = "An Error Occurred";
        errorText.textContent = "Try again in 5 seconds";

        errorMessage.appendChild(header);
        errorMessage.appendChild(errorText);

        errorMessage.className = `error-message`;
        errorMessage.style.opacity = "0"; // Start with opacity 0
        main.appendChild(errorMessage);

        let i = 4;

        const fadeIn = setInterval(() => {
            let opacity = parseFloat(errorMessage.style.opacity);
            errorMessage.style.opacity = (opacity + 0.1).toString();

            if (opacity >= 1) {
                clearInterval(fadeIn);

                const countdown = setInterval(() => {
                    errorText.textContent = `Try again in ${i} seconds`;
                    i--;

                    if (i < 1) {
                        clearInterval(countdown);
                        errorMessage.style.transition = "opacity 1s";
                        errorMessage.style.opacity = "0";
                        setTimeout(() => {
                            main.removeChild(errorMessage);
                        }, 1000); // Wait for the transition to complete before removing
                    }
                }, 1000);
            }
        }, 0);
    });
}