const text = () => {
    const input = document.getElementById("input").value;
    if (input == "") {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./imag/images_two.jpg");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);

    }
    else if (input != "") {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./imag/image_one.jpg");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
    }
    setInterval(text, 2000)
}
text()