const showBtn = document.getElementById('showusers');

showBtn.addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
    })

    const body = await response.json();

    console.log(body)
})

// (async () => {
//     const response = await fetch('http://localhost:3000/users', {
//         method: 'GET',
//     })

//     const body = await response.json();

//     console.log(body);
// })();

const submitBtn = document.getElementById('savebtn');

submitBtn.addEventListener('click', async() => {
    //const myForm = document.getElementById('myForm');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const genders = document.getElementsByName('gender');
    let gender;

    for (item of genders) {
        if(item.checked) {
            gender = item.value;
        }
    }

    const requestBody = {
        name: name,
        age: age,
        gender: gender,
    }

    console.log(requestBody);

    const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            } 
        })
});

