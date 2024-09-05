const gamesList = [
    {
        title: "Game Keren 1",
        description: "Game ini sangat keren, cobalah sekarang!",
        downloadLink: "#"
    },
    {
        title: "Game Keren 2",
        description: "Game ini seru banget, wajib dicoba!",
        downloadLink: "#"
    }
];

function displayGames() {
    const gameListElement = document.querySelector('.game-list');
    gamesList.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.downloadLink}" download>Download</a>
        `;
        gameListElement.appendChild(gameItem);
    });
}

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Game uploaded! (This is just a mock)');
    // Logic for uploading file to server can be added here
});

document.getElementById('donate-button').addEventListener('click', function() {
    alert('Thank you for donating! (This is just a mock)');
    // You can integrate actual payment system like PayPal or Stripe
});

displayGames();
