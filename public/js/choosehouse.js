fetch(`/ascii/welcome%20${user}`)
    .then(res => res.text())
    .then(data => {
        console.log(data)
        document.querySelector('pre').innerText = data
    })