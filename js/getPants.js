const contentContainer = document.getElementById("content-container");
let row = null;
let itemCount = 0;

fetch("https://68e7f0a3f2707e6128c971a4.mockapi.io/api/products/pants")
.then(data => data.json())
.then(pants => {
    pants.forEach(pant => {
        if (itemCount === 0 || itemCount >= 4) {
            row = document.createElement("div");
            row.className = "row flex-column flex-md-row gap-3";
            contentContainer.appendChild(row);
            itemCount = 0;
        }
        let card = document.createElement("div");
        card.className = "card col p-0";
        card.innerHTML = `
            <img class="card-img" src="${pant.prodImageURL}" alt="${pant.prodName}">
            <div class="card-body">
                <p class="text-dark-emphasis fw-medium">
                    ${pant.prodName}
                </p>
                <span class="d-flex flex-column gap-3">
                    <p class="m-0 text-success fw-medium">
                        $${pant.prodPrice}
                    </p>
                    <button class="btns border-0 bg-black text-white p-2 rounded fw-medium">
                        add to cart
                    </button>
                </span>
            </div>
        `;
        row.appendChild(card);
        itemCount++;
    });
})