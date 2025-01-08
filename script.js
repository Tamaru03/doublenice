// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav button");
    const pages = document.querySelectorAll(".page");

    // 默认显示第一个页面
    showPage("ip-rating");

    // 导航按钮点击事件
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const pageId = this.getAttribute("data-page");
            showPage(pageId);
        });
    });

    // 显示指定页面的函数
    function showPage(pageId) {
        // 隐藏所有页面
        pages.forEach(page => {
            page.classList.remove("active");
        });

        // 显示当前页面
        const currentPage = document.getElementById(pageId);
        if (currentPage) {
            currentPage.classList.add("active");
        }
    }

    // 动态加载数据（示例数据）
    const ipList = document.getElementById("ip-list");
    const caseList = document.getElementById("case-list");
    const newsList = document.getElementById("news-list");

    // 示例IP数据（10个IP）
    const ips = [
        { name: "恋与深空", type: "游戏/乙女向", score: 85, image: "/doublenice/share.png" },
        { name: "排球少年", type: "动漫", score: 92, image: "/doublenice/pqsn.png" },
        { name: "鲨鱼猫", type: "插画", score: 78, image: "/doublenice/cat.png" },
        { name: "星星人", type: "插画", score: 88, image: "/doublenice/xxr.png" },
        { name: "原神", type: "游戏", score: 95, image: "/doublenice/ys.png" },
        { name: "IP F", type: "电视剧", score: 82, image: "https://via.placeholder.com/80" },
        { name: "IP G", type: "游戏", score: 90, image: "https://via.placeholder.com/80" },
        { name: "IP H", type: "电影", score: 87, image: "https://via.placeholder.com/80" },
        { name: "IP I", type: "动漫", score: 79, image: "https://via.placeholder.com/80" },
        { name: "IP J", type: "小说", score: 91, image: "https://via.placeholder.com/80" }
    ];

    // 示例合作案例数据
    const cases = [
        { title: "原神 × GUERLAIN", description: "跟随艾梅莉埃见证缤纷多姿的自然之美", image: "/doublenice/ysjl.png" },
        { title: "KFC × 恋与深空", description: "开启幸福之门，砰然见爱", image: "/doublenice/kfc.png" }
    ];

    // 示例IP资讯数据
    const news = [
        { title: "2024十大IP：凭什么拿下年轻人？", description: "可以看到治愈经济的巨大价值" },
        { title: "进军谷圈大做IP，王者荣耀怎么越玩越年轻了", description: "小王整顿谷圈" }
    ];

    // 动态添加IP项
    ips.forEach(ip => {
        const ipItem = createIpItem(ip);
        ipList.appendChild(ipItem);
    });

    // 动态添加合作案例
    cases.forEach(caseItem => {
        const caseDiv = createCaseItem(caseItem);
        caseList.appendChild(caseDiv);
    });

    // 动态添加IP资讯
    news.forEach(newsItem => {
        const newsDiv = createNewsItem(newsItem);
        newsList.appendChild(newsDiv);
    });

    // 创建IP项的函数
    function createIpItem(ip) {
        const ipItem = document.createElement("div");
        ipItem.classList.add("ip-item");

        const ipImage = document.createElement("img");
        ipImage.classList.add("ip-image");
        ipImage.src = ip.image;
        ipImage.alt = ip.name;

        const ipDetails = document.createElement("div");
        ipDetails.classList.add("ip-details");

        const ipName = document.createElement("div");
        ipName.classList.add("ip-name");
        ipName.textContent = ip.name;

        const ipType = document.createElement("div");
        ipType.classList.add("ip-type");
        ipType.textContent = `类型: ${ip.type}`;

        const ipScore = document.createElement("div");
        ipScore.classList.add("ip-score");
        ipScore.textContent = `评分: ${ip.score}`;

        ipDetails.appendChild(ipName);
        ipDetails.appendChild(ipType);
        ipDetails.appendChild(ipScore);

        ipItem.appendChild(ipImage);
        ipItem.appendChild(ipDetails);
        return ipItem;
    }

    // 创建合作案例项的函数
    function createCaseItem(caseItem) {
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case-item");

        const caseImage = document.createElement("img");
        caseImage.classList.add("case-image");
        caseImage.src = caseItem.image;
        caseImage.alt = caseItem.title;

        const caseDetails = document.createElement("div");
        caseDetails.classList.add("case-details");

        const caseTitle = document.createElement("div");
        caseTitle.classList.add("case-title");
        caseTitle.textContent = caseItem.title;

        const caseDescription = document.createElement("div");
        caseDescription.classList.add("case-description");
        caseDescription.textContent = caseItem.description;

        caseDetails.appendChild(caseTitle);
        caseDetails.appendChild(caseDescription);

        caseDiv.appendChild(caseImage);
        caseDiv.appendChild(caseDetails);
        return caseDiv;
    }

    // 创建IP资讯项的函数
    function createNewsItem(newsItem) {
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("news-item");

        const newsTitle = document.createElement("div");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = newsItem.title;

        const newsDescription = document.createElement("div");
        newsDescription.classList.add("news-description");
        newsDescription.textContent = newsItem.description;

        newsDiv.appendChild(newsTitle);
        newsDiv.appendChild(newsDescription);
        return newsDiv;
    }
});
