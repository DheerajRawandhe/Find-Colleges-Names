// confirm("Internet Connect Hai...? ");

let btn = document.querySelector("button");

btn.addEventListener("click",async() =>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country); 
    show(colArr); 

});

function show(colArr){
    let list =document.querySelector("#list");  
    list.innerText = "";
    for(coll of colArr){
        console.log(coll.name);

        let li = document.createElement("li");  
        li.innerText = coll.name;
        list.appendChild(li);
    }
}

let url = "http://universities.hipolabs.com/search?name=";
let country = "India";

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    } catch (err) {
        return [];
    }
}
getColleges();


