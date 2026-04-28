const button = document.getElementById("shortenBtn");
const result = document.getElementById("result");

button.addEventListener("click", async() => {

    const url = document.getElementById("urlInput").value;

    const customCode =
        document.getElementById("customCode").value;

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    try {

        const response = await fetch("/api/shorten", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                url,
                customCode,
            }),
        });

        const data = await response.json();

        if (data.success) {

            result.innerHTML = `
        <p>Short URL:</p>
        <a href="${data.shortUrl}" target="_blank">
          ${data.shortUrl}
        </a>
      `;

        } else {

            result.innerHTML = `
        <p style="color:red;">
          ${data.message}
        </p>
      `;
        }

    } catch (error) {

        result.innerHTML = `
      <p style="color:red;">
        Something went wrong
      </p>
    `;
    }

});