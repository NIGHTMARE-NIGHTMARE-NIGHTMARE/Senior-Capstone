// when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("textarea.msg-input");
    message.value = "";

    const messageArea = document.querySelector(".message-area>div");
    
    var text1 = "Hi I'm Ibis!";
    var text2 = "Do you want to learn about search or sort algorithms? We have data for definitions, pseudocode, visuals, and additional resources.";

    const words1 = text1.split(' ');
    const words2 = text2.split(' ');

    const message1 = document.createElement('p');
    message1.textContent = "";
    message1.className = `ibis message`;
    messageArea.appendChild(message1);

    var waitTime = 80;
    words1.forEach((word, index) => {
        setTimeout(() => {
            message1.textContent += (index > 0 ? ' ' : '') + word;

            if (index === words1.length - 1) {
                setTimeout(() => {
                    const message2 = document.createElement('p');
                    message2.textContent = "";
                    message2.className = `ibis message`;
                    messageArea.appendChild(message2);

                    words2.forEach((word2, index2) => {
                        setTimeout(() => {
                            message2.textContent += (index2 > 0 ? ' ' : '') + word2;
                            if (index2 === words2.length - 1) {
                                setTimeout(() => {
                                    message.focus();
                                }, 400);
                            }
                        }, index2 * waitTime);
                    });
                }, 500);
            }
        }, index * waitTime);
    });
});

function sendMessage() {
    const message = document.querySelector("textarea.msg-input");
    const area = document.querySelector(".message-area");

    var waitTime = 80;

    debug = true
    
    // if there is a message to send
    if(message.value){
        message.blur(); // unfocus input

        if (debug){
            // add user's message to stream
            const userMessage = document.createElement('p');
            userMessage.textContent = message.value;
            userMessage.className = `user message`;
            area.appendChild(userMessage); // add to the chat area

            message.value = "";

            const data = [
                {
                    "text": "This is a test message from rasa!",
                },
                {
                    "text": "This is rasa's second message so we can handle 2 messages at once."
                }
            ];

            console.log("Response JSON:", data);

            // handle response data
            if (data && data.length > 0) {
                const messageDiv = document.createElement('div'); // create message div

                // create oliver's name
                const ibisName = document.createElement('p');
                ibisName.textContent = "Oliver";
                ibisName.className = `ibis-top`;
                messageDiv.appendChild(ibisName);
                area.scrollTop = area.scrollHeight;

                // Function to display each message
                function displayMessage(index) {
                    if (index < data.length) {
                    const item = data[index];
                    const words = item.text.split(' ');

                    const ibisMessage = document.createElement('p');
                    ibisMessage.textContent = "";
                    ibisMessage.className = `ibis message`;
                    messageDiv.appendChild(ibisMessage);

                    // Promise to wait for the message to complete
                    const messagePromise = new Promise((resolve) => {
                        words.forEach((word, wordIndex) => {
                        setTimeout(() => {
                            ibisMessage.textContent += (wordIndex > 0 ? ' ' : '') + word;
                            if (wordIndex === words.length - 1) {
                            resolve(); // Resolve the promise when message is complete
                            }
                            area.scrollTop = area.scrollHeight;
                        }, wordIndex * waitTime);
                        });
                    });

                    // After the promise is resolved, call the next message
                    messagePromise.then(() => {
                        setTimeout(() => {
                            displayMessage(index + 1);
                        }, 500);
                    });

                    console.log("Rasa Message:", item.text);
                    } else {
                    // Clear input after sending all messages
                    message.focus(); // refocus input
                    }
                }

                // Start displaying messages with the first one
                displayMessage(0);

                area.appendChild(messageDiv);
            } 
            else {
                console.log("No response from Rasa.");
                // Clear input after sending
                message.focus(); // refocus input
            }
        }
        else{
            // call api
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

            // clean first response and convert to JSON
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log("Response:", response);
                return response.json();  // Parse response as JSON
            })

            // Render the response
            .then(data => {
                console.log("Message to send:", message.value);

                // add user's message to stream
                const userMessage = document.createElement('p');
                userMessage.textContent = message.value;
                userMessage.className = `user message`;
                area.appendChild(userMessage); // add to the chat area
                area.scrollTop = area.scrollHeight;

                message.value = "";

                console.log("Response JSON:", data);
                // handle response data
                if (data && data.length > 0) {
                    const messageDiv = document.createElement('div'); // create message div

                    // create oliver's name
                    const ibisName = document.createElement('p');
                    ibisName.textContent = "Oliver";
                    ibisName.className = `ibis-top`;
                    messageDiv.appendChild(ibisName);

                    // Function to display each message
                    function displayMessage(index) {
                        if (index < data.length) {
                        const item = data[index];
                        const words = item.text.split(' ');

                        const ibisMessage = document.createElement('p');
                        ibisMessage.textContent = "";
                        ibisMessage.className = `ibis message`;
                        messageDiv.appendChild(ibisMessage);

                        // Promise to wait for the message to complete
                        const messagePromise = new Promise((resolve) => {
                            words.forEach((word, wordIndex) => {
                            setTimeout(() => {
                                ibisMessage.textContent += (wordIndex > 0 ? ' ' : '') + word;
                                if (wordIndex === words.length - 1) {
                                resolve(); // Resolve the promise when message is complete
                                }
                                area.scrollTop = area.scrollHeight;
                            }, wordIndex * waitTime);
                            });
                        });

                        // After the promise is resolved, call the next message
                        messagePromise.then(() => {
                            setTimeout(() => {
                                displayMessage(index + 1);
                            }, 1000);
                        });

                        console.log("Rasa Message:", item.text);
                        } else {
                        // Clear input after sending all messages
                        message.focus(); // refocus input
                        }
                    }

                    // Start displaying messages with the first one
                    displayMessage(0);

                    area.appendChild(messageDiv);
                } 
                else {
                    console.log("No response from Rasa.");
                    // Clear input after sending
                    message.focus(); // refocus input
                }
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

                let i = 4; // count to hit

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
                                    message.focus();
                                }, 1000); // wait for the transition to complete before removing
                            }
                        }, 1000);
                    }
                }, 0);
            });
        }
    }
}