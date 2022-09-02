//npm i axios cheerio
//2개의 module을 깔아준다. 

const axios = require("axios");
const cheerio = require("cheerio");

const getHTMl = async(keyword) =>{
    try{
        return await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword));
    }catch(err){
        console.log(err);
    }
};

const parsing = async(keyword) =>{
    const html = await getHTMl(keyword);
    const $ = cheerio.load(html.data);
    const $courseList = $(".course_card_item");

    let courses = [];
    $courseList.each((idx, node) =>{
        const title = $(node).find(".course_title:eq(0)").text();//같은 class이름을 가진 노드가 있어 2개를 가지고 온다. ':eq(0)를 이용해 첫 번째 거만 가지고 온다. 
        courses.push({
            title : $(node).find(".course_title").text(),
            instructor: $(node).find(".instructor").text(),
            price: $(node).find(".instructor").text(),            
            rating: $(node).find(".star_solid").css("width"),
            img: $(node).find(".card-image > figure > img").attr("src"),
        })
    });
    console.log(courses);
}

parsing("자바스크립트");

/*
refo
https://www.youtube.com/watch?v=xbehh8lWy_A&list=PLqbWuGdVBJd0oHdwp9y9NsTTQbUuEPNyY&index=8
*/