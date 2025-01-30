<?php
require_once '../MODEL/bookModel.php';

$function = $_GET['function'];

switch ($function) {
    case "add":

        addBooks();

        break;
    case "delete":

        deleteBooks();

        break;
    case "obtain":

        obtainBooks();

        break;

    case "modify":

        modifyBooks();

        break;

    case "orderName":

        orderByName();

        break;

    case "orderDate":

        orderByDate();

        break;

    case "orderPrice":
        orderByPrice();

        break;
}


function obtainBooks()
{
    $result = (new book())->obtainBook();
    echo json_encode($result);
}

function addBooks()
{
    $name = $_POST['name'];
    $date = $_POST['date'];
    $price = $_POST['price'];

    $result = (new book())->createBook($name, $date, $price);
    echo json_encode($result);
}

function deleteBooks()
{
    $id = $_POST['id'];
    $result = (new book())->deleteBook($id);
    echo json_encode($result);
}

function modifyBooks()
{
    $name = $_POST['name'];
    $date = $_POST['date'];
    $price = $_POST['price'];
    $id = $_POST['id'];
    $result = (new book())->modifyBook($name, $date, $price, $id);
    echo json_encode($result);
}

function orderByName()
{
    $result = (new book())->orderByName();
    echo json_encode($result);
}

function orderByDate()
{
    $result = (new book())->orderByDate();
    echo json_encode($result);
}

function orderByPrice()
{
    $result = (new book())->orderByPrice();
    echo json_encode($result);
}
