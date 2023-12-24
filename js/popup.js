'use strict'

const locationsConfig = [
    { name: 'United States', url: 'https://www.google.com', code: 'us', languages: ['en', 'en'], alias: 'com' },
    { name: 'United Kingdom', url: 'https://www.google.co.uk', code: 'gb', languages: ['en', 'en'], alias: 'couk' },
    { name: 'France', url: 'https://www.google.fr', code: 'fr', languages: ['fr', 'en'], alias: 'fr' },
    { name: 'Italy', url: 'https://www.google.it', code: 'it', languages: ['it', 'en'], alias: 'it' },
    { name: 'Spain', url: 'https://www.google.es', code: 'es', languages: ['es', 'en'], alias: 'es' },
    { name: 'Germany', url: 'https://www.google.de', code: 'de', languages: ['de', 'en'], alias: 'de' },
]

const geoSearchBtn = document.querySelector('#geoSearchBtn');


// bug: need to click twice to unselect boxes
let geoSearchCheckboxes = document.querySelectorAll('.search-geo__checkbox')

const geoUnselectAllBtn = document.querySelector('.search-geo__unselect')
geoUnselectAllBtn.addEventListener('click', (e) => {
    e.preventDefault()
    geoSearchCheckboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
            checkbox.checked = false;
        }
    })
})
const geoSelectAllBtn = document.querySelector('.search-geo__select')
geoSelectAllBtn.addEventListener('click', (e) => {
    e.preventDefault()
    geoSearchCheckboxes.forEach((checkbox) => {
        if (checkbox.checked === false) {
            checkbox.checked = true;
        }
    })
})


geoSearchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    // geo search checkboxes
    geoSearchCheckboxes = document.querySelectorAll('.search-geo__checkbox')
    let geoFrontier = [];
    geoSearchCheckboxes.forEach((geo) => {
        if (geo.checked === true) {
            geoFrontier.push(geo)
        }
        return geoFrontier;
    })

    let geoSearchLocations = [];
    geoFrontier.forEach((geo) => {
        locationsConfig.forEach((location) => {
            if (geo.value === location.alias) {
                geoSearchLocations.push(location)
            }
            return geoSearchLocations;
        })
    })

    if (geoSearchLocations.length === 0) {
        console.log('empty geolocation checkbox detected')
        return
    }

    // launch search engine logic
    geoSearchLocations.forEach((item) => {
        let query;
        let url;

        // strict match checkbox
        let itemExactWords = '';
        let itemAllWords = document.querySelector('.search-title').value;
        let itemExactWordsCheckbox = document.querySelector('#strictMatch')
        if (itemExactWordsCheckbox.checked === true) {
            itemExactWords = itemAllWords.trim()
        }

        // exlude amazon
        let noneOfWords = '';
        let excludeAmazon = document.querySelector('#excludeAmazon')
        if (excludeAmazon.checked === true) {
            noneOfWords = 'amazon';
        }

        // set price
        let currencySign = { euro: '€' };
        let itemMinPriceValue = document.querySelector('.search-price__min').value
        let itemMaxPriceValue = document.querySelector('.search-price__max').value
        switch (true) {
            case (itemMinPriceValue != '' && itemMaxPriceValue != ''):
                query = `${itemAllWords} AND price ${itemMinPriceValue}${currencySign.euro}..${itemMaxPriceValue}${currencySign.euro}`;
                break;
            case (itemMinPriceValue != '' && itemMaxPriceValue === ''):
                query = `${itemAllWords} AND price > ${itemMinPriceValue}${currencySign.euro}`;
                break;
            case (itemMinPriceValue === '' && itemMaxPriceValue != ''):
                query = `${itemAllWords} AND price < ${itemMaxPriceValue}${currencySign.euro}`;
                break;
            default:
                query = `${itemAllWords}`;
        }

        // set website search
        let websiteLink = '';
        let websiteSearch = document.querySelector('.search-website').value
        switch (true) {
            case (websiteSearch != ''):
                websiteLink = websiteSearch
                websiteLink = websiteLink.trim()
                break;
            default:
                websiteLink = '';
                break;
        }

        // set a file type
        let fileType = '';
        let fileTypeRadios = document.querySelectorAll('.search-file__document')
        fileTypeRadios.forEach((radio) => {
            if (radio.checked === true) {
                fileType = radio.value
            }
        })

        query = query.trim();
        url = `${item.url}/search?q=${query}&as_epq=${itemExactWords}&as_eq=${noneOfWords}&lr=lang_${item.languages[1]}&cr=country${item.code.toUpperCase()}&as_sitesearch=${websiteLink}&as_filetype=${fileType}`;
        openInNewTab(url);
    })
});

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}
// advanced google search api
// https://www.google.com/search?as_q=toys&as_epq=&as_oq=&as_eq=&as_nlo=5&as_nhi=10&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=

// https://www.google.com/
// search?as_q=${allWords}
// &as_epq=${exactWords}
// &as_oq=${anyOfWords}
// &as_eq=${noneOfWords}
// &as_nlo=${minPrice}&as_nhi=${maxPrice}
// &lr=lang_${code}
// &cr=country${CODE}
// &as_qdr=all
// &as_sitesearch=
// &as_occt=any
// &as_filetype=
// &tbs=

// https://www.google.es/search?hl=es-ES&as_q=toys&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=countryES&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=