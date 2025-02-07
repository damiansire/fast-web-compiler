const HtmlHandler = require("./libs/html-generator");
const { readCss } = require("./libs/file-handler");
const handler = new HtmlHandler();

generalStyles = readCss("./components/resume/styles.css");
handler.insertHeadStyles(generalStyles);
//handler.insertHeadContent(headContent);

const dataToInserts = [
  ` <p class="c12"><span class="c0 c17">John Doe</span></p>`,
  `<p class="c12"><span class="c0"><a class="c2" href="mailto:name@gmail.com">name@gmail.com</a></span><span
        class="c0">&nbsp;| </span><span class="c0"><a class="c2"
            href="https://www.google.com/url?q=https://mitcommlab.mit.edu/meche/commkit/portfolio/&amp;sa=D&amp;source=editors&amp;ust=1738844331271311&amp;usg=AOvVaw10Ar0GE2tZVrgcNFiAANRG">portfolio.com</a></span><span
        class="c0">&nbsp;| </span><span class="c0"><a class="c2"
            href="https://www.google.com/url?q=https://www.hardwareishard.net/portfolio-database&amp;sa=D&amp;source=editors&amp;ust=1738844331271744&amp;usg=AOvVaw2gLlhUESkwS6dMoW4oUezy">github.com/name</a></span>
</p>`,
  `<p class="c4 c5"><span class="c0 c9">Skills</span></p>`,
  `<p class="c4"><span class="c3">CAD</span><span class="c3">:</span><span class="c1 c0">&nbsp;Siemens NX, CATIA V5,
        SolidWorks</span></p>`,
  `<p class="c4"><span class="c3">Analysis:</span><span class="c1 c0">&nbsp;Thermal Desktop, Abaqus, LS-DYNA,
        STAR-CCM+</span></p>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4 c5"><span class="c0 c9">Experience</span></p>`,
  `<p class="c4"><span class="c3">Job Title,</span><span class="c0">&nbsp;</span><span class="c0">Company</span><span
        class="c0">&nbsp;&ndash; City, ST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2022</span><span
        class="c0">&nbsp;&ndash; Present</span></p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0 start">
    <li class="c4 c8 li-bullet-0"><span class="c3">STAR:</span><span class="c0">&nbsp;</span><span
            class="c3">S</span><span class="c0">ituation </span><span class="c3">T</span><span class="c0">ask
        </span><span class="c3">A</span><span class="c0">ction </span><span class="c3">R</span><span class="c0">esult:
        </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://www.levels.fyi/blog/applying-star-method-resumes.html&amp;sa=D&amp;source=editors&amp;ust=1738844331272993&amp;usg=AOvVaw0M83m6xYV5jFOpJRq3sz9t">article
                1</a></span><span class="c0">, </span><span class="c0 c10"><a class="c2"
                href="https://www.google.com/url?q=https://resumegenius.com/blog/resume-help/star-method-resume&amp;sa=D&amp;source=editors&amp;ust=1738844331273337&amp;usg=AOvVaw1xcHjn80bjwzsKSjSeCt9v">article
                2</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">STAR:</span><span class="c1 c0">&nbsp;Situation Task Action
            Result</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">STAR:</span><span class="c1 c0">&nbsp;Situation Task Action
            Result</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">STAR:</span><span class="c1 c0">&nbsp;Situation Task Action
            Result</span></li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4"><span class="c3">Job Title, </span><span class="c0">Company &ndash; City,
        ST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c0">Jan 2021 &ndash; May 2022</span>
</p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c3">XYZ:</span><span class="c0">&nbsp;Accomplished </span><span
            class="c3">X</span><span class="c0">&nbsp;as measured by </span><span class="c3">Y</span><span
            class="c0">&nbsp;by doing </span><span class="c3">Z</span><span class="c0">: </span><span class="c10 c0"><a
                class="c2"
                href="https://www.google.com/url?q=https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html&amp;sa=D&amp;source=editors&amp;ust=1738844331274678&amp;usg=AOvVaw2xGx4CkwoDjs9XJ1mTMqYB">article
                1</a></span><span class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://elevenrecruiting.com/create-an-effective-resume-xyz-resume-format/&amp;sa=D&amp;source=editors&amp;ust=1738844331275089&amp;usg=AOvVaw3MToe6X-xdqrB5BaawqNhq">article
                2</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">XYZ:</span><span class="c1 c0">&nbsp;Accomplished X as measured
            by Y by doing Z</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">XYZ:</span><span class="c1 c0">&nbsp;Accomplished X as measured
            by Y by doing Z</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">XYZ:</span><span class="c1 c0">&nbsp;Accomplished X as measured
            by Y by doing Z</span></li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4"><span class="c3">Job Title,</span><span class="c1 c0">&nbsp;Company &ndash; City,
        ST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 2014 &ndash; Sept 2020</span></p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c3">CAR:</span><span class="c0">&nbsp;</span><span
            class="c3">C</span><span class="c0">hallenge </span><span class="c3">A</span><span class="c0">ction
        </span><span class="c3">R</span><span class="c0">esult: </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://ca.indeed.com/career-advice/resumes-cover-letters/challenge-action-result-resume&amp;sa=D&amp;source=editors&amp;ust=1738844331276245&amp;usg=AOvVaw1IWknMWXOzV_EIzmt8AY5H">article
                1</a></span><span class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://www.topresume.com/career-advice/how-to-get-more-results-with-a-car-resume&amp;sa=D&amp;source=editors&amp;ust=1738844331276546&amp;usg=AOvVaw0IiqRi1_Q_kENYjETHhhF3">article
                2</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">CAR:</span><span class="c1 c0">&nbsp;Challenge Action
            Result</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c3">CAR:</span><span class="c0">&nbsp;Challenge Action Result</span>
    </li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4"><span class="c3">Job Title,</span><span class="c1 c0">&nbsp;Company &ndash; City,
        ST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2014 &ndash; July 2014</span></p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c0">Start e</span><span class="c0">ach bullet with a </span><span
            class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://old.reddit.com/r/EngineeringResumes/wiki/index%23wiki_action_verbs&amp;sa=D&amp;source=editors&amp;ust=1738844331277400&amp;usg=AOvVaw0XQBNDsD8ejSpalpl89jdy">strong,
                past-tense action verb</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c0">Having trouble coming up with content for your bullet points?
            Read these: </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://old.reddit.com/r/EngineeringResumes/wiki/index%23wiki_having_trouble_coming_up_with_content_for_your_bullet_points.3F_ask_yourself_the_following_questions.3A&amp;sa=D&amp;source=editors&amp;ust=1738844331277852&amp;usg=AOvVaw2lOjHAN5AdeTxNzbmlzx2r">link
                1</a></span><span class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://old.reddit.com/r/EngineeringResumes/wiki/index%23wiki_got_writer.27s_block_from_looking_at_star.2Fcar.2Fxyz.3F&amp;sa=D&amp;source=editors&amp;ust=1738844331278125&amp;usg=AOvVaw3jVVvHQf12VsOelwylubRB">link
                2</a></span><span class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://archive.ph/Xmdqt&amp;sa=D&amp;source=editors&amp;ust=1738844331278348&amp;usg=AOvVaw1iLsQbJPwIcSZGc7aouK3h">link
                3</a></span><span class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://old.reddit.com/r/EngineeringResumes/wiki/sample-bullet-points&amp;sa=D&amp;source=editors&amp;ust=1738844331278640&amp;usg=AOvVaw0YW8kkDsE5X-xFhsqGaVNr">link
                4</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c0">Each bullet point should be 1&ndash;2 lines long and max 1
            sentence long. Use </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://quillbot.com/&amp;sa=D&amp;source=editors&amp;ust=1738844331278968&amp;usg=AOvVaw04pP9KYyQS-dByxiLs5CVk">Quillbot</a></span><span
            class="c0">, </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://languagetool.org/paraphrasing-tool&amp;sa=D&amp;source=editors&amp;ust=1738844331279237&amp;usg=AOvVaw3QR3ZP9m9fZNJ6rrOSMiMR">LanguageTool</a></span><span
            class="c0">, and </span><span class="c10 c0"><a class="c2"
                href="https://www.google.com/url?q=https://hemingwayapp.com/&amp;sa=D&amp;source=editors&amp;ust=1738844331279497&amp;usg=AOvVaw01R1cg6sPEn2Bcb71BYyBO">Hemingway
                Editor</a></span><span class="c0">&nbsp;to help you </span><span class="c0"><a class="c2"
                href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DVvPaEsuz-tY&amp;sa=D&amp;source=editors&amp;ust=1738844331279727&amp;usg=AOvVaw1nbWdRxWqg_4-0WegQ331H">paraphrase
                and shorten them</a></span></li>
    <li class="c4 c8 li-bullet-0"><span class="c0">Don&rsquo;t let bullets spill onto the next line with only
            1&ndash;4 words on it: </span><span class="c0"><a class="c2"
                href="https://www.google.com/url?q=https://imgur.com/QCcZ792&amp;sa=D&amp;source=editors&amp;ust=1738844331280044&amp;usg=AOvVaw3-fPfo4_5TedJx2vPsGGKD">https://imgur.com/QCcZ792</a></span>
    </li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4 c5"><span class="c0 c9">Projects</span></p>`,
  `<p class="c4"><span class="c3">Project </span><span class="c3">Title</span><span
        class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c0"><a class="c2"
            href="https://www.google.com/url?q=https://evaeducation.weebly.com/uploads/1/9/6/9/19692577/portfoliohandbook.pdf&amp;sa=D&amp;source=editors&amp;ust=1738844331280583&amp;usg=AOvVaw3QJ10dMfpjynRDrnvQ7NQe">name.com/projectdemo</a></span>
</p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c0">The more work experience you have, the less relevant outside-work
            projects tend to become</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c0">If you have something that really stands out, consider listing it
            here</span></li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4"><span class="c3">Project Title</span><span
        class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c0"><a class="c2"
            href="https://www.google.com/url?q=https://libguides.olin.edu/c.php?g%3D1113246%26p%3D9418780&amp;sa=D&amp;source=editors&amp;ust=1738844331281279&amp;usg=AOvVaw2JyG8a0xcF_ISbMq0JP9dv">github.com/name/project</a></span>
</p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c1 c0">Only list real projects, not mandatory school projects or
            trivial tutorial projects found online</span></li>
    <li class="c4 c8 li-bullet-0"><span class="c1 c0">Something that someone uses to solve a problem. Something that
            has users (can be just you, as long as you use it often) and is actively maintained and not just rotting
            in a GitHub repo, never to see a PR for the rest of its life</span></li>
</ul>`,
  `<p class="c4 c11"><span class="c0 c6"></span></p>`,
  `<p class="c4"><span class="c3">Project Title</span><span
        class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c0"><a class="c2"
            href="https://www.google.com/url?q=https://www.reddit.com/r/EngineeringResumes/wiki/index%23wiki_portfolios&amp;sa=D&amp;source=editors&amp;ust=1738844331282065&amp;usg=AOvVaw00E0hWorQfi0ijBJZe7GJj">projectsite.com</a></span>
</p>`,
  `<ul class="c15 lst-kix_iigz4w1l118r-0">
    <li class="c4 c8 li-bullet-0"><span class="c0">Resume checklist: </span><span class="c0"><a class="c2"
                href="https://www.google.com/url?q=https://old.reddit.com/r/EngineeringResumes/wiki/checklist&amp;sa=D&amp;source=editors&amp;ust=1738844331282516&amp;usg=AOvVaw27bfFtuLGhb0y35K6hiACl">https://old.reddit.com/r/EngineeringResumes/wiki/checklist</a></span>
    </li>
    <li class="c4 c8 li-bullet-0"><span class="c0">LaTeX version of this template: </span><span class="c0"><a class="c2"
                href="https://www.google.com/url?q=https://www.overleaf.com/read/npmbvrbvthpd%23bb3114&amp;sa=D&amp;source=editors&amp;ust=1738844331282984&amp;usg=AOvVaw2FSVrJ5H1gGPEhGsw8noc3">https://www.overleaf.com/read/npmbvrbvthpd#bb3114</a></span>
    </li>
</ul>`,
  `<p class="c4 c11"><span class="c6 c0"></span></p>`,
  `<p class="c4 c5"><span class="c0 c9">Education</span></p>`,
  `<p class="c4"><span class="c3">School</span><span class="c0">&nbsp;&ndash; PhD in Aerospace
        Engineering&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2010</span></p>`,
  `<p class="c4"><span class="c3">School</span><span class="c0">&nbsp;&ndash; MS in Aerospace Engineering</span><span
        class="c1 c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2006</span></p>`,
  `<p class="c4"><span class="c3">School</span><span class="c0">&nbsp;&ndash; BS in Aerospace Engineering</span><span
        class="c0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c0">&nbsp;Apr 2004</span></p>`,
];

for (const element of dataToInserts) {
  handler.insertBodyContent(element);
}

handler.saveHtml("output/output_replace.html");
