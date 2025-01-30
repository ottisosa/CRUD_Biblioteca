window.onload = () => {
    let formElement = document.querySelector("#form");
    formElement.onsubmit = async (e) => {
        e.preventDefault();
        let fromFormData = new FormData(formElement);
        let url = 'http://localhost/crud_biblioteca_octaviososa/BACKEND/CONTROLLER/bookController.php?function=add';

        let config = {
            method: 'POST',
            body: fromFormData
        };

        let response = await fetch(url, config);
        let data = await response.json();

        console.log(data);

        if (data == true) {
            alert('Libro Agregado Correctamente :)')
        } else (
            alert('Error Al Agregar El Libro :(')
        )
    }

    //  RESTRICCIONES DE CARACTERTES  //


    //  SOLO NUMEROS  //
    document.getElementById("price").addEventListener("input", (e) => {
        let value = e.target.value;
        e.target.value = value.replace(/[^A-Z\d-]/g, "");
    });

}
