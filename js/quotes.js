const quotes = [
    {
        quote: "행복한지 따져보는 건 우울해지는 지름길이야.",
        author: "- 우리의 20세기",
    },
    {
        quote: "넌 도전했고 도전에는 용기가 필요하지, 네가 자랑스럽구나.",
        author: "- 리틀 미스 션샤인",
    },
    {
        quote: "운명이란 말야, 노력하는 사람한테 우연이라는 다리를 놓아주는거야.",
        author: "- 엽기적인 그녀",
    },
    {
        quote: "천재성은 인종은 없고 강인함에는 남녀가 없으며 용기에는 한계가 없다..",
        author: "- 히든 피겨스 (Hidden Figures)",
    },
    {
        quote: "길은 모두에게 열려있지만 모두가 그 길을 가질 수 있는 건 아니다.",
        author: "- 인턴",
    },
    {
        quote: "폭력으로는 절대 이기지 못합니다. 품위를 유지할 때만 이길 수 있는 겁니다.",
        author: "- 그린 북 (Green Book)",
    },
    {
        quote: "단지 두려움 때문에 좋아하는 일을 포기하지 마.",
        author: "- 씽 (Sing)",
    },
    {
        quote: "우리가 앞서 나갈 기회를 잡으면 저들이 결승점을 옮겨놔.",
        author: "- 히든 피겨스",
    },
    {
        quote: "당신을 관두는 법을 알았으면 좋겠어요.",
        author: "- 브로크백 마운틴 (Brokenback Mountain)",
    },
    {
        quote: "호의가 계속되면 그게 권리인 줄 알아.",
        author: "- 부당거래",
    },
    {
        quote: "인생은 다시 돌아올 두 번의 기회가 없다고 생각하고 살아야 해.",
        author: "- 어바웃 타임",
    },

    {
        quote: "알 이즈 웰(All is well) : 모든 게 잘될 거야.",
        author: "- 세 얼간이",
    },
    {
        quote: "네 잘못이 아니야.",
        author: "- 굿 윌 헌팅",
    },
    {
        quote: "벗을 알면 내가 더 깊어진다.",
        author: "- 자산어보",
    },
    {
        quote: "내 아이들에게 부당함을 참으라고 가르치지 않았다.",
        author: "- 필라델피아",
    },
    {
        quote: "사람과 사람의 관계가 시작되는 건, 서로 다름을 인정하는 것부터이다.",
        author: "- 완벽한 타인",
    },
    {
        quote: "인생을 바꿀 기회는 1분마다 찾아옵니다.",
        author: "- 바닐라 스카이",
    },
    {
        quote: "인생은 모두가 함께하는 여행이다.",
        author: "- About time",
    },
    {
        quote: "당신은 지금, 언제나 그래 왔듯이 제 꿈속에 있습니다.",
        author: "- 노트북",
    },
    {
        quote: "네가 원하는 것 무엇이든 말만 해, 내가 그것이 되어줄게 널 위해.",
        author: "- 노트북",
    },
]



const quote = document.querySelector(".quote p:first-child");
const author = document.querySelector(".quote p:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;