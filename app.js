const nosPlats = [
   {
      img: "1-dish.png",
      alt: "image de Poulet Yassa Sénégalais",
      nomDuPlat: "Poulet Yassa Sénégalais",
      details: "Poulet mariné dans une sauce à base de moutarde, de citron et d'épices, mijoté avec des oignons caramélisés pour un goût savoureux, servi avec du riz." 
   },
   {
      img: "2-dish.png",
      alt: "image de Riz Cantonais",
      nomDuPlat: "Riz Cantonais",
      details: "Riz sauté avec des légumes, des œufs brouillés, du jambon et des crevettes, le tout parfumé avec de la sauce soja pour un plat savoureux et plein de couleurs." 
   },
   {
      img: "3-dish.png",
      alt: "image de Crêpe aux Fraises",
      nomDuPlat: "Crêpe aux Fraises",
      details: "Une crêpe fine et légère garnie de fraîches fraises sucrées, accompagnée d'une délicieuse sauce sucrée pour un dessert gourmand et fruité." 
   }

];

/* 
   *****LA FUNCTION
*/

let container = document.querySelector('.cards');

(function () {

   const cardsHTML = renderCard(nosPlats);

   if(!!cardsHTML) {
      container.innerHTML = cardsHTML;
   }

   function renderCard(cards) {
      return `

      ${cards.map(card => {
         return `
         <div class="card" style="display: flex; align-items: center; justifly-content: center; flex-direction: column; gap: 2px;">
            <div class="" style="width: 120px; height: 120px; border-radius: 50%; overflow: hidden; margin-bottom: 10px;">
            <img src="images/${card.img}" alt="${card.alt}" style="width: 120px; height: 120px; object-fit: cover;">
            </div>
            <h2>${card.nomDuPlat}</h2>
            <p class="subtitle">${card.details}</p>
         </div>
         `;
      }).join('')}

      `;
   }
})();

// 925DEV