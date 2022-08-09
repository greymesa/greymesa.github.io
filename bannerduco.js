fetch("https://raw.githubusercontent.com/greymesa/greymesa.github.io/main/lines.json?token=GHSAT0AAAAAABWRJFXXDJVZCERKHGI4PFC6YXSQI7Q")
.then(res => res.json())
.then(json => {
    document.getElementById("banner").innerHTML = json[Math.floor(Math.random() * json.length)];
}).catch(error => {
    console.log(error);
});
