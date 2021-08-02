const tableUser = document.getElementById('tableUser')

showUsers()
async function showUsers(){
    const config = {
        headers:{
            Accept: 'applicarion/json',
        },
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/users', config)
    const data = await res.json()
    console.log(data.length)

    if(data.length > 0){
        var temp = ""
        data.forEach(item => {
            temp += `
            <tr>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
            </tr>
        `
        
        });
        tableUser.innerHTML = temp
    }

    // if (data.length > 0 ){
    //     var temp = ""
    //     data.forEach((item) => {
    //         console.log(item)
    //         temp += "<tr>"
    //         temp += "<td>" + item.name + "</td>"
    //         temp += "<td>" + item.username + "</td>"
    //         temp += "<td>" + item.email + "</td>"
    //         temp += "</tr>"
    //     });
    //     tableUser.innerHTML = temp
    // }
        
    }

