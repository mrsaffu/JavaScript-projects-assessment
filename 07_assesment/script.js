
let fetchData = fetch("https://api.github.com/users");
console.log(fetchData);
fetchData.then(response => {
    let data = response.json();
    console.log(data);
    data.then(finalData => {
        console.log(finalData);
        let card = document.getElementById("mainCont");
        console.log(card);
        finalData.map((m) => {
            // console.log(m);

            card.innerHTML += ` <div class="box" id="box">
             <img src=${m.avatar_url}> 

            <div class="details">
                <h1 class="id">id :${m.id}</h1>
                <p class="nodeId">node_id :${m.node_id}</p>
            </div>
            </div> `;

        })
    })
})