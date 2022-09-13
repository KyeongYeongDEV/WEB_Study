//현재 영화 박스오피스 순위
const axios = require("axios");
const cheerio= require("cheerio");

const URL  = "https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84&oquery=%EC%98%81%ED%99%94&tqi=hyty1sprvTossEk5Ovosssssssl-009660&acq=%EC%98%81%ED%99%94&acr=1&qdt=0";

const getHTML = async()=>{
    try{
        //axios 
        //Node.jd 서버에서 외부의 웹브라우저에 요청해서 특정 HTML을 내려받기 위해 필요한 패키지
        return await axios.get(URL);
    }catch(err){
        console.error(err); 
    }
};

const prasing = async()=>{
    const html = await getHTML();
    //cheerio
    //가져온 HTML에서 특정 위치(depth)를 가져오기 위해 필요한 패키지
    //load()
    //인자로 html 문자열을 받아 cheerio 객체 반환
    const $ = cheerio.load(html.data); //JQuery
    const $NameList = $(".title_box");

    let titles = [];
    let count=0;
    $NameList.each((idx, node)=>{
        titles.push({
            rank: ++count,
            name: $(node).find(".name").text(),
        });
        if(this.rank == 15){return ;}
    });
    console.log(titles);
};

prasing();
