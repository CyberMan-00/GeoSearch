const locations = [
  { name: 'United States', url: 'https://www.google.com/webhp', code: 'us', languages: ['en'] },
  { name: 'Afghanistan', url: 'https://www.google.com.af/webhp', code: 'af', languages: ['fa', 'ps'] },
  { name: 'Albania', url: 'https://www.google.al/webhp', code: 'al', languages: ['sq'] },
  { name: 'Algeria', url: 'https://www.google.dz/webhp', code: 'dz', languages: ['ar'] },
  { name: 'American Samoa', url: 'https://www.google.as/webhp', code: 'as', languages: ['en'] },
  { name: 'Andorra', url: 'https://www.google.ad/webhp', code: 'ad', languages: ['ca'] },
  { name: 'Angola', url: 'https://www.google.co.ao/webhp', code: 'ao', languages: ['pt'] },
  { name: 'Anguilla', url: 'https://www.google.com.ai/webhp', code: 'ai', languages: ['en'] },
  { name: 'Antarctica', url: 'https://www.google.com/webhp', code: 'aq', languages: ['en'] },
  { name: 'Antigua and Barbuda', url: 'https://www.google.com.ag/webhp', code: 'ag', languages: ['en'] },
  { name: 'Argentina', url: 'https://www.google.com.ar/webhp', code: 'ar', languages: ['es'] },
  { name: 'Armenia', url: 'https://www.google.am/webhp', code: 'am', languages: ['hy'] },
  { name: 'Aruba', url: 'https://www.google.com.aw/webhp', code: 'aw', languages: ['nl'] },
  { name: 'Australia', url: 'https://www.google.com.au/webhp', code: 'au', languages: ['en'] },
  { name: 'Austria', url: 'https://www.google.at/webhp', code: 'at', languages: ['de'] },
  { name: 'Azerbaijan', url: 'https://www.google.az/webhp', code: 'az', languages: ['az'] },
  { name: 'Bahamas', url: 'https://www.google.bs/webhp', code: 'bs', languages: ['en'] },
  { name: 'Bahrain', url: 'https://www.google.com.bh/webhp', code: 'bh', languages: ['ar'] },
  { name: 'Bangladesh', url: 'https://www.google.com.bd/webhp', code: 'bd', languages: ['bn'] },
  { name: 'Barbados', url: 'https://www.google.com.bb/webhp', code: 'bb', languages: ['en'] },
  { name: 'Belarus', url: 'https://www.google.by/webhp', code: 'by', languages: ['be'] },
  { name: 'Belgium', url: 'https://www.google.be/webhp', code: 'be', languages: ['nl', 'fr', 'de'] },
  { name: 'Belize', url: 'https://www.google.com.bz/webhp', code: 'bz', languages: ['en'] },
  { name: 'Benin', url: 'https://www.google.bj/webhp', code: 'bj', languages: ['fr'] },
  { name: 'Bermuda', url: 'https://www.google.bm/webhp', code: 'bm', languages: ['en'] },
  { name: 'Bhutan', url: 'https://www.google.bt/webhp', code: 'bt', languages: ['dz'] },
  { name: 'Bolivia', url: 'https://www.google.com.bo/webhp', code: 'bo', languages: ['es'] },
  { name: 'Bosnia and Herzegovina', url: 'https://www.google.ba/webhp', code: 'ba', languages: ['bs'] },
  { name: 'Botswana', url: 'https://www.google.co.bw/webhp', code: 'bw', languages: ['en'] },
  { name: 'Bouvet Island', url: 'https://www.google.no/webhp', code: 'bv', languages: ['no'] },
  { name: 'Brazil', url: 'https://www.google.com.br/webhp', code: 'br', languages: ['pt'] },
  { name: 'British Indian Ocean Territory', url: 'https://www.google.com/webhp', code: 'io', languages: ['en'] },
  { name: 'Brunei Darussalam', url: 'https://www.google.com.bn/webhp', code: 'bn', languages: ['ms'] },
  { name: 'Bulgaria', url: 'https://www.google.bg/webhp', code: 'bg', languages: ['bg'] },
  { name: 'Burkina Faso', url: 'https://www.google.bf/webhp', code: 'bf', languages: ['fr'] },
  { name: 'Burundi', url: 'https://www.google.bi/webhp', code: 'bi', languages: ['fr'] },
  { name: 'Cambodia', url: 'https://www.google.com.kh/webhp', code: 'kh', languages: ['km'] },
  { name: 'Cameroon', url: 'https://www.google.cm/webhp', code: 'cm', languages: ['fr'] },
  { name: 'Canada', url: 'https://www.google.ca/webhp', code: 'ca', languages: ['en', 'fr'] },
  { name: 'Cape Verde', url: 'https://www.google.cv/webhp', code: 'cv', languages: ['pt'] },
  { name: 'Cayman Islands', url: 'https://www.google.ky/webhp', code: 'ky', languages: ['en'] },
  { name: 'Central African Republic', url: 'https://www.google.cf/webhp', code: 'cf', languages: ['fr'] },
  { name: 'Chad', url: 'https://www.google.td/webhp', code: 'td', languages: ['fr'] },
  { name: 'Chile', url: 'https://www.google.cl/webhp', code: 'cl', languages: ['es'] },
  { name: 'China', url: 'https://www.google.cn/webhp', code: 'cn', languages: ['zh-CN', 'en'] },
  { name: 'Christmas Island', url: 'https://www.google.cx/webhp', code: 'cx', languages: ['en'] },
  { name: 'Cocos (Keeling) Islands', url: 'https://www.google.cc/webhp', code: 'cc', languages: ['en'] },
  { name: 'Colombia', url: 'https://www.google.com.co/webhp', code: 'co', languages: ['es'] },
  { name: 'Comoros', url: 'https://www.google.km/webhp', code: 'km', languages: ['ar'] },
  { name: 'Congo', url: 'https://www.google.cg/webhp', code: 'cg', languages: ['fr'] },
  { name: 'Cook Islands', url: 'https://www.google.co.ck/webhp', code: 'ck', languages: ['en'] },
  { name: 'Costa Rica', url: 'https://www.google.co.cr/webhp', code: 'cr', languages: ['es'] },
  { name: "CÃ´te d'Ivoire", url: 'https://www.google.ci/webhp', code: 'ci', languages: ['fr'] },
  { name: 'Croatia', url: 'https://www.google.hr/webhp', code: 'hr', languages: ['hr'] },
  { name: 'Cuba', url: 'https://www.google.com.cu/webhp', code: 'cu', languages: ['es'] },
  { name: 'Cyprus', url: 'https://www.google.com.cy/webhp', code: 'cy', languages: ['el'] },
  { name: 'Czech Republic', url: 'https://www.google.cz/webhp', code: 'cz', languages: ['cs'] },
  { name: 'Denmark', url: 'https://www.google.dk/webhp', code: 'dk', languages: ['da'] },
  { name: 'Djibouti', url: 'https://www.google.dj/webhp', code: 'dj', languages: ['fr'] },
  { name: 'Dominica', url: 'https://www.google.dm/webhp', code: 'dm', languages: ['en'] },
  { name: 'Dominican Republic', url: 'https://www.google.com.do/webhp', code: 'do', languages: ['es'] },
  { name: 'Ecuador', url: 'https://www.google.com.ec/webhp', code: 'ec', languages: ['es'] },
  { name: 'Egypt', url: 'https://www.google.com.eg/webhp', code: 'eg', languages: ['ar'] },
  { name: 'El Salvador', url: 'https://www.google.com.sv/webhp', code: 'sv', languages: ['es'] },
  { name: 'Equatorial Guinea', url: 'https://www.google.com.gq/webhp', code: 'gq', languages: ['es', 'fr', 'pt'] },
  { name: 'Eritrea', url: 'https://www.google.er/webhp', code: 'er', languages: ['en'] },
  { name: 'Estonia', url: 'https://www.google.ee/webhp', code: 'ee', languages: ['et'] },
  { name: 'Ethiopia', url: 'https://www.google.com.et/webhp', code: 'et', languages: ['am', 'en', 'om'] },
  { name: 'Falkland Islands (Malvinas)', url: 'https://www.google.com.fk/webhp', code: 'fk', languages: ['en'] },
  { name: 'Faroe Islands', url: 'https://www.google.fo/webhp', code: 'fo', languages: ['fo'] },
  { name: 'Fiji', url: 'https://www.google.com.fj/webhp', code: 'fj', languages: ['en', 'fj'] },
  { name: 'Finland', url: 'https://www.google.fi/webhp', code: 'fi', languages: ['fi'] },
  { name: 'France', url: 'https://www.google.fr/webhp', code: 'fr', languages: ['fr'] },
  { name: 'French Guiana', url: 'https://www.google.gf/webhp', code: 'gf', languages: ['fr'] },
  { name: 'French Polynesia', url: 'https://www.google.pf/webhp', code: 'pf', languages: ['fr'] },
  { name: 'French Southern Territories', url: 'https://www.google.tf/webhp', code: 'tf', languages: ['fr'] },
  { name: 'Gabon', url: 'https://www.google.ga/webhp', code: 'ga', languages: ['fr'] },
  { name: 'Gambia', url: 'https://www.google.gm/webhp', code: 'gm', languages: ['en'] },
  { name: 'Georgia', url: 'https://www.google.ge/webhp', code: 'ge', languages: ['ka'] },
  { name: 'Germany', url: 'https://www.google.de/webhp', code: 'de', languages: ['de'] },
  { name: 'Ghana', url: 'https://www.google.com.gh/webhp', code: 'gh', languages: ['en'] },
  { name: 'Gibraltar', url: 'https://www.google.com.gi/webhp', code: 'gi', languages: ['en'] },
  { name: 'Greece', url: 'https://www.google.gr/webhp', code: 'gr', languages: ['el'] },
  { name: 'Greenland', url: 'https://www.google.gl/webhp', code: 'gl', languages: ['kl'] },
  { name: 'Grenada', url: 'https://www.google.gd/webhp', code: 'gd', languages: ['en'] },
  { name: 'Guadeloupe', url: 'https://www.google.gp/webhp', code: 'gp', languages: ['fr'] },
  { name: 'Guam', url: 'https://www.google.com.gu/webhp', code: 'gu', languages: ['en'] },
  { name: 'Guatemala', url: 'https://www.google.com.gt/webhp', code: 'gt', languages: ['es'] },
  { name: 'Guernsey', url: 'https://www.google.gg/webhp', code: 'gg', languages: ['en'] },
  { name: 'Guinea', url: 'https://www.google.gn/webhp', code: 'gn', languages: ['fr'] },
  { name: 'Guinea-Bissau', url: 'https://www.google.gw/webhp', code: 'gw', languages: ['pt'] },
  { name: 'Guyana', url: 'https://www.google.gy/webhp', code: 'gy', languages: ['en'] },
  { name: 'Haiti', url: 'https://www.google.ht/webhp', code: 'ht', languages: ['fr'] },
  { name: 'Heard Island and McDonald Islands', url: 'https://www.google.com/webhp', code: 'hm', languages: ['en'] },
  { name: 'Holy See (Vatican City State)', url: 'https://www.google.va/webhp', code: 'va', languages: ['it', 'la'] },
  { name: 'Honduras', url: 'https://www.google.hn/webhp', code: 'hn', languages: ['es'] },
  { name: 'Hong Kong', url: 'https://www.google.com.hk/webhp', code: 'hk', languages: ['zh-CN', 'en'] },
  { name: 'Hungary', url: 'https://www.google.hu/webhp', code: 'hu', languages: ['hu'] },
  { name: 'Iceland', url: 'https://www.google.is/webhp', code: 'is', languages: ['is'] },
  { name: 'India', url: 'https://www.google.co.in/webhp', code: 'in', languages: ['hi', 'en'] },
  { name: 'Indonesia', url: 'https://www.google.co.id/webhp', code: 'id', languages: ['id'] },
  { name: 'Iran, Islamic Republic of', url: 'https://www.google.ir/webhp', code: 'ir', languages: ['fa'] },
  { name: 'Iraq', url: 'https://www.google.iq/webhp', code: 'iq', languages: ['ar', 'ku'] },
  { name: 'Ireland', url: 'https://www.google.ie/webhp', code: 'ie', languages: ['en', 'ga'] },
  { name: 'Isle of Man', url: 'https://www.google.im/webhp', code: 'im', languages: ['en'] },
  { name: 'Israel', url: 'https://www.google.co.il/webhp', code: 'il', languages: ['he', 'ar'] },
  { name: 'Italy', url: 'https://www.google.it/webhp', code: 'it', languages: ['it'] },
  { name: 'Jamaica', url: 'https://www.google.com.jm/webhp', code: 'jm', languages: ['en'] },
  { name: 'Japan', url: 'https://www.google.co.jp/webhp', code: 'jp', languages: ['ja'] },
  { name: 'Jersey', url: 'https://www.google.je/webhp', code: 'je', languages: ['en'] },
  { name: 'Jordan', url: 'https://www.google.jo/webhp', code: 'jo', languages: ['ar'] },
  { name: 'Kazakhstan', url: 'https://www.google.kz/webhp', code: 'kz', languages: ['kk', 'ru'] },
  { name: 'Kenya', url: 'https://www.google.co.ke/webhp', code: 'ke', languages: ['sw', 'en'] },
  { name: 'Kiribati', url: 'https://www.google.ki/webhp', code: 'ki', languages: ['en'] },
  { name: 'Korea, Democratic People\'s Republic of', url: 'https://www.google.com.kp/webhp', code: 'kp', languages: ['ko'] },
  { name: 'Korea, Republic of', url: 'https://www.google.co.kr/webhp', code: 'kr', languages: ['ko'] },
  { name: 'Kuwait', url: 'https://www.google.com.kw/webhp', code: 'kw', languages: ['ar'] },
  { name: 'Kyrgyzstan', url: 'https://www.google.kg/webhp', code: 'kg', languages: ['ky', 'ru'] },
  { name: 'Lao People\'s Democratic Republic', url: 'https://www.google.la/webhp', code: 'la', languages: ['lo'] },
  { name: 'Latvia', url: 'https://www.google.lv/webhp', code: 'lv', languages: ['lv'] },
  { name: 'Lebanon', url: 'https://www.google.com.lb/webhp', code: 'lb', languages: ['ar'] },
  { name: 'Lesotho', url: 'https://www.google.co.ls/webhp', code: 'ls', languages: ['st', 'en'] },
  { name: 'Liberia', url: 'https://www.google.com.lr/webhp', code: 'lr', languages: ['en'] },
  { name: 'Libyan Arab Jamahiriya', url: 'https://www.google.com.ly/webhp', code: 'ly', languages: ['ar'] },
  { name: 'Liechtenstein', url: 'https://www.google.li/webhp', code: 'li', languages: ['de'] },
  { name: 'Lithuania', url: 'https://www.google.lt/webhp', code: 'lt', languages: ['lt'] },
  { name: 'Luxembourg', url: 'https://www.google.lu/webhp', code: 'lu', languages: ['fr', 'de', 'lb'] },
  { name: 'Macao', url: 'https://www.google.com.mo/webhp', code: 'mo', languages: ['zh-CN', 'pt'] },
  { name: 'North Macedonia', url: 'https://www.google.mk/webhp', code: 'mk', languages: ['mk'] },
  { name: 'Madagascar', url: 'https://www.google.mg/webhp', code: 'mg', languages: ['fr', 'mg'] },
  { name: 'Malawi', url: 'https://www.google.mw/webhp', code: 'mw', languages: ['en', 'ny'] },
  { name: 'Malaysia', url: 'https://www.google.com.my/webhp', code: 'my', languages: ['ms'] },
  { name: 'Maldives', url: 'https://www.google.mv/webhp', code: 'mv', languages: ['dv', 'en'] },
  { name: 'Mali', url: 'https://www.google.ml/webhp', code: 'ml', languages: ['fr'] },
  { name: 'Malta', url: 'https://www.google.com.mt/webhp', code: 'mt', languages: ['mt', 'en'] },
  { name: 'Marshall Islands', url: 'https://www.google.fm/webhp', code: 'mh', languages: ['en'] },
  { name: 'Martinique', url: 'https://www.google.mq/webhp', code: 'mq', languages: ['fr'] },
  { name: 'Mauritania', url: 'https://www.google.mr/webhp', code: 'mr', languages: ['ar'] },
  { name: 'Mauritius', url: 'https://www.google.mu/webhp', code: 'mu', languages: ['fr'] },
  { name: 'Mayotte', url: 'https://www.google.yt/webhp', code: 'yt', languages: ['fr'] },
  { name: 'Mexico', url: 'https://www.google.com.mx/webhp', code: 'mx', languages: ['es'] },
  { name: 'Micronesia, Federated States of', url: 'https://www.google.fm/webhp', code: 'fm', languages: ['en'] },
  { name: 'Moldova, Republic of', url: 'https://www.google.md/webhp', code: 'md', languages: ['ro'] },
  { name: 'Monaco', url: 'https://www.google.mc/webhp', code: 'mc', languages: ['fr'] },
  { name: 'Mongolia', url: 'https://www.google.mn/webhp', code: 'mn', languages: ['mn'] },
  { name: 'Montserrat', url: 'https://www.google.ms/webhp', code: 'ms', languages: ['en'] },
  { name: 'Morocco', url: 'https://www.google.co.ma/webhp', code: 'ma', languages: ['ar'] },
  { name: 'Mozambique', url: 'https://www.google.co.mz/webhp', code: 'mz', languages: ['pt'] },
  { name: 'Myanmar', url: 'https://www.google.com.mm/webhp', code: 'mm', languages: ['my'] },
  { name: 'Namibia', url: 'https://www.google.com.na/webhp', code: 'na', languages: ['en'] },
  { name: 'Nauru', url: 'https://www.google.nr/webhp', code: 'nr', languages: ['en'] },
  { name: 'Nepal', url: 'https://www.google.com.np/webhp', code: 'np', languages: ['ne'] },
  { name: 'Netherlands', url: 'https://www.google.nl/webhp', code: 'nl', languages: ['nl'] },
  { name: 'Netherlands Antilles', url: 'https://www.google.com/webhp', code: 'an', languages: ['nl'] },
  { name: 'New Caledonia', url: 'https://www.google.nc/webhp', code: 'nc', languages: ['fr'] },
  { name: 'New Zealand', url: 'https://www.google.co.nz/webhp', code: 'nz', languages: ['en'] },
  { name: 'Nicaragua', url: 'https://www.google.com.ni/webhp', code: 'ni', languages: ['es'] },
  { name: 'Niger', url: 'https://www.google.ne/webhp', code: 'ne', languages: ['fr'] },
  { name: 'Nigeria', url: 'https://www.google.com.ng/webhp', code: 'ng', languages: ['en'] },
  { name: 'Niue', url: 'https://www.google.nu/webhp', code: 'nu', languages: ['en'] },
  { name: 'Norfolk Island', url: 'https://www.google.com/webhp', code: 'nf', languages: ['en'] },
  { name: 'Northern Mariana Islands', url: 'https://www.google.com/mp/webhp', code: 'mp', languages: ['en'] },
  { name: 'Norway', url: 'https://www.google.no/webhp', code: 'no', languages: ['no'] },
  { name: 'Oman', url: 'https://www.google.com.om/webhp', code: 'om', languages: ['ar'] },
  { name: 'Pakistan', url: 'https://www.google.com.pk/webhp', code: 'pk', languages: ['ur', 'en'] },
  { name: 'Palau', url: 'https://www.google.pw/webhp', code: 'pw', languages: ['en'] },
  { name: 'Palestinian Territory, Occupied', url: 'https://www.google.ps/webhp', code: 'ps', languages: ['ar'] },
  { name: 'Panama', url: 'https://www.google.com.pa/webhp', code: 'pa', languages: ['es'] },
  { name: 'Papua New Guinea', url: 'https://www.google.com.pg/webhp', code: 'pg', languages: ['en'] },
  { name: 'Paraguay', url: 'https://www.google.com.py/webhp', code: 'py', languages: ['es', 'gn'] },
  { name: 'Peru', url: 'https://www.google.com.pe/webhp', code: 'pe', languages: ['es'] },
  { name: 'Philippines', url: 'https://www.google.com.ph/webhp', code: 'ph', languages: ['en'] },
  { name: 'Pitcairn', url: 'https://www.google.pn/webhp', code: 'pn', languages: ['en'] },
  { name: 'Poland', url: 'https://www.google.pl/webhp', code: 'pl', languages: ['pl'] },
  { name: 'Portugal', url: 'https://www.google.pt/webhp', code: 'pt', languages: ['pt'] },
  { name: 'Puerto Rico', url: 'https://www.google.com.pr/webhp', code: 'pr', languages: ['es'] },
  { name: 'Qatar', url: 'https://www.google.com.qa/webhp', code: 'qa', languages: ['ar'] },
  { name: 'RÃ©union', url: 'https://www.google.re/webhp', code: 're', languages: ['fr'] },
  { name: 'Romania', url: 'https://www.google.ro/webhp', code: 'ro', languages: ['ro'] },
  { name: 'Russian Federation', url: 'https://www.google.ru/webhp', code: 'ru', languages: ['ru'] },
  { name: 'Rwanda', url: 'https://www.google.rw/webhp', code: 'rw', languages: ['rw', 'en', 'fr'] },
  { name: 'Saint Helena', url: 'https://www.google.sh/webhp', code: 'sh', languages: ['en'] },
  { name: 'Saint Kitts and Nevis', url: 'https://www.google.kn/webhp', code: 'kn', languages: ['en'] },
  { name: 'Saint Lucia', url: 'https://www.google.com.lc/webhp', code: 'lc', languages: ['en'] },
  { name: 'Saint Pierre and Miquelon', url: 'https://www.google.pm/webhp', code: 'pm', languages: ['fr'] },
  { name: 'Saint Vincent and the Grenadines', url: 'https://www.google.com.vc/webhp', code: 'vc', languages: ['en'] },
  { name: 'Samoa', url: 'https://www.google.ws/webhp', code: 'ws', languages: ['en', 'sm'] },
  { name: 'San Marino', url: 'https://www.google.sm/webhp', code: 'sm', languages: ['it'] },
  { name: 'Sao Tome and Principe', url: 'https://www.google.st/webhp', code: 'st', languages: ['pt'] },
  { name: 'Saudi Arabia', url: 'https://www.google.com.sa/webhp', code: 'sa', languages: ['ar'] },
  { name: 'Senegal', url: 'https://www.google.sn/webhp', code: 'sn', languages: ['fr', 'wo'] },
  { name: 'Serbia and Montenegro', url: 'https://www.google.rs/webhp', code: 'rs', languages: ['sr'] },
  { name: 'Seychelles', url: 'https://www.google.sc/webhp', code: 'sc', languages: ['fr', 'en'] },
  { name: 'Sierra Leone', url: 'https://www.google.com.sl/webhp', code: 'sl', languages: ['en'] },
  { name: 'Singapore', url: 'https://www.google.com.sg/webhp', code: 'sg', languages: ['en', 'zh-CN'] },
  { name: 'Slovakia', url: 'https://www.google.sk/webhp', code: 'sk', languages: ['sk'] },
  { name: 'Slovenia', url: 'https://www.google.si/webhp', code: 'si', languages: ['sl'] },
  { name: 'Solomon Islands', url: 'https://www.google.com.sb/webhp', code: 'sb', languages: ['en'] },
  { name: 'Somalia', url: 'https://www.google.so/webhp', code: 'so', languages: ['so', 'ar'] },
  { name: 'South Africa', url: 'https://www.google.co.za/webhp', code: 'za', languages: ['af', 'en', 'zu', 'xh', 'st', 'tn', 'ts', 've', 'xh'] },
  { name: 'South Georgia and the South Sandwich Islands', url: 'https://www.google.gs/webhp', code: 'gs', languages: ['en'] },
  { name: 'Spain', url: 'https://www.google.es/webhp', code: 'es', languages: ['es'] },
  { name: 'Sri Lanka', url: 'https://www.google.lk/webhp', code: 'lk', languages: ['si', 'ta'] },
  { name: 'Sudan', url: 'https://www.google.com.sd/webhp', code: 'sd', languages: ['ar', 'en'] },
  { name: 'Suriname', url: 'https://www.google.sr/webhp', code: 'sr', languages: ['nl'] },
  { name: 'Svalbard and Jan Mayen', url: 'https://www.google.no/webhp', code: 'sj', languages: ['no'] },
  { name: 'Swaziland', url: 'https://www.google.com.sz/webhp', code: 'sz', languages: ['en', 'ss'] },
  { name: 'Sweden', url: 'https://www.google.se/webhp', code: 'se', languages: ['sv'] },
  { name: 'Switzerland', url: 'https://www.google.ch/webhp', code: 'ch', languages: ['de', 'fr', 'it'] },
  { name: 'Syrian Arab Republic', url: 'https://www.google.com.sy/webhp', code: 'sy', languages: ['ar'] },
  { name: 'Taiwan, Province of China', url: 'https://www.google.com.tw/webhp', code: 'tw', languages: ['zh-TW'] },
  { name: 'Tajikistan', url: 'https://www.google.com.tj/webhp', code: 'tj', languages: ['tg', 'ru'] },
  { name: 'Tanzania, United Republic of', url: 'https://www.google.co.tz/webhp', code: 'tz', languages: ['sw', 'en'] },
  { name: 'Thailand', url: 'https://www.google.co.th/webhp', code: 'th', languages: ['th'] },
  { name: 'Timor-Leste', url: 'https://www.google.tl/webhp', code: 'tl', languages: ['pt'] },
  { name: 'Togo', url: 'https://www.google.tg/webhp', code: 'tg', languages: ['fr'] },
  { name: 'Tokelau', url: 'https://www.google.tk/webhp', code: 'tk', languages: ['en'] },
  { name: 'Tonga', url: 'https://www.google.to/webhp', code: 'to', languages: ['en'] },
  { name: 'Trinidad and Tobago', url: 'https://www.google.tt/webhp', code: 'tt', languages: ['en'] },
  { name: 'Tunisia', url: 'https://www.google.tn/webhp', code: 'tn', languages: ['ar', 'fr'] },
  { name: 'Turkey', url: 'https://www.google.com.tr/webhp', code: 'tr', languages: ['tr'] },
  { name: 'Turkmenistan', url: 'https://www.google.tm/webhp', code: 'tm', languages: ['tk', 'ru'] },
  { name: 'Turks and Caicos Islands', url: 'https://www.google.tc/webhp', code: 'tc', languages: ['en'] },
  { name: 'Tuvalu', url: 'https://www.google.tv/webhp', code: 'tv', languages: ['en'] },
  { name: 'Uganda', url: 'https://www.google.co.ug/webhp', code: 'ug', languages: ['sw', 'en'] },
  { name: 'Ukraine', url: 'https://www.google.com.ua/webhp', code: 'ua', languages: ['uk', 'ru'] },
  { name: 'United Arab Emirates', url: 'https://www.google.ae/webhp', code: 'ae', languages: ['ar'] },
  { name: 'United Kingdom', url: 'https://www.google.co.uk/webhp', code: 'uk', languages: ['en'] },
  { name: 'United States', url: 'https://www.google.com/webhp', code: 'us', languages: ['en'] },
  { name: 'United States Minor Outlying Islands', url: 'https://www.google.com/webhp', code: 'um', languages: ['en'] },
  { name: 'Uruguay', url: 'https://www.google.com.uy/webhp', code: 'uy', languages: ['es'] },
  { name: 'Uzbekistan', url: 'https://www.google.co.uz/webhp', code: 'uz', languages: ['uz', 'ru'] },
  { name: 'Vanuatu', url: 'https://www.google.vu/webhp', code: 'vu', languages: ['bi', 'en', 'fr'] },
  { name: 'Venezuela', url: 'https://www.google.co.ve/webhp', code: 've', languages: ['es'] },
  { name: 'Viet Nam', url: 'https://www.google.com.vn/webhp', code: 'vn', languages: ['vi'] },
  { name: 'Virgin Islands, British', url: 'https://www.google.vg/webhp', code: 'vg', languages: ['en'] },
  { name: 'Virgin Islands, U.S.', url: 'https://www.google.com.vi/webhp', code: 'vi', languages: ['en'] },
  { name: 'Wallis and Futuna', url: 'https://www.google.wf/webhp', code: 'wf', languages: ['fr'] },
  { name: 'Western Sahara', url: 'https://www.google.com/webhp', code: 'eh', languages: ['ar'] },
  { name: 'Yemen', url: 'https://www.google.com.ye/webhp', code: 'ye', languages: ['ar'] },
  { name: 'Zambia', url: 'https://www.google.co.zm/webhp', code: 'zm', languages: ['en'] },
  { name: 'Zimbabwe', url: 'https://www.google.co.zw/webhp', code: 'zw', languages: ['en', 'sn', 'nd'] }
];

function populateCountryDropdown() {
  const countryDropdown = document.getElementById('country');

  // Populate country dropdown
  for (const location of locations) {
    const option = document.createElement('option');
    option.text = location.name;
    option.value = location.code;
    countryDropdown.add(option);
  }
}

function populateLanguageDropdown(selectedCountry) {
  const languageDropdown = document.getElementById('language');
  const selectedLocation = locations.find(location => location.code === selectedCountry);

  // Clear previous language options
  languageDropdown.innerHTML = '';

  // Populate language dropdown based on selected location
  for (const language of selectedLocation.languages) {
    const option = document.createElement('option');
    option.text = language;
    option.value = language;
    languageDropdown.add(option);
  }

  // Set the default language to the first option
  languageDropdown.selectedIndex = 0;
}

function searchFunction() {
  const countryDropdown = document.getElementById('country');
  const languageDropdown = document.getElementById('language');
  const selectedCountry = countryDropdown.value;
  const selectedLanguage = languageDropdown.value;
  const selectedLocation = locations.find(location => location.code === selectedCountry);

  if (selectedCountry && selectedLanguage && selectedLocation) {
    const url = `${selectedLocation.url}?hl=${encodeURIComponent(selectedLanguage)}&gl=${selectedCountry}`;
    window.open(url, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateCountryDropdown();

  const countryDropdown = document.getElementById('country');
  const languageDropdown = document.getElementById('language');

  countryDropdown.addEventListener('change', () => {
    const selectedCountry = countryDropdown.value;
    populateLanguageDropdown(selectedCountry);
  });

  // Set the default language for the initial selected country
  const defaultCountry = countryDropdown.value;
  populateLanguageDropdown(defaultCountry);

  const searchButton = document.getElementById('search');
  searchButton.addEventListener('click', searchFunction);

  // Quick search buttons
  const quickSearchButtons = document.getElementsByClassName('quick-search');
  for (const button of quickSearchButtons) {
    button.addEventListener('click', () => {
      const countryCode = button.dataset.countryCode;
      const languageCode = button.dataset.languageCode;
      const selectedLocation = locations.find(location => location.code === countryCode);

      if (selectedLocation) {
        const url = `${selectedLocation.url}?hl=${encodeURIComponent(languageCode)}&gl=${countryCode}`;
        window.open(url, '_blank');
      }
    });
  }
});
