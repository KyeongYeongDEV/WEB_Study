//한국 2022 KBO리그 순위
const axios = require("axios");
const cheerio= require("cheerio");

const URL  = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=+KBO%EB%A6%AC%EA%B7%B8&oquery=%ED%95%9C%EA%B5%AD+2022+KBO%EB%A6%AC%EA%B7%B8&tqi=hx85zlprvxsssZnwoCdssssstYh-345691";

const getHTML = async()=>{
    try{
        //axios 
        //Node.jd 서버에서 외부의 웹브라우저에 요청해서 특정 HTML을 내려받기 위해 필요한 패키지
        return await axios.get(URL);
    }catch(err){
        console.error(err); //error 발생시 콘솔에 띄워줌
    }
};

const prasing = async()=>{
    const html = await getHTML();
    //cheerio
    //가져온 HTML에서 특정 위히(depth)를 가져오기 위해 필요한 패키지
    //load()
    //인자로 html 문자열을 받아 cheerio 객체 반환
    const $ = cheerio.load(html.data);
    const $RankList = $(".teamRankTabPanel_0");

    let Rankes = [];
    $RankList.each((idx, node)=>{
        const title  = $(node).find(".teamRankTabPanel_0").text();
        Rankes.push({
            rank:$(node).find("row"),
            team: $(node).find("tboby tr td team p span a")
        })
    });
    console.log(Rankes);
};

prasing();