function fetchValue() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            const main = document.querySelector('main');
            data.forEach(value => {
                const valueElement = document.createElement('div');
                valueElement.classList.add('value');
                valueElement.innerHTML = `
                    <h3>Name: ${value.name}</h3>
                    <h4>Email: ${value.email}</h4>
                    <p>${value.body}</p>
                `;
                main.appendChild(valueElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


fetchValue();
