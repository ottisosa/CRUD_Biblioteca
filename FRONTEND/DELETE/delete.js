window.onload = () => {

    obtainBooks();
}

async function obtainBooks() {

    let  url='http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=obtain';      
    let query = await fetch(url);
    let data = await query.json();
    console.log(data);
    showBooks(data);
}

async function deleteBooks(id) {

    let formdata = new FormData();
    formdata.append("id", id);
    let  url='http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=delete';      

    let config = {
        method: 'POST',
        body: formdata
    };

    let response = await fetch(url, config);
    let data = await response.json();

    console.log(data);

    if (data == true) {
        alert('Libro eliminado correctamente :)')
        obtainBooks();
    } else (
        alert('Error al eliminar el libro :(')
    )
}




function showBooks(books) {

    let tbodyElement = document.querySelector("#tableBooks");
    tbodyElement.innerHTML="";
    for (let i = 0; i < books.length; i++) {

        tbodyElement.innerHTML += `               
            <tr>
            <td>${books[i].id}</td>
            <td>${books[i].nombre}</td>
            <td>${books[i].fecha}</td>
            <td>${books[i].precio}</td>
            <td><button onclick="deleteBooks('${books[i].id}')">Eliminar </button> </td>

            </tr>
            `;


    }

}


