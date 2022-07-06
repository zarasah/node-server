const backBtn = document.getElementById('home');
const deleteBtn = document.getElementById('delete');

backBtn.addEventListener('click', () => window.location = './index.html');

deleteBtn.addEventListener('click', async() => {
    const inputUserId = document.getElementById('userId');
    const userId = inputUserId.value;
    const requestBody = {
        id: userId,
    }

    // console.log(userId);

    const response = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    })

})

