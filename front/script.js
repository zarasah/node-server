const showBtn = document.getElementById('showusers');
const submitBtn = document.getElementById('savebtn');
const deleteBtn = document.getElementById('delete');
const updateBtn = document.getElementById('update');

showBtn.addEventListener('click', () => window.location = './users.html');
deleteBtn.addEventListener('click', () => window.location = './delete.html');
updateBtn.addEventListener('click', () => window.location = './update.html');

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

    //console.log(requestBody);

    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch(error) {
        console.log('Invalid data');
    }
});

