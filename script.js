document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    let players = [
        { name: 'Sharu', role: '', topic:''},
        { name: 'AJ', role: '', topic:''},
        { name: 'Sai', role: '', topic:''},
        { name: 'JJ', role: '', topic:''}
    ];

    startButton.addEventListener('click', function() {
        startGame(players);
        updateHTML(players);
    });

    function startGame(players) {
        const numberOfPlayers = players.length;
        const spyIndex = Math.floor(Math.random() * numberOfPlayers);
        
        for (let i = 0; i < numberOfPlayers; i++) {
            players[i].role = i === spyIndex ? 'Spion' : 'Nicht-Spion';
        }

        assignTopics(players);
    }

    function assignTopics(players) {
        const topics = ['Politik', 'Sport', 'Film', 'Essen', 'Geschichte'];
        const numberOfTopics = topics.length;
        const randomTopicIndex = Math.floor(Math.random() * numberOfTopics);

        for (let i = 0; i < players.length; i++) {
            if (players[i].role === 'Nicht-Spion') {
                players[i].topic = topics[randomTopicIndex];
            }
        }
    }

    function updateHTML(players) {
        const playersContainer = document.getElementById('players');
        playersContainer.innerHTML = '';
        players.forEach((player, index) => {
            const playerElement = document.createElement('div');
            if (player.role === 'Nicht-Spion') {
                playerElement.innerHTML = `
                    <p>${player.name}</p>
                    <button onclick="alert('Thema: ${player.topic}, ${player.role}');">Zeige Rolle</button>
                `;
            }
            else{
                playerElement.innerHTML = `
                    <p>${player.name}</p>
                    <button onclick="alert('${player.role}');">Zeige Rolle</button>
                `;
            }
            playersContainer.appendChild(playerElement);
        });
    }
});
