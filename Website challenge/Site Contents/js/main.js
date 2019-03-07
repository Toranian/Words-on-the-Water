function author_details(name) {
    if (name == "basran") {
        document.getElementById("author-details").innerHTML = "Basran is cool I guess";
    }
    console.log("hello there world")

    if (name == "fallis") {
        document.getElementById("author-details").innerHTML = "Fallis is cool I guess"
    }
    
}

function showInfo() {

    var userElement = document.getElementById("username");
    console.log(userElement);
}