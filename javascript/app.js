const text = () => {
    const input = document.getElementById("input").value;
    if (input == "") {
        var x = document.createElement("IMG");
        x.setAttribute("src", "./imag/images_two.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);

    }






}
text()