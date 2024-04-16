var require = meteorInstall({"imports":{"vit":{"api":{"server":{"pubs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/vit/api/server/pubs.js                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sitemaps.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/vit/api/server/sitemaps.js                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
sitemaps.add('/sitemap.xml', function () {
    // required: page
    // optional: lastmod, changefreq, priority, xhtmlLinks, img, videos
    let allPages = [];
    allPages.push({
        page: 'www.vitagrad.com',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 1
    });
    allPages.push({
        page: 'www.vitagrad.com/contacts',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/project',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/genplan',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/infrastructure',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/technology/heatpumps',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/materials',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/video',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight1', lastmod: new Date(), changefreq: 'always', priority: 0.9 });allPages.push({ page: 'www.vitagrad.com/ru/projectRight1', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight2', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight3', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight4', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight5', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight6', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight7', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight8', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight9', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight10', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight11', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight12', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight14', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight15',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight17', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight18', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight19', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight20', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight21', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight22', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight23', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight24', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight25', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight26', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight27', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight28', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight29',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight30', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight31', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight32', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight33', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight35', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight36',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight37', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight38', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight39',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight40',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight41',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight42',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight43',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight44', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight45', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight46', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight47',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight48', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight49', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight51', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight53', lastmod: new Date(), changefreq: 'always', priority: 0.9 });
    // allPages.push({ page: 'www.vitagrad.com/projectRight53', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight54',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight55',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight56',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    }); // allPages.push({ page: 'www.vitagrad.com/projectRight57', lastmod: new Date(), changefreq: 'always', priority: 0.9 });

    allPages.push({
        page: 'www.vitagrad.com/projectRight58',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight59',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight60',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    allPages.push({
        page: 'www.vitagrad.com/projectRight61',
        lastmod: new Date(),
        changefreq: 'always',
        priority: 0.9
    });
    return allPages;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/vit/api/methods.js                                                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
let Meteor;
module.watch(require("meteor/meteor"), {
    Meteor(v) {
        Meteor = v;
    }

}, 0);

let _;

module.watch(require("meteor/underscore"), {
    _(v) {
        _ = v;
    }

}, 1);

if (Meteor.isServer) {
    Meteor.methods({
        'sendMess': function (mailFields) {
            this.unblock();
            Meteor.Mailgun.send({
                bcc: mailFields.to,
                from: mailFields.from,
                subject: mailFields.subject,
                text: mailFields.text,
                html: mailFields.html
            }, function (error, result) {
                if (error) {
                    return 'Помилка';
                }

                if (result) {
                    return 'Відправлено';
                }
            });
        }
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/vit/server/index.js                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.watch(require("../api/server/pubs"));
module.watch(require("../api/methods"));
module.watch(require("../api/server/sitemaps"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"i18n":{"en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// i18n/en.i18n.json                                                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ru.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// i18n/ru.i18n.json                                                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ru"] = ["Russian","Русский"];
if(_.isUndefined(TAPi18n.translations["ru"])) {
  TAPi18n.translations["ru"] = {};
}

if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {
  TAPi18n.translations["ru"][namespace] = {};
}

_.extend(TAPi18n.translations["ru"][namespace], {"main-title":"Котеджне містечко «Вітаград»","main-desc":"Сучасне котеджне містечко в с. Ходосівка Київської області, поряд з Голосіївським національним природним парком. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","main-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","cottage-vilage":"Котеджне містечко","vitagrad":" «Вітаград»","slogan1":"Здійсни свою мрію про затишне житло","slogan2":"Ідеальне поєднання переваг приміського життя та сучасних технологій ми змогли втілити, дякуючи ретельному вивченню потреб та принципів сучасної людини. Виходячи з аналізу цих потреб, ми зробили висновок, що наразі існує 8 основних аспектів для комфортного приміського життя і ми доклали максимум зусиль, аби поєднати їх в котеджному містечку «Вітаград», розташованому в парковій зоні біля Києва.","pnf":"СТОРІНКУ НЕ ЗНАЙДЕНО","pnf-reas":"Можливо вона була видалена або Ви набрали неправильну адресу.","go-main":"Перейти на Головну сторінку","Main":"Головна","adv1":"Розташування","adv2":"Інфраструктура","adv3":"Турбота про дітей","adv4":"Заповідна зона","adv5":"Якісні матеріали","adv6":"Відпочинок","adv7":"Безпека","adv8":"Якість кінцевого продукту","Projects":"Котеджі","head-proj":"Котеджі","other-proj":"Інші котеджі","proj-title":"Котеджі - Котеджне містечко «Вітаград»","proj-desc":"Наші котеджі дозволяють реалізувати мрії про життя в сучасному інтер'єрі сімейного будинку. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","proj-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","R1-title":"Котедж «Райт-1»","R-desc":"Сучасний енергозберігаючий пасивний будинок. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","R-keyw":"энергосберегающий пассивный дом, купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","R2-title":"Котедж «Райт-2»","R3-title":"Котедж «Райт-3»","R4-title":"Котедж «Райт-4»","R5-title":"Котедж «Райт-5»","R6-title":"Котедж «Райт-6»","R7-title":"Котедж «Райт-7»","R8-title":"Котедж «Райт-8»","R9-title":"Котедж «Райт-9»","R10-title":"Котедж «Райт-10»","R11-title":"Котедж «Райт-11»","R12-title":"Котедж «Райт-12»","R13-title":"Котедж «Райт-13»","R14-title":"Котедж «Райт-14»","R15-title":"Котедж «Райт-15»","R16-title":"Котедж «Райт-16»","R17-title":"Котедж «Райт-17»","R18-title":"Котедж «Райт-18»","R19-title":"Котедж «Райт-19»","R20-title":"Котедж «Райт-20»","R21-title":"Котедж «Райт-21»","R22-title":"Котедж «Райт-22»","R23-title":"Котедж «Райт-23»","R24-title":"Котедж «Райт-24»","R25-title":"Котедж «Райт-25»","R26-title":"Котедж «Райт-26»","R27-title":"Котедж «Райт-27»","R28-title":"Котедж «Райт-28»","R29-title":"Котедж «Райт-29»","R30-title":"Котедж «Райт-30»","R31-title":"Котедж «Райт-31»","R32-title":"Котедж «Райт-32»","R33-title":"Котедж «Райт-33»","R34-title":"Котедж «Райт-34»","R35-title":"Котедж «Райт-35»","R36-title":"Котедж «Райт-36»","R37-title":"Котедж «Райт-37»","R38-title":"Котедж «Райт-38»","R39-title":"Котедж «Райт-39»","R40-title":"Котедж «Райт-40»","R41-title":"Котедж «Райт-41»","R42-title":"Котедж «Райт-42»","R43-title":"Котедж «Райт-43»","R44-title":"Котедж «Райт-44»","R45-title":"Котедж «Райт-45»","R46-title":"Котедж «Райт-46»","R47-title":"Котедж «Райт-47»","R48-title":"Котедж «Райт-48»","R49-title":"Котедж «Райт-49»","R50-title":"Котедж «Райт-50»","R51-title":"Котедж «Райт-51»","R52-title":"Котедж «Райт-52»","R53-title":"Котедж «Райт-53»","R54-title":"Котедж «Райт-54»","R55-title":"Котедж «Райт-55»","R56-title":"Котедж «Райт-56»","R58-title":"Котедж «Райт-58»","R59-title":"Котедж «Райт-59»","R60-title":"Котедж «Райт-60»","R61-title":"Котедж «Райт-61»","Technology":"Технології","Materials":"Матеріали","materials-title":"Матеріали - Котеджне містечко «Вітаград»","materials-desc":"Ми використовуємо найкраще поєднання матеріалів від Європейських та кращих Українських виробників","materials-keyw":"энергосберегающий пассивный дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, купить дом под киевом, котеджне містечко, котеджне містечко під києвом, котеджні містечка біля києва, котеджні містечка під києвом, котеджі","heat-pumps":"Теплові насоси","heatpumps-desc":"Теплові насоси","heatpumps-keyw":"Теплові насоси","bioseptic":"Біосептик","bioseptic-desc":"Біосептик","bioseptic-keyw":"Біосептик","Genplan":"Генплан","gen-title":"Генплан - Котеджне містечко «Вітаград»","img-genplan":"Генплан котеджного містечка «Вітаград»","Infrastructure":"Інфраструктура","infr-title":"Інфраструктура - Котеджне містечко «Вітаград»","infr-desc":"Містечко розташоване за Києвом, що дозволяє насолоджуватись природою і тишею поза міської метушні. Вітаград межує з Голосіївським національним природним парком","Video":"Відео","video-title":"Відео - Котеджне містечко «Вітаград»","Gallery":"Галерея","Contacts":"Контакти","cont-title":"Контакти","cont-desc":"Берегова 50, Ходосівка, Київська область. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","cont-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","call":"Телефонуйте","callText":"Виїзний тур","tour":"Поїздка до містечка","btn-Callback":"Замовити","btn-Send":"Відправити","btn-Close":"Закрити","your-name":"Ваше ім'я","date-time":"Дата та час","text-callback":"Вкажіть зручний для Вас час поїздки до котеджного містечка","head-tour":"Ознайомчий тур до містечка","callback-title":"Дякуємо за замовлення","sent-callback":"Ваше повідомлення відправлене","text-sent-callback":"Найближчим часом наші фахівці зв'яжуться з Вами.","enter-phone":"Введіть тут ваш номер","we-call-you":"Ми скоро зателефонуєм вам!","requestCall":"Замовити дзвінок","alreadyCall":"Вже набираємо вас","cottage":"Котедж","other-cottage":"Інші котеджі","spec-room":"Специфікація приміщень","all-area":"Загальна площа","area1":"Загальна","area2":":Житлова","area":"Площа","size-ground":"Земельна ділянка","floor1":"1 поверх","floor2":"2 поверх","tambour":"Тамбур","hallway":"Передпокій","kitchen":"Кухня","kitchen-livingroom":"Кухня-вітальня","kitchen-diningroom":"Кухня-столова","kitchen-studio":"Кухня-студія","kitchen-storeroom":"Комора кухні","diningroom":"Їдальня","livingroom":"Вітальня","storeroom":"Комора","bedroom":"Спальня","main-bedroom":"Головна спальня","child-bedroom":"Дитяча спальня","child-room":"Дитяча кімната","room":"Кімната","visitor-bedroom":"Гостьова спальня","sanblock":"Санвузол","kotel":"Котельня","laundry":"Постірочна","kotel-prach":"Котельня-постірочна","garage":"Гараж","hall":"Хол","wardrobe":"Гардероб","cabinet":"Кабінет","gym":"Спортзал","veranda":"Веранда","sauna":"Сауна","showerroom":"Душова","lounge":"Лаунж-зона","restroom":"Кімната відпочинку","ALL-AREA":"Загальна площа","stena":"Стіни","kirp":"цегла","dax":"Дах","pomesh":"Приміщення","terrace":"Тераса","carport":"Навіс для авто","stud":"Студія","ved-mater":"Відомість матеріалів","cher":"бітумна черепиця","roof":"Покрівля","window":"Вікна","warmerwall":"Утеплювач стін","warmerroof":"Теплоізоляція даху","facing":"Облицювальні матеріали","plan":"Планування","plan1":"План першого поверху","plan2":"План другого поверху","our-partner":"Наші партнери щодо інтер’єру","example-interior":"Приклади можливого інтер’єру","stock1":"Вигідна пропозиція","stock2":"Купуй зараз<br>та отримай<br>у подарунок","stock3":"індивідуальне<br>планування","stock4":"До закінчення акції залишилося","stock5":"днів","stock6":"годин","stock7":"хвилин","stock8":"секунд","inside":"На території містечка","outside":"Поряд з містечком","roads":"Асфальтовані дороги","lights":"Вуличне освітлення","playground":"Дитячий майданчик","bakery":"Домашня пекарня","coffee":"Кав’ярня","restaurant":"Ресторан","security":"Власна охорона","GKU":"Житлово-комунальне управління","kindergarten":"Дитячий садочок","eco-market":"Еко - маркет","spa-salon":"Спа - салон","beach":"Обладнаний пляж","trade-center":"Торгівельний центр «Мегамаркет»","outlet":"Аутлет-містечко «Мануфактура»","cinema":"Кінотеатр «Баттерфляй-кантрі»","fitness":"Фітнес центр «Дельтаплан»","bank":"Банк","hospital":"Клініка","school":"Школа-садок","kinder-center":"Дитячий розважальний центр «Дакленд»","cafe":"Кафе, ресторани","fuel":"АЗС","horse-club":"Кінно - спортивний клуб","park":"Голосіївський національний природний парк","example":"Приклад","agent-contacts":"Контактна інформація","agent-tech":"ЗАПИТАЙТЕ ПРО ТЕХНОЛОГІЇ","qw-tech":"Привіт, в мене питання про технології ...","agent-materials":"ЗАПИТАЙТЕ ПРО МАТЕРІАЛИ","qw-materials":"Привіт, в мене питання про матеріали ...","agent-project":"ЗАПИТАЙТЕ ПРО КОТЕДЖ","qw-project":"Привіт, в мене питання про котедж ...","agent-tour":"ЗАМОВИТИ ТУР","qw-tour":"Привіт, хочу замовити поїздку до містечка ...","built":"Побудований","specific":"Специфікація приміщень","tech-indicators":"Техніко-економічні показники","built-area":"Площа забудови","total-area":"Загальна площа","live-area":"Житлова площа","built-height":"Умовна висота","floors":"Поверховість","rooms":"Кімнат","base-params":"Базові характеристики","desc":"Опис","all":"Всі","over":"більше","gallery":"Галерея"});
TAPi18n._registerServerTranslator("ru", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uk.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// i18n/uk.i18n.json                                                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["uk"] = ["Ukrainian","Українська"];
if(_.isUndefined(TAPi18n.translations["uk"])) {
  TAPi18n.translations["uk"] = {};
}

if(_.isUndefined(TAPi18n.translations["uk"][namespace])) {
  TAPi18n.translations["uk"][namespace] = {};
}

_.extend(TAPi18n.translations["uk"][namespace], {"main-title":"Котеджне містечко «Вітаград»","main-desc":"Сучасне котеджне містечко в с. Ходосівка Київської області, поряд з Голосіївським національним природним парком. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","main-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","cottage-vilage":"Котеджне містечко","vitagrad":" «Вітаград»","slogan1":"Здійсни свою мрію про затишне житло","slogan2":"Ідеальне поєднання переваг приміського життя та сучасних технологій ми змогли втілити, дякуючи ретельному вивченню потреб та принципів сучасної людини. Виходячи з аналізу цих потреб, ми зробили висновок, що наразі існує 8 основних аспектів для комфортного приміського життя і ми доклали максимум зусиль, аби поєднати їх в котеджному містечку «Вітаград», розташованому в парковій зоні біля Києва.","pnf":"СТОРІНКУ НЕ ЗНАЙДЕНО","pnf-reas":"Можливо вона була видалена або Ви набрали неправильну адресу.","go-main":"Перейти на Головну сторінку","Main":"Головна","adv1":"Розташування","adv2":"Інфраструктура","adv3":"Турбота про дітей","adv4":"Заповідна зона","adv5":"Якісні матеріали","adv6":"Відпочинок","adv7":"Безпека","adv8":"Якість кінцевого продукту","Projects":"Котеджі","head-proj":"Котеджі","other-proj":"Інші котеджі","proj-title":"Котеджі - Котеджне містечко «Вітаград»","proj-desc":"Наші котеджі дозволяють реалізувати мрії про життя в сучасному інтер'єрі сімейного будинку. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","proj-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","R1-title":"Котедж «Райт-1»","R-desc":"Сучасний енергозберігаючий пасивний будинок. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","R-keyw":"энергосберегающий пассивный дом, купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","R2-title":"Котедж «Райт-2»","R3-title":"Котедж «Райт-3»","R4-title":"Котедж «Райт-4»","R5-title":"Котедж «Райт-5»","R6-title":"Котедж «Райт-6»","R7-title":"Котедж «Райт-7»","R8-title":"Котедж «Райт-8»","R9-title":"Котедж «Райт-9»","R10-title":"Котедж «Райт-10»","R11-title":"Котедж «Райт-11»","R12-title":"Котедж «Райт-12»","R13-title":"Котедж «Райт-13»","R14-title":"Котедж «Райт-14»","R15-title":"Котедж «Райт-15»","R16-title":"Котедж «Райт-16»","R17-title":"Котедж «Райт-17»","R18-title":"Котедж «Райт-18»","R19-title":"Котедж «Райт-19»","R20-title":"Котедж «Райт-20»","R21-title":"Котедж «Райт-21»","R22-title":"Котедж «Райт-22»","R23-title":"Котедж «Райт-23»","R24-title":"Котедж «Райт-24»","R25-title":"Котедж «Райт-25»","R26-title":"Котедж «Райт-26»","R27-title":"Котедж «Райт-27»","R28-title":"Котедж «Райт-28»","R29-title":"Котедж «Райт-29»","R30-title":"Котедж «Райт-30»","R31-title":"Котедж «Райт-31»","R32-title":"Котедж «Райт-32»","R33-title":"Котедж «Райт-33»","R34-title":"Котедж «Райт-34»","R35-title":"Котедж «Райт-35»","R36-title":"Котедж «Райт-36»","R37-title":"Котедж «Райт-37»","R38-title":"Котедж «Райт-38»","R39-title":"Котедж «Райт-39»","R40-title":"Котедж «Райт-40»","R41-title":"Котедж «Райт-41»","R42-title":"Котедж «Райт-42»","R43-title":"Котедж «Райт-43»","R44-title":"Котедж «Райт-44»","R45-title":"Котедж «Райт-45»","R46-title":"Котедж «Райт-46»","R47-title":"Котедж «Райт-47»","R48-title":"Котедж «Райт-48»","R49-title":"Котедж «Райт-49»","R50-title":"Котедж «Райт-50»","R51-title":"Котедж «Райт-51»","R52-title":"Котедж «Райт-52»","R53-title":"Котедж «Райт-53»","R54-title":"Котедж «Райт-54»","R55-title":"Котедж «Райт-55»","R56-title":"Котедж «Райт-56»","R58-title":"Котедж «Райт-58»","R59-title":"Котедж «Райт-59»","R60-title":"Котедж «Райт-60»","R61-title":"Котедж «Райт-61»","Technology":"Технології","Materials":"Матеріали","materials-title":"Матеріали - Котеджне містечко «Вітаград»","materials-desc":"Ми використовуємо найкраще поєднання матеріалів від Європейських та кращих Українських виробників","materials-keyw":"энергосберегающий пассивный дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, купить дом под киевом, котеджне містечко, котеджне містечко під києвом, котеджні містечка біля києва, котеджні містечка під києвом, котеджі","heat-pumps":"Теплові насоси","heatpumps-desc":"Теплові насоси","heatpumps-keyw":"Теплові насоси","bioseptic":"Біосептик","bioseptic-desc":"Біосептик","bioseptic-keyw":"Біосептик","Genplan":"Генплан","gen-title":"Генплан - Котеджне містечко «Вітаград»","img-genplan":"Генплан котеджного містечка «Вітаград»","Infrastructure":"Інфраструктура","infr-title":"Інфраструктура - Котеджне містечко «Вітаград»","infr-desc":"Містечко розташоване за Києвом, що дозволяє насолоджуватись природою і тишею поза міської метушні. Вітаград межує з Голосіївським національним природним парком","Video":"Відео","video-title":"Відео - Котеджне містечко «Вітаград»","Gallery":"Галерея","Contacts":"Контакти","cont-title":"Контакти","cont-desc":"Берегова 50, Ходосівка, Київська область. тел.: +38 (096) 054-11-11, +38 (063) 450-11-11","cont-keyw":"купить дом, купити будинок, купить котедж, купить коттедж, купити котедж, дома котедж, продажа котедж, загородный дом, купить дом в киевской обл, коттеджный городок, коттеджные городки киева, купить дом под киевом, купить участок, котеджне містечко, котеджне містечко під києвом, котеджні містечка, котеджні містечка біля києва, котеджні містечка під києвом, котеджі, куплю дом киев","call":"Телефонуйте","callText":"Виїзний тур","tour":"Поїздка до містечка","btn-Callback":"Замовити","btn-Send":"Відправити","btn-Close":"Закрити","your-name":"Ваше ім'я","date-time":"Дата та час","text-callback":"Вкажіть зручний для Вас час поїздки до котеджного містечка","head-tour":"Ознайомчий тур до містечка","callback-title":"Дякуємо за замовлення","sent-callback":"Ваше повідомлення відправлене","text-sent-callback":"Найближчим часом наші фахівці зв'яжуться з Вами.","enter-phone":"Введіть тут ваш номер","we-call-you":"Ми скоро зателефонуєм вам!","requestCall":"Замовити дзвінок","alreadyCall":"Вже набираємо вас","cottage":"Котедж","other-cottage":"Інші котеджі","spec-room":"Специфікація приміщень","all-area":"Загальна площа","area1":"Загальна","area2":":Житлова","area":"Площа","size-ground":"Земельна ділянка","floor1":"1 поверх","floor2":"2 поверх","tambour":"Тамбур","hallway":"Передпокій","kitchen":"Кухня","kitchen-livingroom":"Кухня-вітальня","kitchen-diningroom":"Кухня-столова","kitchen-studio":"Кухня-студія","kitchen-storeroom":"Комора кухні","diningroom":"Їдальня","livingroom":"Вітальня","storeroom":"Комора","bedroom":"Спальня","main-bedroom":"Головна спальня","child-bedroom":"Дитяча спальня","child-room":"Дитяча кімната","room":"Кімната","visitor-bedroom":"Гостьова спальня","sanblock":"Санвузол","kotel":"Котельня","laundry":"Постірочна","kotel-prach":"Котельня-постірочна","garage":"Гараж","hall":"Хол","wardrobe":"Гардероб","cabinet":"Кабінет","gym":"Спортзал","veranda":"Веранда","sauna":"Сауна","showerroom":"Душова","lounge":"Лаунж-зона","restroom":"Кімната відпочинку","ALL-AREA":"Загальна площа","stena":"Стіни","kirp":"цегла","dax":"Дах","pomesh":"Приміщення","terrace":"Тераса","carport":"Навіс для авто","stud":"Студія","ved-mater":"Відомість матеріалів","cher":"бітумна черепиця","roof":"Покрівля","window":"Вікна","warmerwall":"Утеплювач стін","warmerroof":"Теплоізоляція даху","facing":"Облицювальні матеріали","plan":"Планування","plan1":"План першого поверху","plan2":"План другого поверху","our-partner":"Наші партнери щодо інтер’єру","example-interior":"Приклади можливого інтер’єру","stock1":"Вигідна пропозиція","stock2":"Купуй зараз<br>та отримай<br>у подарунок","stock3":"індивідуальне<br>планування","stock4":"До закінчення акції залишилося","stock5":"днів","stock6":"годин","stock7":"хвилин","stock8":"секунд","inside":"На території містечка","outside":"Поряд з містечком","roads":"Асфальтовані дороги","lights":"Вуличне освітлення","playground":"Дитячий майданчик","bakery":"Домашня пекарня","coffee":"Кав’ярня","restaurant":"Ресторан","security":"Власна охорона","GKU":"Житлово-комунальне управління","kindergarten":"Дитячий садочок","eco-market":"Еко - маркет","spa-salon":"Спа - салон","beach":"Обладнаний пляж","trade-center":"Торгівельний центр «Мегамаркет»","outlet":"Аутлет-містечко «Мануфактура»","cinema":"Кінотеатр «Баттерфляй-кантрі»","fitness":"Фітнес центр «Дельтаплан»","bank":"Банк","hospital":"Клініка","school":"Школа-садок","kinder-center":"Дитячий розважальний центр «Дакленд»","cafe":"Кафе, ресторани","fuel":"АЗС","horse-club":"Кінно - спортивний клуб","park":"Голосіївський національний природний парк","example":"Приклад","agent-contacts":"Контактна інформація","agent-tech":"ЗАПИТАЙТЕ ПРО ТЕХНОЛОГІЇ","qw-tech":"Привіт, в мене питання про технології ...","agent-materials":"ЗАПИТАЙТЕ ПРО МАТЕРІАЛИ","qw-materials":"Привіт, в мене питання про матеріали ...","agent-project":"ЗАПИТАЙТЕ ПРО КОТЕДЖ","qw-project":"Привіт, в мене питання про котедж ...","agent-tour":"ЗАМОВИТИ ТУР","qw-tour":"Привіт, хочу замовити поїздку до містечка ...","built":"Побудований","specific":"Специфікація приміщень","tech-indicators":"Техніко-економічні показники","built-area":"Площа забудови","total-area":"Загальна площа","live-area":"Житлова площа","built-height":"Умовна висота","floors":"Поверховість","rooms":"Кімнат","base-params":"Базові характеристики","desc":"Опис","all":"Всі","over":"більше","gallery":"Галерея"});
TAPi18n._registerServerTranslator("uk", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// server/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
let Meteor;
module.watch(require("meteor/meteor"), {
    Meteor(v) {
        Meteor = v;
    }

}, 0);
module.watch(require("/imports/vit/server"));

if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.settings.contactForm = {
            emailTo: 'alex1809freelancer@gmail.com'
        };
        let usr = 'postmaster@sandbox6ed09346cd4947fbb4f0aec6b0faf1de.mailgun.org';
        let pass = '80e47a95fe8113c6b6b9cfefcf80236f';
        process.env.MAIL_URL = "smtps://" + usr + ":" + pass + "@smtp.mailgun.org:465"; // PRERENDER

        let PrerenderIO = {
            "token": "3rrVz5KtZ7kB3JuQ3RmY",
            "host": "www.vitagrad.com"
        };

        const prerenderio = Npm.require('prerender-node'); //const settings = Meteor.settings.PrerenderIO;


        if (PrerenderIO && PrerenderIO.token && PrerenderIO.host) {
            prerenderio.set('prerenderToken', PrerenderIO.token);
            prerenderio.set('host', PrerenderIO.host); // prerenderio.set('protocol', 'http');

            WebApp.rawConnectHandlers.use(prerenderio);
        } /////////
        //console.log( PrerenderIO);


        robots.addLine('User-agent: *');
        robots.addLine('Disallow: ');
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./i18n/en.i18n.json");
require("./i18n/ru.i18n.json");
require("./i18n/uk.i18n.json");
require("./server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy92aXQvYXBpL3NlcnZlci9zaXRlbWFwcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy92aXQvYXBpL21ldGhvZHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvdml0L3NlcnZlci9pbmRleC5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsic2l0ZW1hcHMiLCJhZGQiLCJhbGxQYWdlcyIsInB1c2giLCJwYWdlIiwibGFzdG1vZCIsIkRhdGUiLCJjaGFuZ2VmcmVxIiwicHJpb3JpdHkiLCJNZXRlb3IiLCJtb2R1bGUiLCJ3YXRjaCIsInJlcXVpcmUiLCJ2IiwiXyIsImlzU2VydmVyIiwibWV0aG9kcyIsIm1haWxGaWVsZHMiLCJ1bmJsb2NrIiwiTWFpbGd1biIsInNlbmQiLCJiY2MiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJlcnJvciIsInJlc3VsdCIsInN0YXJ0dXAiLCJzZXR0aW5ncyIsImNvbnRhY3RGb3JtIiwiZW1haWxUbyIsInVzciIsInBhc3MiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9VUkwiLCJQcmVyZW5kZXJJTyIsInByZXJlbmRlcmlvIiwiTnBtIiwidG9rZW4iLCJob3N0Iiwic2V0IiwiV2ViQXBwIiwicmF3Q29ubmVjdEhhbmRsZXJzIiwidXNlIiwicm9ib3RzIiwiYWRkTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFNBQVNDLEdBQVQsQ0FBYSxjQUFiLEVBQTZCLFlBQVc7QUFDcEM7QUFDQTtBQUVBLFFBQUlDLFdBQVcsRUFBZjtBQUNBQSxhQUFTQyxJQUFULENBQWM7QUFBRUMsY0FBTSxrQkFBUjtBQUE0QkMsaUJBQVMsSUFBSUMsSUFBSixFQUFyQztBQUFpREMsb0JBQVksUUFBN0Q7QUFBdUVDLGtCQUFVO0FBQWpGLEtBQWQ7QUFDQU4sYUFBU0MsSUFBVCxDQUFjO0FBQUVDLGNB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a0JBQVAsQ0FBMEJDLEdBQTFCLENBQThCUCxXQUE5QjtBQUNILFNBeEJzQixDQXlCdkI7QUFDQTs7O0FBQ0FRLGVBQU9DLE9BQVAsQ0FBZSxlQUFmO0FBQ0FELGVBQU9DLE9BQVAsQ0FBZSxZQUFmO0FBSUgsS0FoQ0Q7QUFpQ0gsQyIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsic2l0ZW1hcHMuYWRkKCcvc2l0ZW1hcC54bWwnLCBmdW5jdGlvbigpIHtcbiAgICAvLyByZXF1aXJlZDogcGFnZVxuICAgIC8vIG9wdGlvbmFsOiBsYXN0bW9kLCBjaGFuZ2VmcmVxLCBwcmlvcml0eSwgeGh0bWxMaW5rcywgaW1nLCB2aWRlb3NcblxuICAgIGxldCBhbGxQYWdlcyA9IFtdO1xuICAgIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbScsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMSB9KTtcbiAgICBhbGxQYWdlcy5wdXNoKHsgcGFnZTogJ3d3dy52aXRhZ3JhZC5jb20vY29udGFjdHMnLCBsYXN0bW9kOiBuZXcgRGF0ZSgpLCBjaGFuZ2VmcmVxOiAnYWx3YXlzJywgcHJpb3JpdHk6IDAuOSB9KTtcbiAgICBhbGxQYWdlcy5wdXNoKHsgcGFnZTogJ3d3dy52aXRhZ3JhZC5jb20vcHJvamVjdCcsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS9nZW5wbGFuJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL2luZnJhc3RydWN0dXJlJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3RlY2hub2xvZ3kvaGVhdHB1bXBzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL21hdGVyaWFscycsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS92aWRlbycsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIC8vIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS9wcm9qZWN0UmlnaHQxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7YWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3J1L3Byb2plY3RSaWdodDEnLCBsYXN0bW9kOiBuZXcgRGF0ZSgpLCBjaGFuZ2VmcmVxOiAnYWx3YXlzJywgcHJpb3JpdHk6IDAuOSB9KTtcbiAgICAvLyBhbGxQYWdlcy5wdXNoKHsgcGFnZTogJ3d3dy52aXRhZ3JhZC5jb20vcHJvamVjdFJpZ2h0MicsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIC8vIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS9wcm9qZWN0UmlnaHQzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQnLCBsYXN0bW9kOiBuZXcgRGF0ZSgpLCBjaGFuZ2VmcmVxOiAnYWx3YXlzJywgcHJpb3JpdHk6IDAuOSB9KTtcbiAgICAvLyBhbGxQYWdlcy5wdXNoKHsgcGFnZTogJ3d3dy52aXRhZ3JhZC5jb20vcHJvamVjdFJpZ2h0NScsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIC8vIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS9wcm9qZWN0UmlnaHQ2JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDcnLCBsYXN0bW9kOiBuZXcgRGF0ZSgpLCBjaGFuZ2VmcmVxOiAnYWx3YXlzJywgcHJpb3JpdHk6IDAuOSB9KTtcbiAgICAvLyBhbGxQYWdlcy5wdXNoKHsgcGFnZTogJ3d3dy52aXRhZ3JhZC5jb20vcHJvamVjdFJpZ2h0OCcsIGxhc3Rtb2Q6IG5ldyBEYXRlKCksIGNoYW5nZWZyZXE6ICdhbHdheXMnLCBwcmlvcml0eTogMC45IH0pO1xuICAgIC8vIGFsbFBhZ2VzLnB1c2goeyBwYWdlOiAnd3d3LnZpdGFncmFkLmNvbS9wcm9qZWN0UmlnaHQ5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDEwJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDExJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDEyJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDE0JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDE1JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDE3JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDE4JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDE5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDIwJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDIxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDIyJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDIzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI0JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI1JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI2JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI3JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI4JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDI5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDMwJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDMxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDMyJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDMzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDM1JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDM2JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDM3JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDM4JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDM5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQwJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQyJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ0JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ1JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ2JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ3JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ4JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDQ5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDUxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDUzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDUzJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU0JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU1JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU2JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgLy8gYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU3JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU4JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDU5JywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDYwJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgYWxsUGFnZXMucHVzaCh7IHBhZ2U6ICd3d3cudml0YWdyYWQuY29tL3Byb2plY3RSaWdodDYxJywgbGFzdG1vZDogbmV3IERhdGUoKSwgY2hhbmdlZnJlcTogJ2Fsd2F5cycsIHByaW9yaXR5OiAwLjkgfSk7XG4gICAgcmV0dXJuIGFsbFBhZ2VzO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IF8gfSBmcm9tICdtZXRlb3IvdW5kZXJzY29yZSc7XG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuICAgIE1ldGVvci5tZXRob2RzKHtcbiAgICAgICAgJ3NlbmRNZXNzJzogZnVuY3Rpb24gKG1haWxGaWVsZHMpIHtcbiAgICAgICAgICAgIHRoaXMudW5ibG9jaygpO1xuICAgICAgICAgICAgTWV0ZW9yLk1haWxndW4uc2VuZCh7XG4gICAgICAgICAgICAgICAgYmNjOiBtYWlsRmllbGRzLnRvLFxuICAgICAgICAgICAgICAgIGZyb206IG1haWxGaWVsZHMuZnJvbSxcbiAgICAgICAgICAgICAgICBzdWJqZWN0OiBtYWlsRmllbGRzLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgdGV4dDogbWFpbEZpZWxkcy50ZXh0LFxuICAgICAgICAgICAgICAgIGh0bWw6IG1haWxGaWVsZHMuaHRtbFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQn9C+0LzQuNC70LrQsCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICfQktGW0LTQv9GA0LDQstC70LXQvdC+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImltcG9ydCAnLi4vYXBpL3NlcnZlci9wdWJzJztcbmltcG9ydCAnLi4vYXBpL21ldGhvZHMnO1xuaW1wb3J0ICcuLi9hcGkvc2VydmVyL3NpdGVtYXBzJyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgJy9pbXBvcnRzL3ZpdC9zZXJ2ZXInO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24gKCkge1xuICAgICAgICBNZXRlb3Iuc2V0dGluZ3MuY29udGFjdEZvcm0gPSB7XG4gICAgICAgICAgICBlbWFpbFRvOiAnYWxleDE4MDlmcmVlbGFuY2VyQGdtYWlsLmNvbSdcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdXNyID0gJ3Bvc3RtYXN0ZXJAc2FuZGJveDZlZDA5MzQ2Y2Q0OTQ3ZmJiNGYwYWVjNmIwZmFmMWRlLm1haWxndW4ub3JnJztcbiAgICAgICAgbGV0IHBhc3MgPSAnODBlNDdhOTVmZTgxMTNjNmI2YjljZmVmY2Y4MDIzNmYnO1xuICAgICAgICBwcm9jZXNzLmVudi5NQUlMX1VSTCA9IFwic210cHM6Ly9cIit1c3IrXCI6XCIrcGFzcytcIkBzbXRwLm1haWxndW4ub3JnOjQ2NVwiO1xuXG4gICAgICAgIC8vIFBSRVJFTkRFUlxuICAgICAgICBsZXQgUHJlcmVuZGVySU8gPSB7XG4gICAgICAgICAgICBcInRva2VuXCI6IFwiM3JyVno1S3RaN2tCM0p1UTNSbVlcIixcbiAgICAgICAgICAgIFwiaG9zdFwiOiBcInd3dy52aXRhZ3JhZC5jb21cIlxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY29uc3QgcHJlcmVuZGVyaW8gPSBOcG0ucmVxdWlyZSgncHJlcmVuZGVyLW5vZGUnKTtcbiAgICAgICAgLy9jb25zdCBzZXR0aW5ncyA9IE1ldGVvci5zZXR0aW5ncy5QcmVyZW5kZXJJTztcblxuICAgICAgICBpZiAoUHJlcmVuZGVySU8gJiYgUHJlcmVuZGVySU8udG9rZW4gJiYgUHJlcmVuZGVySU8uaG9zdCkge1xuICAgICAgICAgICAgcHJlcmVuZGVyaW8uc2V0KCdwcmVyZW5kZXJUb2tlbicsIFByZXJlbmRlcklPLnRva2VuKTtcbiAgICAgICAgICAgIHByZXJlbmRlcmlvLnNldCgnaG9zdCcsIFByZXJlbmRlcklPLmhvc3QpO1xuICAgICAgICAgICAgLy8gcHJlcmVuZGVyaW8uc2V0KCdwcm90b2NvbCcsICdodHRwJyk7XG4gICAgICAgICAgICBXZWJBcHAucmF3Q29ubmVjdEhhbmRsZXJzLnVzZShwcmVyZW5kZXJpbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8vLy8vLy8vXG4gICAgICAgIC8vY29uc29sZS5sb2coIFByZXJlbmRlcklPKTtcbiAgICAgICAgcm9ib3RzLmFkZExpbmUoJ1VzZXItYWdlbnQ6IConKTtcbiAgICAgICAgcm9ib3RzLmFkZExpbmUoJ0Rpc2FsbG93OiAnKTtcblxuXG5cbiAgICB9KTtcbn0iXX0=
