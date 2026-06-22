function HomePage() {
    return `
        <section class="skill-slider">
            <div class="image-box">
                <img class="skill-image" src="./images/html.png" alt="HTML 이미지">
                    <div class="slide-text">
                        <p class="slide-category">FRONTEND</p>
                        <h2 class="slide-title">HTML 구조 설계</h2>
                        <p class="slide-desc">웹페이지의 뼈대를 만드는 기본 기술입니다.</p>
                        <button class="navBtn">이동하기</button>
                    </div>


                <div class="slider-dots">
                    <button class="dot active" data-index="0"></button>
                    <button class="dot" data-index="1"></button>
                    <button class="dot" data-index="2"></button>
                    <button class="dot" data-index="3"></button>
                    <button class="dot" data-index="4"></button>
                </div>
            </div>
        </section>
        <hr>
        <section class="home-intro">
            <h2>프론트엔드 입문 커리큘럼</h2>
            <p>HTML, CSS, JavaScript, jQuery, Github를 단계별로 배우는 수업입니다.</p>
        </section>

        <section class="tech-grid">
            <div class="tech-card">
                <span class="tech-badge">MARKUP</span>
                <div class="tech-image-box">
                    <img src="./images/cells/cell_html.png" alt="HTML 이미지">
                </div>
                <h3>HTML</h3>
            </div>

            <div class="tech-card">
                <span class="tech-badge">STYLE DESIGN</span>            
                <div class="tech-image-box">
                    <img src="./images/cells/cell_css.png" alt="CSS 이미지">
                </div>
                <h3>CSS</h3>
            </div>

            <div class="tech-card">
                <span class="tech-badge">INTERACTION</span>            
                <div class="tech-image-box">
                    <img src="./images/cells/cell_js.png" alt="JS 이미지">
                </div>
                <h3>JavaScript</h3>
            </div>

            <div class="tech-card">
                <span class="tech-badge">LIBRARY</span>
                <div class="tech-image-box">
                    <img src="./images/cells/cell_jquery.png" alt="JQuery 이미지">
                </div> 
                <h3>jQuery</h3>
            </div>

            <div class="tech-card">
                <span class="tech-badge">DEPLOY</span>
                <div class="tech-image-box">
                    <img src="./images/cells/cell_github.png" alt="GitHub 이미지">
                </div>   
                <h3>GitHub</h3>
            </div>
        </section>
    `;
}

function HTMLPage() {
    return `
        <h2>HTML</h2>
        <p>저는 프론트엔드 개발자를 준비하고 있습니다.</p>
        <p>HTML, CSS, JavaScript를 중심으로 웹 페이지를 제작하고 있습니다.</p>
    `;
}

function CSSPage() {
    return `
        <h2>CSS</h2>
        <p>저는 프론트엔드 개발자를 준비하고 있습니다.</p>
        <p>HTML, CSS, JavaScript를 중심으로 웹 페이지를 제작하고 있습니다.</p>
    `;
}

function JSPage() {
    return `
        <h2>JavaScript</h2>
        <p>저는 프론트엔드 개발자를 준비하고 있습니다.</p>
        <p>HTML, CSS, JavaScript를 중심으로 웹 페이지를 제작하고 있습니다.</p>
    `;
}

function jQueryPage() {
    return `
        <h2>jQuery</h2>
        <p>저는 프론트엔드 개발자를 준비하고 있습니다.</p>
        <p>HTML, CSS, JavaScript를 중심으로 웹 페이지를 제작하고 있습니다.</p>
    `;
}

function GitHubPage() {
    return `
        <h2>GitHubPage</h2>
        <p>저는 프론트엔드 개발자를 준비하고 있습니다.</p>
        <p>HTML, CSS, JavaScript를 중심으로 웹 페이지를 제작하고 있습니다.</p>
    `;
}

function ContactPage() {
    return `
        <section class="contact-page">
            <div class="profile-title">profile</div>
            <div class="profile-card">
                <div class="profile-image-box">
                    <img src="./images/profile.png" alt="프로필 사진" class="profile-image">
                </div>

                <div class="profile-info">
                    <h2 class="profile-name">강인오</h2>
                    <p class="profile-job">Content Developer</p>
                    <p class="profile-desc">
                        HTML, CSS, JavaScript를 기반으로 사용자에게 보기 쉽고 사용하기 편한 웹 페이지, 유니티를 활용한 콘텐츠 개발자를 목표로 하고 있습니다.
                    </p>

                    <ul class="info-list">
                        <li>
                            <span>생년월일</span>
                            <strong>1991.02.25</strong>
                        </li>
                        <li>
                            <span>거주지</span>
                            <strong>전남광주통합특별시</strong>
                        </li>
                        <li>
                            <span>Email</span>
                            <strong>kanginoh@gmail.com</strong>
                        </li>
                        <li>
                            <span>GitHub</span>
                            <strong>github.com/gasshot</strong>
                        </li>
                    </ul>

                    <div class="contact-buttons">
                        <a href="mailto:kanginoh@gmail.com">이메일 보내기</a>
                        <a href="https://github.com/gasshot" target="_blank">GitHub 보기</a>
                    </div>
                </div>
            </div>

            <div class="profile-tech">
                <h3 class="profile-section-title">Tech Stack</h3>

                <div class="tech-table">
                    <div class="tech-row">
                        <div class="tech-category">Markup & Style</div>
                        <div class="tech-items">
                            <span class="profile-tech-badge profile-tech-html">HTML</span>
                            <span class="profile-tech-badge profile-tech-css">CSS</span>
                        </div>
                    </div>

                    <div class="tech-row">
                        <div class="tech-category">Frontend</div>
                        <div class="tech-items">
                            <span class="profile-tech-badge profile-tech-js">JavaScript</span>
                            <span class="profile-tech-badge profile-tech-react">React</span>
                        </div>
                    </div>

                    <div class="tech-row">
                        <div class="tech-category">Backend</div>
                        <div class="tech-items">
                            <span class="profile-tech-badge profile-tech-node">Node.js</span>
                        </div>
                    </div>

                    <div class="tech-row">
                        <div class="tech-category">Game Development</div>
                        <div class="tech-items">
                            <span class="profile-tech-badge profile-tech-csharp">C#</span>
                            <span class="profile-tech-badge profile-tech-unity">Unity</span>
                        </div>
                    </div>

                    <div class="tech-row">
                        <div class="tech-category">Database</div>
                        <div class="tech-items">
                            <span class="profile-tech-badge profile-tech-mysql">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

const pages = {
    home: HomePage,
    html: HTMLPage,
    css: CSSPage,
    js: JSPage,
    jquery: jQueryPage,
    github: GitHubPage,
    contact: ContactPage
};


