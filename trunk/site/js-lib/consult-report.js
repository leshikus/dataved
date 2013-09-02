var pairs = [
  [
    'АИС КАИП: автоматизированная информационная система контроля исполнения поручений с модулем Система телесовещаний',
    'Система совместной работы на базе Системы телесовещаний'
  ],
  [
    'Лицензионная политика программного обеспечения для государственных учреждений',
    'Оценка стоимости разработки программного обеспечения для государственных учреждений',
    'Выработка ключевых показателей эффективности при исполнении поручений в Агентстве по инновациям и развитию'
  ],
  [
    'Система трансляции мероприятий и проведения телесовещаний (Система Телесовещаний), основанная на Apache Openmeetings',
    'Система трансляции мероприятий, основанная на сервере red5',
    'Система трансляции мероприятий, основанная на сервере erlyvideo',
	'Система трансляции мероприятий, основанная на Adobe Flash Media Live Encoder',
	'Система проведения телесовещаний Пульс',
	'Система проведения телесовещаний Oovoo',
	'Система проведения телесовещаний Skype',
	'Система проведения телесовещаний Hangouts',
	'Система IP-телефонии, основанная на сервере Asterisk'
  ],
  [
    'Обсуждение опыта проведения конференций коалиции Общероссийский народный фронт',
    'Обсуждение опыта проведения конференций партии Единая Россия',
    'Обсуждение оборудования конференц-зала при проведении мероприятий высокого уровня',
    'Организация видеомоста с Институтом Бака (Калифорния)',
	'Организация видеомоста с Департаментом промышленности и транспорта Воронежской области',
    'Устранение проблем канала связи Москва-Калифорния',
    'Организация выступлений и вещания с конференции Российский интернет-форум в Воронеже',
	'Организации технического взаимодействия и осуществление взаимодействия с ТПП Баварии (Нюрнберг) в области поддержки предпринимательства',
    'Организация выступлений и вещания с форума информационных технологий в Воронеже',
    'Организация телемоста с офисом компании Центр финансовых технологий',
    'Помощь в организации взаимодействия с rian.ru (контакты: Цыпаева Екатерина Евгеньевна, Давыдова Елена Николаевна, Пахарь Павел Павлович, Буланова Ольга Владимировна, Тургиев Михаил Алиевич,  Шевченко Денис) и ВГТРК при проведении распределенных региональных мероприятий',
    'Создание регламентов на проведение распределенных региональных мероприятий с высоким уровнем качества организации'
  ],
  [
    'Система телесовещаний',
    'Система трансляции мероприятий, основанная на сервере red5',
    'Шлюз сервера телефонии c Системой телесовещаний по протоколу SIP',
    'Мобильный клиент Linphone',
    'Мобильное приложение Контакты+'
  ],
  [
    'Возможности и практика использования мобильного терминала',
    'Прототип пользовательских интерфейсов с оценкой стоимости разработки приложения',
    'Обзор принципов организации связи',
    'Обзор управляющих протоколов, используемых для связи',
    'Обзор методов кодирования данных, используемых при коммуникациях (кодеков)',
    'Обзор совместимого оборудования',
	'Консультация по работе в корпоративной сети, обходу firewall и других средств корпоративной безопасности',
	'Консультации по использованию нестандартного оборудования (плазменные телевизоры, ТВ-тюнеры)',
	'Консультации по работе управляющего протокола SIP и кодеков'
  ],
  [
    'Методики оценки региональных и муниципальных чиновников Воронежской области',
    'Информационная система интернет-мониторинга качества государственных услуг',
    'Интерактивная анкета участника интернет-мониторинга на сайте innoros.ru',
    'Автоматизированная информационная система сбора информации и обработки статистики интернет-мониторинга на сайте innoros.ru'
  ],
  [
    'Разработка методики оценки региональных и муниципальных чиновников Воронежской области',
    'Оценка региональных и муниципальных чиновников Воронежской области',
    'Перспективы развития открытого правительства в Воронежской области'
  ],
  [
    'Скрипт для сбора адресной информации в соответствии с профилем пользователя из сети hh.ru',
    'Скрипт для занесения адресной информации, собранной в соответствии с профилем пользователя из сети hh.ru, в базу данных',
    'Скрипт для рассылки приглашений в социальной сети linkedin.com',
    'Скрипт для рассылки приглашений в социальной сети moikrug.ru',
    'Скрипт для преследования выбранных по критериям пользователей в социальной сети facebook.com',
    'Скрипт для сбора доступных в сети Интернет адресов электронной почты в домене @gmail.com по данному ключевому слову',
    'Скрипт для сбора доступных профилей в социальной сети Google+ по данному ключевому слову',
    'Задачи и скрипты для автоматического тестирования математических способностей и мотивации соискателей',
    'Тематические статьи про инновации для сайта innoros.ru'
  ],
  [
    'Продвижение и реклама российских инноваций',
    'Продвижение сайта и конкурсов агентства в социальных медиа',
    'Консультирование по поиску сотрудников, в том числе в социальных медиа, с автоматизацией проведения собеседований',
    'Инновационные методы продвижения конкурса на лучшую инновационную идею в социальных сетях',
    'Инновационные методы продвижения конкурса IQ в социальных сетях',
    'Инновационные методы продвижения интернет-мониторинга оценки качества государственных услуг в социальных сетях',
    'Инновационные методы продвижения в социальных сетях проекта дистанционного образования (в рамках инвестиционной площадки ВГЛТА)',
    'Продвижение конкурса на лучшую инновационную идею',
    'Реклама целевых программ региона',
    'Продвижение темы ' + LQ + 'Воронеж как кремниевая долина России' + RQ,
	'Продвижение проекта ' + LQ + 'Воронеж: ИТ столица России' + RQ,
	'Продвижение проекта ' + LQ + 'санитарная авиация' + RQ,
    'Анализ современных средств продвижения',
    'Привлечение экспертов в области информационных технологий к решению задач Агентства',
    'Привлечение экспертов в области социологии и методов мониторинга к решению задач Агентства',
    'Привлечение экспертов в области государственнного управления к решению задач Агентства',
    'Привлечение экспертов в области инноваций и инвестиций к решению задач Агентства',
    'Привлечение экспертов в области телекоммуникаций к решению задач Агентства',
    'Привлечение экспертов в области биологии и биомедицины к решению задач Агентства',
    'Установление партнерства с компаниями-технологическими лидерами (Microsoft, Intel, резиденты Сколково)'
  ],
  [
    'Лучшие практики Gartner и Accenture, скорректированные с учетом специфики Государственного заказчика на основе опыта исполнителя, законов и подзаконных актов',
	'ИТ-стратегия Государственного заказчика, подготовленные Исполнителем на основании собственного опыта, законов и подзаконных актов',
	'Регламенты и нормативные документы организации, законы и подзаконные акты',
    'Методика ИТ-аудита на основе регламентов и нормативных документов организации, а также в соответствии с опытом предыдущей работы, законами и подзаконными актами',
    'Методика экспертной оценки в соответствии с лучшими практиками отрасли, опытом предыдущей работы Исполнителя, законами и подзаконными актами'
  ],
  [
    'Сравнение экспертизы ИТ-компаний для осуществления работ по расщеплению платежей ЖКХ',
    'Сравнение экспертизы ИТ-компаний для осуществления работ по созданию интерактивной 3D-карты Инновации Воронежа',
    'Расследование ДДОС атак и репутационных атак на сервера, в том числе сервера агентства, для влияния на результаты голосования',
    'Оценка стоимости разработки мобильных приложений, необходимых для выполнения задач Агентства',
    'Выдача рекомендаций по практикам разработки удобных пользовательских интерфейсов',
    'Создание способов мониторинга надежности ИТ-инфраструктуры Агентства',
    'Расследование репутационных атак в социальных сетях, а также создание способов мониторинга репутационных атак',
    'Консультации по патенту US 2010/0104158 A1 в области распознавания образов',
    'Консультации по технологиям 3D печати',
    'Консультации по регистрации проекта в Сколково',
    'Консультации по математическим моделям в биологии',
    'Консультации по оптимизации бизнес-процессов в Агентстве в области документооборота',
	'Консультации по оптимизации бизнес-процессов в Агентстве в области исполнения поручений',
	'Консультации по ценообразованию ЦОД',
    'Методика оценки экспертизы команды разработчиков',
    'Консультации по использованию эффективному рабочего места, оснащённого ПК',
	'Консультации по отражению ответственности сторон за нарушения в области интеллектуальной собственности при составлении договоров на ИТ-консалтинг',
	'Обсуждение лицензионного договора на передачу прав интеллектуальной собственности на статьи',
    'Консультация по пользованию электронной почтой',
    'Обсуждение перспектив развития инновационной площадки',
    'Консультация по настройке мобильного офиса на платформе Android',
    'Консультации по предложениям по внедрению единой системы документооборота и взаимодействия с органами государственной власти Воронежской области на платной основе с разработкой показателей оценки эффективности деятельности сотрудников казенных, бюджетных и автономных учреждениях Воронежской области',
	'Консультации по методикам и критериям, позволяющих на основании статистических данных, отражаемых в системе делопроизводства Lotus, установленной в Правительстве Воронежской области и подведомственных ему организаций, оценивать эффективность работы с документами пользователей указанной системы',
	'Консультации по цене на разработку мультимедийных рекламных материалов',
    'Обсуждение возможностей по привлечению банков для финансирования ИТ-проектов в рамках инновационной площадки',
    'Консультации по делегированию',
    'Консультации по организации технического взаимодействия с ВГУ и осуществление взаимодействия по обсуждению проблем дистанционного образования, образования в области ИТ и стратегии развития Воронежской области',
    'Консультации по организации технического взаимодействия с ЕИРЦ и осуществление взаимодействия по обсуждению проблем модернизации расчетов',
    'Перспективы системообразующего проекта в области свободного программного обеспечения с включениями элементов дистанционного образования, биржи фрилансеров, репозитория кода',
    'Перспективы проекта по сравнению программ управления инвестиционной деятельностью'
  ]
];

var consultee = [
  'Тригуб Борис Владимирович',
  'Еремина Наталья Викторовна',
  'Дерюгина Оксана', 
  'Логинов Владимир Григорьевич',
  'Жигайлов Сергей Николаевич',
  'Алятина Юлия',
  'Нафтс Олег Владимирович',
  'Антиликаторов Алексей Александрович',
  'Харченко Валерий Павлович',
  'Рущенко Ирина Васильевна',
  'Шевченко Тарас Владимирович',
  'Шестакова Екатерина Сергеевна',
  'Бордюг Юлия Валерьевна',
  'Лемешева Ольга'
];

var consultee_opt = [
  'Рудаков Александр',
  'Волощик Денис Валерьевич', 
  'Громыко Василий Васильевич', 'Вертилецкий Денис', 'Шаповал Егор', 'Маевский Павел', 'Новиков Илья Олегович',
  'Мигачева Анна Михайловна', 'Иванов Илья',
  'Скриптунова Елена Анатольевна', 'Драпалюк Михаил Валентинович',
  'Сушков Андрей Витальевич', 'Струков Владимир', 'Филлипов Евгений',
  'Товмаш Алексей Владимирович',
  'Огнивцев Сергей Борисович',
  'Волкова Наталья Владимировна',
  'Базарнов Александр Валерьевич',
  'Самойленко Елена Николаевна',
  'Литвинчук Александр Сергеевич',
  'Белов Алексей Александрович',
  'Колесникова Виктория Владимировна',
  'Полякова Ирина Раисовна',
  'Подрезов Алексей Николаевич',
  'Котляров Михаил Юрьевич',
  'Сумская Ирина Васильевна',
  'Пруцева Екатерина Артуровна',
  'Чеботарев Вячеслав Иванович',
  'Романова Светлана Васильевна',
  'Овсянникова Ольга Михайловна',
  'Образцов Александр Михайлович',
  'Торко Ярослав Олегович',
  'Барляк Оксана Викторовна',
  'Селиверстов Сергей Владимирович',
  'Шерстяных Павел Александрович',
  'Требунских Сергей Юрьевич',
  'Филатова Екатерина Викторовна',
  'Иванников Сергей Алексеевич',
  'Козлова Инна Ивановна',
  'Золотарев Евгений Юрьевич',
  'Чеснакова Тамара Михайловна',
  'Богданова Мария Анатольевна',
  'Воробьева Ольга Александровна',
  'Шумбасова Наталья',
  'Болгова Валентина Ивановна',
  'Малаханов Евгений Сергеевич',
  'Рябоконь Виктория Александровна',
  'Перфильев Никита Витальевич',
  'Лосева Людмила Анатольевна',
  'Волкова Тамара Геннадьевна',
  'Алферова Людмила Анатольевна',
  'Третьякова Тамара Геннадьевна',
  'Кочетов  Руслан  Львович',
  'Сахно Руслан Анатольевич',
  'Иванов Дмитрий Алексеевич',
  'Столповская Светлана Михайловна',
  'Гаврилова Светлана Александровна',
  'Рощин Алексей Вячеславович',
  'Шибкова Наталья Владимировна',
  'Прохорович Рената Равильевна',
  'Антонова Мария Юрьевна',
  'Винникова Анна Ивановна',
  'Клемешов Алексей Николаевич',
  'Бортникова Оксана Юрьевна',
  'Масалова Кристина Артуровна',
  'Масалытина Наталья Вячеславовна',
  'Бондарева Наталия Александровна',
  'Просвирнина Наталья Викторовна ',
  'Худолей Елена Ивановна'
];


var consultant = [
  'Федотов Алексей Анатольевич'//,
  //'Дегтярев Василий', 'Архипец Ирина', 'Солодовник Максим', 'Кандров Денис', 'Хоруженко Артем'
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
  'Риски обновления продукта #product и смягчение этих рисков в рамках проекта #project',
  'Оптимизация настроек продукта #product в рамках проекта #project',
  'Проверка и мониторинг работоспособности продукта #product после внесения изменений в рамках проекта #project',
  'Резервное копирование артефактов продукта #product и данных в рамках проекта #project',
  'Регламент восстановление работоспособности инструментария #product у Государственного заказчика из артефактов и данных'
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
  'Составление информационных писем о проведении распределенных региональных мероприятий с использованием продукта #product в рамках проекта #project',
  'Онлайн-экспертиза инновационного продукта #product, возможности использования в рамках проектов e-commerce и #project',
  'Проведение экспертизы инновационных идей	с использованием продукта #product в рамках проекта #project',
);

var H_TOTAL = 450;
var H_STEP = 0.5;

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
    
    var index = Math.floor(Math.random() * pairs.length * 0.5) * 2;
    var products = pairs[index];
    var projects = pairs[index + 1];
    
    var product = getRandomElement(products.split(/;\s*/g));

    var project = getRandomElement(projects);
    var topic = topics[nt];
    if (topic.indexOf('#product') == -1 || topic.indexOf('#project') == -1) console.log('Error in ' + topic);
    topic = topic.replace('#product', LQ + product + RQ).replace('#project', LQ + project + RQ);
    topic = getRandomElement(genFunc)(topic);
    topic = topic.replace(new RegExp(LQ + LQ, 'g'), LQ).replace(new RegExp(RQ + RQ, 'g'), RQ);

    line += topic;
    element.value += line + '\n';
    nt = (nt + 1) % topics.length;
  }
}
