export async function fetchData() {
    console.log("fetching data");
    const header = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }
    const data = await fetch("https://script.google.com/macros/s/AKfycby4ePJFahedZcdb9dN80umRqQP4jBAVKi6MsuFBGZO9L6ia_7ekMWXved_JpAkztqzdUQ/exec", header);
    const json = await data.json();
    await console.log(json);
    return json;
}