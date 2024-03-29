import React from "react"
import $ from "jquery"

export default class Layout extends React.Component {
    componentDidMount() {
    var lang;
    var index;
    var productTitle;
    var html;
    var prodo;
    var titlePage;
    var loadInsideProductPage;
    var loadProduct;
    var loadInsidePage;
    var languageBtn;
    var indexPro;
    var testFa;
    var backLink;
    var testEn;
    var indexPage;


var staticContent = {
    en: {
        titleHome: "Solabest| Supplier of Iranian Natural Stones |Quarry |Trading",
        metaDescriptionHome: "Solabest is one of the Iranian leading companies in the field of stone industry since 1995 , Solabest not only imports precious building stones from different countries, but also introduces and exports Iranian stones all over the world.",
        menuItem1: "Home",
        menuItem2: "Products",
        menuItem3: "Highlights",
        menuItem4: "Projects",
        menuItem5: "Quarry",
        menuItem6: "Contact us",
        menuItem7: "About us",
        search: "Search",
        slide1: "Touch The Nature",
        slide2: "Feel The Earth",
        slide3: "March Strong",
        more: "More",
        submit: "Submit",
        origin: "Origin",
        type: "Type",
        color: "Color",
        code: "Code"
    },
    fa: {
        title: "سولابست",
        menuItem1: "خانه",
        menuItem2: "محصولات",
        menuItem3: "تازه ها",
        menuItem4: "نمونه کارها",
        menuItem5: "معادن",
        menuItem6: "ارتباط با ما",
        menuItem7: "درباره ما",
        search: "جستجو",
        slide1: "طبیعت را لمس کن",
        slide2: "زمین را احساس کن",
        slide3: "استوار قدم بردار",
        more: "بیشتر",
        submit: "ارسال",
        origin: "کشور",
        type: "نوع",
        color: "رنگ",
        code: "کد"
    }
};

var products = [{
        en: {
            titlePage: "Solabest is  supplier of garnite blocks , slabs and tiles",
            metaDescription: "Granite has a high durability and is used for both interior and exterior applications such as wall, floors, stairs, fireplaces, bathroom sinks and countertops | available in block, slabs and tile.| Iranian granite",
            h2: " Strong material , Granit Countertop , Countertop , kitchen countertops , Bathroom sinks, Flooring and Cladding",
            title: "Granite",
            intro: "The volcanic melt masses has created stones named Granite. It is called an igneous rock which comes from word “Ignis” meaning fire. The geologic process which leads to create granite occurs ...",
            description: "The volcanic melt masses has created stones named Granite. It is called an igneous rock which comes from word “Ignis” meaning fire. The geologic process which leads to create granite occurs during a long time and also the slow cooling process from intense heat makes granite a dense and strong material. The main feature of granite is its hardness which is also used in Persian poems as a symbol of hardness. The mixture of minerals, gives granite distinctive coloring. Granite often has green, black, gray and blue coloring. Granite has a high durability and is used for both interior and exterior applications. Most common indoor usage areas are wall and floors, stairs, fireplaces, bathroom sinks and countertops. The most common outdoor usages are floorings and claddings, monuments and stair treads.",
            models: [{
                metaDescription: "Turquoise granite is a quite rare material. It is a mixture of turquoise green with gold and brown lines. Its beautiful color gives viewer a sense of calm and tranquility. Its popularity in the market is because of its special features like high resistance against heat and beautiful appearance. | Iranian granites",
                h2: "Granite , luxury buildings , interior and exterior, wall , floor, steps, hotels, lobbies ",
                title: "Turquoise Granite",
                description: "Turquoise granite is a quite rare material. It is a mixture of turquoise green with gold and brown lines. Its beautiful color gives viewer a sense of calm and tranquility. Its popularity in the market is because of its special features like high resistance against heat and beautiful appearance. Among beautiful stones of Iran, turquoise granite is definitely one of the best granite stones. They are a great option for luxury buildings. Also interior and exterior, wall and floor, steps, hotels and lobbies are other uses of this stone.",
                origin: "Iran",
                type: "Granite",
                color: "Turquoise",
                code: "SB-G10",
                img: "granit_firoozi.jpg",
                alt: "Turquoise granite"
            }, {
                metaDescription: "Black zebrana has a black background with white and gold streaks which are scattered over its surface. Its unique pattern make this stone to be used in various projects by architects | Iranian granites",
                h2: "Granite , modern design,  book match and four match slab",
                title: "Black Zebrana",
                description: "Black zenrana has a black background with white and gold streaks which are scattered over its surface. Its unique pattern make this stone to be used in various projects by architects. In modern design, using book match and four match slab is very common.",
                origin: "Iran",
                type: "Granite",
                color: "Black",
                code: "SB-G11",
                img: "granit_black_zebra.jpg",
                alt: "Black zebrana granite"
            }]
        },
        img: "images/products/granit_black_zebra.jpg"
    },
    {
        en: {
            titlePage: "Solabest is  supplier of Onyx blocks , slabs and tiles",
            metaDescription: "the main and most important feature is the light permeability. Therefore they are perfect to use for decorative purposes. They are available in different colors such as white, pink, brown, orange, green and multicolor | Iranian onyx | Decorative building material",
            h2: "Onyx Stone , luxury project , countertops , sinks, front desks, wall and column cladding, fireplaces, lobby and lounge , Onix , Onice",
            title: "Onyx",
            intro: "Onyx is a unique natural stone which composed of the precipitation of calcium carbonate in the cold spring waters. The spring waters which are formed Onyx stones are much more consist of min...",
            description: "Onyx is a unique natural stone which composed of the precipitation of calcium carbonate in the cold spring waters. The spring waters which are formed Onyx stones are much more consist of mineral salts in comparison with other natural stones therefore this type of stones that are formed under these conditions are crystalline and transparent in structure. Onyx stones are classified in the group of semi-precious stones. And the main and most important feature is the light permeability. Therefore they are perfect to use for decorative purposes. They are available in different colors such as white, pink, brown, green and multicolor. In some countries Onyx is written as Onix and Onice. The best onyx quarries are found in Iran and Afghanistan but because of professional quarrying facilities in Iran, Persian ones are extracted with higher quality. The main usage of onyx is in the luxury projects in order to provide visual richness with their unique decorative structures. The other usage areas are countertops and sinks, front desks, wall and column cladding, fireplaces, lobby and lounges. Also it is used as an ornamental objects such as vases and figurines, sculptures and various animal figures.",
            models: [{
                metaDescription: "This Onyx is mixture of gray, brown, white and gold colors which is available in two sorts of wide and tiny waves. Portions of this stone are semi-translucent and can be backlit for more beautiful effect | Iranian onyx ",
                h2: " Onyx , backlit , semi-translucent , bathroom, fireplace ",
                title: "Antler Onyx",
                description: "This Onyx is mixture of gray, brown, white and gold colors which is available in two sorts of wide and tiny waves. Portions of this stone are semi-translucent and can be backlit for more beautiful effect. We suggest using antler onyx in bathroom, fireplace surrounds and its backlit as a piece of decorative stone.",
                origin: "Iran",
                type: "Onyx",
                color: "Multi-Color",
                code: "SB-O12",
                img: "onyx_multicolor.jpg",
                alt: "Antler onyx"
            }, {
                metaDescription: "Rose white is called pink onyx as well. It is including pink colored minerals and is very convenient to polish. | Iranian onyx ",
                h2: "Onyx , Pink onyx ,  Pakistan onyx, Afghanistan onyx, Pure pink onyx , countertop, bathroom, stairs",
                title: "Rose White Onyx",
                description: "Rose white is called pink onyx as well. It is including pink colored minerals and is very convenient to polish. Pakistan and Afghanistan are other sources of pink onyx. Most of Afghanis includes black lines. Rose white onyx without black lines called pure pink onyx which is one of the most expensive stones all around the world. It is suggested to use this wonderful natural stone in the kitchen as a countertop. Other usages are in the bathroom, stairs, skirting and onyx handicrafts.",
                origin: "Iran",
                type: "Onyx",
                color: "Light Pink",
                code: "SB-O10",
                img: "onyx_pink.jpg",
                alt: "Rose white onyx"
            }, {
                metaDescription: " Orange onyx is another popular and amazing Iranian onyx which has an orange background including lovely circular pattern of white color| Iranian onyx",
                h2: " Onyx , Modern interiors design ,  book match slabs , LED lights",
                title: "Orange Onyx",
                description: "Orange onyx is another popular and amazing Iranian onyx which has an orange background including lovely circular pattern of white color. Using book match slabs with LED lights will add a stunning look to the place. Orange onyx is highly recommended to use in modern interiors. Some people call it, honey onyx which is a little different from orange onyx due to its color and texture.",
                origin: "Iran",
                type: "Onyx",
                color: "Orange",
                code: "SB-O15",
                img: "onyx_orange.jpg",
                alt: "Orange onyx"
            }, {
                metaDescription: "pure white onyx is the most beautiful and most expensive stones in the world. In some countries it is called Snow white ony. The main feature of this stone is its high level of purity and completely ice white color| Iranian onyx ",
                h2: "Onyx, Snow white onyx , high level of purity , ice white color , Iran white onyx , countertops, showers ,sinks. Luxury hotels, residential buildings ",
                title: "White Onyx",
                description: "Doubtlessly, pure white onyx is the most beautiful and most expensive stones in the world. In some countries it is called Snow white onyx and in china stone market it is called Bōsī báiyù. The main feature of this stone is its high level of purity and completely ice white color. Iran white onyx can be processed into polished, saw cut, honed and etc. This stone is recommended for indoor applications such as countertops, showers and sinks. It is mostly used in luxury hotels and residential buildings.",
                origin: "Iran",
                type: "Onyx",
                color: "White",
                code: "SB-O13",
                img: "onyx_white.jpg",
                alt: "White onyx"
            }]
        },
        img: "images/products/onyx_multicolor.jpg"
    },
   
    {
        en: {
            titlePage: "Solabest is  supplier of marble blocks , slabs and tiles",
            metaDescription: "Marbles are one of the most important Iranian stones, The quality and its high resistance along with the diversity in colors and compatible price in international markets has caused this stone to be popular and considerable | Marble countertop | Marble flooring |Iranian marble",
            h2: "floors and walls, stairs and steps, countertops, sinks and fireplaces, columns, fountains and statues.",
            title: "Marble",
            intro: "Marbles are dense Lime stones which are created due to the pressure of the upper levels and density of Calcium Carbonate sediment. They are resistant to fire and fragment. In addition to its...",
            description: "Marbles are dense Lime stones which are created due to the pressure of the upper levels and density of Calcium Carbonate sediment. They are resistant to fire and fragment. In addition to its high strength and resistance, marbles are available in wide range of colors. Back to the history, marble is widely used as a building material or sculpture in ancient Iran and Greece. Pure marble comes in white color but they are available in other colors due to existence of colorful minerals. In texture, marble is a fine-grained rock with a uniform granular surface. Marbles are categorized in chemical sedimentary group in terms of geology and are mostly created as a result of chemical and biochemical processes to algae, corals and calcite sediments. The low porosity of marbles, causes low water absorption. Marbles have more density and resistance in comparison with Travertine and are more convenient to be polished. Marbles are one of the most important Iranian stones and the total reservation reach to more than 165.2 Millions of Tons. To summarize, recrystallization of Limestone creates a modified stone named Marble. The quality and its high resistance along with the diversity in colors and compatible price in international markets has caused this stone to be popular and considerable. Aesthetic streaks and sometimes the fossils offer these stones a special display. The main and most popular usage of marble is floorings and wall claddings. Also marble is the best choice for sculptors and craftsmen because of soft and ornamental structure. The main indoor usages of marbles are floors and walls, stairs and steps, countertops, sinks and fireplaces. The most important outdoor usages are columns, façades, fountains and statues.",
            models: [{
                metaDescription: "pure white onyx is the most beautiful and most expensive stones in the world. In some countries it is called Snow white ony. The main feature of this stone is its high level of purity and completely ice white color| Iranian onyx ",
                title: "Solamoon Marble",
                h2: "Marble, walls and floors , Flooring architectural projects , Hotels, Malls , Residential buildings",
                description: "Solamoon is a newly introduced brand of Iranian marbles which is available in beige and gray sorts. The quarry is located in Kermanshah province and it is owned and directly operated by Solabest co. | Iranian Marble ",
                origin: "Iran",
                type: "Marble",
                color: "Gray",
                code: "SB-M10",
                img: "marble_solamo.jpg"
            }, {
                metaDescription: "pure white onyx is the most beautiful and most expensive stones in the world. In some countries it is called Snow white ony. The main feature of this stone is its high level of purity and completely ice white color| Iranian onyx ",
                title: "Vinca Marble",
                h2: "Marble, walls and floors , Flooring architectural projects , Hotels, Malls , Residential buildings",
                description: "Vinca Marble is one of the most popular and classic marbles in building industry. It is quarried in Iran and its unique cream color with variable veining makes it a luxurious choice for walls and floors in both residential and commercial properties.",
                origin: "Iran",
                type: "Marble",
                color: "Cream",
                code: "SB-M27",
                img: "marble_vinca.jpg"
            }, {
                metaDescription: "Pietra Gray Marble is one of the most famous and best-selling Iranian marbles. The local name for pietra gray is Lashotor marble and its quarry is located in Isfahan province. This marble has a black grayish background with white veins which is available in dark and light gray with much or limited white veins. | Iranian Marble ",
                h2: "Marble, Lashotor marble , Low Water Absorption , interior,  Lobby, bathrooms, flooring, kitchen, countertop, sink, marble monuments , book match slabs, multiplies , Pietra Grigio , Graphite Gray",
                title: "Pietra Gray Marble",
                description: "Pietra Gray Marble is one of the most famous and best-selling Iranian marbles. The local name for pietra gray is Lashotor marble and its quarry is located in Isfahan province. This marble has a black grayish background with white veins which is available in dark and light gray with much or limited white veins. The main features of this stone are being dense and consistent and also low water absorption. Its special and unique color and pattern along with its convenient resistance caused this stone to be useful to apply for interiors such as Lobby, bathrooms, flooring, kitchen, countertop, sink, marble monuments and also exteriors. Using book match slabs, multiplies its beauty and also helps us to offer a variety of modern designs. Some countries name pietra gray as Pietra Grigio or Graphite Gray and in China, they call it Bǐde lā huīsè. Pietra Gray Marble can be turned into different surface finishing such as Polished, Sawn Cut, Sanded, Rock faced, Sandblasted and Tumbled.",
                origin: "Iran",
                type: "Marble",
                color: "Gray/Black",
                code: "SB-M11",
                img: "marble_lashter.jpg"
            }, {
                metaDescription: "Harsin is one of the most popular and useful Iranian stones which comes in light beige-cream colored with light gray veins. The quarry is in Kermanshah province. Harsin marble is highly resisted to fire and fragment and also it is very convenient to polish | Iranian Marble ",
                h2: "Marble, Exterior  , Interior , wall and floor applications, countertops , pool , light beige-cream Marble",
                title: "Harsin Marble",
                description: "<p>Harsin is one of the most popular and useful Iranian stones which comes in light beige-cream colored with light gray veins. The quarry is in Kermanshah province. Harsin marble is highly resisted to fire and fragment and also it is very convenient to polish. Along with the mentioned specifications, the monotonous color causes the environment look bigger and eye-catching while using it on the floor. Harsin marble is commonly used in Exterior - Interior wall and floor applications, countertops and pool. This marble can be turned into several finishing such as Honed, Aged, Polished, Sawn Cut, Sanded, Rock faced, Sandblasted, Bush hammered, Tumbled, etc.</p><p>Harsin marble in china stone market is called Báigōng mǐhuáng</p>",
                origin: "Iran",
                type: "Marble",
                color: "Light Beige",
                code: "SB-M12",
                img: "marble_hersin.jpg"
            }, {
                metaDescription: " Armani bronze marble is a kind of brown marble quarried in Isfahan province in Iran near Jandagh city. It has a color range from dark brown to bronze and light brown with beautiful golden lines. | Iranian Marble ",
                h2: " Marble, Brown marble , Mahkam brown, Jandagh brown , Emperador brown ,floor and wall covering, steps, countertops , balconies",
                title: "Armani Bronze Marble",
                origin: "Iran",
                type: "Marble",
                color: "Brown",
                code: "SB-M13",
                img: "marble_mahkam.jpg"
            }, {
                metaDescription: "Marshal is a famous and unique marble quarried in Iran. It has a black background including white and gold stripes| Iranian Marble ",
                h2: "Marble, Golden Black Marble , interior , exterior, wall and floor applications, kitchen, countertops",
                title: "Marshal Marble",
                description: "Marshal is a famous and unique marble quarried in Iran. It has a black background including white and gold stripes. The beautiful color and high quality makes this stone unique. Marshal is also called as golden black marble. This stone is good for interior and exterior, wall and floor applications, kitchen, countertops and design projects.",
                origin: "Iran",
                type: "Marble",
                color: "Black and Gold",
                code: "SB-M15",
                img: "marble_marshal.jpg"
            }, {
                metaDescription: "The bright and cream Shayan marble is one of the most well-known marbles in Iran. The quarry is located in Fars province. It has a dense and hard structure| Iranian Marble  ",
                h2: "Marble, Kitchen, Fireplaces, Stairs, Wall and flooring , Bottocino",
                title: "Shayan Marble",
                description: "The bright and cream Shayan marble is one of the most well-known marbles in Iran. The quarry is located in Fars province. It has a dense and hard structure which is suitable to use in the kitchen, fireplaces, stairs, wall and flooring. Shayan marble is called as new Bottocino of Iran.",
                origin: "Iran",
                type: "Marble",
                color: "Cream",
                code: "SB-M16",
                img: "dehbid_shayan.jpg"
            }, {
                metaDescription: "Taipan marble comes in a range of dark to light brown color. It is one of the most beautiful and quite exquisite. Considering the affordable price, this stone can be replaced by similar Spanish one called dark emperador | Iranian Marble  ",
                h2: " Marble, floors and walls , Interrior Design , Dark emperador , low water absorption, highly polished , high abrasion resistance",
                title: "Taipan Marble",
                description: "Taipan marble comes in a range of dark to light brown color. It is one of the most beautiful and quite exquisite Iranian marbles. Lucidity and high quality has lead this stone to be used in all interiors such as floors and walls. Considering the affordable price, this stone can be replaced by similar Spanish one called dark emperador. The main features of Taipan marble is low water absorption, highly polished and high abrasion resistance.",
                origin: "Iran",
                type: "Marble",
                color: "Brown",
                code: "SB-M17",
                img: "marble_dehbid_brown.jpg"
            }, {
                metaDescription: "Persian Nero Marquina is one of the best Iranian stones with black base and white veins. Its other name is Pietra black. Persian Nero Marquina marble can be processed in different types such as Polished, Sawn Cut, Sanded, and Rock faced, Sandblasted, Tumbled and so on. | Iranian Marble ",
                h2: "Marble, Pietra black , wall and floor coverings, sinks, monuments",
                title: "Persian Nero Marquina",
                description: "Persian Nero Marquina is one of the best Iranian stones with black base and white veins. Its other name is Pietra black. Also in china stone market it is called Bǐde lā huīsè and Shāshìbǐyǎ huī. Its high resistance, low water absorption and extraordinary polished finish, makes this stone good for wall and floor coverings, sinks, monuments and other classic and modern projects. Persian Nero Marquina marble can be processed in different types such as Polished, Sawn Cut, Sanded, Rock faced, Sandblasted, Tumbled and so on.",
                origin: "Iran",
                type: "Marble",
                color: "Black",
                code: "SB-M18",
                img: "marble_black_najafabadi.jpg"
            }, {
                metaDescription: "Bloom marble is a Persian white marble with a white to gray ground color and smoky gray veins which spread through the stone. One of the characteristic of this stone is being able to be processed in book match technique. Also it is very popular to use in art works | Iranian Marble ",
                h2: "Marble, Persian white marble, Carrara , Calacatta , book match technique , Luxurious projects , Azna white marble",
                title: "Bloom Marble",
                description: "Bloom marble is a Persian white marble with a white to gray ground color and smoky gray veins which spread through the stone. Bloom marble is similar in appearance to Carrara and Calacatta. One of the characteristic of this stone is being able to be processed in book match technique. Also it is very popular to use in art works. Another important usage to be mentioned is luxurious projects and interior and exterior façade. It is also called Azna white marble. It can be processed into Polished, Sawn Cut, Sanded, Rock faced, Sandblasted and Tumble.",
                origin: "Iran",
                type: "Marble",
                color: "White (Gray Veins)",
                code: "SB-M19",
                img: "chini_azna.jpg"
            }, {
                metaDescription: "Thunder marble is made of big white crystals with gray veins. It can be processed in different surfaces.  | Iranian Marble  ",
                h2: "Marble,  White crystals , Gray veins , Interior Exterior Wall , Floor Applications, Monuments, Countertops, Bathrooms , Stairs",
                title: "Thunder Marble",
                description: "Thunder marble is made of big white crystals with gray veins. It is often used in interior exterior wall and floor applications, monuments, countertops, bathrooms and stairs. It can be processed in different surfaces.",
                origin: "Iran",
                type: "Marble",
                color: "White (Gray Veins)",
                code: "SB-M20",
                img: "chini_aligoodarz.jpg"
            }, {
                metaDescription: "Neyriz white marble is one of the marble types with white and light gray base and dark gray veins. It is also called Iran white marble and Iran white crystal. | Iranian Marble ",
                h2: "Marble, Iran White Marble, Iran white crystal, Light gray base, Exterior Floors ,Interior Floors ,Walls ",
                title: "Neyriz White Marble",
                description: "Neyriz white marble is one of the marble types with white and light gray base and dark gray veins. It is also called Iran white marble and Iran white crystal. Neyriz marble could be used for interior exterior floors and walls.",
                origin: "Iran",
                type: "Marble",
                color: "White (Gray Veins)",
                code: "SB-M21",
                img: "chini_tabriz.jpg"
            }, {
                metaDescription: "The black base containing white and gold veins makes this stone extremely stunning. It is doubtlessly one of the most beautiful stones in state of art architecture designs. | Iranian Marble  ",
                h2: "Marble, Gold veins, Lobbies , Book match Technique, Bathrooms , walls",
                title: "King Snake Marble",
                description: "The black base containing white and gold veins makes this stone extremely stunning. Its beauty has caused to be used in lobbies benefiting book match technique by most designers. It is also used in bathrooms and walls. It is doubtlessly one of the most beautiful stones in state of art architecture designs.",
                origin: "Iran",
                type: "Marble",
                color: "Black",
                code: "SB-M23",
                img: "marble_3dblack.jpg"
            }, {
                metaDescription: "Water absorption , porosity , Decorative stones , modern Design , classic Designs | Iranian Marble ",
                h2: "Marble, Water absorption , Porosity , Decorative stones , modern Design , classic Designs",
                title: "Ice Flower Marble",
                description: "Another marble with white base and gray veins is Ice Flower. Its main feature is low water absorption and porosity. Ice flower marble can be used in different parts of the building. It is also one the best decorative stones for both modern and classic designs.",
                origin: "Iran",
                type: "Marble",
                color: "White / Gray",
                code: "SB-M24",
                img: "chini_ice_flower.jpg"
            }],
        },
        img: "images/products/chini_aligoodarz.jpg"
    },
    {
        en: {
            titlePage: "Solabest| Supplier of Iranian Natural Stones |Quarry |Trading company| Exporter",
            metaDescription: "Solabest has been one of the Iranian leading companies in the field of stone industry since 1995 , Solabest not only imports precious building stones from different countries, but also introduces and exports Iranian stones all over the world. Solabest owns a marble quarry which has different sorts in beige and gray colors.",
            h2: "interior and exterior construction material,  wall cladding , flooring , bathrooms , showers, fireplaces, stairs and sinks,walk ways, pool steps , decorative building material",
            title: "Travertine",
            intro: "Travertine is a dense and compacted form of limestone which is found in banded layers. It is mostly available in white or cream color, but the beautiful attractive red, walnut and lemon colo...",
            description: "Travertine is a dense and compacted form of limestone which is found in banded layers. It is mostly available in white or cream color, but the beautiful attractive red, walnut and lemon colors are available in Iran due to existence of high percentage of iron oxide pigments. Travertine is mainly consist of calcium carbonate when separates from water through evaporation. Travertines are available in two forms of cross cut and vein cut. It is mostly used as a decorative building material. Its high resistance against heat, cold, humidity and rain in addition to its beautiful appearance and ideal polishing causes this type of stone to be used by architects globally. Travertines are mostly used as an interior and exterior construction material. It can be used as a wall cladding and flooring to give a decorative appearance. The most indoor usages are floors and walls, bathrooms and showers, fireplaces, stairs and sinks. The main outdoor usages are drive and walk ways, pool steps, façade and other outdoor applications.",
            models: [{
                metaDescription: "This type of silver travertine with light background and gray, white and golden lines belongs to Azarshahr quarry which is located in north-west of Iran. Its stunning silver tone makes it a perfect choice for modern interiors. | Iranian Travertine ",
                h2: "Travertine , Modern interiors , Color stability , kitchen, Bathrooms , steps",
                title: "Silver Travertine",
                description: "This type of silver travertine with light background and gray, white and golden lines belongs to Azarshahr quarry which is located in north-west of Iran. Its stunning silver tone makes it a perfect choice for modern interiors. Color stability is one of its attractions to be used in façade. Other usages are kitchen, bathrooms and steps.",
                origin: "Iran",
                type: "Travertine",
                color: "Silver",
                code: "SB-T10",
                img: "travertian_sliver_azarshahr.jpg"
            }, {
                metaDescription: "There are different types of silver travertine in Iran. Ada Titanium is one of them with dark background and beautiful parallel veins. It comes in two sorts from dark to light color | Iranian Travertine",
                h2: "Travertine , building materials",
                title: "Ada Titanium Travertine",
                description: "There are different types of silver travertine in Iran. Ada Titanium is one of them with dark background and beautiful parallel veins. It comes in two sorts from dark to light color which is one of the most practical stones in building materials.",
                origin: "Iran",
                type: "Travertine",
                color: "Dark silver",
                code: "SB-T11",
                img: "travertian_ada_titanium.jpg"
            }, {
                metaDescription: "Red travertine is one of the oldest Iranian stones which its stunning color offers a special environment to the viewer. This lovely travertine is available in dark to light red color depending on the quarry and type of blocks. The quarry is located in Azarshahr in north-west of Iran | Iranian Travertine ",
                h2: "Travertine , Oldest Iranian stones , Soraya Travertine , Residential and commercial flooring  , Wall cladding",
                title: "Red Travertine",
                description: "Red travertine is one of the oldest Iranian stones which its stunning color offers a special environment to the viewer. This lovely travertine is available in dark to light red color depending on the quarry and type of blocks. The quarry is located in Azarshahr in north-west of Iran. There are some white and cream veins which brings more beauty to this stone. The darker and higher quality is called Soraya which is perfect to produce in vein cut finishing. The other one which has a brighter color, usually produces in cross cut due to its less veins. Red travertine is commonly used for residential and commercial flooring and also wall cladding. It is available in following finishing: sandblasted, bush hammered, honed, brushed, tumbled and polished.",
                origin: "Iran",
                type: "Travertine",
                color: "Red",
                code: "SB-T12",
                img: "travertian_red_azarshahr.jpg"
            }, {
                metaDescription: "Walnut travertine is a kind of brown travertine which comes from north-west of Iran. The base color is dark with brown, beige and white lines. | Iranian Travertine ",
                h2: "Travertine , Brown Travertine , Azarshahr walnut travertine , Interiors , exteriors of luxury projects , Residential , wall , floor applications.",
                title: "Walnut Travertine",
                description: "Walnut travertine is a kind of brown travertine which comes from north-west of Iran. The base color is dark with brown, beige and white lines. Persian walnut travertine is also called azarshahr walnut travertine, travertino legno and in china stone market it is named Fàguó liú jīn and Mù wén dòng. Its main feature is being very dense and tough. This stone is mostly used in interiors and exteriors of luxury projects even residential or commercial and also wall and floor applications.",
                origin: "Iran",
                type: "Travertine",
                color: "Walnut",
                code: "SB-T13",
                img: "travertian_gerdooi.jpg"
            }, {
                metaDescription: "Iran lemon travertine is one of the great colorful travertines with yellow to orange base and straight veins which is found in Azarshahr (north-west of Iran). Its premium quality and unique texture makes this stone different from Turkish and Spanish ones | Iranian Travertine",
                h2: "Travertine , Modern architecture , Decorative material , Pools, Fireplaces, Gardens and park , walkways , Iran Lemone Travertine",
                title: "Lemon Travertine",
                description: "Iran lemon travertine is one of the great colorful travertines with yellow to orange base and straight veins which is found in Azarshahr (north-west of Iran). Its premium quality and unique texture makes this stone different from Turkish and Spanish ones. Lemon travertine is mostly used in modern architecture as a decorative material. Also it is very popular for pools, fireplaces, gardens and park walkways as well as big buildings.",
                origin: "Iran",
                type: "Travertine",
                color: "Lemon",
                code: "SB-T15",
                img: "travertian_limooi.jpg"
            }]
        },

        img: "images/products/travertian_ada_titanium.jpg"
    }
];
var quarry = {
    en: "Besides significant activity in stone trading, Solabest began its activity in the field of quarrying. Solabest owns a marble quarry which is located in a mountainous area in the west of Iran. This quarry has different sorts in beige and gray colors. Its storage is estimated over two million tons and has monthly extraction capability of around 5000 tons. Its unique material which is called Solamoon is exporting to different countries across the world.",
    fa: "نمایشگاه و انبار شرکت سولابست با فضایی معادل ۵ هزار مترمربع به صورت مسقف و مجهز به جرثقیل های سقفی ۵- ۱۰- و ۴۰ تن فضای مناسبی جهت نمایش تخلیه و بارگیری و دپوی سنگهای پلاک شده و کوپ سنگ می باشداین فضا در قلب شهرک صنعتی شمس آباد یکی از قطب‌های مهم سنگ کشور واقع شده است سولابست با داشتن ماشین آلات پیشرفته برش امکان برش سنگ ها در ابعاد مختلف را برای مشتریان فراهم نموده است.این مجموعه با داشتن پرسنل فنی و با سابقه و داشتن فضای مناسب امکان راه اندازی خط تولید و فراوری سنگ را دارا می باشد."
};

module.exports= {
    quarry,
    products,
    staticContent,
}



$('.carousel.slide').carousel({
    interval: 4000,
    pause: "false"
});

function setStaticData() {
    if (lang == "en") {
        $("html#about title").text(staticContent.en.titleHome);
        $("html#home title").text(staticContent.en.titleHome);
        $("html#home head").append("<meta name='description' content='" + staticContent.en.metaDescriptionHome + "'>");
        $("#menu-item-1 a").text(staticContent.en.menuItem1);
        $("#menu-item-2 a").text(staticContent.en.menuItem2);
        $("#menu-item-3 a").text(staticContent.en.menuItem3);
        $("#menu-item-4 a").text(staticContent.en.menuItem4);
        $("#menu-item-5 a").text(staticContent.en.menuItem5);
        $("#menu-item-6 a").text(staticContent.en.menuItem6);
        $("#menu-item-7 a").text(staticContent.en.menuItem7);
        $(".more-but").text(staticContent.en.more);
        $(".submit-but").text(staticContent.en.submit);
        $("#origin").text(staticContent.en.origin);
        $("#type").text(staticContent.en.type);
        $("#code").text(staticContent.en.code);
        $("#color").text(staticContent.en.color);
    } else if (lang == "fa") {
        $("body").css("direction", "rtl");
        $("nav").css("direction", "ltr");
        $("title").text(staticContent.fa.title);
        $("#menu-item-1 a").text(staticContent.fa.menuItem1);
        $("#menu-item-2 a").text(staticContent.fa.menuItem2);
        $("#menu-item-3 a").text(staticContent.fa.menuItem3);
        $("#menu-item-4 a").text(staticContent.fa.menuItem4);
        $("#menu-item-5 a").text(staticContent.fa.menuItem5);
        $("#menu-item-6 a").text(staticContent.fa.menuItem6);
        $("#menu-item-7 a").text(staticContent.fa.menuItem7);
        $(".more-but").text(staticContent.fa.more);
        $(".submit-but").text(staticContent.fa.submit);
        $("#origin").text(staticContent.fa.origin);
        $("#type").text(staticContent.fa.type);
        $("#code").text(staticContent.fa.code);
        $("#color").text(staticContent.fa.color);
    }
};

function setProducts() {

    $("#pr1 img").attr("src", products[0].img);
    $("#pr2 img").attr("src", products[1].img);
    $("#pr3 img").attr("src", products[2].img);
    $("#pr4 img").attr("src", products[3].img);
    $("#pr1 a").attr("href", "products.html?product=pr1&lang=" + lang);
    $("#pr2 a").attr("href", "products.html?product=pr2&lang=" + lang);
    $("#pr3 a").attr("href", "products.html?product=pr3&lang=" + lang);
    $("#pr4 a").attr("href", "products.html?product=pr4&lang=" + lang);
    for (var i = 0; i <= products.length - 1; i++) {
        index = i + 1;
        if (lang == "en") {
            productTitle = products[i].en.title

        }
        if (lang == "fa") {
            productTitle = products[i].fa.title
        }

        html = "<li><a href='products.html?product=pr" + index + "&lang=" + lang + "'>" + productTitle + "</a></li>";
        $(".products-uniq-id").append(html);
        $("#producti-menu-toggle").append(html);
    }
    if (lang == "en") {
        $(".product-title").text("Products");
        $("#pr1 h3").text(products[0].en.title);
        $("#pr1 p:first").text(products[0].en.intro);
        $("#pr2 h3").text(products[1].en.title);
        $("#pr2 p:first").text(products[1].en.intro);
        $("#pr3 h3").text(products[2].en.title);
        $("#pr3 p:first").text(products[2].en.intro);
        $("#pr4 h3").text(products[3].en.title);
        $("#pr4 p:first").text(products[3].en.intro);
    } else if (lang == "fa") {
        $(".product-title").text("محصولات");
        $("#pr1 h3").text(products[0].fa.title);
        $("#pr1 p:first").text(products[0].fa.intro);
        $("#pr2 h3").text(products[1].fa.title);
        $("#pr2 p:first").text(products[1].fa.intro);
        $("#pr3 h3").text(products[2].fa.title);
        $("#pr3 p:first").text(products[2].fa.intro);
        $("#pr4 h3").text(products[3].fa.title);
        $("#pr4 p:first").text(products[3].fa.intro);
    }
};

function setProject() {
    if (lang == "en") {
        $(".projects-title").text("Projects");
    } else if (lang == "fa") {
        $(".projects-title").text("نمونه کار‌ها");
    }
};
function setHightLight() {
    if (lang == "en") {
        $(".highlights-title").text("High Lights");
    } else if (lang == "fa") {
        $(".highlights-title").text("مطالب تازه");
    }
};

function setQuarry() {
    if (lang == "en") {
        $(".quarry-title").text("Quarry");
        $(".quarry-desc").text(quarry.en);
    } else if (lang == "fa") {
        $(".quarry-title").text("معادن");
        $(".quarry-desc").text(quarry.fa);
    }
};

function load(index) {
   var p = products[index][lang];
    $("html#prdcts head title").append(p.titlePage);
    $("html#prdcts head").append("<meta name='description' content='" + p.metaDescription + "'>");
    $(".solabest-well h1").text(p.title);
    $(".solabest-well p").text(p.description);
    $("html#prdcts .none h2").append(p.h2);
    indexPage = index + 1
    testEn = "<a href='products.html?product=pr" + indexPage + "&lang=en'><img src='images/en-flag.png'></a>"
    testFa = "<a href='products.html?product=pr" + indexPage + "&lang=fa'><img src='images/fa-flag.png'></a>"
    $(".header-link-en").append(testEn)
    $(".header-link-fa").append(testFa)
    for (var i = p.models.length - 1; i >= 0; i--) {
        html = "<a class='item' id='pid" + i + "' href='productinside.html?prodpage=pr" + indexPage + "&prdo=pid" + i + "&lang=" + lang + "'><img src='images/subproducts/" + p.models[i].type + "/" + p.models[i].img + "' alt='" + p.models[i].alt + "'><p class='lead'>" + p.models[i].title + "</p></a>"
        $(".MultiCarousel-inner").append(html);
        console.log(p.models[i].title + "i" + i)
    }

    var loopVal = p.models.length > 3 ? true : false;
    console.log((p.models.length - Number(loadInsideProductPage) - 1) + " number");
    var startVal = loadInsideProductPage ? (p.models.length - Number(loadInsideProductPage) - 1) : 1;
    // console.log(startVal , p.models.length + "reverse" + )
    var owl = $('.MultiCarousel-inner').owlCarousel({
        item: 3.5,
        loop: loopVal,
        nav: true,
        startPosition: startVal,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        responsive: {
            0: {
                items: 2,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
            },
            // breakpoint from 480 up
            480: {
                items: 2,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
            },
            768: {
                items: 3.5,
                nav: true,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
            },
        }
    });

}

function loadProdoInside(indexProduct, index) {
    prodo = products[indexProduct][lang].models[index];
    $("#rock-background").css("background-image", "url(images/subproducts/" + prodo.type + "/lg/" + prodo.img + ")")
    indexPage = index
    indexPro = indexProduct + 1
    testEn = "<a href='productinside.html?prodpage=pr" + indexPro + "&prdo=pid" + index + "&lang=en'><img src='images/en-flag.png'></a>"
    testFa = "<a href='productinside.html?prodpage=pr" + indexPro + "&prdo=pid" + index + "&lang=fa'><img src='images/fa-flag.png'></a>"
    $(".header-link-en").append(testEn)
    $(".header-link-fa").append(testFa)
    backLink = "products.html?product=pr" + indexPro + "&lang=en";
    // backfa = "products.html?product=pr" + indexPro + "&lang=fa";
    $(".back-btn a").attr("href", "products.html?product=pr" + indexPro + "&lang=" + lang);
    // languageBtn = {lang == "fa" ? "بازگشت" : "Back"};
    if (lang === "fa") {
        languageBtn = "بازگشت"
    } else {
        languageBtn = "Back"
    }
    titlePage = "Solabest | " + prodo.title;
    $("html#prdctinsd head").append("<meta name='description' content='" + prodo.metaDescription + "'>");
    $("html#prdctinsd head title").append(titlePage);
    $("html#prdctinsd .none h2").append(prodo.h2);

    html = `<div class="product-inside-info">
				<div class="product-inside-text">
					<h1>` + prodo.title + `</h1>
					<div class="pr-desc">
						<p>` + prodo.description + `</p>
						<table class="table">
							<tr>
								<td id="origin"></td>
								<td id="origin-value">` + prodo.origin + `</td>
							</tr>
							<tr>
								<td id="type"></td>
								<td id="type-value">` + prodo.type + `</td>
							</tr>
							<tr>
								<td id="color"></td>
								<td id="color-value">` + prodo.color + `</td>
							</tr>
							<tr>
								<td id="code"></td>
								<td id="code-value">` + prodo.code + `</td>
							</tr>
                        </table>
                        <div class="back-btn">
                            <a href="products.html?product=pr` + indexPro + `&lang=` + lang + `&prdo=` + index + `" >` + languageBtn + `</a>
                        </div>
					</div>
                </div>
			</div>`
    $("#product-inside-content").append(html);
}

if (loadInsidePage === "pr1") {
    if (loadInsideProductPage == "pid0") {
        loadProdoInside(0, 0)
    } else if (loadInsideProductPage == "pid1") {
        loadProdoInside(0, 1)
    }
} else if (loadInsidePage == "pr2") {
    if (loadInsideProductPage == "pid0") {
        loadProdoInside(1, 0)
    } else if (loadInsideProductPage == "pid1") {
        loadProdoInside(1, 1)

    } else if (loadInsideProductPage == "pid2") {
        loadProdoInside(1, 2)

    } else if (loadInsideProductPage == "pid3") {
        loadProdoInside(1, 3)

    } else if (loadInsideProductPage == "pid4") {
        loadProdoInside(1, 4)
    }
} else if (loadInsidePage == "pr3") {
    if (loadInsideProductPage == "pid0") {
        loadProdoInside(2, 0)
    } else if (loadInsideProductPage == "pid1") {
        loadProdoInside(2, 1)
    } else if (loadInsideProductPage == "pid2") {
        loadProdoInside(2, 2)
    } else if (loadInsideProductPage == "pid3") {
        loadProdoInside(2, 3)
    } else if (loadInsideProductPage == "pid4") {
        loadProdoInside(2, 4)
    } else if (loadInsideProductPage == "pid5") {
        loadProdoInside(2, 5)
    } else if (loadInsideProductPage == "pid6") {
        loadProdoInside(2, 6)
    } else if (loadInsideProductPage == "pid7") {
        loadProdoInside(2, 7)
    } else if (loadInsideProductPage == "pid8") {
        loadProdoInside(2, 8)
    } else if (loadInsideProductPage == "pid9") {
        loadProdoInside(2, 9)
    } else if (loadInsideProductPage == "pid10") {
        loadProdoInside(2, 10)
    } else if (loadInsideProductPage == "pid11") {
        loadProdoInside(2, 11)
    } else if (loadInsideProductPage == "pid12") {
        loadProdoInside(2, 12)
    }
} else if (loadInsidePage == "pr4") {
    if (loadInsideProductPage == "pid0") {
        loadProdoInside(3, 0)
    } else if (loadInsideProductPage == "pid1") {
        loadProdoInside(3, 1)

    } else if (loadInsideProductPage == "pid2") {
        loadProdoInside(3, 2)

    } else if (loadInsideProductPage == "pid3") {
        loadProdoInside(3, 3)

    } else if (loadInsideProductPage == "pid4") {
        loadProdoInside(3, 4)
    } else if (loadInsideProductPage == "pid5") {
        loadProdoInside(3, 5)
    }
}

if (loadProduct == "pr1") {
    load(0);
} else if (loadProduct == "pr2") {
    load(1);
} else if (loadProduct == "pr3") {
    load(2);
} else if (loadProduct == "pr4") {
    load(3);
}

$(document).ready(function() {
    setStaticData();
    setProducts();
    setQuarry();
    setProject();
    setHightLight();
});

$("#q1").click(function() {
    $("#main-quarry").html($("#q1").html());
});
$("#q2").click(function() {
    $("#main-quarry").html($("#q2").html());
});
$("#q3").click(function() {
    $("#main-quarry").html($("#q3").html());
});
$("#q4").click(function() {
    $("#main-quarry").html($("#q4").html());
});

$(".nav a").click(function() {
    $(".nav li").removeClass("active");
    $(this).parent().addClass("active");
});

if (lang === "en") {
    $("body").addClass("en")
    $("body").removeClass("fa")
} else if (lang === "fa") {
    $("body").addClass("fa")
    $("body").removeClass("en")
}



//langugae Home
if (lang === "fa") {
    $(".quarry-desc").css({ "font-size": "14px", "line-height": "2" });
    $(".product-text").css({ "font-size": "12px", "line-height": "2" });
    $("#product-show p").css({ "font-size": "14px", "line-height": "1.5" });
    $(".MultiCarousel-inner.bootleggers.owl-carousel").css("direction", "ltr");
    $(".pr-desc p").css({ "font-size": "14px", "line-height": "2" });
    $(".pr-desc table ").css({ "font-size": "13px", "line-height": "2" });
    $(".back-btn a").css({ "font-size": "13px", "line-height": "2" });

}
console.log(window.location.hash);
var hashtagPage = window.location.hash;
if (hashtagPage === "#quarry") {
    $(".menu-item-5").addClass("active");
    $(".menu-item-1").removeClass("active");

} else if (hashtagPage === "#projects") {
    $(".menu-item-4").addClass("active");
    $(".menu-item-1").removeClass("active");
} else if (!hashtagPage) {
    $(".menu-item-1").addClass("active");

}
    }
}