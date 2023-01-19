const url = "https://striveschool-api.herokuapp.com/api/product/"


const addProduct = async (publishProduct) => {
    try {
        const name = document.querySelector("#product-name").value
        const description = document.querySelector("#product-description").value
        const brand = document.querySelector("#product-brand").value
        const imageUrl = document.querySelector("#product-url").value
        const price = document.querySelector("#product-price").value
        const product = {name, description, brand, imageUrl, price}
        const options = { 
            method: "POST",
            body: JSON.stringify(product),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDIzZWU3MzczODAwMTUzNzQzYjIiLCJpYXQiOjE2NzQxMzc2MjAsImV4cCI6MTY3NTM0NzIyMH0.lW0cx9aTKiLUaPLpRv2gXUgac5CwauCPFmdAyMuqCdo"
            })
            }
        let res = await fetch(url, options)
        console.log(product)
        if(res.ok) {
            console.log(res)
        }
    } catch (error) {
        console.log(error)
    }
    getProducts()
}

window.onload = async () => {
    await getProducts()
}


const getProducts = async () => {
    try {
        const options = { 
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDIzZWU3MzczODAwMTUzNzQzYjIiLCJpYXQiOjE2NzQxMzc2MjAsImV4cCI6MTY3NTM0NzIyMH0.lW0cx9aTKiLUaPLpRv2gXUgac5CwauCPFmdAyMuqCdo"
            }
            }
        const res = await fetch(url, options)
        const products = await res.json()
        renderProducts(products)
        console.log(products)
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
         <a href='./edit.html?id${_id}' class='btn btn-primary m-1'> <i class="bi bi-pencil-square"></i> </a>
         <a class='btn btn-info rounded-pill m-1' onclick='deleteProduct("${_id}")'> <i class="bi bi-trash3"></i> Delete </a>
       </div>
     </div>`
    });
}

const deleteProduct = async (idToDelete) => {
    try {
        let res = await fetch(url + idToDelete,
        {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDIzZWU3MzczODAwMTUzNzQzYjIiLCJpYXQiOjE2NzQxMzc2MjAsImV4cCI6MTY3NTM0NzIyMH0.lW0cx9aTKiLUaPLpRv2gXUgac5CwauCPFmdAyMuqCdo"
            }
        })
        console.log(res)
        if (res.ok) {
            await getProducts()
        }
    } catch (error) {
    console.log(error)
    }
}

const editProduct = async(idToChange) => {
    try {
        const editedProduct = {
            name : document.querySelector("#product-name").value,
            description : document.querySelector("#product-description").value,
            brand : document.querySelector("#product-brand").value,
            imageUrl : document.querySelector("#product-url").value,
            price : document.querySelector("#product-price").value,
        }
        const res = await fetch(url + idToChange, {
            method: "PUT", 
            headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NDIzZWU3MzczODAwMTUzNzQzYjIiLCJpYXQiOjE2NzQxMzc2MjAsImV4cCI6MTY3NTM0NzIyMH0.lW0cx9aTKiLUaPLpRv2gXUgac5CwauCPFmdAyMuqCdo",
          }),
          body: JSON.stringify(editedProduct),
        }) 
        if(res.ok) {
            console.log(res)
        }
    } catch(error) {
        console.log(error)
    }
}