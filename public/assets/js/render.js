fetch('/artykul.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
        console.error('Błąd wczytywania artykułu:', error);
    });