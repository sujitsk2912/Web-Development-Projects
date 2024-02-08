async function ShortURL() {
    const urlInput = document.getElementById("URL");
    const copyInput = document.getElementById("Copy");

    const url = urlInput.value;

    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

        if (response.ok) {
            const shortURL = await response.text();
            copyInput.value = shortURL;
            results.textContent = "";
        } else {
           copyInput.value = "";
            results.textContent = `Error shortening: ${errorMessage}`;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        results.textContent = "An unexpected error occurred.";
    }
}

function CopyURL() {
    const copyInput = document.getElementById("Copy");
    copyInput.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
}