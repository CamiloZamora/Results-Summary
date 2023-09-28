fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data){
    for(var i = 0; i < data.length; i++){
        document.getElementById("container").innerHTML += `
        <div class="${data[i].category.toLowerCase()} box">
            <div>
                <img class="icon" src="${data[i].icon}" alt="${data[i].category}">
                <div class="category">${data[i].category}</div>
            </div>
            <div class="points"> <span class="score">${data[i].score}</span> / 100</div>
            </div>
        `
    }    
}) 
.catch(function(err) {
    console.log(err);
});