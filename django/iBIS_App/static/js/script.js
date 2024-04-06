function sendMessage() {
    const message = document.querySelector("textarea.msg-input");
    const area = document.querySelector(".message-area");
    

    fetch(`http://100.70.102.193:5005/webhooks/rest/webhook`, {
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
        console.error("Error:", error);
    });
}