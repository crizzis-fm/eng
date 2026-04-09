/** Тексты и данные буклета — правки здесь, без переписывания разметки. */

import { getLanguagePack, type ProgLangId } from './languages'
import type { ApiVerb, ErrorPhrase, KeywordCard, NavItem } from './types'

export type { ApiVerb, ErrorPhrase, KeywordCard, NavItem } from './types'
export type { ProgLangId } from './types'

export const siteMeta = {
  title: 'Английский для программиста',
  subtitle: 'Первый шаг',
  description:
    'Цифровой буклет-памятка: ключевые слова, ошибки, документация и самообразование.',
}

export const navItems: NavItem[] = [
  { id: 'intro', label: 'Старт и язык' },
  { id: 'lexical', label: 'Лексика и команды' },
  { id: 'errors', label: 'Ошибки и сообщения' },
  { id: 'docs', label: 'Документация и поиск' },
  { id: 'self-study', label: 'Самообразование' },
  { id: 'history', label: 'Почему английский в IT' },
]

export const hero = {
  kicker: 'Цифровой буклет для учёбы',
  title: 'Английский в коде — без паники',
  lead:
    'Выберите язык программирования ниже: примеры ошибок, глоссарий и ссылки на документацию подстроятся под ваш стек. Общие разделы остаются для всех.',
}

export const intro = {
  title: 'Зачем английский в программировании',
  theses: [
    'Код и стандартные библиотеки почти всегда на английском: имена функций и сообщения об ошибках — это ваш ежедневный контекст.',
    'Документация и туториалы чаще всего сначала появляются на английском; умение читать заголовки и примеры экономит часы.',
    'Сообщества (форумы, GitHub, Stack Overflow) и вакансии опираются на общий англоязычный словарь терминов.',
    'Комментарии в чужих проектах, commit messages и code review часто на английском — даже в локальных командах.',
  ],
  closing:
    'Не нужна «литературная» речь: достаточно узнавать частые слова и шаблоны фраз — как дорожные знаки в чужой стране.',
}

export const abbreviations: { abbr: string; readEn: string; meaningRu: string }[] = [
  { abbr: 'API', readEn: '«эй-пи-ай»', meaningRu: 'Application Programming Interface — интерфейс для вызова возможностей программы/сервиса.' },
  { abbr: 'CLI', readEn: '«си-эл-ай»', meaningRu: 'Command Line Interface — интерфейс командной строки.' },
  { abbr: 'GUI', readEn: '«джи-ю-ай»', meaningRu: 'Graphical User Interface — графический интерфейс.' },
  { abbr: 'HTTP / HTTPS', readEn: '«эйч-ти-ти-пи»', meaningRu: 'Протокол передачи веб-страниц и API; S — secure, шифрование.' },
  { abbr: 'REST', readEn: '«рест»', meaningRu: 'Стиль API поверх HTTP (ресурсы, методы GET/POST…).' },
  { abbr: 'JSON', readEn: '«джейсон»', meaningRu: 'Текстовый формат обмена данными { "key": "value" }.' },
  { abbr: 'URL / URI', readEn: '«ю-ар-эл»', meaningRu: 'Адрес ресурса в сети; URI шире (идентификатор).' },
  { abbr: 'IDE', readEn: '«ай-ди-и»', meaningRu: 'Integrated Development Environment — среда разработки с редактором и отладкой.' },
  { abbr: 'PR / MR', readEn: '«пи-ар» / «эм-ар»', meaningRu: 'Pull/Merge Request — запрос на внесение изменений в репозиторий.' },
  { abbr: 'CI / CD', readEn: '«си-ай» / «си-ди»', meaningRu: 'Continuous Integration/Delivery — автосборка и выкладка.' },
]

export const readingTips = [
  'Сначала глазами пробегите заголовки (H1–H3) и списки — так вы поймёте карту страницы за 30 секунд.',
  'В примерах кода ищите комментарии // или /* … */ — там часто пояснение «why», а не «how».',
  'Если абзац тяжёлый, выпишите 3 незнакомых слова и вернитесь к тексту — контекст станет яснее.',
]

export const keywords: KeywordCard[] = [
  {
    term: 'if / else',
    readAs: '«иф» / «элс» — если / иначе',
    meaningRu: 'Ветвление: выполнить блок при условии или запасной вариант.',
    example: `if (user.isActive) {\n  greet();\n} else {\n  showWaitlist();\n}`,
    exampleLang: 'javascript',
    memoryTip: 'else звучит как «ещё вариант», когда первое не сработало.',
  },
  {
    term: 'while / for',
    readAs: '«вайл» — пока; «фор» — для (цикла)',
    meaningRu: 'Повторять код, пока условие истинно или по счётчику/коллекции.',
    example: `while (queue.length > 0) {\n  process(queue.shift());\n}\n\nfor (let i = 0; i < n; i++) {\n  sum += i;\n}`,
    exampleLang: 'javascript',
    memoryTip: 'while = «пока правда»; for часто читают как «для каждого шага i».',
  },
  {
    term: 'function / return',
    readAs: '«функшн» / «ритёрн»',
    meaningRu: 'Именованный блок кода; return отдаёт результат наружу.',
    example: `function square(x) {\n  return x * x;\n}`,
    exampleLang: 'javascript',
    memoryTip: 'return — «вернуть ответ вызывающему коду».',
  },
  {
    term: 'true / false',
    readAs: '«тру» / «фолс»',
    meaningRu: 'Логические значения да/нет в условиях и флагах.',
    example: `isReady = true\nif isReady:\n    start()`,
    exampleLang: 'python',
    memoryTip: 'Как переключатель: только два состояния.',
  },
  {
    term: 'and / or',
    readAs: '«энд» / «ор»',
    meaningRu: 'Связать условия: оба должны быть верны / достаточно одного.',
    example: `if age >= 18 and hasTicket:\n    enter()\n\nif isAdmin or isOwner:\n    openSettings()`,
    exampleLang: 'python',
    memoryTip: 'В JS чаще && и ||, но смысл тот же, что and/or.',
  },
  {
    term: 'null / undefined / None',
    readAs: '«нал» / «андифайнд» / «нан»',
    meaningRu: '«Пустое» значение: в JS null/undefined, в Python None — проверяйте перед доступом к полям.',
    example: `// JS\nlet x = null\n// Python\nx = None`,
    exampleLang: 'javascript',
    memoryTip: 'Читайте сообщение: «cannot read … of null» — сначала найти, кто null.',
  },
  {
    term: 'class / new / this',
    readAs: '«класс» / «нью» / «зис»',
    meaningRu: 'class — шаблон объекта; new — создать экземпляр; this — «текущий объект» в методе.',
    example: `class User {\n  constructor(name) {\n    this.name = name\n  }\n}\nconst u = new User('Ann')`,
    exampleLang: 'javascript',
    memoryTip: 'this часто путают — в стрелочных функциях он не привязан как в обычных методах.',
  },
  {
    term: 'break / continue',
    readAs: '«брейк» / «континью»',
    meaningRu: 'break — выйти из цикла; continue — перейти к следующей итерации.',
    example: `for (const x of items) {\n  if (x.skip) continue\n  if (x.done) break\n  use(x)\n}`,
    exampleLang: 'javascript',
    memoryTip: 'continue — «пропустить остаток шага и идти дальше».',
  },
  {
    term: 'switch / case / default',
    readAs: '«свич» / «кейс» / «дефолт»',
    meaningRu: 'Множественное ветвление по значению; default — ветка «во всех остальных случаях».',
    example: `switch (role) {\n  case 'admin': grant(); break\n  default: deny()\n}`,
    exampleLang: 'javascript',
    memoryTip: 'Не забывайте break между case в C-подобных языках — иначе «провал» вниз.',
  },
  {
    term: 'throw / catch',
    readAs: '«сроу» / «кэтч»',
    meaningRu: 'throw — выбросить ошибку; catch — перехватить и обработать.',
    example: `throw new Error('invalid')\n\ntry {\n  run()\n} catch (e) {\n  log(e.message)\n}`,
    exampleLang: 'javascript',
    memoryTip: 'message в ошибке — короткая английская фраза «что не так».',
  },
]

export const apiVerbs: ApiVerb[] = [
  { en: 'print / log', meaningRu: 'Вывести в консоль или лог (console.log, print).' },
  { en: 'open', meaningRu: 'Открыть файл, соединение или ресурс.' },
  { en: 'read', meaningRu: 'Прочитать данные (файл, поток, свойство).' },
  { en: 'write', meaningRu: 'Записать данные на диск или в поток.' },
  { en: 'parse', meaningRu: 'Разобрать строку/данные в структуру (JSON.parse и т.д.).' },
  { en: 'stringify / serialize', meaningRu: 'Превратить объект в строку/байты для передачи.' },
  { en: 'calculate / compute', meaningRu: 'Вычислить значение по правилам.' },
  { en: 'fetch / request', meaningRu: 'Запросить данные по сети (HTTP).' },
  { en: 'validate', meaningRu: 'Проверить, что данные удовлетворяют правилам.' },
  { en: 'transform / map', meaningRu: 'Преобразовать каждый элемент (map, select).' },
  { en: 'filter', meaningRu: 'Оставить элементы по условию.' },
  { en: 'reduce / fold', meaningRu: 'Свернуть коллекцию к одному значению (sum, aggregate).' },
  { en: 'sort', meaningRu: 'Упорядочить элементы.' },
  { en: 'merge', meaningRu: 'Объединить две структуры (ветки git, объекты).' },
  { en: 'clone / copy', meaningRu: 'Скопировать данные (поверхностно или глубоко).' },
]

export const errorPhrases: ErrorPhrase[] = [
  {
    phrase: 'undefined is not … / Cannot read property … of undefined',
    gistRu: 'Обратились к полю у значения, которого «нет» (undefined/null).',
    whereToLook: 'Цепочка до точки: что могло не прийти из API, пропа или состояния.',
  },
  {
    phrase: 'expected … / Unexpected token',
    gistRu: 'Парсер ждал другой символ или конструкцию — синтаксис сломан.',
    whereToLook: 'Строка выше/ниже указанной: скобки, запятые, кавычки, точка с запятой.',
  },
  {
    phrase: 'syntax error',
    gistRu: 'Код не соответствует грамматике языка.',
    whereToLook: 'Незакрытый блок, опечатка в ключевом слове, неверный порядок токенов.',
  },
  {
    phrase: 'TypeError / ReferenceError',
    gistRu: 'Неверный тип для операции или имя, которое не объявлено.',
    whereToLook: 'TypeError — аргументы и типы; ReferenceError — опечатка в имени или область видимости.',
  },
  {
    phrase: 'failed to … / could not …',
    gistRu: 'Операция не удалась (сеть, файл, права, таймаут).',
    whereToLook: 'Сообщение после «to»: что именно не получилось; код ошибки или статус HTTP.',
  },
  {
    phrase: 'permission denied / EACCES / EPERM',
    gistRu: 'Нет прав на файл или операцию.',
    whereToLook: 'Права ОС, запуск от администратора не всегда решение — лучше исправить владельца/umask.',
  },
  {
    phrase: 'timeout / ETIMEDOUT',
    gistRu: 'Ожидание ответа превысило лимит.',
    whereToLook: 'Сеть, DNS, медленный сервер; увеличить timeout или проверить URL.',
  },
  {
    phrase: '404 Not Found / 500 Internal Server Error',
    gistRu: 'HTTP: ресурс не найден / ошибка на стороне сервера.',
    whereToLook: 'URL, метод запроса, тело ответа; для 500 — логи сервера.',
  },
  {
    phrase: 'out of memory / stack overflow',
    gistRu: 'Закончилась память или переполнен стек вызовов (часто бесконечная рекурсия).',
    whereToLook: 'Размер данных, глубина рекурсии, утечки; профилировщик памяти.',
  },
  {
    phrase: 'deprecated / warning',
    gistRu: 'Устаревший API: пока работает, но скоро уберут.',
    whereToLook: 'Сообщение подскажет замену (use X instead); обновите зависимость или код.',
  },
]

export const docsSection = {
  title: 'Документация и поиск',
  readingHeadings: {
    intro:
      'Заголовки вроде Getting started, API reference, Configuration — это якоря: сначала найти раздел, потом читать абзац.',
    patterns: [
      'Overview / Introduction — обзор и термины.',
      'Installation / Setup — как подключить.',
      'Getting Started / Quickstart — минимальный рабочий пример.',
      'Usage / Examples — как вызывать; ищите code blocks.',
      'Configuration / Options — настройки и флаги.',
      'Migration / Upgrade — как перейти на новую версию.',
      'Troubleshooting / FAQ — типичные ошибки.',
      'Changelog / Release notes — что изменилось в версии.',
    ],
  },
  searchTemplates: [
    '[текст ошибки] stack overflow',
    '[язык или фреймворк] [ключевое слово ошибки] official docs',
    'mdn [имя API или метода]',
    'site:github.com [библиотека] issue [короткая фраза]',
    'site:reddit.com [технология] [вопрос одной строкой]',
  ],
  resources: [
    {
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/',
      note: 'Справочник по веб-платформе (JS, HTML, CSS).',
    },
    {
      name: 'DevDocs.io',
      url: 'https://devdocs.io/',
      note: 'Агрегатор документации (офлайн-режим в браузере).',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      note: 'Готовые ответы; смотрите дату, голоса и пометку «duplicate».',
    },
    {
      name: 'GitHub Issues',
      url: 'https://github.com/',
      note: 'Поиск по репозиторию библиотеки: та же ошибка могла уже обсуждаться.',
    },
    {
      name: 'Learn JavaScript',
      url: 'https://javascript.info/',
      note: 'Учебник по JS с примерами (англ. интерфейс).',
    },
  ],
}

export const selfStudy = {
  strategy: [
    'Учите слова в контексте своего стека: открыли доку — выпишите 5 незнакомых терминов из одной страницы.',
    'Держите мини-глоссарий: термин → одна строка «что это в моём проекте».',
    'Чередуйте чтение docs и короткие практические задачи — так лексика закрепляется.',
    'Читайте issues и PR на GitHub в избранных репозиториях: живой английский разработчиков.',
    'Записывайте произношение не IPA, а русскими слогами («ри-квест») — главное, чтобы узнавать на слух подкасты.',
  ],
  weekChecklist: [
    'Прочитать один раздел официальной документации на английском (с переводчиком только для отдельных слов).',
    'Разобрать 5 сообщений об ошибках: фраза + своими словами «что не так» + ссылка на фикс.',
    'Составить список из 15 глаголов из своего кода (имена функций) и проверить их значение в словаре.',
    'Три поисковых запроса на английском с полным текстом ошибки (без перевода всей строки).',
    'Повторить блок «ключевые слова» и аббревиатуры этого буклета за 10 минут.',
    'Посмотреть 1 короткое видео-доклад на английском (с субтитрами) по вашему фреймворку.',
  ],
  habits: [
    'Каждый день одно новое слово из лога сборки или консоли.',
    'Не копировать ошибку в переводчик целиком — сначала выделить незнакомые 2–3 слова.',
    'Закрепить в закладках одну официальную страницу docs и открывать её вместо случайных блогов.',
  ],
}

export const history = {
  title: 'Почему в программировании часто английский',
  blocks: [
    {
      title: 'Спецификации и стандарты',
      text:
        'Языки и протоколы (HTTP, JSON, Unicode, спецификации ECMAScript) исторически фиксируются на английском; так проще согласовывать международные стандарты.',
    },
    {
      title: 'Экосистема и код',
      text:
        'Открытые библиотеки, имена в GitHub и обсуждения issues в основном на английском; общий словарь снижает трение между командами в разных странах.',
    },
    {
      title: 'Образование и материалы',
      text:
        'Университетские курсы, конференции и книги издательств O’Reilly, Manning, No Starch чаще выходят сначала на английском; переводы отстают на годы.',
    },
  ],
  closing:
    'Это не «лучший язык», а сложившийся инженерный лингва франка. Достаточно базового чтения — как у авиадиспетчеров с английским радиообменом.',
}

/** Объединённые списки для выбранного языка */
export function getMergedKeywords(langId: ProgLangId): KeywordCard[] {
  const pack = getLanguagePack(langId)
  return [...keywords, ...pack.extraKeywords]
}

export function getMergedApiVerbs(langId: ProgLangId): ApiVerb[] {
  const pack = getLanguagePack(langId)
  return [...apiVerbs, ...pack.extraVerbs]
}

export function getMergedErrors(langId: ProgLangId): ErrorPhrase[] {
  const pack = getLanguagePack(langId)
  return [...errorPhrases, ...pack.extraErrors]
}

export function getMergedSearchTemplates(langId: ProgLangId): string[] {
  const pack = getLanguagePack(langId)
  return [...docsSection.searchTemplates, ...pack.searchTemplates]
}

/** Для локального поиска по разделам и терминам. */
export function buildSearchHaystack(langId: ProgLangId): { id: string; text: string }[] {
  const pack = getLanguagePack(langId)
  const chunks: { id: string; text: string }[] = []

  chunks.push({
    id: 'intro',
    text: [
      hero.title,
      hero.lead,
      intro.title,
      ...intro.theses,
      intro.closing,
      ...abbreviations.map((a) => `${a.abbr} ${a.meaningRu}`),
      ...readingTips,
      ...pack.focusRu,
      ...pack.glossary.map((g) => `${g.term} ${g.meaningRu}`),
    ].join(' '),
  })

  const lex = getMergedKeywords(langId)
    .map((k) => [k.term, k.readAs, k.meaningRu, k.memoryTip].join(' '))
    .concat(getMergedApiVerbs(langId).map((v) => `${v.en} ${v.meaningRu}`))
    .join(' ')
  chunks.push({ id: 'lexical', text: lex })

  const err = getMergedErrors(langId)
    .map((e) => [e.phrase, e.gistRu, e.whereToLook].join(' '))
    .join(' ')
  chunks.push({ id: 'errors', text: err })

  chunks.push({
    id: 'docs',
    text: [
      docsSection.title,
      docsSection.readingHeadings.intro,
      ...docsSection.readingHeadings.patterns,
      ...getMergedSearchTemplates(langId),
      pack.docPrimary.name,
      pack.docPrimary.note,
      ...docsSection.resources.map((r) => `${r.name} ${r.note}`),
    ].join(' '),
  })

  chunks.push({
    id: 'self-study',
    text: [...selfStudy.strategy, ...selfStudy.weekChecklist, ...selfStudy.habits].join(' '),
  })

  chunks.push({
    id: 'history',
    text: [history.title, ...history.blocks.map((b) => `${b.title} ${b.text}`), history.closing].join(
      ' ',
    ),
  })

  return chunks
}
