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

geoSearchBtn.addEventListener('click', function () {

    locations.forEach((item) => {
        let itemAllWords = document.querySelector('.search-title').value;
        let itemMinPriceValue = document.querySelector('.search-price__min').value
        let itemMaxPriceValue = document.querySelector('.search-price__max').value
        let query;
        let url;

        let currencySign = { euro: '€' }
        let noneOfWords = 'amazon'

        // TO DO: add exact match checkbox
        let itemExactWords = ['', itemAllWords]

        // set a file type
        let fileType;
        let fileTypeRadios = document.querySelectorAll('.search-file__document')
        fileTypeRadios.forEach((radio) => {
            if (radio.checked === true) {
                fileType = radio.value
            }
        })

        // search query
        if (itemMinPriceValue != '' && itemMaxPriceValue != '') {
            query = ` ${itemAllWords} AND price ${itemMinPriceValue}${currencySign.euro}..${itemMaxPriceValue}${currencySign.euro} `
            url = `${item.url}/search?q=${query}&as_epq=${itemExactWords[0]}&as_eq=${noneOfWords}&lr=lang_${item.languages[0]}&cr=country${item.code.toUpperCase()}&as_filetype=${fileType}`

        } else if (itemMinPriceValue != '' && itemMaxPriceValue === '') {
            query = ` ${itemAllWords} AND price > ${itemMinPriceValue}${currencySign.euro} `
            url = `${item.url}/search?q=${query}&as_epq=${itemExactWords[0]}&as_eq=${noneOfWords}&lr=lang_${item.languages[0]}&cr=country${item.code.toUpperCase()}&as_filetype=${fileType}`

        } else if (itemMinPriceValue === '' && itemMaxPriceValue != '') {
            query = ` ${itemAllWords} AND price < ${itemMaxPriceValue}${currencySign.euro} `
            url = `${item.url}/search?q=${query}&as_epq=${itemExactWords[0]}&as_eq=${noneOfWords}&lr=lang_${item.languages[0]}&cr=country${item.code.toUpperCase()}&as_filetype=${fileType}`
        } else {
            query = ` "${itemAllWords}" `
            url = `${item.url}/search?q=${query}&as_epq=${itemExactWords[0]}&as_eq=${noneOfWords}&lr=lang_${item.languages[0]}&cr=country${item.code.toUpperCase()}&as_filetype=${fileType}`
        }

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