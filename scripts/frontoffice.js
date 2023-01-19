const url = "https://striveschool-api.herokuapp.com/api/product/"
const options = {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDIzZWU3MzczODAwMTUzNzQzYjIiLCJpYXQiOjE2NzQxMzQwNzksImV4cCI6MTY3NTM0MzY3OX0.I3P61wLbvL517MJ_rgJE9U-75loJM58FZWCd-k2mVBw"
    }
    }

window.onload = async () => {
    await displayProducts()
}

const displayProducts = async () => {
    try {
        const res = await fetch(url, options)
        const products = await res.json()
        renderProducts(products)
    } catch (error) {
        console.log(error)
    }
}

const renderProducts = (arrayOfProducts) => {
    const card = document.querySelector("#products")
    card.innerHTML = "";
    arrayOfProducts.forEach(singleProduct => {
       const {name, description, brand, imageUrl, price, _id} = singleProduct;
       card.innerHTML += `<div class="card">
       <img src="${imageUrl}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${name}</h5>
         <p class="card-text">${description}</p>
         <p class="card-text">${brand}</p>
         <p class="card-text">${price}</p>
         <a href='../edit.html?id=${_id}' class='btn btn-primary m-1'> <i class="bi bi-search"></i>Details </a>
       </div>
     </div>`
    });
}