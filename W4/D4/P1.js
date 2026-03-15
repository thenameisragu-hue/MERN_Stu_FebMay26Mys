const out = document.getElementById("out");
const inspection = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",
    function(){
        const info = {
            htmllang : document.documentElement.lang,
            charset : document.characterSet,
            //browser's primary preffered language
            browserLanguage : navigator.language,
            //Array of all browser language
            browserLanguage : navigator.languages,
            sampleText : document.getElementById("SampleText").textContent
        };
        console.log(info);
        out.textcontent = JSON.stringify(info,null,2);
    }
);