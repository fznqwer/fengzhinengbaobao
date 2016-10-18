/**
 * Created by Administrator on 2016/10/18.
 * { translation: [ '爱' ],
  basic:
   { 'us-phonetic': 'lʌv',
     phonetic: 'lʌv',
     'uk-phonetic': 'lʌv',
     explains:
      [ 'n. 恋爱；亲爱的；酷爱；喜爱的事物；爱情，爱意；疼爱；热爱；爱人，所爱之物',
        'v. 爱，热爱；爱戴；赞美，称赞；喜爱；喜好；喜欢；爱慕',
        'n. （英）洛夫（人名）' ] },
  query: 'love',
  errorCode: 0,
  web:
   [ { value: [Object], key: 'Love' },
     { value: [Object], key: 'Endless Love' },
     { value: [Object], key: 'Love Shuffle' } ] }

 */
exports.json2str = function(json){
    console.log('');
    console.log('  '+ json.query + ' ','英 ' + '[ '+ json.basic.phonetic + ']  ','美 ' + '[' + json.basic.phonetic + ']' + ' ~ youdao');
    console.log('');

    for(var i = 0;i < json.basic.explains.length;i++){
        console.log('  - ' + json.basic.explains[i]);
    }

    console.log('');

    for(var i = 0;i < json.web.length;i++){
        console.log('  '+ (i+1) +'、' + json.web[i].key);
        console.log('  '+json.web[i].value[0]);
    }
};