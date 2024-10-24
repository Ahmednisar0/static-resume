function getProfilePicture() {
    var ahmed = "female"; // You can change this value to "female" to test the other case
    var profilePicture = '';
    if (ahmed === "male") {
        profilePicture = '<img src="/images/man-character-face-avatar-glasses-600nw-542759665.jpg" alt="Profile Picture">';
    }
    else if (ahmed === "female") {
        profilePicture = '<img src="/images/depositphotos_477176258-stock-illustration-girl-glamour-waitress-icon-filled.jpg" alt="Profile Picture">';
    }
    else {
        profilePicture = '<p>No profile picture available.</p>'; // Default case if gender is not recognized
    }
    return profilePicture;
}
// Usage example
var outputElement = document.getElementById('profilePictureOutput'); // Assume this is your target output element
if (outputElement) {
    outputElement.innerHTML = getProfilePicture(); // Set the innerHTML to the returned picture
}
