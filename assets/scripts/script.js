function rating(index) {
  return `<div class="rating-area">
  <input type="radio" id="star-5_${index}" name="rating_${index}" value="5" onchange="onRatingChanged(event)">
  <label for="star-5_${index}" title="Оценка «5»"></label>
  <input type="radio" id="star-4_${index}" name="rating_${index}" value="4" onchange="onRatingChanged(event)">
  <label for="star-4_${index}" title="Оценка «4»"></label>
  <input type="radio" id="star-3_${index}" name="rating_${index}" value="3" onchange="onRatingChanged(event)">
  <label for="star-3_${index}" title="Оценка «3»"></label>
  <input type="radio" id="star-2_${index}" name="rating_${index}" value="2" onchange="onRatingChanged(event)">
  <label for="star-2_${index}" title="Оценка «2»"></label>
  <input type="radio" id="star-1_${index}" name="rating_${index}" value="1" onchange="onRatingChanged(event)">
  <label for="star-1_${index}" title="Оценка «1»"></label>
</div>`;
}


function onRatingChanged(e){
	let el = e.target;
	localStorage.setItem(el.name, el.value);
}

document.addEventListener("DOMContentLoaded", function (event) {
  let heroes = JSON.parse(heroesJson);
  console.log(heroes);

  let heroesContent = "";
  let index = 0;
  for (let hero of heroes) {
    heroesContent += `<div class="superhero">
    <h2>${hero.name}</h2>
    <p><span>Вселенная:</span> ${hero.universe}</p>
    <p><span>Альтер эго:</span> ${hero.alterego}</p>
    <p><span>Род деятельности:</span> ${hero.business}</p>
    <p><span>Друзья:</span> ${hero.friends}</p>
    <p><span>Суперсилы:</span> ${hero.superpowers}</p>
    <p><span>Подробная информация:</span> ${hero.details}</p>
    <div class="image">${hero.image}</div>
    <p>${rating(hero.id)}</p>
    </div>`;
    index++;
  }
  
  document.querySelector(".heroes-info").innerHTML = heroesContent;
  
  for(let hero of heroes){
	  
	  let rating = localStorage.getItem("rating_" + hero.id);
	  
	  if(rating != undefined && rating != null)
		document.getElementById("star-" + rating + "_" + hero.id).checked = true;
  }
  
});

