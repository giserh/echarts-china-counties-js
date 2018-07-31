(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('浑南区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210112","properties":{"name":"浑南区","cp":[123.449714,41.714914],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@@B@@@@@BA@@@@B@@B@@@@@@@@@BBA@B@@@@BB@@@@BB@@BA@@DAB@@@@@@@@@@BBBGBEBKB@@@B@@@@BFCBDDAFA@EAAEBAAAAAB@@AAACC@@BA@AA@@@@@@A@@ABA@ABA@A@@BABFFABC@ABA@EBE@MFB@@B@@FJ@@@@BDBB@@@B@@@BB@@B@@@@AL@@@B@@@@AD@BB@@@D@@ABAB@B@B@@@B@BADA@AB@B@@@@@@A@@@@@@@@@ABC@@@@@@@@B@@BBA@@@@D@@@@@B@@@@@B@@@@@@@@@@A@@@@B@@@@@B@B@@B@B@@@@@@@@@@@BB@@@@@@@DA@@BB@@B@B@@@@@BB@@@@B@@@B@@@@@@@@@@@@ALB@@@BB@@@@B@@@@@BB@@B@@@@@B@@B@@@@BF@@@B@@@@@BBBBBB@@B@@BFBBD@BHBD@FBBBHFB@TJD@D@F@\\AL@FBJB\\DHDFBDDFJFLBB@B@D@B@@BBHFBBDBFDHBNFTFJBBBB@DBJHJJJFFDHFABAB@@CB@B@@AB@@@BA@@B@@@B@@BB@DDF@B@D@B@B@B@BA@AFADAHADADCH@BADADAB@B@B@B@B@@@B@B@D@D@D@B@B@@@B@@@BA@@BABCDABABABADABA@@BA@AB@@BBB@@@@@@@@B@@@@B@@A@@B@@AB@@@@@@@@A@@@@@@@A@@@@@@B@@@@@@@@@B@@@@B@@@@@@@@@A@@BA@@@@B@@B@@@@@B@@B@@@@@BA@@@@@@DBBB@A@@BABB@@BB@@B@D@@@B@BF@BB@@BB@@B@@BDB@@BBB@@DBDBD@BB@@B@@ABA@@B@BA@ABA@ABA@A@A@@@A@@@A@A@@@@@@@A@@@@BA@@@@@@AA@@@@@@B@D@B@@@@@B@@@@@B@@@@@@@B@B@@BB@B@@B@@@@@BB@@BB@@@B@@@B@@BB@@@B@@@B@@BB@@@B@BBB@@@B@B@@@BB@@BB@@@@BB@AB@@@@@@A@@@@@A@A@C@@@@B@@A@@@@@AB@@@B@@B@@@@B@@@@@@@@@B@@A@@@A@@B@@B@@@@@@@B@@@@@@@@B@@@B@@A@@@BB@@@@A@@@@@@@AA@@AB@@@@@BA@@B@B@@@@BB@@@B@@@@@B@@BB@@@@@B@@@@B@@@@B@B@@B@B@@@@B@@@@B@@@@@@A@@@A@@@A@@@@@@@@@A@BB@@BBB@@@@@@B@@@@@@@@@@AB@@@@@@A@@@AB@@@@@B@@@@@@@B@B@@@@@@AB@@@@@@@B@B@@@BA@@BABABA@AB@B@@AB@@@B@B@B@@A@@@@B@@@@@B@@@@AB@@A@B@@BBBBBB@@@B@@@@@@BB@A@@@@BA@@@@@BB@@BBB@B@@@BA@@B@@B@D@@@@@B@@@@@@BB@B@@AB@@BBAB@@A@A@AB@B@@C@@@@B@@@@@@@@B@B@@B@@@@A@@@@@@@AA@@@@A@@@@B@@@@@@@@@B@@@@@@@@A@@@@@A@@@@@@@@B@@BBCDEAKBGHIJ@FD@F@FBFBDBBBBBBB@JRBB@PJDBHBH@DABAD@D@DAFAFAB@BDDDDDFBFBFFD@HBFBHF@DCBDBHDKHHPFBH@BDFBFFDFFBBBDFDHAJABAF@JAH@F@F@H@HBF@F@JHB@DBFBHEBEDMDIDMDGDdBXJB@@@B@@@BA@@@@@@@@@@DA@@@@@A@@@@B@@@@A@@BA@@B@@A@@@@@@@A@@@@@A@@BA@@@@@AB@@@@A@AB@@@@@B@@@@BD@BBB@@@B@@AB@BA@@B@B@@@B@@@@@BAB@@AB@@@B@@A@@@A@@@@BA@@B@@@B@BABA@@@@@A@@A@AA@AA@@A@@AA@@@@B@BAD@@@@AB@@A@@@@@@B@@@@A@@@@B@D@@@@@@@@@AA@@@A@@@A@@B@@@BABB@@B@BB@@B@@@D@@@B@@@@A@@@A@AB@@@@@B@B@B@B@B@B@BA@@B@@@@@B@@@@@@@@@@@B@AA@@@@@@@@B@@@BA@@@@@@@AB@@@B@@@@@@AB@@A@A@@@@B@@@@B@@@B@B@@@@@@@@@@@AB@@@BA@@@@@@B@@@@@AB@@@B@BB@@@@B@@@@@@BB@@B@@@@@BB@@@B@@@B@@@@B@@@BB@@@@A@@@@@@B@@B@@B@@@@@B@@@BCB@@@B@@@@@@BB@@B@@@@B@@BB@B@@BB@@BB@@@B@@B@@@F@@@B@@@B@B@B@B@@AB@@@@A@@@A@@@@AA@@@@@A@@@@BABA@@B@@@@A@A@@@@@@@@D@B@@@@@BA@@@@B@@@B@@@B@@@@@@@@A@@BA@@@@@A@@AA@@@@@@BA@@@@@@@@@A@@A@@@@A@@@@@@@AA@@@AAA@A@@AA@@AA@@@@A@@@@B@@C@A@@BA@@@@@@@@B@@@@A@@B@@@@AB@@@@@@@BA@AB@@@@AA@@@@@@A@A@A@@A@@A@A@@AC@@@AA@@@A@A@@@A@@@@@@@@A@@@@@@@@@@@AA@@@@@@A@@@A@@ABAA@AA@@A@@@@A@@B@@@@DD@@@@@@AB@@A@@@@@@@AA@@@@B@@@@@@@@@@A@@@AA@@A@@@@@B@@@@@B@@@@@@@@A@@@@A@@@@@AA@A@@@AA@@@@@ABA@AA@@@@B@BA@@@@@@@@@@@A@A@@@AA@@A@@@@@@@@@@B@@@BA@@@@@@@A@ABAB@@@B@@@@@B@@@@@@@@@@@@@B@@A@@@AA@@@@AA@@@@@@A@@@@@B@@B@@@@@@AB@BA@@@A@@@ABA@@@@B@@@@AB@@@@A@@@AA@@@@A@A@AB@@A@A@@@@AA@@AA@@AA@@@@@CAA@@@AAAAC@@@@A@@@@BABA@@@@@A@@@@AA@@@AAA@@@@@@B@@@@@@@@AB@@@@A@@@@@@@@@@AA@@@@@A@A@@A@@@@@A@@@A@@A@@@@@A@@@A@@BA@@@@@@@A@@@@@A@@@@@@@AB@B@DDD@BBBA@C@@@A@@B@BA@@@@@@@A@@A@@@@@@A@@B@BA@@B@@@B@@BBBB@@@B@@@@@BA@A@@@@@@@@AA@@@@@@@@@@@AB@@@B@B@@AB@@@B@@AB@D@@@@@B@B@BAB@@@@@@A@@@@@@@@AA@@@@@@@@@@A@@AA@@@@@@@@@@@A@@@@@@A@@A@@A@A@@@@@A@A@A@@@A@@@@@@@@AA@@CA@AA@@AA@@@A@@A@A@@A@@@@@A@A@@A@@A@@@@@@@@AB@@@@@@AAA@A@@A@@@@@A@@@@@A@@@@BAB@@@@@@AB@@A@A@A@@@@@@@A@A@@@@@A@@@A@@@@@@@@@A@BA@@B@@A@@@@@@@@@@A@ABABA@@@@@A@@AA@@@@@AA@@A@@@@@@@A@@@@@@B@@A@A@@@@A@@A@@@@@@@@@@@A@@@@@@@A@@B@@@B@@@@A@@@@@@@@A@@A@@@@@A@@@@AAAC@@A@@A@@@A@@AA@@@A@@A@@A@@@@@@@@@AB@@@@@@@@A@C@A@A@@@AA@@A@@AAA@@@@AAA@@AA@@A@@@AA@@A@A@@@A@@B@BA@@B@BA@@B@@@BAA@@@@AA@AA@@@@AA@A@@@@A@AAAAAA@@AAA@@@@A@@@ABA@ABAB@BA@@@@@@@AB@@@@@@AB@@@@A@@@A@@@@B@@A@@BA@@BA@A@@@A@@AAA@@A@@@@@@@@BB@@BB@@@@B@@@@A@@@AA@@A@@@@@A@@@@@@A@@@A@A@@@@@@@@@@A@@@@@@@ABBD@@@@A@@@@@@@A@@AA@A@@@@@@B@@@@@@BB@@@@@BA@@@@@A@@@@@@B@BB@BB@@A@@@@@@@A@@@A@@@@@@BBBBBB@@B@@@@@@AB@@@@@BA@@@@@@@A@@A@@@@@@@@@@@B@@@@@@A@@A@@A@@C@A@AAA@@AA@A@@@@AA@@@@A@@A@@@@@@A@ABA@@@@@@@A@@ACA@@A@@@@@@@@A@@@A@@@AA@@AA@@@@B@@@@AB@A@@@@@@AB@@@@@AA@@@@BA@@@AA@@@@A@@@A@A@@@AA@@@A@@@@A@@A@@@@@A@A@A@@@@A@@A@A@@@A@@@@AA@@B@@@@@@@@A@@@@@@AB@@@@@@@@@@AA@@@AAAA@@A@@@@@@@BAB@@@@A@@@@@AB@BABA@@DAD@BAB@BAB@@@@@B@@A@@@@B@@@@AB@BA@@B@@@@@B@@@B@@@D@@@@@B@@@@@@AB@@@@@@@BA@@@A@@@@@A@@@@@A@@@A@@@@@@@@B@@@A@@A@@@@@@B@@A@@@@A@BA@@@@@@@A@@AA@@@A@@@@@AB@@@B@BBB@@@@@@AA@@@AAC@@A@A@@@A@@@@@A@@CACAEAAAAAEGGEECCAA@CAGCA@CCECGAEAO@E@KAEAGA@E@@@A@@AAA@A@BA@AB@@A@@@A@@@@@A@@@@B@B@@AB@@@@A@@@@BA@@@@@@BB@@B@@@@@@A@@BC@@@A@@@@C@@@AA@@B@@A@@B@@A@@@@BA@@B@@@B@@C@A@@@@@ABE@@E@@@@A@@@@@@@@@@@@@A@@@@@@@@@@A@@A@@A@@@A@@@@A@@@@@@BA@@@AA@@@A@A@@A@@A@@@@@A@@@A@A@A@@@@@A@@@@AA@A@@@@@A@@@@@@AA@@A@A@A@AA@@@@@C@@@A@@@@@@@@A@A@A@@@@B@@B@@B@@AB@@@@@@A@@@@@A@A@A@@@A@@@@@@@@@A@@A@A@BAB@@A@@B@@A@@@@BAB@@@B@@@B@@@@B@@@@B@@@@@@A@A@@B@@@B@BAB@F@@@B@@@A@@A@@B@@@BA@@B@@B@@@@@@B@@@@B@@@@@@@BB@@@BB@@@@BA@@@@B@@@@@@@@@AA@@@@B@@@B@B@B@B@@@B@@@@@@@@A@A@A@@@@AA@@@@@A@@B@@@@@B@@@@@@@@@@@@@@@@A@@DBD@@@@@B@@@@@BBB@B@@@@@B@@@@A@@@@@@@@@A@@@@@@@@BB@@@BB@@@@@B@@@BA@@B@B@B@@@@@@@@A@@B@@@@BB@@@@@@B@@@@@@@@@@BA@@B@@@B@@@B@@@@@B@@@BB@@@@@A@@@@@@A@@@A@@@@A@@@@@AB@@A@@B@@@@@@A@@@@@@B@@@@@@@@@@B@@B@@@@@B@@@@@@@B@B@D@BBB@B@@@@@@@BB@@@@@@B@D@B@BBB@BBDBB@@@BBB@@@@@BBB@BBBB@@BBB@@@@@@@BA@@@A@@B@@@@@@@B@@AB@@@@AB@@BB@@@@@@@BA@@@@B@BB@@@@B@@@@A@@@@CA@@@@BA@@@@@@@@B@@BB@BBBBBA@@BA@A@@B@@A@@B@@@BBB@@@@@@@@B@@@@@@@B@@@@@@A@@@@@@BA@@@@@@B@B@@@B@@@B@@@@@B@@BBA@@@ABABA@@@@BB@@BB@@@@@@@@@A@@@@@AA@@@@A@@@@@DD@@@@@@AA@@A@@@@@@BB@@@@@@B@@@@@@BB@@@@@@@@@@A@@@A@@@@@CA@@@@@@@@@@@BBB@BB@@@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@A@@@@B@@@B@BBBBBBB@@@@@@@B@@@B@@@@@BA@@@AB@@@@@B@@@B@@@@A@@B@@@B@@BB@@@@@@@@A@@@A@@@@B@@@@@BBD@@B@AB@BA@ABA@A@@BC@A@@BA@AB@BC@A@@@A@@A@@BA@AAA@A@AAA@@A@A@@B@AAB@@A@A@@A@AA@@AAC@EA@A@@BABADCDAB@D@BBAB@@B@@AB@@@B@@@@A@@BA@@B@@@B@@BBB@A@A@A@AAABA@@@A@@@AA@@AA@A@AABC@@B@@AA@@@AAAA@@ACAABCB@D@@A@E@AB@@A@ABA@@BABC@ADCDABAB@@@@ABA@@BAAA@@@A@A@@BABB@@B@B@B@@AB@ACAA@AB@@EAABAHC@@@ADC@@@@BB@@@@@@B@@ABA@@@@@AB@@A@AB@@AAAA@@AAAACAA@@BA@CBAAC@A@@KGAA@@A@A@ABA@@@AC@@C@@@@AA@@AA@@CCA@@BC@A@@AEB@@@B@FBB@@AAA@A@A@AAC@F@ACA@AAA@AAAA@ACA@A@AEAAAABA@A@AC@@AAAA@AACCAAEACBABAB@@AAAACCAABA@A@C@@ACAAC@E@AAA@AAC@AA@@AA@CACCCD@BED@@A@A@A@@BA@AA@@CB@B@BA@A@AB@@A@CBA@@@A@@@AA@@@@A@@@@AA@@@@@A@@@@@A@@@A@@@A@@@A@@@@@AA@@@A@@@@@AB@@@@AA@B@@@@A@@@@@@@A@@B@B@@A@@BA@ABA@@@A@@@A@@@ABA@CB@@A@@@A@@AA@@A@@A@@@A@@@AA@AA@@@@@C@@@@@A@@@A@@@@@@@A@@@@@A@A@@@A@@@A@A@A@@@@BA@@@@@@BA@@@@@@@@@@B@@A@@B@@@BAB@@@BA@@B@@A@@A@@AA@@A@@@@@A@A@@@A@@AA@A@@@A@AA@@A@@@A@A@@@A@@AA@@A@@@@AA@@A@A@A@@AA@@@A@@BA@@@@BA@AAA@@@@AA@A@A@AA@@A@A@AA@AAA@@@@@AA@@@A@A@AAA@AAA@@@AA@@A@@@@@A@AB@@A@@B@@@@AB@@@@BB@@@@@BA@B@@@@B@@@@@B@@@@@B@@A@@@E@C@C@@@A@@@@AA@AA@@A@@@A@@@A@A@@@@@A@ABAB@@AB@@CA@@A@@@@@@@AB@@@B@@A@@@@@@B@@@BA@AB@@@@A@@@@AA@@A@AA@@@AAA@AA@@@@A@@B@@@@ABC@A@A@A@@@C@@@@A@@@@@@@@@AA@AA@@@AA@@@@@AA@@A@@BA@@@A@@@C@A@A@@@@AA@@A@@AAA@@@@A@@@@A@@@@@@BA@@@@@A@@@@BA@@@A@@@@@AB@B@@A@@@@@A@@@@@@@@@ABA@@@@@A@@@@@A@@@A@A@@@ABA@A@@@A@AAC@AAA@AA@@AAA@A@@@@@@@@BA@@@@BA@AB@@@@@@A@@BAB@@@@@@B@@@@B@@@@@B@@@@@@@AA@@@@@A@A@@AA@@@@@@B@@A@@@CB@@A@@@@B@@@@@B@@@@@@@A@@@@B@AB@@@BBB@BAB@@@@A@@@@@@B@@@@@@@@@@@@ABA@@@@@@B@@@@@@@@@B@@BB@@BB@@@@@@@B@@@@@B@@A@@@@BCAC@@@@@@@@B@@A@@BAB@@@BB@@@@@@@B@@@@ABB@@@@A@@@@BA@@@@A@@A@@B@@@@C@@@@@@B@@@@AA@@@@A@@@AB@@@@@A@@@@@A@@@@@A@@@@@@A@@@@@@@@@@@@AB@@@A@@A@@@@A@@BA@@@C@A@@@A@ACC@AA@@@@@@@D@B@@@BA@A@@@A@@@@@@A@@@@C@A@@@A@@@@@AD@@@A@@@@A@@@@@@B@@@BA@CACBA@@@@BABA@@@@B@@@@A@@@A@A@@AA@@A@@A@@@A@@@AC@@A@A@@AA@@@@A@@@AA@@@@AB@@A@A@@@A@@A@@AAAAA@AA@A@AA@@@@@C@@@@@@A@@A@@@@A@@A@@A@@@A@A@A@CDA@ABA@C@@@@@A@@A@@@@AAA@@@A@@@@A@A@@A@EAE@A@@@@A@@@A@@@@@@C@@@@@@A@@@@A@@@A@ABA@A@A@A@@AA@@@@A@@@@A@A@ABC@@@A@@@@AAAAAA@@@@@A@@BA@A@A@ABC@@@@B@@@BA@@@A@@BC@@@A@A@@@@@A@ABC@A@@B@@@BA@@@A@A@ABA@@@AB@B@B@N@@AB@@A@@@AB@@@@@B@@@@@BA@A@A@@@AA@@@@@@A@@@@B@@@B@@A@A@@@@@@B@BA@@@ABA@@@A@@@A@@@AAA@A@C@A@A@A@@@A@ABA@AA@@ABA@A@C@@@@@@A@@@@@@@@A@@@@@A@@@@@@@A@@@@AACA@@@@A@@@@A@@B@@@B@@@B@@@@CBEBA@@@A@@@@@A@C@@@A@@AA@@@EBEBA@@@@AA@@AAA@@AA@B@@@@A@@@A@@@AA@@B@@A@@A@@@A@A@AB@@@@@@@BA@@@@@A@A@BB@@DH@@AB@@A@AAA@CBC@AB@@A@@B@@IDODCBA@@@@@BB@BBB@D@@@@@@@@@BA@@@@@@@DFB@@@@@@@B@@@D@@@@@BDBBA@@@A@@@A@@B@@@@@BB@@B@B@@@@BB@@B@FBD@@@@@B@@@@B@@@@@@@@BB@@BDBBBB@@BB@@B@@@@@@BB@@@B@BAB@@@@BBBBF@@BDDF@@@B@@@@@B@@BFBB@@A@@@A@@AAB@@@@DD@@@BA@BDB@@@B@@B@@B@@@@@B@@@BB@B@@AB@B@B@@"],"encodeOffsets":[[126368,42699]]}}],"UTF8Encoding":true});}));