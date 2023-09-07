//Базовые хлебные крошки
breadCrumbs()
export function breadCrumbs() {
	const breadCrumbs = document.querySelector(".bread-crumbs");
	const corentUrl = location.pathname;
	const titlePage = document.title;
	
	if(breadCrumbs){
	  const ululbreadCrumbs = breadCrumbs.querySelector("ul");
	  let newEl = `<li class="bread-crumbs__link link-active">${titlePage}</li>`;
	  ululbreadCrumbs.insertAdjacentHTML("beforeend",newEl);
	
	}
  }