import { items } from "./items.js";

let currentType = "Бургери";
const refs = {
  net: document.querySelector(".catalog-net"),
  flitr: document.querySelector(".filter__buttons"),
};

refs.flitr.addEventListener("click", hadleTodoListClick);
// button.classList.add("filter__buttons-item--active");

const getTypes = () => {
  const newAllTypes = [];

  for (let i = 0; i < items.length; i++) {
    let el = items[i].type;
    if (!newAllTypes.includes(el)) {
      newAllTypes.push(el);
    }
  }
  return newAllTypes;
};

const createFiltr = function () {
  return getTypes().map(
    (name) =>
      `<li><button class="filter__buttons-item" id="${name}">${name}</button></li>`
  );
};

const filtrMurcup = createFiltr().join("");

refs.flitr.insertAdjacentHTML("afterbegin", filtrMurcup);

const createCatalog = function () {
  console.log("call createCatalog");

  return items.map((item) => {
    const topMurcup = `<span class="catalog-net__item-img--top">top</span>`;
    const murcup = `<div class="catalog-net__item">
	<div class="catalog-net__item-img">
	${item.top ? topMurcup : null}
	  <img src="items-img/${item.img}.png" alt="food" />
	</div>
	<div class="catalog-net__item-info">
	  <h3 class="catalog-net__title">${item.name}</h3>
	  <p class="catalog-net__text">
	  ${item.descritpion}
	  </p>
	  <div class="catalog-net__item-buy">
		<p class="item-buy__price">${item.price} грн.</p>
		<button class="buy-button item-buy__buy">У кошик</button>
	  </div>
	</div>
  </div>`;
    if (item.type === currentType) return murcup;
  });
};

const variable = () => createCatalog().join("");

refs.net.insertAdjacentHTML("afterbegin", variable());

function hadleTodoListClick(e) {
  //   console.log(e.target);
  //   console.dir(e.target);
  if (e.target.nodeName != "BUTTON") {
    return;
  }
  const button = e.target;
  console.log("button", button);
  const lastActive = document.querySelector(`#${currentType}`);
  console.log("lastActive", lastActive);

  if (lastActive.classList.contains("filter__buttons-item--active"))
    lastActive.classList.remove("filter__buttons-item--active");
  button.classList.add("filter__buttons-item--active");
  console.log("button", button);

  currentType = button.textContent;
  console.log("currentType", currentType);

  refs.net.innerHTML = "";
  refs.net.insertAdjacentHTML("afterbegin", variable());
  // const li = button.closest('li.todo-list__item');
  // const todoId = li.dataset.id;
  // console.log(todoId);

  // todos.delete(Number(todoId));
  // // console.log(todos.items);
  // li.remove();
}
