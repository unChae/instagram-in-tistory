async function fetchData() {
    token = "token 값 입력"

    url = "https://graph.instagram.com/me/media?";
    url += "fields=id,media_type,media_url,username,timestamp,caption&access_token=" + token;
    let itemData = [];
    itemData = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())

    itemData.data.forEach((item, index) => {
        let itemlist = document.getElementById("itemlist");
        let elem = document.createElement("li");
        let date = new Date(item.timestamp);
        date = date.toString().split("GMT")[0];


        elem.innerHTML = `
        <li class="ig_li">
            <img class="ig_img" src="${item.media_url}">
            <card class="ig_card">
                <div class="ig_content">
                    <span class="ig_title">${item.caption}</span>
                    <p class="ig_timestamp">${date}</p>
                </div>
            </card>
        </li>
        `;
        itemlist.append(elem);
    })
}

