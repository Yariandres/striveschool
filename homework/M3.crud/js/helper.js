    getEvents = async () => {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url = "https://cors-anywhere.herokuapp.com/https://strive-school-testing-apis.herokuapp.com/api/product/"; // site that doesn’t send Access-Control-*

        let username = 'user10';
        let password = 'hmWhr9ktc4bejjTg';

        let authString = `${username}:${password}`

        let headers = new Headers({
            "content-type": "application/json",
        });

        headers.set('Authorization', 'Basic ' + btoa(authString))

        var response = await fetch(url, {
            method: 'POST',
            headers: headers
        });

        return await response.json();
    }