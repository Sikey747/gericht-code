//open instagram card

const photo  = document.querySelectorAll('.inst-photo');

if(photo.length){
    photo.forEach(i=>{
        i.addEventListener("click",(e)=>{
            i.querySelector(".inst-photo__overlay").classList.toggle("inst-photo__overlay_show");
        })
    })
}