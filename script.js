document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('analyze-button').addEventListener('click', function() {
        var text = document.getElementById('text-input').value;
        if (text) {
            // Assume you have a function to call your API
            analyzeSentiment(text).then(result => {
                document.getElementById('result').innerText = "Sentiment Score: " + result.score;
            }).catch(err => {
                document.getElementById('result').innerText = "Error analyzing sentiment: " + err.message;
            });
        }
    });
});

// Mock function for sentiment analysis
async function analyzeSentiment(text) {
    // Replace with actual API call
    return new Promise((resolve, reject) => {
        // Mock response
        resolve({ score: "Positive" }); // Assume a positive sentiment
    });
}
