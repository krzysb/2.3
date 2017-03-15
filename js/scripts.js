function fetch(url, success, err) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function (e) {

        if (this.readyState === 4 && this.status === 200) {
            success(this.response);
        } else if (this.readyState == 4 && this.status >= 400) {
            err(this.response)
        }
    }
    xhr.send(null);
}

fetch("https://jsonplaceholder.typicode.com/users", function (data) {
    console.log("success");
    console.log(data);
}, function (error) {
    console.log('error');
    console.log(error);
});