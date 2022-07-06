const updateBtn = document.getElementById('update');
const backBtn = document.getElementById('home');

backBtn.addEventListener('click', () => window.location = './index.html');

updateBtn.addEventListener('click', async() => {
    const userID = document.getElementById('userId');
    const newName = document.getElementById('newName');
    const newAge = document.getElementById('newAge');
    const newGender = document.getElementById('newGender');
    console.log(userID.value)
    const requestBody = {
        id: userID.value,
        name: newName.value,
        age: newAge.value,
        gender: newGender.value,
    }
    
    const response = await fetch('http://localhost:3000/users', {
            method: 'PUT',
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            } 
    })
})

