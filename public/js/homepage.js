fetch('/ascii/house%20chat')
    .then(res => res.text())
    .then(data => {
        console.log(data)
        document.querySelector('pre').innerText = data
    })