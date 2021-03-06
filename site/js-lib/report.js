var DELIM = '\t';
var LQ = '\u00AB';
var RQ = '\u00BB';
var H_STEP = 0.3;

var TOPIC_ = [
  ['по актуальной теме', 'актуальной темы'], ['по актуальным темам', 'актуальных тем'],
  ['по важной тематике', 'важной тематики'], ['по важным тематикам', 'важных тематик'],
  ['по актуальному вопросу', 'актуального вопроса'], ['по актуальным вопросам', 'актуальных вопросов'],
  ['по современной проблематике', 'современной проблематики'], ['по современным проблематикам', 'современных проблематик'],
  ['по важной предметной области', 'важной предметной области'], ['по важным предметным областям', 'важных предметных областей'],
  ['по значительной проблеме', 'значительной проблемы'], ['по значительным проблемам', 'значительных проблем'],
  ['по предмету обсуждения', 'предмета обсуждения'], ['по предметам обсуждения', 'предметов обсуждения']
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomEvenIndex(arr) {
  return Math.floor(Math.random() * arr.length / 2) * 2;
}

function packTopics(topics, scale) {
  var i, j;
  var s;
 
  j = getRandomEvenIndex(TOPIC_);
  
  if (topics.length == 1) {
    s = LQ + topics[0] + RQ;
  } else {
    j++;
    s = '1) ' + LQ + topics[0] + RQ;
    for (i = 1; i < topics.length; ) {
	  var t = topics[i];
      s += ', ' + (++i) + ') ' + LQ + t + RQ;
	}
  
  }
  

  
  var a = TOPIC_[j], res = [];

  for (i = 0; i < a.length; i++)
    res.push(a[i] + ' ' + s);

  res.hours = Math.ceil(topics.length * H_STEP);
  return res;
}

var genFunc = [
  function(topics) {
    return 'обсуждение ' + topics[1] + DELIM +
	  topics.hours + DELIM +
      'проведено обсуждение ' + topics[1] + ', предложен, обсужден и утвержден план следующих действий, подготовлен и согласован протокол (в электронном виде)';
  },
  function(topics) {
    return 'рассмотрение ' + topics[1] + DELIM +
	  topics.hours + DELIM +
	  'проведено рассмотрение ' + topics[1] + ', предложен план следующих действий, обсуждены замечания и утверждены изменения плана, подготовлен и согласован протокол (в электронном виде)';
  },
  function(topics) {
    return 'анализ ' + topics[1] + DELIM +
	  topics.hours + DELIM +
	  'представителями Исполнителя и Заказчика проведен совместный анализ ' + topics[1] + ', предложены и согласованы следующие шаги, а также электронный протокол';
  },
  function(topics) {
    return 'семинар ' + topics[1] + DELIM +
	  topics.hours + DELIM +
	  'представителем Исполнителя проведен совместный семинар ' + topics[1] + ', предложены и согласованы возможные действия, согласован электронный протокол';
  },
  function(topics) {
    return 'совещание ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведено совещание ' + topics[0] + ', заслушан выступающий от лица Исполнителя, заслушан выступающий от лица Заказчика, согласованы спорные моменты, подготовлена стенограмма заседания (в электронном виде), проект протокола разослан по электронной почте';
  },
  function(topics) {
    return 'телефонное совещание ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведено совещание по телефону ' + topics[0] + ', заслушан выступающий от лица Исполнителя, заслушан выступающий от лица Заказчика, согласованы спорные моменты, подготовлена стенограмма заседания (в электронном виде), проект протокола разослан по электронной почте';
  },
  function(topics) {
    return 'выступление ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'заслушано выступление ' + topics[0] + ', проведено обсуждение, предложены и обсуждены практические шаги решения поднятых в выступлении проблем, подготовлен проект протокола совещания (в электронном виде), проведено согласование проекта протокола';
  },
  function(topics) {
    return 'консультация ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведена консультация ' + topics[0] + ', проведено обсуждение, предложены и обсуждены практические шаги решения поднятых при обсуждении проблем, подготовлен проект протокола совещания (в электронном виде), проведено согласование проекта протокола';
  },
  function(topics) {
    return 'доклад ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'представителем Исполнителя сделан доклад ' + topics[0] + ', в обсуждении участвовали представители Заказчика, разобраны варианты решения озвученных проблем, в электронном виде подготовлен и принят протокол';
  },
  function(topics) {
    return 'видеоконференция ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'заслушано выступление по видеоконференцсвязи ' + topics[0] + ', проведено обсуждение, предложены и обсуждены практические шаги решения названных проблем, подготовлен проект электронноого протокола совещания, проведено согласование проекта протокола';
  },
  function(topics) {
    return 'летучка ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведена спонтанная летучка ' + topics[0] + ', предложен, обсужден и утвержден план быстрого улучшения текущей ситуации';
  },
  function(topics) {
    return 'планерка ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведена регулярная планерка ' + topics[0] + ', предложен, обсужден и утвержден план быстрого улучшения текущей ситуации';
  },
  function(topics) {
    return 'переговоры ' + topics[0] + DELIM +
	  topics.hours + DELIM +
	  'проведены переговоры ' + topics[0] + ', предложены меры по взаимодействию и решению проблем, собраны замечания, обсуждены необходимые доработки';
  }
];


function getSubset(arr) {
  var res = arr.slice(0);
  while (res.length > 1 + Math.random() * 2) {
    var index = Math.floor(Math.random() * res.length);
    res.splice(index, 1);
  }
  return res;
}

function extractSubset(arr, num) {
  if (arr.length < num) console.log('extractSubset Error: arr.length = ' + arr.length);

  var n = Math.random() * num;
  var res = [];
  
  for (var i = 0; i < n; i++) res.push(arr.pop());
  return res;
}

function shuffle(arr) {
  for (var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
}

function getKeys(hash) {
  var keys = [];
  for (key in hash)
    if (hash.hasOwnProperty(key))
      keys.push(key);
  return keys;
}
