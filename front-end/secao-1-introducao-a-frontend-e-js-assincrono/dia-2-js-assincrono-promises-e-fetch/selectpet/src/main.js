const dog = document.querySelector('#random-dog');
const cat = document.querySelector('#random-cat');
const randomPet = document.querySelector('#surprise-me');
const imgPet = document.querySelector('#random-pet-image');

dog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const petURL = data.message;

            imgPet.src = petURL;
        })
});

cat.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            const petURL = data.file;

            imgPet.src = petURL;
        })
})

randomPet.addEventListener('click', () => {
    Promise.any([
        fetch('https://aws.random.cat/meow'),
        fetch('https://dog.ceo/api/breeds/image/random'),
    ])
    .then((response) => response.json())
    .then((data) => {
        const petURL = data.file || data.message;

        imgPet.src = petURL;
    })
})