    getEvents = async () => {
        var myHeaders = new Headers({
            "Authorization": "Basic " + btoa("admin:supersecret"),
            "Content-Type": "application/json"
        });

        window.onload = async () => {
            var response = await fetch("https://strivetestapi.azurewebsites.net/api/product/", {
                headers: myHeaders
            });

            products = await response.json();
            return await response.json();

        };
        console.log(getEvents())

    }