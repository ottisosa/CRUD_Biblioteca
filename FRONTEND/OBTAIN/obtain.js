window.onload = () => {

    addEventSelect();
    obtainBooks();
}

async function obtainBooks() {

    let url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=orderDate';
    let query = await fetch(url);
    let data = await query.json();
    booksList = data;
    showBooks(data);
}

function showBooks(books) {

    let tbodyElement = document.querySelector("#tableBooks");
    tbodyElement.innerHTML = "";
    for (let i = 0; i < books.length; i++) {

        tbodyElement.innerHTML += `               
                <tr>
                <td>${books[i].id}</td>
                <td>${books[i].nombre}</td>
                <td>${books[i].fecha}</td>
                <td>${books[i].precio}</td>    
                </tr>
                `;

    }

}

function addEventSelect() {

    let filter = document.querySelector("#select")   //  query selector del selector para ordenar las tablas por nombre, fecha y precio  //

    filter.onchange = async () => {      

        let value = filter.options[filter.selectedIndex].value;  


        let url;

        switch (value) {             //  switch que segun la variable value cambia la ruta que lleva a la funcion con la consulta SQL  //

            case "name":
                url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=orderName';
                break;
            case "date":
                url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=orderDate';
                break;
            case "price":
                url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=orderPrice';
                break;
            default:
                url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=orderDate';
        }
        try {
            let query = await fetch(url);
            let data = await query.json();     
            showBooks(data);
        } catch (error) {
            console.error('Error al mostrar los libros :(', error);     
        }

    }
}
