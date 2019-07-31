var products = [];
var myHeaders = new Headers({
    "Authorization": "Basic " + btoa("admin:supersecret"),
    "Content-Type": "application/json"
});

window.onload = async () => {
    var response = await fetch("https://strivetestapi.azurewebsites.net/api/product/", {
        headers: myHeaders
    });
    products = await response.json();

    document.querySelector("#myProducts").innerHTML = products.map(p =>
        `   <div class="card mb-4 shadow-sm">
                     ​<img src=" ${p.imageUrl} " alt="phone image">
                    <p class="text-center lead"> ${p.name} </p>
                    <div class="card-body">
                        <p class="card-text"> ${p.description} </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>

                            <button type="button" class ="btn btn-sm btn-outline-secondary" onclick="deleteEvent()">
                                    Delete
                            </button>

                            </div>
                            <small class="text-muted">Create: ${p.createdAt}</small>
                        </div>
                    </div>
                </div>
            `).join("");
};

handleSubmit = () => {
    event.preventDefault();
    submitProduct();
};

submitProduct = async () => {
    var myProduct = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        brand: document.querySelector("#brand").value,
        price: document.querySelector("#price").value,
        imageUrl: document.querySelector("#imageUrl").value,
    };

    var response = await fetch("https://strivetestapi.azurewebsites.net/api/product/", {
        method: "POST",
        body: JSON.stringify(myProduct),
        headers: myHeaders
    });

    var productResponse = await response.json();
    console.log(productResponse);
};
var id = null;