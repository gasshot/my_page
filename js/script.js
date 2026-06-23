$(function () {
    const skills = [
        {
            image: "./images/html.png",
            alt: "HTML 이미지",
            category: "MARKUP",
            title: "HTML",
            desc: "웹페이지의 뼈대를 만드는 기본 기술입니다.",
            page: "html"
        },
        {
            image: "./images/css.png",
            alt: "CSS 이미지",
            category: "STYLE DESIGN",
            title: "CSS",
            desc: "색상, 배치, 반응형 구조로 웹페이지의 분위기를 완성합니다.",
            page: "css"
        },
        {
            image: "./images/js.png",
            alt: "JavaScript 이미지",
            category: "INTERACTION",
            title: "JavaScript",
            desc: "클릭, 이벤트, 조건 처리로 웹페이지를 동적으로 만듭니다.",
            page: "js"
        },
        {
            image: "./images/jquery.png",
            alt: "jQuery 이미지",
            category: "LIBRARY",
            title: "jQuery",
            desc: "선택자와 이벤트로 웹 요소를 더 쉽게 제어합니다.",
            page: "jquery"
        },
        {
            image: "./images/github.png",
            alt: "GitHub 이미지",
            category: "DEPLOY",
            title: "GitHub Pages",
            desc: "완성한 웹페이지를 온라인에 공개합니다.",
            page: "github"
        }
    ];

    let index = 0;
    let slideTimer = null;

    function changeSlide(slideIndex) {
        index = slideIndex;

        $(".skill-image").attr("src", skills[index].image);
        $(".skill-image").attr("alt", skills[index].alt);

        $(".slide-category").text(skills[index].category);
        $(".slide-title").text(skills[index].title);
        $(".slide-desc").text(skills[index].desc);

        $(".slide-text").removeClass("show");

        setTimeout(function () {
            $(".slide-text").addClass("show");
        }, 10);

        $(".dot").removeClass("active");
        $(".dot").eq(index).addClass("active");
    }

    function nextSlide() {
        index++;

        if (index >= skills.length) {
            index = 0;
        }

        changeSlide(index);
    }

    function startAutoSlide() {
        stopAutoSlide();

        slideTimer = setInterval(function () {
            nextSlide();
        }, 10000);
    }

    function stopAutoSlide() {
        clearInterval(slideTimer);
        slideTimer = null;
    }

    function resetAutoSlide() {
        startAutoSlide();
    }

    function renderPage(pageName) {
        const pageUrl = pages[pageName];

        if (!pageUrl) {
            $(".content").html("<p>존재하지 않는 페이지입니다.</p>");
            return;
        }

        fetch(pageUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("페이지를 불러오지 못했습니다.");
                }

                return response.text();
            })
            .then(function (html) {
                $(".content").html(html);

                $(".nav-button").removeClass("active");
                $(`.nav-button[data-page="${pageName}"]`).addClass("active");

                if (pageName === "home") {
                    index = 0;
                    changeSlide(index);
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            })
            .catch(function () {
                $(".content").html("<p>페이지를 불러오는 중 오류가 발생했습니다.</p>");
                stopAutoSlide();
            });
    }

    $(".nav-button").on("click", function () {
        const pageName = $(this).data("page");

        renderPage(pageName);
    });

    $(".content").on("click", ".dot", function () {
        const dotIndex = $(this).data("index");

        changeSlide(dotIndex);
        resetAutoSlide();
    });

    $(".content").on("click", ".navBtn", function () {
        const pageName = skills[index].page;

        renderPage(pageName);
    });

    $(".content").on("click", ".page-link", function () {
        const pageName = $(this).data("page");

        renderPage(pageName);
    });

    renderPage("home");
});