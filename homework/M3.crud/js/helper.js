getEvents = async () => {
    const url = "https://strivetestapi.azurewebsites.net/api/agenda/"; // site that doesn’t send Access-Control-*
    var response = await fetch(url);
    return await response.json();
};

getEvent = async id => {
    const url = `https://strivetestapi.azurewebsites.net/api/agenda/${id}`; // site that doesn’t send Access-Control-*
    var response = await fetch(url);
    return await response.json();
};