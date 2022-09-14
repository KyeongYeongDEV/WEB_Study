//현재 상영 중인 영화 8개 순위
const axios = require("axios");
const cheerio= require("cheerio");

const URL  ="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&qvt=0&query=";

const getHTML = async(keyword)=>{
    try{
        //axios 
        //Node.js 서버에서 외부의 웹브라우저에 요청해서 특정 HTML을 내려받기 위해 필요한 패키지
        return await axios.get(URL + encodeURI(keyword));
    }catch(err){
        console.error(err); 
    }
};

const prasing = async(keyword)=>{
    const html = await getHTML(keyword);
    //cheerio
    //가져온 HTML에서 특정 위치(depth)를 가져오기 위해 필요한 패키지
    //load()
    //인자로 html 문자열을 받아 cheerio 객체 반환

    const $ = cheerio.load(html.data); //JQuery
    const $NameList = $(".data_box");

    let titles = [];
    let count=0;
    $NameList.each((idx, node)=>{
        titles.push({
            rank: ++count,
            name: $(node).find(".area_text_box > a").text(),
        });
    });
    console.log(titles);
};

prasing("현재상영영화");
