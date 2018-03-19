(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('大余县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360723","properties":{"name":"大余县","cp":[114.362112,25.401313],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GEKEA@ECCAGGGGEEECAEA@CBEBCBGACAACAAA@AFADAD@@C@GCA@CACCAAA@AA@CACAAAAACAG@CCECEEGC@IBABA@A@ADBJ@DBBBBAFCBEBCBCBEDADAD@DEFF@FBDDBBBBBBBD@B@LBFBHFDFFDBD@DAH@J@LDDD@BCBGDGF@@CBG@IBILAF@FBFDBFDBF@DDDD@DADABAD@DB@@BBBF@FABGHCFADCD@BFBF@D@BBADADGBG@MFEBE@EBA@BBDBFFFBF@HBDBDDDB@BABCB@B@DCBE@C@E@IEECCCA@CBAD@@A@EAE@A@ADBD@B@B@@ADABAB@B@@AD@BBB@B@B@B@@B@B@@BB@@BBB@@@B@B@@BB@B@@@@@B@@@BBD@@@BB@B@@@B@@@B@DB@@@@BB@@@@D@@@@B@B@BBB@@@B@@AB@B@@@@@BBDBB@@BB@B@BAB@B@BBBB@@B@B@BBBB@B@BBBB@@B@@BDB@@@@@B@@BBD@@@BBB@B@@BB@BAB@@A@@@A@@@A@@B@BBBA@BD@@@B@@@B@BAB@@@B@@@B@@@BA@@@AB@BA@@BBB@BAB@BA@@@@@A@A@A@@BA@@BAB@@B@@B@@@BBB@BBB@B@B@BB@@BABBB@@@@@BA@@B@B@@AB@BB@@BBBB@@@@BA@@@@@AA@BA@AB@BB@@@@BB@@DBBBDB@@@@@A@A@A@ABA@A@A@ABA@@B@@@@@A@@@@B@@@@BB@@DAB@@@B@@@B@@@@@AA@AB@@@BAD@@@@@@@@A@@DBB@BDB@B@@@@@@@@@@AA@ACA@@A@@@A@@CC@@@A@C@@AA@@@A@A@@@A@A@AB@@ABAB@@@BA@@BB@@B@B@@@BBB@@@B@@@@BB@B@B@@@@@B@B@@@@BB@DB@@B@@BBB@B@BB@B@@BAB@BAB@D@BB@BB@@DDB@@B@@@BDDDB@@@@@A@@AAA@@A@@D@B@B@F@@@B@@B@@BB@BBBBBBB@@@@DB@@B@B@B@@BB@B@BBBB@@@@@B@DBB@B@@@BA@@BAB@@AB@@@B@B@@@BB@@B@@@@@DB@BABBD@BA@@B@BAB@D@B@@@B@BB@@@B@B@BAB@BBD@D@@@@B@D@BA@@B@BB@@BAB@B@@@B@@@B@@A@AA@@@@A@@@@@A@@@A@@AA@@@@BA@A@@AAC@@@@@B@@AB@@BD@BB@@BBB@BB@@B@BB@@B@@BB@BB@B@@@DBB@@B@BB@@B@@@B@BBBB@@B@@@B@@BB@@ABB@@B@B@B@@@BB@@BBB@B@@BB@@@@@B@@D@@@B@BB@@@@B@@B@@B@@B@@@BB@@BB@@@@AB@@A@@D@BA@@@@B@@@@A@@A@@A@@@A@A@@A@@A@C@@@@@@BEA@BBB@B@@@B@BBB@B@@@@@D@B@@@@@@BB@@BB@D@@B@@BBB@@@@@B@@@@@B@@@@AB@@@B@@@@@B@@@@@B@@@@A@@@AB@@@B@@A@@@@@A@@@A@@@@@A@@B@AA@@@@@@AA@A@AA@B@@@@@@A@A@@AA@A@@AA@AAABAB@BA@@@CD@@A@@BAB@D@B@@BB@@DDBDBB@B@@A@BB@@@@B@B@@@BB@@D@BBB@@@B@BA@@@@BB@A@BBBB@F@B@DAD@H@DAB@B@@B@@@@DAFA@@@@@@DBBBB@BBFABBB@@BB@@@B@BB@B@@BB@@BBB@D@B@D@FB@@B@B@B@@@B@AA@ABA@A@@@AB@@ABA@ABA@@@A@@@@@@BA@@@ABCB@B@B@@@BBB@@@B@B@B@@@DBB@B@B@@ABA@@@@B@B@@@BA@@@@B@B@@A@@D@@@B@@@@@@ABA@@@A@@B@@@@A@@@A@@B@@@@A@AA@BA@@AA@@@@BA@A@ABA@AA@@@@AD@@A@@@A@C@A@@AA@A@A@@@A@A@@@ABA@@B@@AB@B@AA@@@C@@AA@@BA@@B@BA@@@@BAB@@@@AB@B@B@@A@A@A@@BAA@@ABA@@@A@@@ABA@A@@@A@A@A@@B@@AB@@@@A@@B@B@@BB@@@D@@@BA@ABAB@BAB@@@BA@@@@B@@BB@B@@@@@BA@A@A@@B@@@@@B@@ABB@@BB@@J@@@B@@AB@B@BABBBAB@B@B@DAB@@@@B@@BB@B@@@BBBBB@@@BA@EB@BCB@@A@@@@@@A@@A@@@@B@@@@@B@@@BB@@@@@@B@@D@B@@@@A@A@@@A@@@@B@BA@AB@@B@@A@@B@@@@@B@@@@B@@@@A@@BA@@@B@@BB@A@@@@@A@AB@@@B@B@@@@@@B@@@@BAB@@@BA@@BA@@B@B@DBDBBBBB@B@@@@B@@BBB@@B@@@B@B@D@D@@@B@@@BB@D@@@BA@AB@B@BA@@@@D@@@B@@BB@@AB@@BD@B@@@BBB@@@B@D@@@B@B@@@BBBB@@@DB@@@D@@B@@@@B@@@@@B@D@DB@@BB@BB@@B@B@@B@@B@@B@@BD@@B@@BD@@BB@BB@@@@@@AB@BAB@@ABAB@@@B@B@B@@@@@B@@@@@B@B@@@BBB@BDB@@@@AB@B@BBB@B@@AB@@AB@@@BA@AB@B@@@@@B@@@@@@@B@BB@AB@B@BAB@B@@@@BBBBB@@@B@@B@@@B@B@@BF@B@@BB@@B@@@@@B@B@@@AB@BAB@@@BB@@@@@B@@BB@@@DADBB@B@BA@@BB@@@BB@B@@@@BB@@@@@B@@@@B@B@BBBB@@B@@@@@B@@BB@@@B@@AB@@@BA@@B@@@@ADB@@B@@AB@@@B@B@@@@@@@B@B@BAB@@@B@B@@@@@B@@BBB@@@@BAB@@@DB@@@B@B@@@B@B@B@@@B@@@DF@@BBBBA@BBAB@@@B@@@B@B@BBBB@@@B@@B@@@BB@@BBBB@@@@B@BB@@@B@@@B@@B@BB@B@B@@AB@@@B@@@@BB@@@@@B@BBBBB@@BB@D@D@D@B@@@@BAB@@B@@@BB@@BB@B@@BBB@B@BBB@@@@@DBB@BBB@@@D@BBB@B@@@BA@A@C@@@A@A@@@@@A@@@A@@B@@A@@@A@@B@@A@AB@@@B@BB@@B@D@@AB@@@BAB@@@BB@A@@@A@@@CAA@A@@@@B@@@BAB@B@B@BA@BB@@B@@B@@BB@@@@BB@ABB@@B@@B@@@BB@@@B@@@B@@@@@@@@@@@B@@@@@@@@@@@BA@@@@B@B@B@@@@@@AB@BB@B@@@@@B@@@BA@@@@@A@@B@@@@@B@@@BA@@@@@@@@B@@@@@B@B@B@B@BBB@@@@B@@@@@@B@@@B@@@B@@@B@B@@@B@@@@@@@B@@@B@@@B@B@@@@@B@BB@@B@@A@@B@@@@@@@BAB@BB@@B@@@DABA@@B@D@B@BA@@BB@@B@B@@@B@@@B@B@B@@@@AB@@@B@@@BA@AB@@@@@@@@BB@@@@BB@@@B@@@B@@@@@@@B@B@BA@@@@@AB@@A@@@AB@@@@@@BBB@@BB@@B@A@BB@@@@B@@B@@B@B@B@B@BBBABA@@@BB@@@@@BA@@@@@ABAA@@AB@@A@@@A@A@@@A@@B@@AB@@@BA@@BA@@B@@@B@@A@@@AB@@@@AB@@@@@BBBBB@@B@@D@@@B@@@BABAB@@@B@@@B@@BB@@BBAB@@@@@@A@AB@B@@@DA@@@AB@@AA@@A@@ACAC@@@AB@B@BAB@@@B@@BAD@B@B@@@BABB@B@@BB@@@@@B@B@@@@@BA@AB@@@@C@@@A@A@A@@@AA@AABAFABAB@@@B@B@B@@@BB@@DA@@BA@@B@@@B@B@B@@B@@D@@@BBBA@@@@BBB@B@B@@@@B@@B@BA@@@@BD@@B@@B@@BBBBB@@BB@B@@@B@B@@BB@@@B@@@BD@@B@BAB@@@B@@@B@@A@@B@@@B@B@B@@@DB@@D@@BB@@AB@BA@@@BB@@@B@@@@B@@D@@@@@B@@@B@@@B@B@BAB@@BB@@@B@BBB@D@B@@@D@@@BBB@@@B@BA@@BABAB@B@B@B@BB@A@@B@@@BBB@BBB@@BB@@@@AB@@@@@B@B@@BB@@B@@@@B@@@@@B@@@@BB@@@BB@@B@B@@A@@@@B@B@@@@@B@@AB@@ABA@@@@B@B@@AB@@AB@@@BA@@@A@A@A@@@A@@@A@@BA@@@A@@D@@ABB@AB@@@@A@@@@@A@@BA@A@@@AAA@@BA@A@AAA@A@CC@A@@@ABA@@@@BA@@AAA@@AC@@BAAA@@BAB@@AB@@A@AB@BA@@A@@AA@@@@A@@@@B@@@@AB@B@@@@@BA@@B@@@@AB@@@@@@A@@@A@@@@@@@A@@AAA@@@@@A@@@@ABA@@@A@@AA@@A@@A@@@A@@@@BBB@@@@@@A@@@A@@@@@AB@@@AA@AA@AA@@@AA@@@@@@@A@@@@@A@@A@@@A@@A@@@@@@@@A@@@@@A@@@@@A@@@@@@@A@A@@@@@@AC@@@AB@@A@@DAB@B@BB@@BA@ABA@@B@@ABA@AB@@@@AB@@@@@DA@@@A@@@ABA@A@@@ABC@AA@BABABA@A@@@A@A@@@@@C@@@@@A@@BA@@@A@@@@BA@@@A@@@@@A@@@A@@@A@@@AB@@@BAAAB@@AA@BA@@AA@AA@@@BA@C@@@AB@@@B@@@B@@@@@BC@@B@@@@@@ABAB@@AB@@B@@B@BAB@@A@@@CA@@A@@@@B@@@B@@B@@B@@@@@BC@@B@@@B@B@B@@BD@BBB@BA@AB@@A@A@A@@@C@@@A@A@@@AqA@@AA@A@A@A@A@@@C@A@AA@AA@@@@A@@C@@AA@@A@@AAA@A@@@@AB@@@@@B@@@@@BAB@@AB@BB@A@@BAA@@@@@A@AAA@@@@AA@@A@@@AA@@A@@@@@AA@CA@@A@@@AB@@A@@BA@AB@@@@A@@@BB@@A@@B@BA@@B@B@@@B@@@B@@A@@@BA@@@@@@@AA@@@@@@@A@@@@@@@@@AB@@@@A@@@AA@@@@A@@@A@@@A@AB@@@@@A@@AA@@@@AA@A@@@@BA@A@A@@BA@A@A@@@@BA@@A@@@@AAAAA@@A@@A@@AA@@@@A@AAC@A@@@@AA@@@AA@@AA@AA@@@A@A@@AA@@A@@@@AA@@AAAA@@A@@@AB@@AA@@C@@@A@AA@@AB@B@B@BA@AB@@@BA@AB@@@@AAAB@BA@ABAB@@@@A@A@@@AACA@@@@AA@@@AA@CB@@AA@@A@@@A@@BA@@@@@@@@AAA@@@@@A@@@C@@@A@@@@A@A@AB@@AA@@@@@A@@AB@@AA@@A@A@@@@@@@BA@@@@@A@@@@B@@@@@@A@@@@@AA@@@@A@@@C@@@A@@@A@@@A@@@@AA@@A@@@@@ABAA@@@@A@CBCDEBE@E@ABCBEFEDCBC@A@ABCB@BABA@C@CAGCEEIICECAC@A@C@A@AAEAE@AA@A@C@C@CBADCBC@CACEACAIEECA@CAG@E@EEAA@AAAC@ABA@@@CDA@EFGB@@ADA@C@A@AB@BBDBB@B@@CBGDE@MCA@AAAA@A@ACCCACCAAAE@A@EAEAECGEM@CAAC@CA@@@@DCBABA@A@@AAACCCAAA@AAAAA@@@CAC@AAC@A@CBA@A@C@A@AAA@C@@AAGACCAEAAAA@A@@AE@@@E@ACACAAACCAA@A@AB@BBBBB@@@@C@A@CAA@@@AB@HADABE@C@S@IBIDIFGDC@@@E@G@G@EDGDE@A@CAMEAC@@B@BAFA@A@@@@C@C@@@A@@AAA@A@C@A@C@E@E@@BADABAB@DA@@@@B@BC@E@AAAA@ABCB@@AACCAA@@A@ABA@AAAAAAAACA@@BCBA@A@AD@@AFCBA@@A@AAGA@@E@CBAB@BABABBD@DABCBEBUBEBA@@@AA@CEKCAC@C@E@AB_JIDE@EAAA@C@AA@A@ADCDC@GBC@E@A@GAC@A@A@@BBL@DADADCBCDGDC@C@C@EEMMGCE@CB@BADADADAB@@E@E@E@@@GCCCCECAAAA@@B@B@DABABC@E@A@AAA@EACBAA@ABABAAAC@CAACACA@IBCBA@C@AC"],"encodeOffsets":[[116854,25908]]}}],"UTF8Encoding":true});}));