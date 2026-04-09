import type { LanguageOption, LanguagePack, ProgLangId } from './types'

export type { ProgLangId } from './types'

export const languageOptions: LanguageOption[] = [
  { id: 'javascript', label: 'JavaScript', tagline: 'Веб, Node.js, скрипты' },
  { id: 'typescript', label: 'TypeScript', tagline: 'Типы поверх JS' },
  { id: 'python', label: 'Python', tagline: 'Скрипты, данные, backend' },
  { id: 'csharp', label: 'C#', tagline: '.NET, Unity, десктоп' },
  { id: 'java', label: 'Java', tagline: 'Backend, Android (Kotlin рядом)' },
  { id: 'cpp', label: 'C / C++', tagline: 'Системное, встраиваемое, игры' },
]

const packs: Record<ProgLangId, LanguagePack> = {
  javascript: {
    id: 'javascript',
    focusRu: [
      'Сообщения в консоли браузера и Node: undefined, ReferenceError, Module not found.',
      'Документация MDN и README npm-пакетов почти всегда на английском.',
      'В React/Vue/Svelte имена хуков и пропсов — английские глаголы и существительные.',
    ],
    docPrimary: {
      name: 'MDN — JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      note: 'Справочник по языку и встроенным объектам.',
    },
    extraKeywords: [
      {
        term: 'import / export',
        readAs: '«импорт» / «экспорт»',
        meaningRu: 'Подключить модуль из файла или пакета / сделать символ доступным снаружи.',
        example: `import { useState } from 'react'\nexport function App() { ... }`,
        exampleLang: 'javascript',
        memoryTip: 'import — «взять извне», export — «отдать наружу».',
      },
      {
        term: 'async / await',
        readAs: '«эйсинк» / «эвэйт»',
        meaningRu: 'Асинхронный код: функция может «подождать» Promise без блокировки UI.',
        example: `async function load() {\n  const res = await fetch('/api')\n  return res.json()\n}`,
        exampleLang: 'javascript',
        memoryTip: 'await буквально «ждать обещание (Promise)».',
      },
      {
        term: 'try / catch / finally',
        readAs: '«трай» / «кэтч» / «файнали»',
        meaningRu: 'Поймать ошибку в try; catch обработать; finally выполнить в любом случае.',
        example: `try {\n  risky()\n} catch (e) {\n  console.error(e)\n} finally {\n  cleanup()\n}`,
        exampleLang: 'javascript',
        memoryTip: 'catch — «поймать» исключение, как catch в спорте.',
      },
      {
        term: 'const / let',
        readAs: '«конст» / «лет»',
        meaningRu: 'const — константная привязка (не переназначать); let — переменная с областью видимости в блоке.',
        example: `const API_URL = 'https://api.example.com'\nlet retries = 0`,
        exampleLang: 'javascript',
        memoryTip: 'const не значит «неизменяемый объект», а «не переназначать имя».',
      },
    ],
    extraErrors: [
      {
        phrase: 'Module not found / Cannot find module',
        gistRu: 'Импорт указывает на несуществующий файл или не установленный пакет.',
        whereToLook: 'Путь в import, package.json, node_modules; для алиасов — конфиг сборщика.',
      },
      {
        phrase: 'is not a function',
        gistRu: 'Вызвали как функцию то, что функцией не является (undefined, объект, число).',
        whereToLook: 'Имя перед (); откуда пришло значение — API, default vs named export.',
      },
    ],
    extraVerbs: [
      { en: 'require', meaningRu: 'В CommonJS — подключить модуль (старый стиль Node).' },
      { en: 'dispatch', meaningRu: 'Отправить действие в Redux/событийную шину.' },
      { en: 'render', meaningRu: 'Отрисовать компонент или DOM.' },
    ],
    searchTemplates: [
      'mdn Array.prototype map',
      'javascript [текст ошибки] site:stackoverflow.com',
      'node.js [код ошибки errno]',
    ],
    glossary: [
      { term: 'bundle', meaningRu: 'Сборка: объединённый файл(ы) для браузера.' },
      { term: 'polyfill', meaningRu: 'Код, подставляющий возможности старым средам.' },
      { term: 'hoisting', meaningRu: '«Поднятие» объявлений var/function в области видимости.' },
    ],
  },
  typescript: {
    id: 'typescript',
    focusRu: [
      'Сообщения компилятора: Type X is not assignable to Y, Property does not exist.',
      'Дженерики в угловых скобках <T> и utility-types (Partial, Pick, Omit).',
      'tsconfig.json — поля compilerOptions, strict, moduleResolution.',
    ],
    docPrimary: {
      name: 'TypeScript Handbook',
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      note: 'Официальное руководство по языку.',
    },
    extraKeywords: [
      {
        term: 'interface / type',
        readAs: '«интерфейс» / «тайп»',
        meaningRu: 'Описать форму объекта; type гибче (union), interface удобно расширять.',
        example: `interface User {\n  id: string\n  name: string\n}\n\ntype Status = 'idle' | 'loading'`,
        exampleLang: 'typescript',
        memoryTip: 'interface — «контракт» объекта; type — «псевдоним» типа.',
      },
      {
        term: 'extends / implements',
        readAs: '«экстендс» / «имплементс»',
        meaningRu: 'extends — наследование класса или расширение интерфейса; implements — класс выполняет контракт.',
        example: `class Admin extends User implements Role {\n  role = 'admin'\n}`,
        exampleLang: 'typescript',
        memoryTip: 'implements — «реализовать обещанное интерфейсом».',
      },
      {
        term: 'as / satisfies',
        readAs: '«эз» / «сэтисфайз»',
        meaningRu: 'as — утверждение типа; satisfies — проверить без сужения до literal union.',
        example: `const cfg = {\n  port: 3000,\n} as const\n\nvalue as string`,
        exampleLang: 'typescript',
        memoryTip: 'as — «считай это типом X»; используйте осторожно.',
      },
    ],
    extraErrors: [
      {
        phrase: 'Type … is not assignable to type …',
        gistRu: 'Значение не подходит под ожидаемый тип (поле отсутствует, union не совпал).',
        whereToLook: 'Место присваивания и объявление типа; сравните ожидаемое и фактическое.',
      },
      {
        phrase: 'Object is possibly undefined',
        gistRu: 'Strict null checks: доступ к свойству у значения, которое может быть undefined.',
        whereToLook: 'Optional chaining ?., проверка if, non-null assertion ! только если уверены.',
      },
    ],
    extraVerbs: [
      { en: 'infer', meaningRu: 'В типах — вывести тип автоматически (conditional types).' },
      { en: 'narrow', meaningRu: 'Сузить union до конкретного варианта (typeof, if).' },
    ],
    searchTemplates: [
      'typescript handbook generics',
      'ts [сообщение компилятора] site:stackoverflow.com',
    ],
    glossary: [
      { term: 'strict mode', meaningRu: 'Строгие проверки (null, implicit any) в tsconfig.' },
      { term: 'declaration file (.d.ts)', meaningRu: 'Описание типов без реализации JS.' },
    ],
  },
  python: {
    id: 'python',
    focusRu: [
      'Traceback снизу вверх: последняя строка — тип ошибки; выше — цепочка вызовов.',
      'PEP-документы (PEP 8, typing) — эталонные названия на английском.',
      'pip, venv, pyproject.toml — поля и сообщения установщика на английском.',
    ],
    docPrimary: {
      name: 'Python 3 docs',
      url: 'https://docs.python.org/3/',
      note: 'Официальная документация с tutorial и library reference.',
    },
    extraKeywords: [
      {
        term: 'def / return',
        readAs: '«деф» / «ритёрн»',
        meaningRu: 'def — определить функцию; return — вернуть значение (или None).',
        example: `def greet(name: str) -> str:\n    return f"Hello, {name}"`,
        exampleLang: 'python',
        memoryTip: 'def сокращение от define.',
      },
      {
        term: 'import / from … import',
        readAs: '«импорт» / «фром … импорт»',
        meaningRu: 'Подключить модуль целиком или выбранные имена.',
        example: `import json\nfrom pathlib import Path`,
        exampleLang: 'python',
        memoryTip: 'from X import Y — «из модуля X взять Y».',
      },
      {
        term: 'with … as',
        readAs: '«виз … эз»',
        meaningRu: 'Контекстный менеджер: гарантированно закрыть файл/соединение.',
        example: `with open("data.txt") as f:\n    data = f.read()`,
        exampleLang: 'python',
        memoryTip: 'with — «в контексте использования».',
      },
      {
        term: 'raise / except',
        readAs: '«рейз» / «эксепт»',
        meaningRu: 'raise — выбросить исключение; except — перехватить.',
        example: `try:\n    parse(s)\nexcept ValueError as e:\n    log(e)`,
        exampleLang: 'python',
        memoryTip: 'raise — «поднять» ошибку наверх.',
      },
    ],
    extraErrors: [
      {
        phrase: 'IndentationError / unexpected indent',
        gistRu: 'Отступы в Python — часть синтаксиса; смешали пробелы и табы или нарушили уровень.',
        whereToLook: 'Строка, указанная в сообщении; выровняйте блок под def/class/if.',
      },
      {
        phrase: 'ModuleNotFoundError',
        gistRu: 'Модуль не найден в PYTHONPATH / venv не активирован / пакет не установлен.',
        whereToLook: 'pip install, имя пакета, виртуальное окружение.',
      },
    ],
    extraVerbs: [
      { en: 'iterate', meaningRu: 'Итерироваться по коллекции (for item in items).' },
      { en: 'slice', meaningRu: 'Срез последовательности [start:stop:step].' },
    ],
    searchTemplates: [
      'python traceback [последняя строка ошибки]',
      'pep 8 [тема]',
    ],
    glossary: [
      { term: 'venv', meaningRu: 'Виртуальное окружение с изолированными пакетами.' },
      { term: 'decorator', meaningRu: 'Обёртка @ над функцией/классом.' },
    ],
  },
  csharp: {
    id: 'csharp',
    focusRu: [
      'Сообщения компилятора MSBuild / Roslyn с кодами CSxxxx.',
      'Документация Microsoft Learn: namespace, async Task, LINQ.',
      'В Unity — консоль с английскими сообщениями о сериализации и компонентах.',
    ],
    docPrimary: {
      name: 'Microsoft Learn — C#',
      url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      note: 'Официальные руководства и справочник по языку.',
    },
    extraKeywords: [
      {
        term: 'namespace / using',
        readAs: '«неймспейс» / «юзинг»',
        meaningRu: 'namespace — область имён; using — подключить пространство имён или освободить ресурс.',
        example: `using System;\nnamespace MyApp {\n  class Program { }\n}`,
        exampleLang: 'csharp',
        memoryTip: 'using вверху файла — «использовать пространство имён».',
      },
      {
        term: 'async / await / Task',
        readAs: '«эйсинк» / «эвэйт» / «таск»',
        meaningRu: 'Асинхронный метод возвращает Task; await ждёт завершения без блокировки потока UI.',
        example: `async Task<int> LoadAsync() {\n  var data = await client.GetAsync(url);\n  return 1;\n}`,
        exampleLang: 'csharp',
        memoryTip: 'Task — «задача», которая завершится позже.',
      },
      {
        term: 'public / private / protected',
        readAs: '«паблик» / «прайвит» / «протектед»',
        meaningRu: 'Видимость члена класса: отовсюду / только внутри класса / для наследников.',
        example: `public class User {\n  private string _id;\n}`,
        exampleLang: 'csharp',
        memoryTip: 'private — «приватное свойство класса».',
      },
    ],
    extraErrors: [
      {
        phrase: 'CS0246: The type or namespace name … could not be found',
        gistRu: 'Не найден тип или namespace — не подключён using или нет ссылки на сборку.',
        whereToLook: 'Директивы using, NuGet-пакет, правильное имя типа.',
      },
    ],
    extraVerbs: [
      { en: 'override', meaningRu: 'Переопределить виртуальный метод базового класса.' },
      { en: 'serialize', meaningRu: 'Сериализовать объект в JSON/XML/бинарный формат.' },
    ],
    searchTemplates: [
      'c# CS0246',
      'dotnet [сообщение ошибки] site:learn.microsoft.com',
    ],
    glossary: [
      { term: 'NuGet', meaningRu: 'Менеджер пакетов для .NET.' },
      { term: 'nullable reference types', meaningRu: 'Строгая пометка ссылок, допускающих null.' },
    ],
  },
  java: {
    id: 'java',
    focusRu: [
      'Stack trace: сверху точка входа, снизу место исключения.',
      'Ключевые слова class, extends, implements, throws, synchronized.',
      'Maven/Gradle — сообщения BUILD FAILED и зависимостей на английском.',
    ],
    docPrimary: {
      name: 'Oracle Java Documentation',
      url: 'https://docs.oracle.com/en/java/',
      note: 'Документация платформы Java SE.',
    },
    extraKeywords: [
      {
        term: 'class / extends / implements',
        readAs: '«класс» / «экстендс» / «имплементс»',
        meaningRu: 'class — тип; extends — наследование класса; implements — реализация интерфейса.',
        example: `public class Admin extends User implements Serializable {\n}`,
        exampleLang: 'java',
        memoryTip: 'implements — класс обещает методы интерфейса.',
      },
      {
        term: 'throws / throw',
        readAs: '«сроус» / «сроу»',
        meaningRu: 'throws в сигнатуре — метод может бросить проверяемое исключение; throw — выбросить.',
        example: `void read() throws IOException {\n  if (bad) throw new IOException();\n}`,
        exampleLang: 'java',
        memoryTip: 'throws — «предупредить вызывающего» о checked exception.',
      },
      {
        term: 'static / final',
        readAs: '«статик» / «файнал»',
        meaningRu: 'static — принадлежит классу, не экземпляру; final — нельзя переназначить/переопределить.',
        example: `public static final int MAX = 100`,
        exampleLang: 'java',
        memoryTip: 'final — «окончательно зафиксировано».',
      },
    ],
    extraErrors: [
      {
        phrase: 'NullPointerException (NPE)',
        gistRu: 'Обращение к методу/полю у ссылки null.',
        whereToLook: 'Цепочка вызовов в trace; проверки на null, Optional.',
      },
    ],
    extraVerbs: [
      { en: 'inject', meaningRu: 'Внедрить зависимость (DI-контейнер).' },
      { en: 'marshal', meaningRu: 'Преобразовать объект для передачи (JAXB, JSON).' },
    ],
    searchTemplates: [
      'java [имя исключения] oracle docs',
      'maven [текст ошибки]',
    ],
    glossary: [
      { term: 'JVM', meaningRu: 'Виртуальная машина Java — среда выполнения байткода.' },
      { term: 'classpath', meaningRu: 'Путь поиска классов и JAR-файлов.' },
    ],
  },
  cpp: {
    id: 'cpp',
    focusRu: [
      'Сообщения GCC/Clang/MSVC: expected, undeclared identifier, linker error.',
      'Заголовки .h, препроцессор #include, #define, pragma once.',
      'Управление памятью: new/delete, smart pointers (unique_ptr).',
    ],
    docPrimary: {
      name: 'cppreference.com',
      url: 'https://en.cppreference.com/w/',
      note: 'Справочник по C и C++ (англ.).',
    },
    extraKeywords: [
      {
        term: '#include / namespace',
        readAs: '«инклуд» / «неймспейс»',
        meaningRu: 'include — подключить заголовок; namespace — область имён.',
        example: `#include <vector>\nusing namespace std;`,
        exampleLang: 'cpp',
        memoryTip: 'include буквально «включить текст файла».',
      },
      {
        term: 'const / constexpr',
        readAs: '«конст» / «констэкспр»',
        meaningRu: 'const — неизменяемость; constexpr — вычислить на этапе компиляции.',
        example: `const int n = 10;\nconstexpr double pi = 3.14;`,
        exampleLang: 'cpp',
        memoryTip: 'constexpr — «константа времени компиляции».',
      },
      {
        term: 'pointer / reference',
        readAs: '«пойнтер» / «референс»',
        meaningRu: 'Указатель (*, ->); ссылка (&) — псевдоним объекта.',
        example: `int* p = &x;\nint& r = x;`,
        exampleLang: 'cpp',
        memoryTip: 'reference часто безопаснее сырого указателя для локального кода.',
      },
    ],
    extraErrors: [
      {
        phrase: 'undefined reference to … (linker)',
        gistRu: 'Компиляция прошла, но линкер не нашёл реализацию функции.',
        whereToLook: 'Подключите .cpp/.a/.lib; объявление в .h без определения.',
      },
      {
        phrase: 'segmentation fault (segfault)',
        gistRu: 'Доступ к недопустимой памяти (nullptr, выход за границы).',
        whereToLook: 'Отладчик, valgrind/AddressSanitizer, проверка индексов.',
      },
    ],
    extraVerbs: [
      { en: 'allocate', meaningRu: 'Выделить память (new, malloc).' },
      { en: 'dereference', meaningRu: 'Разыменовать указатель (*p).' },
    ],
    searchTemplates: [
      'cppreference std::vector',
      'gcc [текст ошибки]',
    ],
    glossary: [
      { term: 'header guard', meaningRu: 'Защита от двойного включения заголовка.' },
      { term: 'ABI', meaningRu: 'Двоичный интерфейс — совместимость на уровне машинного кода.' },
    ],
  },
}

export function getLanguagePack(id: ProgLangId): LanguagePack {
  return packs[id]
}

export function getDefaultLanguageId(): ProgLangId {
  return 'javascript'
}
