window.onload = () => {
    
    const form = document.querySelector("#formModify");
    const controller = "http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=modify"
    form.onsubmit = async function (e) {
        e.preventDefault();
        const formdata = new FormData(form);
        const response = await fetch(controller, {
            method: "post",
            body: formdata
    
        })
        const data = await response.json();
        if (data) {
            alert("Se modificaron los datos correctamente")
            form.reset()
            obtainBooks();
        }
        else {
            alert("No se pudo modificar correctamente ")
        }
    
    }

    obtainBooks();
}

let booksList = []


async function obtainBooks() {

    let  url='http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=obtain';      
    let query = await fetch(url);
    let data = await query.json();
    booksList = data;
    showBooks(data);
}

function showBooks(book) {

    let tbodyElement = document.querySelector("#TableBooks");
    tbodyElement.innerHTML = "";
    for (let i = 0; i < book.length; i++) {

        tbodyElement.innerHTML += `               
            <tr>
            <td>${book[i].id}</td>
            <td>${book[i].nombre}</td>
            <td>${book[i].fecha}</td>
            <td>${book[i].precio}</td>
            <td><button onclick="modifyBooks('${book[i].id}')">Modificar </button> </td>

            </tr>
            `;

    }

}

function modifyBooks(id) {
    const book = booksList.find(book => book.id === id);
    document.querySelector("#id").value = book.id;
    document.querySelector("#name").value = book.nombre;
    document.querySelector("#date").value = book.fecha;
    document.querySelector("#price").value = book.precio;
}
