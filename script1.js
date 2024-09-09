let dogList=[];

const dogpics=document.querySelector('#fetchDogs');
let mainContainer=document.querySelector('#container');

dogpics.addEventListener('click',async ()=>{
    await fetch("https://dog.ceo/api/breeds/image/random")
    // await fetch("dogs.json")
    .then(response => response.json())
    .then(data=>{dogList=data.results.dog})
    .catch((error)=>console.error(error))
    displayPics()
})

function displayPics(){
    mainContainer.innerHTML="";
    const img=document.createElement('img');
    img.src=dogList[0];
    img.height=200;
    img.width=200;

    let title=document.createElement('div');
    title.textContent="Dog Picture";
    let container=document.createElement('div');
    container.appendChild(title);
    container.appendChild(img);
    mainContainer.appendChild(container);
}

