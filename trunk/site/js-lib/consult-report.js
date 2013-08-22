var pairs = {
  'Система телесовещаний; Шлюз сервера телефонии c Системой телесовещаний по протоколу SIP':
  [
    'Обсуждение опыта проведения конференций коалиции Общероссийский народный фронт',
    'Обсуждение опыта проведения конференций партии Единая Россия',
	'Организация видеомоста с Институтом Бака (Калифорния)',
	'Устранение проблем канала связи Москва-Калифорния'
  ],
  'Методики оценки региональных и муниципальных чиновников Воронежской области; Информационная система интернет-мониторинга качества государственных услуг;  Интерактивная анкета участника интернет-мониторинга на сайте innoros.ru; Автоматизированная информационная система сбора информации и обработки статистики интернет-мониторинга на сайте innoros.ru':
  [
    'Разработка методики оценки региональных и муниципальных чиновников Воронежской области',
    'Оценка региональных и муниципальных чиновников Воронежской области',
    'Перспективы развития открытого правительства в Воронежской области'
  ]
}

var consultee = [
  'Тригуб Б.', 'Еремина Н.', 'Дерюгина О.', 
  'Логинов В. Г.',
  'Лемешева О.', 'Алятина Ю.', 'Нафтс О.'
];

var consultee_opt = [
  'Рудаков А.', 'Волощик Д.', 'Громыко В. В.', 'Вертилецкий Д.', 'Шаповал Е.', 'Маевский П.', 'Новиков И.',
  'Мигачева А. М.', 'Иванов И.', 'Шестакова Е.',
  'Скриптунова Е. А.', 'Драпалюк М. В.',
  'Сушков А.', 'Струков В.', 'Филлипов Е.'
]


var consultant = [
  'Федотов А.'//,
  //'Дегтярев В.', 'Архипец И.', 'Солодовник М.', 'Кандров Д.', 'Хоруженко А.'
];


var topics = [
  'Семинар с техническими специалистами по вопросам использования продукта #product в рамках проекта #project',
  'Расписание заседаний технических специалистов об использовании продукта #product по проекту #project',
  'Расписание семинаров с техническими специалистами по использованию продукта #product по проекту #project',
  'Статистика опроса регионов по использованию продукта #product для проекта #project',
  'Регламентные процедуры обслуживания продукта #product по проекту #project',
  'Рассылка информации по регионам по проекту #project о продукте #product',
  'Расписание отпусков специалистов по продукту #product, участвующих в проекте #project',
  'Содержание информационной рассылки по продукту #product в рамках проекта #project',
  'Основные моменты при общении с регионами, участвующими в проекте #project по продукту #product',
  'Обучение совместителей и отпускников, выполняющих технические функции поддержки продукта #product в проекте #project',
  'Расписание рассылки по тем специалистам проекта #project, кто уже прошел обучение по продукту #product',
  'Буклет по продукту #product для рассылки участникам проекта #project',
  'Вычитывание буклета по продукту #product для рассылки участникам проекта #project',
  'Планерки по понедельникам перед семинарами с техническими специалистами по продукту #product проекта #project',
  'Сбор контактов и номеров телефонов ответственных людей и лиц, принимающих решения, в регионах, использующих продукт #product в рамках проекта #project',
  'Результаты презентации продукта #product по проекту #project',
  'Реклама продукта #product для компенсации трат по проекту #project',
  'Доступ к онлайн-таблице с информацией по технике, контактам, тестированию участников проекта #project, использующих продукт #product',
  'Расписание митингов по использованию продукта #product при проведении проекта #project',
  'Демонстрация продукта #product в понедельник по проекту #project',
  'Выбор удобного времени для следующего митинга с технарями по проекту #project по проекту #product'
];

topics.push(
  'Повышение стабильности продукта #product в рамках проекта #project',
  'Настройка модулей клиентского программного обеспечения для безотказной работы продукта #product в рамках проекта #project',
  'Настройка фильтров безопасности продукта #product для безопасной работы в рамках проекта #project',
);

// Наталья
topics.push(
  'Объяснение концепции проекта #project и принципов работы продукта #product, разъяснение выгод для координации деятельности, которые будут достигнуты с помощью внедрения продукта, перспектив развития',
  'Разъяснение принципов организации и обсуждение методики проведения Семинаров с техническими специалистами по продукту #product в рамках проекта #project',
  'Согласование списка персоналий и контактов, которые будут привлекаться для работы по проекту #project для работы с продуктом #product, составление информационных писем о проведении распределённых региональных мероприятий',
  'Проведение опроса по регионам, обработка данных полученных в результате опроса, работа с обратной связью от региональных технических специалистов перед использованием продукта #product',
  'Вопросы эффективности: обсуждение инструментов внедрения и вовлеченности всех участников в процесс эффективного внедрения продукта #product в рамках проекта #project, обсуждение технических вопросов  по  внедрению проекта',
  'Обсуждение, подготовка и предоставление буклета по продукту #product в рамках проекта #project для технических специалистов',
  'Обсуждение процесса согласования действий по организации мероприятия и порядка проведения митинга с техническими  специалистами по вопросам использования продукта #product в рамках проекта #project, обсуждение обратной связи',
  'Митинг с техническими специалистами по вопросам использования продукта #product в рамках проекта #project',
  'Проведение презентации #product по проекту #product, проведение комплекса устных ознакомительных  и подготовительных бесед по развитию и  внедрению',
  'Работа по организации сбора данных при проведении распределенных региональных мероприятий с использованием инструментария #product в рамках проекта #project: особенности, на что нужно обратить внимание, разъяснение принципов и типовых  возможностей',
  'Подготовка к презентации работы продукта #product в рамках проекта #project, проведение презентации',
  'Помощь в организации взаимодействия с rian.ru (контакты: Цыпаева Екатерина Евгеньевна, Давыдова Елена Николаевна, Пахарь Павел Павлович, Буланова Ольга Владимировна, Тургиев Михаил Алиевич,  Шевченко Денис) и ВГТРК по продукту #product при проведении распределенных региональных мероприятий в рамках проекта #project'
);

var H_TOTAL = 450;
var H_STEP = 0.25;

var pair_keys = getKeys(pairs);

function generate(element) {
  element.value = '';
  var t = H_TOTAL;
  var nt = 0;

  while (t > 0) {
    var line = getSubset(consultee).join(', ') + ', ' + getSubset(consultee_opt).join(', ') + DELIM;

    var r = getSubset(consultant);
    line += r.join(', ') + DELIM;
    
    var time = r.length * H_STEP;
    t -= time;
    line += time + DELIM;
    
    var products = getRandomElement(pair_keys);
    var projects = pairs[products];
    
    var product = getRandomElement(products.slice(/;\s*/g));
	console.log(products.slice(/;\s*/g));
    var project = getRandomElement(projects);
	var topic = topics[nt];
	if (topic.indexOf('#product') == -1 || topic.indexOf('#project') == -1) console.log('Error in ' + topic);
    topic = topic.replace('#product', LQ + product + RQ).replace('#project', LQ + project + RQ);
	topic = topic.replace(LQ + LQ, LQ).replace(RQ + RQ, RQ);

    line += getRandomElement(genFunc)(topic);
	element.value += line + '\n';
    nt = (nt + 1) % topics.length;
  }
}
