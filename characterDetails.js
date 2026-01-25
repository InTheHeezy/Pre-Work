showCharacterDetails()

async function showCharacterDetails() {

    const url = window.location.href;

    const id = new URL(url).searchParams;

    const entries = new URLSearchParams(id).entries();

    const array = Array.from(entries);

    const uid = array[0][1];

    try {
        const response = await fetch("https://www.swapi.tech/api/people/" + uid);

        if (!response.ok) {
            throw new Error("Could not fetch");
        }

        const data = await response.json();
        console.log(data);
        document.body.appendChild(createBodyContent(data.result))
    }

    catch (err) {
        console.error(err);
    }
}

function createBodyContent(character) {

    const containerDiv = document.createElement("container");
    containerDiv.classList.add("container");

    const imgDiv = document.createElement("image-container");
    imgDiv.classList.add("image-container");
    var img = document.createElement("img");
    img.src = imageCheck(character.uid);
    imgDiv.appendChild(img);

    const txtDiv = document.createElement("text-container");
    txtDiv.classList.add("text-container");
    const name = document.createElement("h1");
    name.textContent = character.properties.name;

    const birthYear = document.createElement("p");
    birthYear.textContent = "Birth Year: " + character.properties.birth_year;

    const eyeColor = document.createElement("p");
    eyeColor.textContent = "Eye Color: " + character.properties.eye_color;

    const gender = document.createElement("p");
    gender.textContent = "Gender: " + character.properties.gender;

    const hairColor = document.createElement("p");
    hairColor.textContent = "Hair Color: " + character.properties.hair_color;

    const height = document.createElement("p");
    height.textContent = "Height(cm): " + character.properties.height;

    const mass = document.createElement("p");
    mass.textContent = "Mass: " + character.properties.mass;

    const skinColor = document.createElement("p");
    skinColor.textContent = "Skin Color: " + character.properties.skin_color;

    txtDiv.appendChild(name);
    txtDiv.appendChild(birthYear);
    txtDiv.appendChild(eyeColor);
    txtDiv.appendChild(gender);
    txtDiv.appendChild(hairColor);
    txtDiv.appendChild(height);
    txtDiv.appendChild(mass);
    txtDiv.appendChild(skinColor);

    containerDiv.appendChild(imgDiv);
    containerDiv.appendChild(txtDiv);
    return containerDiv;
}

/* WARNING giant map filled with image links */
const imageLinks = new Map([
    [1, "https://upload.wikimedia.org/wikipedia/commons/6/67/Luke_Skywalker_-_Welcome_Banner_%28Cropped%29.jpg"],
    [2, "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"],
    [3, "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png"],
    [4, "https://static.wikia.nocookie.net/starwars/images/9/94/Vaderrotj.jpg/revision/latest?cb=20070418231644"],
    [5, "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"],
    [6, "https://static.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20241208055940"],
    [7, "https://static.wikia.nocookie.net/starwars/images/7/76/Beru_headshot2.jpg/revision/latest?cb=20111029215429"],
    [8, "https://static.wikia.nocookie.net/starwars/images/3/3f/R5D4-AG.png/revision/latest?cb=20260117204314"],
    [9, "https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406"],
    [10, "https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest?cb=20111115052816"],
    [11, "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844"],
    [12, "https://static.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg/revision/latest?cb=20100620213033"],
    [13, "https://static.wikia.nocookie.net/starwars/images/e/ec/ChewbaccaCSWE.jpg/revision/latest?cb=20230615051524"],
    [14, "https://static.wikia.nocookie.net/starwars/images/0/01/Hansoloprofile.jpg/revision/latest?cb=20100129155042"],
    [15, "https://static.wikia.nocookie.net/starwars/images/f/f9/Greedo-SWBC32.png/revision/latest?cb=20231230042137"],
    [16, "https://static.wikia.nocookie.net/starwars/images/f/fe/Jabba_MMSWCA.png/revision/latest?cb=20231031040818"],
    [17, ""],
    [18, "https://static.wikia.nocookie.net/starwars/images/b/b2/WedgeAntilles-Masterwork2020.png/revision/latest?cb=20241228034128"],
    [19, "https://static.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png/revision/latest?cb=20150920215118"],
    [20, "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125"],
    [21, "https://static.wikia.nocookie.net/starwars/images/a/ab/Palpatine32BBY-Db.png/revision/latest?cb=20250321034334"],
    [22, "https://static.wikia.nocookie.net/starwars/images/4/46/BobaFett-SWI206.png/revision/latest?cb=20250317160030"],
    [23, "https://static.wikia.nocookie.net/starwars/images/f/fe/IG-88B-TESB40.png/revision/latest?cb=20211224193425"],
    [24, "https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712"],
    [25, "https://static.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png/revision/latest?cb=20241220215020"],
    [26, "https://static.wikia.nocookie.net/starwars/images/7/72/Lobot-SWE.png/revision/latest?cb=20211214014446"],
    [27, "https://static.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png/revision/latest?cb=20221224032123"],
    [28, "https://static.wikia.nocookie.net/starwars/images/c/c8/MonMothma-RotJAVA.png/revision/latest?cb=20250424135205"],
    [29, "https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349"],
    [30, "https://static.wikia.nocookie.net/starwars/images/a/aa/Wicket-2024Base.png/revision/latest?cb=20251026210916"],
    [31, "https://static.wikia.nocookie.net/starwars/images/e/ec/NienNunbHeadshot-SWBC62-alpha.png/revision/latest?cb=20240218060701"],
    [32, "https://static.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180430174809"],
    [33, "https://static.wikia.nocookie.net/starwars/images/e/ed/NuteGunray-ALTA.png/revision/latest?cb=20251107045823"],
    [34, "https://static.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png/revision/latest?cb=20220910225030"],
    [35, "https://static.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg/revision/latest?cb=20100423143631"],
    [36, "https://static.wikia.nocookie.net/starwars/images/e/ed/Binks22BBY.png/revision/latest?cb=20241220222900"],
    [37, "https://static.wikia.nocookie.net/starwars/images/c/c8/Tarpals-FFp47.png/revision/latest?cb=20251027033148"],
    [38, "https://static.wikia.nocookie.net/starwars/images/6/63/BossNass-SWCT.png/revision/latest?cb=20251026010551"],
    [39, "https://static.wikia.nocookie.net/starwars/images/e/e0/RicOlie-2024SWHyperspace.png/revision/latest?cb=20251121055104"],
    [40, "https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest?cb=20081222024729"],
    [41, "https://static.wikia.nocookie.net/starwars/images/1/11/LewisMacLeodasSebulba-TheDarkSig.png/revision/latest?cb=20260113015034"],
    [42, "https://static.wikia.nocookie.net/starwars/images/a/a3/MoffPanaka-FFp34.png/revision/latest?cb=20220815001633"],
    [43, "https://static.wikia.nocookie.net/starwars/images/6/6c/ShmiSkywalkerLars-Databank.jpg/revision/latest?cb=20171114023541"],
    [44, "https://static.wikia.nocookie.net/starwars/images/8/89/MaulHS_SWI185.png/revision/latest?cb=20181108061212"],
    [45, "https://static.wikia.nocookie.net/starwars/images/f/fa/BibFortuna-SWE.png/revision/latest?cb=20220907044205"],
    [46, "https://static.wikia.nocookie.net/starwars/images/7/73/AaylaSecura-F102.png/revision/latest?cb=20240101192414"],
    [47, "https://static.wikia.nocookie.net/starwars/images/a/a5/RattsHS-SWE.png/revision/latest?cb=20220910224708"],
    [48, "https://static.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png/revision/latest?cb=20141214155313"],
    [49, "https://static.wikia.nocookie.net/starwars/images/a/a4/GasganoHS-SWE.png/revision/latest?cb=20211212055452"],
    [50, "https://static.wikia.nocookie.net/starwars/images/7/77/BenQuadinaros-CGSWG.png/revision/latest?cb=20241124183127"],
    [51, "https://static.wikia.nocookie.net/starwars/images/2/27/MaceWindu_-WoSW.png/revision/latest?cb=20220914013358"],
    [52, "https://static.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg/revision/latest?cb=20070930185700"],
    [53, "https://static.wikia.nocookie.net/starwars/images/2/25/KitFisto-USWNE.png/revision/latest?cb=20241201061011"],
    [54, "https://static.wikia.nocookie.net/starwars/images/5/57/EethKoth-TheJediCouncil.png/revision/latest?cb=20260105023333"],
    [55, "https://static.wikia.nocookie.net/starwars/images/f/f2/AdiGallia2-SWE.png/revision/latest?cb=20240922163922"],
    [56, "https://static.wikia.nocookie.net/starwars/images/a/a3/SaeseeTiin-SWCT.png/revision/latest?cb=20251129194602"],
    [57, "https://static.wikia.nocookie.net/starwars/images/b/b2/YaraelPoof-SWCT.png/revision/latest?cb=20251107071536"],
    [58, "https://static.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png/revision/latest?cb=20251218183946"],
    [59, "https://static.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png/revision/latest?cb=20240803045307"],
    [60, "https://static.wikia.nocookie.net/starwars/images/2/26/CaptainTypho-2024ToppsSWHyperspace.png/revision/latest?cb=20251027042728"],
    [61, "https://static.wikia.nocookie.net/starwars/images/e/e5/Corde-SWCT.png/revision/latest?cb=20251107042546"],
    [62, "https://static.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20180513065414"],
    [63, "https://static.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png/revision/latest?cb=20241210145245"],
    [64, "https://static.wikia.nocookie.net/starwars/images/9/91/LuminaraUnduli-Encyclopedia.png/revision/latest?cb=20180206232118"],
    [65, "https://static.wikia.nocookie.net/starwars/images/a/a4/BarrissOffee-OP.png/revision/latest?cb=20211214033336"],
    [66, "https://static.wikia.nocookie.net/starwars/images/9/93/Dorme-CGSWG.png/revision/latest?cb=20250106045359"],
    [67, "https://static.wikia.nocookie.net/starwars/images/5/5f/Dooku-SWBC61.png/revision/latest?cb=20241118020049"],
    [68, "https://static.wikia.nocookie.net/starwars/images/b/b0/Bailrogueone.jpg/revision/latest?cb=20241219201015"],
    [69, "https://static.wikia.nocookie.net/starwars/images/8/81/JangoInHelmet.png/revision/latest?cb=20241220231528"],
    [70, "https://static.wikia.nocookie.net/starwars/images/9/9a/ZamWesell-FF.png/revision/latest?cb=20240218200905"],
    [71, "https://static.wikia.nocookie.net/starwars/images/1/1c/DexterHS-SWE.png/revision/latest?cb=20241126014343"],
    [72, "https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest?cb=20080117165735"],
    [73, "https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg/revision/latest?cb=20080117164920"],
    [74, "https://static.wikia.nocookie.net/starwars/images/1/17/JocastaNu-Db.png/revision/latest?cb=20230812014243"],
    [75, "https://static.wikia.nocookie.net/starwars/images/5/52/R4-P17_USWNE.png/revision/latest?cb=20250321133504"],
    [76, "https://static.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png/revision/latest?cb=20241219050852"],
    [77, "https://static.wikia.nocookie.net/starwars/images/6/63/SanHill-BaseSeries5.png/revision/latest?cb=20251107064755"],
    [78, "https://static.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png/revision/latest?cb=20220910224853"],
    [79, "https://static.wikia.nocookie.net/starwars/images/4/45/GrievousStand-SWHC821.png/revision/latest?cb=20241118020627"],
    [80, "https://static.wikia.nocookie.net/starwars/images/8/81/Tarfful-WiaW2015.png/revision/latest?cb=20231204020927"],
    [81, "https://static.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png/revision/latest?cb=20251107052511"],
    [82, "https://static.wikia.nocookie.net/starwars/images/b/b7/SlyMooreStare-OP.png/revision/latest?cb=20211214041804"],
    [83, "https://static.wikia.nocookie.net/starwars/images/1/16/TionMedon-SWI90.png/revision/latest?cb=20230915013119"]
])

function imageCheck(charaId) {
    const imageLink = imageLinks.get(parseInt(charaId, 10));
    return imageLink;
}