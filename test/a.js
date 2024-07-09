const fetchData = async () => {
    const resp = fetch("");
    return resp;
}

fetchData().then(data => data.json()).then(data => console.log(data));