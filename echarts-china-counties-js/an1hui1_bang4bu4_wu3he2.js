(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('五河县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340322","properties":{"name":"五河县","cp":[117.879486,33.127823],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EAG@EAE@G@AAG@C@CDCDCBCDEFCDEBIDEDEDCFCD@@EFAFCBCDCDCDA@DDDFDDB@B@@@DF@@BH@D@BABBD@@B@@@@@FAFAHADBPDFBFBD@@@BAHEDEDBJJHJFDBDBADE@ABCBABBDDBBH@B@BBBB@B@B@@@DAFD@@LK@BHADBDGBDHHFFDHFBBH@EJOJIFADBDDD@FGFCJGJCHAJ@LEHG@KCG@MDM@IBMDCBC@C@OBK@KEE@[AM@GFAJBDBLCDADADDFIVCHFLNF@@PJNJD\\DLDD@DBDBDFFFFDDDD@BKFKFCD@@@D@F@D@F@B@BBDBFBLAB@@ABE@EB@BBF@@ANAF@B@BR@B@@DBBFDFFB@B@R@B@BAF@F@HBDDDDBDDFBBBFBDBDBD@FAF@@@D@DDFF@HBDBDDBF@DCDADCBGFAHCD@DDHBDFDBD@HADCBEDADEHADAF@H@D@D@F@BFBRLFBHDPLVNLAFANSH@@@^EPCDAHUHGDEZI@CFWVENKdDDCLKDCFBfFDB^FJAFAB@FAFAFAHAFBFBDDFDBFBF@DAF@FDDB@FBD@FBFAD@FAFAHADAFAD@FBD@HDBDDFBDAHBF@DBF@FBDBDDDFDFBHBDBH@F@F@F@H@FBD@D@DBFD@@AJ@B@B@@VHFEBCBCFG@@@E@AHB@@H@J@D@F@HAF@F@F@D@FAF@FBF@F@F@FBH@@@@@B@@@@B@@B@@BB@BB@@B@@@BBB@@AB@@@B@B@@@B@@@B@@@B@B@@@B@@@B@@@B@B@@@B@@@B@@A@@BA@@A@@A@@A@@A@@A@@A@@@AA@@A@@@A@@@AA@@A@@A@@@@AA@@A@@AA@A@@@@@A@@@A@@@AA@@A@@@A@@@A@@@A@@@@@A@A@@@A@@@@@A@AA@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@@@@A@@@@@AA@@A@@@@@A@@A@@@@A@@@@@AA@@AA@@AA@@@@A@@AA@@@AA@@@@A@@AA@@@@@AA@@@@A@@@A@@@A@@AA@@@A@A@@@@@AA@@@@@AA@@A@@@AA@@A@@@AA@@A@A@@@AA@@A@@@AA@@A@@@A@@AA@@@A@CCMEGCA@@AKELKDG@EAGEGIOAC@CHIHAP@XDN@J@HADADCHKB@@A@@BA@@BA@@@@BA@@BA@@@A@@@AB@@@@A@@@A@@@A@@@@AA@@A@@@A@@@A@@@AAA@@@A@@@A@A@@@AA@@@@AA@@A@@AA@@AA@@A@@@A@@@A@@BA@@@A@@B@@AB@@@B@@@BA@@BA@@@A@@@A@@@A@@@@@A@A@@@@@AB@@A@@@A@@@A@@BA@@@A@@@A@@@A@@@AB@@@B@@AB@B@@@B@@@B@B@@@B@@@B@B@@BBA@@B@@@B@B@@@@@BA@@@@@@BA@@@@@ABA@@@A@@@A@@@@@A@@@AB@@@@A@@B@@A@@B@@AB@@@B@@AB@@@B@B@@AB@@@B@B@@AB@@@@@B@@AB@@@@@@AB@@@@@@A@@@@@@B@@A@@@@BA@@@@@AB@@@@AB@@@@AB@@@@@BA@@B@@@BA@@B@@@B@@AB@@@B@B@@@BA@@B@B@@@B@@AB@@@@A@@@A@A@@AA@@@A@@@A@@@@@A@@@A@@@A@@@AB@@A@@@@@A@@@A@@@A@@@A@@@A@@BA@@@@B@B@@@@@B@B@@B@@B@@@BBB@@@@BB@B@AB@@@B@@@B@@@B@@@B@@@B@@@B@@@@B@@@B@@@B@B@@@B@@@@@@A@@@A@@@A@@BA@@@@@A@@@A@@@AB@@@BB@@B@@@B@@@B@@@B@@@B@@@@@B@@BB@B@@@B@@@B@@@B@@@B@B@@@B@B@@@B@@@B@@@AA@@@A@@AA@@@@@A@@AA@@@@A@@@A@A@@@A@@@AB@@A@@@A@@@A@A@@@AA@@A@A@@@A@@@A@@@A@@AA@@@A@@@@@AAA@@@@@A@@AA@@@A@@A@@@AA@@A@@@A@@AA@@@AB@@@@AB@@@BA@@@@B@@@B@@@B@@@B@BB@@B@@BB@B@@BB@@@BBB@@@BBB@@@BB@@B@@BB@B@@@@@BBB@@@B@BB@@B@B@@BB@B@@@B@@BB@@@@A@E@GBC@E@E@CACAC@CCGEECEAC@EDEBCDEDE@EBECCECEAEAK@IAABE@IBG@EAEAECCCICACEEACEAECEAEACAAEACCGAEAE@EBEBADAFAFBHBFBF@HCF@DAF@FCDADCDC@ECECAACCAGECACAECCAECCCECG@GBCBCBCDEDCBCBIBEBCECCACCCCAG@C@ABCBGFCBEDCDGDE@CACAEAEEECEEAAGECAEECCCCECCCIACBCBCBGBABCBCBCDA@@@ABABABEDEBCBA@@B@B@BB@DBB@B@HFHFFDDDBB@@@FAB@BAB@B@B@@A@A@@@ABCLFFINCJ@@A@ECEEGAEAEAA@CAEAE@A@@AG@E@EAE@EAGACAA@GAEAE@CAGAG@C@E@G@E@@@IDA@ABCFADABEFADCDEDEBGBC@A@C@E@CAEAAAECCCAAACACAEAAAC@CCECEACACAEAACGCECEAAAAGAE@A@EBCBGBGD@@C@EAEACAEACCCEAC@CCEAEAEAC@CAEAC@CAE@CCECEAACCAECEACCEACCGAGAEAE@EAEAEACCICAGCECAAAAEAE@CBG@EBCBEBCBCBABEDCDCDED"],"encodeOffsets":[[120450,33716]]}}],"UTF8Encoding":true});}));