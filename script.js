document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const playerNameInput = document.getElementById('playerName');
    let players = [];

    startButton.addEventListener('click', function() {
        const playerName = playerNameInput.value.trim();
        if (playerName === '') {
            alert('Bitte gib deinen Namen ein.');
            return;
        }
        players.push({ name: playerName, role: '' });
        startGame(players);
    });

    function startGame(players) {
        const numberOfPlayers = players.length;
        const spyIndex = Math.floor(Math.random() * numberOfPlayers);
        
        for (let i = 0; i < numberOfPlayers; i++) {
            if (i === spyIndex) {
                players[i].role = 'Spion';
            } else {
                players[i].role = 'Nicht-Spion';
            }
        }

        assignTopics(players);

        alert(`Willkommen, ${players[spyIndex].name}! Du bist der Spion.`);
        for (let i = 0; i < numberOfPlayers; i++) {
            if (i !== spyIndex) {
                alert(`${players[i].name}, du bist ein Nicht-Spion und dein Thema ist: ${players[i].topic}.`);
            }
        }
    }

    function assignTopics(players) {
        const topics = ['Politik', 'Sport', 'Film', 'Essen', 'Geschichte'];
        const numberOfTopics = topics.length;
        
        for (let i = 0; i < players.length; i++) {
            if (players[i].role === 'Nicht-Spion') {
                const randomTopicIndex = Math.floor(Math.random() * numberOfTopics);
                players[i].topic = topics[randomTopicIndex];
            }
        }
    }
});
