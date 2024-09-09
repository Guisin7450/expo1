document.getElementById('fetchwizards').addEventListener('click', (event) => {
    fetch('https://wizard-world-api.herokuapp.com/wizards')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('card');
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Sobrenome:</strong> ${data.lastName}</p>
                <p><strong>ID:</strong> ${data.id}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});

document.getElementById('fetchspells').addEventListener('click', (event) => {
    fetch('https://wizard-world-api.herokuapp.com/spells')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('form');
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Efeito:</strong> ${data.effect}</p>
                <p><strong>Tipo:</strong> ${data.type}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});

document.getElementById('fetchhouses').addEventListener('click', (event) => {
    fetch('https://wizard-world-api.herokuapp.com/houses')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('div');
            resultDiv.innerHTML = `
                <p><strong>Nome:</strong> ${data.name}</p>
                <p><strong>Cor da Casa:</strong> ${data.houseColours}</p>
                <p><strong>Elemento:</strong> ${data.element}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colors = ['#000000', '#350000'];
    let index = 0;

    function changeColor() {
        body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }

    setInterval(changeColor, 1000);
});
