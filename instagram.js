async function fetchData() {
    // 토큰 값 입력
    token = "토큰 값을 입력해주세요"

    // 인스타그램 요청 api 주소
    url = "https://graph.instagram.com/me/media?";
    // 내가 받아오고 싶은 내용 fields 파라매터에 추가 & 토큰 값 함께 전송
    url += "fields=id,username,media_type,media_url,timestamp,caption&access_token=" + token;
    
    // 데이터를 담을 배열 변수 생성
    let res = [];

    // 데이터를 GET 방식으로 요청
    let itemData = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    
    res.push(itemData)
    if(itemData.paging.next) {
        url = itemData.paging.next
        while(true) {
            let nextData = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type':'application/json'
                }
            })   
            .then(response => response.json()) 

            res.push(nextData);

            if(!nextData.paging.next) {
                break;
            }
            url = nextData.paging.next;
        }
    }

    // index.html에 있는 ul 객체 생성
    let itemlist = document.getElementById("itemlist");

    for(let i = 0; i < res.length; i++) {

        // 받아온 데이터를 반복문을 통하여 추출
        res[i].data.forEach((item, index) => {
            // createElement 함수를 이용하여 li 태그 객체 생성
            let elem = document.createElement("li");

            // 날짜 형식 바꿔주는 코드
            let date = new Date(item.timestamp);
            date = date.toString().split("GMT")[0];

            // li 태크로 생성된 elem에 HTML 소스코드 입력
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

            // 추가한 소스코드 index.html에 있는 ul에 추가
            itemlist.append(elem);
        })
    }

}

