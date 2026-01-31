var data;

showCharacters()

async function showCharacters() {

    try {
        const response = await fetch(import.meta.env.VITE_CHARA_API_URL);

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        data = await response.json();

        for (let i = 0; i < data.results.length; i++) {
            const containerDiv = createBodyContent(data.results[i]);

            document.body.appendChild(containerDiv);
        }
    }

    catch (err) {
        console.error(err);
    }
}

function createBodyContent(chara) {

    const containerDiv = document.createElement("container");
    containerDiv.classList.add("container");

    const imgDiv = document.createElement("image-container");
    imgDiv.classList.add("image-container");
    var img = document.createElement("img");
    img.src = imageCheck(chara.uid);
    imgDiv.appendChild(img);

    const link = document.createElement("a");
    link.classList.add("details-link");
    link.href = createLink(chara.uid);
    link.textContent = chara.name;

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const titleHeader = document.createElement("h1");
    titleHeader.appendChild(link);

    const loadDiv = document.createElement("div");
    loadDiv.classList.add("loader");

    txtDiv.appendChild(titleHeader);
    containerDiv.appendChild(imgDiv);
    containerDiv.appendChild(txtDiv);
    containerDiv.appendChild(loadDiv);

    return containerDiv;
} 

function createLink(id) {
    const url = 'characterDetails.html?'
    const search = { id: id };
    const searchParams = new URLSearchParams(search);

    return url + searchParams.toString();
}

let isLoading = false;

function handleScroll() {
    if (isLoading) return;

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    const threshold = 200;

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
        isLoading = true;
        loadMoreContent();
    }
}

async function loadMoreContent() {
    if (data.next != null) {
        try {
            const response = await fetch(data.next);

            if (!response.ok) {
                throw new Error("Could not fetch");
            }

            data = await response.json();
;
            for (let i = 0; i < data.results.length; i++) {
                const containerDiv = createBodyContent(data.results[i]);

                document.body.appendChild(containerDiv);
            }

            isLoading = false;
        }

        catch (err) {
            console.error(err);
        }
    }
}

window.addEventListener('scroll', handleScroll);

/* WARNING giant map filled with image links */
const imageLinks = new Map([
    [1,"https://upload.wikimedia.org/wikipedia/commons/6/67/Luke_Skywalker_-_Welcome_Banner_%28Cropped%29.jpg"],
    [2, "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"],
    [3, "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png"],
    [4, "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"],
    [5, "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"],
    [6, "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593"],
    [7, "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527"],
    [8, "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666"],
    [9, "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878"],
    [10, "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"],
    [11, "https://lumiere-a.akamaihd.net/v1/images/anakin-skywalker-main_23e5105b.jpeg?region=387%2C27%2C1350%2C760"],
    [12, "https://lumiere-a.akamaihd.net/v1/images/grand-moff-tarkin-main_10a4c888.jpeg?region=0%2C0%2C1403%2C790"],
    [13, "https://lumiere-a.akamaihd.net/v1/images/chewbacca-db-tlj_22d84d59.jpeg?region=0%2C0%2C1200%2C500"],
    [14, "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080"],
    [15, "https://lumiere-a.akamaihd.net/v1/images/databank_greedo_01_169_3e4b96ef.jpeg?region=0%2C0%2C1560%2C878"],
    [16, "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675"],
    [17, ""],
    [18, "https://lumiere-a.akamaihd.net/v1/images/databank_wedgeantilles_01_169_b8185dce.jpeg?region=0%2C0%2C1560%2C878"],
    [19, "https://lumiere-a.akamaihd.net/v1/images/jek-porkins-main-image_0b8d2d13.jpeg?region=0%2C0%2C1280%2C721"],
    [20, "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864"],
    [21, "https://lumiere-a.akamaihd.net/v1/images/emperor-palpatine_9a0e992d.jpeg?region=0%2C25%2C1280%2C718"],
    [22, "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=203%2C34%2C1077%2C606"],
    [23, "https://lumiere-a.akamaihd.net/v1/images/ig_88_cdd5cc52.jpeg?region=0%2C95%2C2453%2C1375"],
    [24, "https://lumiere-a.akamaihd.net/v1/images/databank_bossk_01_169_c3c42fbe.jpeg?region=0%2C0%2C1560%2C878"],
    [25, "https://lumiere-a.akamaihd.net/v1/images/lando-main_a207290e.jpeg?region=147%2C0%2C951%2C536"],
    [26, "https://lumiere-a.akamaihd.net/v1/images/databank_lobot_01_169_8a50d7ae.jpeg?region=0%2C0%2C1560%2C878"],
    [27, "https://lumiere-a.akamaihd.net/v1/images/databank_ackbar_01_169_55137220.jpeg?region=0%2C0%2C1560%2C878"],
    [28, "https://lumiere-a.akamaihd.net/v1/images/mon-mothma-main_effb3e9c.jpeg?region=168%2C0%2C944%2C531"],
    [29, "https://lumiere-a.akamaihd.net/v1/images/arvel-skeen-main_e2d7849b.jpeg?region=245%2C0%2C1429%2C804"], 
    [30, "https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780"],
    [31, "https://lumiere-a.akamaihd.net/v1/images/nien-nunb-main_1dbef681.jpeg?region=0%2C58%2C1281%2C720"],
    [32, "https://lumiere-a.akamaihd.net/v1/images/qui-gon-jinn-main_3386f119.jpeg?region=296%2C3%2C937%2C527"],
    [33, "https://lumiere-a.akamaihd.net/v1/images/databank_nutegunray_01_169_9d66ded2.jpeg?region=0%2C0%2C1560%2C878"],
    [34, "https://lumiere-a.akamaihd.net/v1/images/valorum_a31904f4.jpeg?region=200%2C0%2C1698%2C955"],
    [35, "https://lumiere-a.akamaihd.net/v1/images/Padme-Amidala_05d50c8a.jpeg?region=0%2C0%2C1536%2C864"],
    [36, "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C878"],
    [37, "https://lumiere-a.akamaihd.net/v1/images/databank_generaltarpals_01_169_cb2134d2.jpeg?region=0%2C0%2C1560%2C878"],
    [38, "https://lumiere-a.akamaihd.net/v1/images/databank_bossnass_01_169_ef11c0db.jpeg?region=0%2C0%2C1560%2C878"],
    [39, "https://lumiere-a.akamaihd.net/v1/images/databank_ricolie_01_169_f175f81b.jpeg?region=0%2C0%2C1560%2C878"],
    [40, "https://lumiere-a.akamaihd.net/v1/images/databank_watto_01_169_ecd563f1.jpeg?region=0%2C0%2C1560%2C878"],
    [41, "https://lumiere-a.akamaihd.net/v1/images/sebulba_1f3fe180.jpeg?region=0%2C0%2C2453%2C1380"],
    [42, "https://lumiere-a.akamaihd.net/v1/images/databank_captainpanaka_01_169_6a3ccac5.jpeg?region=0%2C0%2C1560%2C878"],
    [43, "https://lumiere-a.akamaihd.net/v1/images/databank_shmiskywalkerlars_01_169_7449f0a8.jpeg?region=0%2C0%2C1560%2C878"],
    [44, "https://lumiere-a.akamaihd.net/v1/images/maul-main_23403e98.jpeg?region=0%2C0%2C1920%2C1080"],
    [45, "https://lumiere-a.akamaihd.net/v1/images/bib-fortuna-main_376ba1ba.jpeg?region=304%2C0%2C1778%2C1000"],
    [46, "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg?region=0%2C0%2C1560%2C878"],
    [47, "https://lumiere-a.akamaihd.net/v1/images/databank_rattstyerell_01_169_031aea6d.jpeg?region=0%2C0%2C1560%2C878"],
    [48, "https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest?cb=20141214155313"],
    [49, "https://lumiere-a.akamaihd.net/v1/images/gasgano_6f648f83.jpeg?region=0%2C48%2C2252%2C1267"],
    [50, "https://lumiere-a.akamaihd.net/v1/images/databank_benquadinaros_01_169_0c77b6a0.jpeg?region=0%2C0%2C1560%2C878"],
    [51, "https://lumiere-a.akamaihd.net/v1/images/Mace-Windu_b35242e5.jpeg?region=0%2C0%2C1637%2C921"],
    [52, "https://lumiere-a.akamaihd.net/v1/images/databank_kiadimundi_01_169_0a8842d3.jpeg?region=0%2C0%2C1560%2C878"],
    [53, "https://lumiere-a.akamaihd.net/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=0%2C0%2C1560%2C878"],
    [54, "https://lumiere-a.akamaihd.net/v1/images/Eeth-Koth2_246ea172.jpeg?region=126%2C0%2C1010%2C568"],
    [55, "https://lumiere-a.akamaihd.net/v1/images/databank_adigallia_169_8b798f27.jpeg?region=0%2C0%2C1560%2C878"],
    [56, "https://lumiere-a.akamaihd.net/v1/images/databank_saeseetiin_01_169_c9a8a41c.jpeg?region=0%2C0%2C1560%2C878"],
    [57, "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-08-03_at_10_b0b47660.jpeg?region=0%2C361%2C1560%2C878"],
    [58, "https://lumiere-a.akamaihd.net/v1/images/databank_plokoon_01_169_92e6679c.jpeg?region=0%2C0%2C1560%2C878"],
    [59, "https://lumiere-a.akamaihd.net/v1/images/mas-amedda-main_3e450a61.jpeg?region=237%2C0%2C1445%2C813"],
    [60, "https://lumiere-a.akamaihd.net/v1/images/captain-typho_f9e8d7bd.jpeg?region=0%2C0%2C1186%2C668"],
    [61, "https://static.wikia.nocookie.net/starwars/images/e/e5/Corde-SWCT.png/revision/latest?cb=20251107042546"],
    [62, "https://lumiere-a.akamaihd.net/v1/images/databank_cliegglars_01_169_c2f0b9cb.jpeg?region=0%2C0%2C1560%2C878"],
    [63, "https://lumiere-a.akamaihd.net/v1/images/databank_pogglethelesser_01_169_7095ae3c.jpeg?region=0%2C0%2C1560%2C878"],
    [64, "https://lumiere-a.akamaihd.net/v1/images/luminara_c05b2971.jpeg?region=0%2C0%2C1601%2C901"],
    [65, "https://lumiere-a.akamaihd.net/v1/images/barriss-offee-main_417e02bd.jpeg?region=247%2C0%2C1426%2C802"],
    [66, "https://lumiere-a.akamaihd.net/v1/images/dorme-2_dd1590e9.jpeg?region=781%2C333%2C1186%2C667"],
    [67, "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808"],
    [68, "https://lumiere-a.akamaihd.net/v1/images/bail-organa-main_51b60030.jpeg?region=0%2C0%2C1920%2C1080"],
    [69, "https://lumiere-a.akamaihd.net/v1/images/databank_jangofett_01_169_884cefab.jpeg?region=0%2C0%2C1560%2C878"],
    [70, "https://lumiere-a.akamaihd.net/v1/images/zam-wesell_bbaffe9f.jpeg?region=190%2C0%2C1180%2C664"],
    [71, "https://lumiere-a.akamaihd.net/v1/images/databank_dexterjettster_01_169_09c89b71.jpeg?region=0%2C0%2C1560%2C878"],
    [72, "https://lumiere-a.akamaihd.net/v1/images/lama-su-main_63f653f9.jpeg?region=277%2C70%2C1320%2C743"],
    [73, "https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-bounty-lost-story-gallery-03_1878426f.jpeg?region=440%2C24%2C838%2C471"],
    [74, "https://lumiere-a.akamaihd.net/v1/images/jocasta-nu_a3b32f08.jpeg?region=18%2C0%2C2208%2C1242"],
    [75, "https://lumiere-a.akamaihd.net/v1/images/r4-p17_19602f62.jpeg?region=314%2C0%2C1181%2C665"],
    [76, "https://lumiere-a.akamaihd.net/v1/images/databank_emirwattambor_01_169_9528ba0f.jpeg?region=53%2C0%2C1454%2C818"],
    [77, "https://lumiere-a.akamaihd.net/v1/images/san-hill_852a226d.jpeg?region=298%2C0%2C1175%2C661"],
    [78, "https://lumiere-a.akamaihd.net/v1/images/shaak_ti_9523e7c7.jpeg?region=241%2C0%2C1438%2C809"],
    [79, "https://lumiere-a.akamaihd.net/v1/images/General-Grievous_c9df9cb5.jpeg?region=0%2C0%2C1200%2C675"],
    [80, "https://lumiere-a.akamaihd.net/v1/images/tarrful_f20d3412.jpeg?region=359%2C0%2C1136%2C639"],
    [81, "https://lumiere-a.akamaihd.net/v1/images/databank_captainantilles_01_169_75e05265.jpeg?region=0%2C0%2C1560%2C878"],
    [82, "https://lumiere-a.akamaihd.net/v1/images/sly-moore_6af90e66.jpeg?region=95%2C133%2C1116%2C628"],
    [83, "https://lumiere-a.akamaihd.net/v1/images/databank_tionmedon_01_169_bf78864d.jpeg?region=0%2C0%2C1560%2C878"]
])

function imageCheck(charaId) {
    const imageLink = imageLinks.get(parseInt(charaId, 10));
    return imageLink;
}