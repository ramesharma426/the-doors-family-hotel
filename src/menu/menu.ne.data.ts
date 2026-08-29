import { MenuPanel } from './menu.types';

// Nepali counterpart of menu.data.ts — same structure, items, and prices,
// with category/item names rendered in Devanagari. Brand and product names
// (spirits, beers) are kept in Latin script, matching how they actually
// appear on bottles/menus in Nepal rather than being transliterated.
export const MENU_PANELS_NE: MenuPanel[] = [
  {
    key: 'food',
    label: 'खाना',
    active: true,
    blocks: [
      {
        type: 'category',
        title: 'स्टार्टर',
        items: [
          { name: 'फ्रेन्च फ्राइज', price: '२००' },
          { name: 'चिली चिप्स', price: '२४५' },
          { name: 'हनी चिली पोटेटो', price: '२७५' },
          { name: 'काजु फ्राई', price: '२९५' },
          { name: 'भेज पकौडा', price: '१८५' },
          { name: 'प्याज गरम पकौडा', price: '१८५' },
          { name: 'पनीर पकौडा', price: '३४५' },
          { name: 'पनीर चिली', price: '३४५' },
          { name: 'स्वीट कर्न नुन / मरिच', price: '१९५ / २४५' },
          { name: 'उमालेको भेज', price: '२४५' },
          { name: 'प्याज रिङ', price: '२४५' },
          { name: 'आलु टिम्मुर / थिचेको आलु', price: '१९५' },
          { name: 'आलु जीरा', price: '१५०' },
          { name: 'क्रिस्पी फ्राइड चिकन', price: '३४५' },
          { name: 'चिकन रोस्ट', price: '३७५' },
          { name: 'चिकन ललिपप', price: '२९५' },
          { name: 'चिकन चिली', price: '३४५' },
          { name: 'चिकन ड्रमस्टिक', price: '२९५' },
          { name: 'चिकन तावा', price: '२९५' },
          { name: 'हट विङ्स', price: '३७५' },
          { name: 'भैंसी चिली', price: '३४५' },
          { name: 'भैंसी सुकुटी', price: '२९५' },
          { name: 'ससेज <small>(प्रति प्लेट)</small>', price: '२९५' },
        ],
      },
      {
        type: 'category',
        title: 'चाउचाउ',
        items: [
          { name: 'भेज चाउचाउ', price: '१६५' },
          { name: 'अन्डा चाउचाउ', price: '१८०' },
          { name: 'चिकन / भैंसी चाउचाउ', price: '२००' },
          { name: 'मिक्स चिकन चाउचाउ', price: '२७५' },
          { name: 'मिक्स नन-भेज चाउचाउ', price: '३४५' },
        ],
      },
      {
        type: 'category',
        title: 'भात',
        items: [
          { name: 'भेज फ्राइड राइस', price: '१७५' },
          { name: 'चिकन / भैंसी फ्राइड राइस', price: '२४५' },
          { name: 'अन्डा राइस', price: '१९५' },
          { name: 'चिकन मिक्स फ्राइड राइस', price: '२९५' },
          { name: 'मिक्स नन-भेज फ्राइड राइस', price: '३४५' },
        ],
      },
      {
        type: 'category',
        title: 'बिरयानी',
        items: [
          { name: 'भेज बिरयानी', price: '३४५' },
          { name: 'अन्डा बिरयानी', price: '३९५' },
          { name: 'चिकन बिरयानी', price: '४४५' },
        ],
      },
      {
        type: 'category',
        title: 'तरकारी',
        items: [
          { name: 'भेज मिक्स तरकारी', price: '२७५' },
          { name: 'चिकन करी', price: '३४५' },
        ],
      },
      {
        type: 'category',
        title: 'सादेको परिकार',
        items: [
          { name: 'आलु सादेको', price: '१५०' },
          { name: 'बदाम सादेको', price: '१५०' },
          { name: 'भटमास सादेको', price: '१५०' },
          { name: 'स्वीट कर्न सादेको', price: '१९५' },
          { name: 'भेज मःमः सादेको', price: '१८५' },
          { name: 'वाई वाई सादेको <small>(प्लेन)</small>', price: '१४५' },
          { name: 'वाई वाई सादेको <small>(भैंसी / चिकन)</small>', price: '२४५' },
          { name: 'चिकन उमालेको / फ्राइड सादेको', price: '३४५' },
          { name: 'चिकन मःमः सादेको', price: '२२५' },
          { name: 'भैंसी सादेको', price: '२९५' },
          { name: 'भैंसी सादेको मःमः', price: '२२५' },
          { name: 'ससेज सादेको', price: '१९५' },
        ],
      },
      {
        type: 'category',
        title: 'रोटी',
        items: [
          { name: 'तावा रोटी', price: '३०' },
          { name: 'आलु पराठा', price: '९५' },
          { name: 'पनीर पराठा', price: '१४५' },
          { name: 'चिज आलु पराठा', price: '१९५' },
          { name: 'अन्डा पराठा', price: '१४५' },
          { name: 'चिकन पराठा', price: '२२५' },
        ],
      },
      {
        type: 'category',
        title: 'अन्डाका परिकार',
        items: [
          { name: 'प्लेन अमलेट <small>(२ थान)</small>', price: '९५' },
          { name: 'सनी साइड अप <small>(२ थान)</small>', price: '९५' },
          { name: 'मसला अमलेट <small>(२ थान)</small>', price: '११५' },
        ],
      },
      {
        type: 'category',
        title: 'बर्गर',
        items: [
          { name: 'भेज बर्गर', price: '२४५' },
          { name: 'चिकन ग्रिल्ड बर्गर', price: '२७५' },
          { name: 'चिकन क्रन्ची बर्गर', price: '२९५' },
        ],
      },
      {
        type: 'category',
        title: 'रोल',
        items: [
          { name: 'पनीर काठी रोल', price: '२५०' },
          { name: 'अन्डा रोल', price: '१९५' },
          { name: 'चिकन काठी रोल', price: '२७५' },
        ],
      },
      {
        type: 'category',
        title: 'छोइला परिकार',
        items: [
          { name: 'भेज छोइला पकौडा', price: '२४५' },
          { name: 'पनीर छोइला', price: '२९५' },
          { name: 'चिकन छोइला', price: '२९५' },
          { name: 'भैंसी छोइला', price: '२९५' },
        ],
      },
      {
        type: 'category',
        title: 'ग्रिल्ड परिकार',
        items: [
          { name: 'भेज ग्रिल', price: '२९५' },
          { name: 'सम्पूर्ण ग्रिल्ड माछा', price: '६००' },
        ],
      },
      {
        type: 'category',
        title: 'कम्बो र खाजा',
        items: [
          { name: 'मःमः प्लेटर <small>(भेज)</small>', price: '२७५' },
          { name: 'मःमः प्लेटर <small>(चिकन / भैंसी)</small>', price: '३२५' },
          { name: "डोर्स कम्बो सेट <small>(चिकन)</small>", price: '५९५' },
          { name: 'भेज खाजा सेट', price: '३५०' },
          { name: 'चिकन खाजा सेट', price: '४५०' },
          { name: 'चिकन तावा सेट', price: '३४५' },
          { name: 'भैंसी खाजा सेट', price: '४००' },
        ],
      },
      {
        type: 'table',
        title: 'मःमः',
        wide: true,
        columns: ['किसिम', 'स्टिम', 'झोल', 'फ्राई', 'कोठे', 'छोइला', 'चिली', 'C', 'क्रन्ची'],
        rows: [
          { label: 'भेज', values: ['१२०', '१४०', '१४५', '१७५', '१८०', '१८५', '१८५', '१९५'] },
          { label: 'चिकन', values: ['१६०', '१७५', '१८५', '१९५', '१९५', '२२५', '२२५', '२४५'] },
          { label: 'भैंसी', values: ['१६०', '१७५', '१८५', '१९५', '१९५', '२२५', '२२५', '२४५'] },
        ],
      },
    ],
  },
  {
    key: 'cafe',
    label: 'क्याफे &amp; मकटेल',
    blocks: [
      {
        type: 'category',
        title: 'ताजगी दिने पेय',
        items: [
          { name: 'मिन्ट लाइम रिफ्रेसर', price: '९५' },
          { name: 'लेमन सोडा', price: '९५' },
          { name: 'लेमन पानी', price: '७५' },
        ],
      },
      {
        type: 'category',
        title: 'लेमोनेड',
        items: [
          { name: 'मिन्ट लेमोनेड', price: '१६०' },
          { name: 'प्लेन लेमोनेड', price: '१२५' },
          { name: 'तरबुजा लेमोनेड', price: '१७५' },
        ],
      },
      {
        type: 'category',
        title: 'मोजिटो',
        items: [
          { name: 'भर्जिन मोजिटो', price: '२४५' },
          { name: 'तरबुजा मोजिटो', price: '२७५' },
          { name: 'रेड बुल मोजिटो', price: '२७५' },
        ],
      },
      {
        type: 'category',
        title: 'एन्जल',
        items: [
          { name: 'रेड एन्जल', price: '२४५' },
          { name: 'ब्लु एन्जल', price: '२४५' },
        ],
      },
      {
        type: 'category',
        title: 'मकटेल',
        items: [
          { name: 'सनसेट', price: '२४५' },
          { name: 'सनराइज', price: '२४५' },
          { name: 'ब्ल्याक ओसन सी', price: '२४५' },
        ],
      },
      {
        type: 'category',
        title: 'चिसो पेय',
        items: [
          { name: 'कोक <small>/ मसला</small>', price: '८० / १२०' },
          { name: 'स्प्राइट <small>/ मसला / लेमन</small>', price: '८० / १२०' },
          { name: 'फेन्टा', price: '८०' },
          { name: 'रियल जुस', price: '१५०' },
        ],
      },
      {
        type: 'category',
        title: 'कफी र चिया',
        items: [
          { name: 'दूध चिया', price: '५०' },
          { name: 'कालो चिया <small>/ मसला</small>', price: '३० / ३५' },
          { name: 'लेमन चिया', price: '३५' },
          { name: 'हट लेमन <small>(चिनी)</small>', price: '६५' },
          { name: 'हट लेमन <small>(मह-अदुवा)</small>', price: '१२५' },
          { name: 'पिच चिया', price: '८५' },
          { name: 'पिच आइस टी', price: '१४५' },
          { name: 'लेमन आइस टी', price: '९५' },
          { name: 'हट चकलेट', price: '२२५' },
        ],
      },
      {
        type: 'category',
        title: 'मिल्क सेक',
        items: [{ name: 'चकलेट मिल्क सेक', price: '२४५' }],
      },
      {
        type: 'category',
        title: 'लस्सी',
        items: [
          { name: 'प्लेन लस्सी', price: '१२०' },
          { name: 'मीठो लस्सी', price: '१४०' },
          { name: 'चकलेट लस्सी', price: '१६०' },
        ],
      },
      {
        type: 'category',
        title: 'हुक्का',
        items: [{ name: 'मिन्ट हुक्का', price: '५००' }],
      },
    ],
  },
  {
    key: 'bar',
    label: 'बार',
    blocks: [
      {
        type: 'category',
        title: 'सट',
        items: [
          { name: 'जेगरमाइस्टर', price: '४५०' },
          { name: 'जेगरबम', price: '६००' },
          { name: 'टकिला', price: '५७५' },
        ],
      },
      {
        type: 'category',
        title: 'कॉकटेल',
        items: [
          { name: 'भोड्का मोजिटो', price: '५९५' },
          { name: 'हट रम पन्च', price: '४५०' },
          { name: 'सनसेट कॉकटेल', price: '६२५' },
          { name: 'सनराइज कॉकटेल', price: '६२५' },
          { name: 'ब्ल्याक ओसन सी कॉकटेल', price: '५९५' },
        ],
      },
      {
        type: 'category',
        title: 'वाइन',
        items: [
          { name: 'बिग मास्टर <small>(रेड / ह्वाइट)</small>', price: '१,४००' },
          { name: 'जे.पी. शेने <small>(रेड / ह्वाइट)</small>', price: '३,१००' },
          { name: 'रबर्टसन', price: '२,६००' },
        ],
      },
      {
        type: 'category',
        title: 'बियर',
        items: [
          { name: 'गोर्खा', price: '४७५' },
          { name: 'टुबोर्ग', price: '५७५' },
          { name: 'बाह्रसिंघे पिल्सनर', price: '५७५' },
          { name: 'बाह्रसिंघे हेजी', price: '६००' },
          { name: 'बाह्रसिंघे ड्राफ्ट <small>(पिल्सनर) प्रति 🍺</small>', price: '४००' },
          { name: 'कार्ल्सबर्ग', price: '६७५' },
        ],
      },
      {
        type: 'table',
        title: 'भोड्का',
        wide: true,
        columns: ['ब्रान्ड', '३० मिली', '६० मिली', '९० मिली', '१८० मिली', 'आधा', 'पूरा'],
        rows: [
          { label: '८८४८', values: ['१४५', '२९०', '४३५', '८५०', '१,७००', '३,४००'] },
          { label: 'एब्सोल्युट भोड्का', values: ['३३५', '६७०', '१,०००', '२,०००', '४,०००', '१०,००० (१ लिटर)'] },
        ],
      },
      {
        type: 'table',
        title: 'ह्विस्की',
        wide: true,
        columns: ['ब्रान्ड', '३० ml', '६० ml', '९० ml', '१८० ml', 'आधा', 'पूरा'],
        rows: [
          { label: 'ओल्ड दरबार', values: ['१७५', '३५०', '५२५', '१,०५०', '२,१००', '४,२००'] },
          { label: 'ओल्ड दरबार ब्ल्याक', values: ['२००', '४००', '६००', '१,२००', '२,४००', '४,८००'] },
          { label: 'हिमालयन रिजर्भ', values: ['२००', '४००', '६००', '१,२००', '२,४००', '४,८००'] },
          { label: 'ज्याक ड्यानियल्स', values: ['४००', '८००', '१,१९०', '२,३७५', '४,७५०', '९,५००'] },
          { label: 'ब्ल्याक लेबल', values: ['४२५', '८५०', '१,२५०', '२,५००', '५,०००', '१०,०००'] },
          { label: 'डबल ब्ल्याक लेबल', values: ['४८५', '९७०', '१,४५०', '२,९००', '५,८००', '१४,५००'] },
        ],
      },
    ],
  },
];
