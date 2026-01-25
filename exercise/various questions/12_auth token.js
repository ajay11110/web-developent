// Set authentication token with expiration (in minutes)
function setAuthToken(token, minutes) {
    const expiryTime = Date.now() + minutes * 60 * 1000;

    const tokenData = {
        token: token,
        expiry: expiryTime
    };

    localStorage.setItem("authToken", JSON.stringify(tokenData));
}

// Get token if valid, otherwise remove it
function getAuthToken() {
    const data = localStorage.getItem("authToken");
    if (!data) return null;

    const tokenData = JSON.parse(data);

    if (Date.now() > tokenData.expiry) {
        localStorage.removeItem("authToken");
        return null;
    }

    return tokenData.token;
}

// Remove token manually (logout)
function removeAuthToken() {
    localStorage.removeItem("authToken");
}

// Example usage
setAuthToken("my-secret-token-123", 0.5); // expires in 1 minute

console.log("Stored Token:", getAuthToken());

// Auto-check token every 5 seconds (optional)
const intervalId = setInterval(() => {
    const token = getAuthToken();

    if (!token) {
        console.log("Token expired or not found");
        clearInterval(intervalId); // stops loop
    } else {
        console.log("Token still valid:", token);
    }
}, 5000);

