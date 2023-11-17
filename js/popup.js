'use strict'

const locations = [
    { name: 'United States', url: 'https://www.google.com', code: 'us', languages: ['en', 'en'] },
    { name: 'United Kingdom', url: 'https://www.google.co.uk', code: 'uk', languages: ['en', 'en'] },
    { name: 'France', url: 'https://www.google.fr', code: 'fr', languages: ['fr', 'en'] },
    { name: 'Italy', url: 'https://www.google.it', code: 'it', languages: ['it', 'en'] },
    { name: 'Spain', url: 'https://www.google.es', code: 'es', languages: ['es', 'en'] },
    { name: 'Germany', url: 'https://www.google.de', code: 'de', languages: ['de', 'en'] },
]

const geoSearchBtn = document.querySelector('#geoSearchBtn');

geoSearchBtn.addEventListener('click', function (event) {
    event.preventDefault()

    locations.forEach((item) => {
        let query;
        let url;

        // exact match checkbox
        let itemExactWords = '';
        let itemAllWords = document.querySelector('.search-title').value;
        let itemExactWordsCheckbox = document.querySelector('#strictMatch')
        if (itemExactWordsCheckbox.checked === true) {
            itemExactWords = itemAllWords
        }

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

        url = `${item.url}/search?q=${query}&as_epq=${itemExactWords}&as_eq=${noneOfWords}&lr=lang_${item.languages[0]}&cr=country${item.code.toUpperCase()}&as_sitesearch=${websiteLink}&as_filetype=${fileType}`;
        // let url = `${item.url}/webhp?hl=${item.languages[1]}&gl=${item.code}&q=${query}`
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