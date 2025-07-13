// 🎮 Simple Fake Login System using JavaScript Promises

// This function simulates a login check using Promises
function fakeLogin(username, password) {
    return new Promise((resolve, reject) => {
        // Simulate server delay
        setTimeout(() => {
            // Check if credentials are correct
            if (username === "admin" && password === "12345") {
                resolve("Login successful! Welcome admin!");
            } else {
                reject("Wrong username or password!");
            }
        }, 1000); // 1 second delay
    });
}

// Example usage:
// fakeLogin("admin", "12345")
//     .then(message => console.log("Success:", message))
//     .catch(error => console.log("Error:", error));

// Export for use in other files (if using modules)
// export { fakeLogin };
