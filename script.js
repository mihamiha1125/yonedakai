/* ============================================================
   米田会 / Yoneda Business Community
   script.js
   ============================================================ */

/* ---------- 画像データ（Base64） ---------- */
const IMG = {
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAEAAElEQVR42uy9dXxUx/7///...",
  teirei: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
  // ※ 元のHTMLファイルから該当のBase64文字列を貼り付けてください
};

/* ============================================================
   ★ 編集はこの DATA を直すだけ。レイアウトは触らなくてOK
   ・お知らせ追加 → DATA.news の先頭に { } を1つ足す
   ・メンバー変更 → DATA.members を編集
   ・一文ビジョン → DATA.hero.h1
   ・フォーム/LINEのURL → DATA.links を実URLに差し替え
   ============================================================ */
const DATA = {

  /* --- 外部リンク --- */
  links: {
    studentForm: "#",   // 学生用 参加フォームURL（GoogleフォームやTallyなど）
    partnerForm: "#",   // 企業用 問い合わせフォームURL
    line:        "#"    // LINE公式URL
  },

  /* --- トップページ ヒーロー --- */
  hero: {
    tag: "神奈川大学・起業ビジネスコミュニティ",
    h1:  ["挑戦を、", "<span class='accent'>ひとり</span>にしない。"],
    sub: "「やってみたい」を抱えたまま、ひとりで止まってしまう学生は多い。米田会は、<b style='color:var(--paper);font-weight:700'>学び × 実践 × 仲間</b>を一つの場に束ね、挑戦が当たり前になる環境を神奈川大学につくります。",
    keys: [
      ["学び",   "体系的なビジネス知識"],
      ["実践",   "実際のプロジェクト経験"],
      ["仲間",   "切磋琢磨できる仲間と人脈"]
    ]
  },

  /* --- トップページ ドア（入口） --- */
  doors: {
    student: { tag:"For students",              title:"学生の方へ",       desc:"何が得られるか、どう参加するか。あなたの最初の一歩はこちら。",  to:"#/students" },
    company: { tag:"For companies & partners",  title:"企業・パートナーの方へ", desc:"連携の価値、共催イベント、協賛についてはこちら。",           to:"#/partners" }
  },

  /* --- 課題（Aboutページ） --- */
  problems: [
    ["01", "孤独で、続かない",       "ひとりで挑戦しても、壁にぶつかったとき相談相手がいない。多くの人がここで止まる。"],
    ["02", "ロールモデルがいない",   "身近に挑戦する先輩が少なく、「自分には無理」という思い込みが先に立つ。"],
    ["03", "知識と人脈が足りない",   "ビジネスの基礎や、実務経験者とつながる機会が、学内には驚くほど少ない。"]
  ],

  /* --- 3本柱 --- */
  pillars: [
    ["LEARN",   "学び",   "財務・マーケ・事業設計を、輪読とワークショップで体系的に。現役起業家を招いた特別講義も。"],
    ["BUILD",   "実践",   "実際のプロジェクトに関わり、企画から運営まで。机上で終わらない実務を現場で経験する。"],
    ["CONNECT", "仲間",   "志を同じくする仲間、そして現役起業家や社会人とのつながり。挑戦をひとりにしない関係性。"]
  ],

  /* --- 数字（統計） --- */
  stats: [
    ["100", "名",   "初年度の目標規模",           "TARGET / 初年度"],
    ["300", "名",   "最終目標規模",               "VISION"],
    ["全",  "学部", "全学年が対象",               "OPEN TO ALL"],
    ["週1", "+",    "定例会＋月1回以上のイベント", "ACTIVE"]
  ],

  /* --- 活動内容 --- */
  activities: [
    ["Weekly",    "定例会（週1回）",     "勉強会・読書会、アイデアシェア、財務やマーケのスキルアップワークショップ。仲間からのフィードバックで磨く。"],
    ["Monthly +", "特別イベント",        "現役起業家・経営者を招いた講義、企業訪問、他大学・社会人コミュニティとの交流、ビジネスコンテスト参加支援。"],
    ["Hands-on",  "実践プロジェクト",    "実際のプロジェクトに挑戦し、企画から運営まで現場で学ぶ。学びを「やってみる」につなげる場。"]
  ],

  /* --- メンバー --- */
  members: [
    ["黒", "代表",    "黒澤知雅"],
    ["石", "共同設立者", "石井友貴"],
    ["大", "共同設立者", "大富貴稀"]
  ],

  /* --- 沿革 --- */
  history: [
    ["2026.04", "サークル設立準備開始", "コアメンバーで構想・設立稟議を進行。"],
    ["2026.06", "正式活動スタート",     "神奈川大学公認サークルとして始動。"],
    ["これから", "顧問就任・事業連携", "顧問の就任、企業との共催イベントを準備中。"]
  ],

  /* --- お知らせ（先頭に追加していく） --- */
  news: [
    ["2026.06.04", "活動レポート", "定例会 第1回を開催しました",    "2026年度の活動計画を全員で共有し、これからの方向性を確認しました。", IMG.teirei],
    ["2026.06.04", "お知らせ",    "米田会が正式に活動を開始しました", "神奈川大学公認サークルとして始動しました。",                         ""],
    ["2026.05.01", "お知らせ",    "公式サイトを公開しました",         "学生の方・企業の方それぞれの入口を用意しています。",                  ""]
  ],

  /* --- 参加メリット（学生ページ） --- */
  benefits: [
    ["体系的に学べる",       "起業・ビジネスの基礎を、独学では届かない深さと順序で。"],
    ["実際にやってみられる", "プロジェクトに関わり、机上で終わらない実務を経験できる。"],
    ["仲間と出会える",       "同じ志の仲間、現役起業家や社会人とのつながりができる。"]
  ],

  /* --- 参加フロー --- */
  flow: [
    ["まずは問い合わせ / 見学", "フォームから気軽に。学部・学年は問いません。"],
    ["定例会や説明会に参加",    "雰囲気を見て、自分に合うか確かめてください。"],
    ["メンバーとして活動開始",  "学び・実践・仲間づくりをスタート。"]
  ],

  /* --- FAQ --- */
  faqs: [
    ["ビジネスや起業の知識がなくても大丈夫？", "まったく問題ありません。基礎から学べる場なので、興味があれば誰でも歓迎です。"],
    ["どの学部・学年でも入れる？",             "全学部・全学年が対象です。文系・理系も問いません。"],
    ["どのくらいの頻度で活動するの？",         "定例会が週1回、特別イベントが月1回以上を予定しています。無理なく参加できます。"],
    ["途中から参加してもいい？",               "もちろん大丈夫です。まずは見学・お問い合わせからどうぞ。"]
  ],

  /* --- パートナー信頼 --- */
  partnerTrust: [
    ["明確な運営体制",         "代表・共同設立者を中心としたコアチームが運営します。"],
    ["全学部・全学年に発信",   "学部や学年を問わず、意欲ある学生にアプローチできます。"],
    ["健全な運営方針",         "大学の規則を遵守し、活動報告を行う透明な運営を行います。"]
  ],

  /* --- パートナーメリット --- */
  partnerMerits: [
    ["意欲の高い学生層へのリーチ", "起業・ビジネスに能動的な学生に、自然な形でアプローチできます。"],
    ["共催イベントモデル",         "セミナー・ワークショップの共同開催で、形式的でない接点を設計します。"],
    ["大学発のブランド価値",       "挑戦する学生コミュニティとの連携を、対外的に発信できます。"]
  ]
};


/* ============================================================
   ユーティリティ
   ============================================================ */

/** セレクタでDOM要素を取得 */
const el = (s) => document.querySelector(s);

/** セクションヘッダーHTML */
const secHead = (num, label, title) =>
  `<div class="sec-head reveal">
    <span class="sec-num">${num}</span>
    <div>
      <div class="sec-label">${label}</div>
      <h2 class="sec-title">${title}</h2>
    </div>
  </div>`;

/** 数字ブロックHTML */
const numsBlock = () =>
  `<div class="nums">
    ${DATA.stats.map((s, i) => `
      <div class="num reveal" data-d="${i + 1}">
        <div class="big">
          ${/^[0-9]+$/.test(s[0])
            ? `<span class="count" data-target="${s[0]}">0</span>`
            : s[0]}
          <span class="u">${s[1]}</span>
        </div>
        <div class="lbl">${s[2]}</div>
        <div class="pill">${s[3]}</div>
      </div>`).join('')}
  </div>`;

/** 3本柱HTML */
const pillarsBlock = () =>
  `<div class="pillars">
    ${DATA.pillars.map((p, i) => `
      <div class="pillar reveal" data-d="${i + 1}">
        <div class="pn">PILLAR 0${i + 1}</div>
        <h3>${p[0]}</h3>
        <div class="jp">${p[1]}</div>
        <p>${p[2]}</p>
      </div>`).join('')}
  </div>`;

/** CTAバンドHTML */
const ctaBand = (h, p, acts) =>
  `<section class="cta-band">
    <div class="cta-glow"></div>
    <div class="wrap">
      <h2 class="reveal">${h}</h2>
      <p class="reveal">${p}</p>
      <div class="acts reveal">${acts}</div>
    </div>
  </section>`;

/** お知らせ1行HTML */
function newsRow(n) {
  return `<div class="news-item">
    ${n[4]
      ? `<span class="thumb"><img src="${n[4]}" alt="${n[2]}" loading="lazy"></span>`
      : `<span class="thumb empty"></span>`}
    <span class="date">${n[0]}</span>
    <span class="cat">${n[1]}</span>
    <div class="ttl">${n[2]}<small>${n[3]}</small></div>
  </div>`;
}


/* ============================================================
   ページビュー定義（各ページのHTMLを返す関数）
   ============================================================ */
const views = {

  /* --- トップ --- */
  '/': () => `
    <section class="hero view">
      <div class="hero-glow"></div>
      <div class="wrap">
        <img class="hero-crest reveal" src="${IMG.logo}" alt="米田会 紋章">
        <div class="hero-tag reveal">${DATA.hero.tag}</div>
        <h1 class="reveal">${DATA.hero.h1.map(l => `<span style="display:block">${l}</span>`).join('')}</h1>
        <p class="hero-sub reveal">${DATA.hero.sub}</p>
        <div class="hero-keys reveal">
          ${DATA.hero.keys.map(k => `<span><b>${k[0]}</b>　${k[1]}</span>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('01', 'Choose your path', 'あなたはどちらですか？')}
        <div class="doors">
          <a class="door student reveal" data-d="1" href="${DATA.doors.student.to}">
            <span class="bignum">01</span>
            <div>
              <div class="dtag">${DATA.doors.student.tag}</div>
              <h3>${DATA.doors.student.title}</h3>
              <p>${DATA.doors.student.desc}</p>
            </div>
            <span class="go">くわしく見る <span class="arr">→</span></span>
          </a>
          <a class="door company reveal" data-d="2" href="${DATA.doors.company.to}">
            <span class="bignum">02</span>
            <div>
              <div class="dtag">${DATA.doors.company.tag}</div>
              <h3>${DATA.doors.company.title}</h3>
              <p>${DATA.doors.company.desc}</p>
            </div>
            <span class="go">くわしく見る <span class="arr">→</span></span>
          </a>
        </div>
      </div>
    </section>

    <section class="sec light">
      <div class="wrap">
        ${secHead('02', 'What we offer', '学び × 実践 × 仲間を、<br>ひとつの場所に。')}
        ${pillarsBlock()}
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('03', 'By the numbers', 'これから、積み上げる。')}
        ${numsBlock()}
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('04', 'News', '最新のお知らせ')}
        <div class="reveal">${DATA.news.slice(0, 3).map(n => newsRow(n)).join('')}</div>
        <div style="margin-top:30px" class="reveal">
          <a class="btn btn-ghost" href="#/news">お知らせ一覧へ <span class="arr">→</span></a>
        </div>
      </div>
    </section>

    ${ctaBand(
      '挑戦は、<span class="accent">いま</span>始める。',
      '学生も企業の方も、まずは気軽にお問い合わせください。',
      `<a class="btn btn-primary" href="#/students">学生の方はこちら <span class="arr">→</span></a>
       <a class="btn btn-ghost"   href="#/partners">企業の方はこちら</a>`
    )}
  `,

  /* --- 米田会について --- */
  '/about': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">About</div>
        <h1>挑戦できる時代に、<br>動き出せる場所をつくる。</h1>
        <p>米田会は、夢や志を持つ学生が切磋琢磨し、学びを実践に変えられる神奈川大学の起業・ビジネスコミュニティです。</p>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('01', 'Why now', 'なぜ、米田会か。')}
        <div class="g3">
          ${DATA.problems.map((p, i) => `
            <div class="card reveal" data-d="${i + 1}">
              <div class="n">${p[0]}</div>
              <h3>${p[1]}</h3>
              <p>${p[2]}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec light">
      <div class="wrap">
        ${secHead('02', 'What we offer', '提供する3つの価値')}
        ${pillarsBlock()}
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('03', 'Team', '運営するコアチーム')}
        <div class="g3">
          ${DATA.members.map((m, i) => `
            <div class="member reveal" data-d="${i + 1}">
              <div class="avatar">${m[0]}</div>
              <div>
                <div class="role">${m[1]}</div>
                <div class="name">${m[2]}</div>
              </div>
            </div>`).join('')}
        </div>
        <div class="advisor reveal">
          <div class="ic">＋</div>
          <div>
            <b>顧問就任に向け調整中</b>
            <p>学生起業を見守る教員を顧問に迎えるべく、現在調整を進めています。決定次第ご紹介します。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('04', 'History', 'これまでとこれから')}
        <div class="timeline reveal">
          ${DATA.history.map(h => `
            <div class="tl">
              <div class="when">${h[0]}</div>
              <div class="what">${h[1]}</div>
              <div class="desc">${h[2]}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    ${ctaBand(
      '一緒に、挑戦しませんか。',
      '学部・学年は問いません。まずは話を聞きに来てください。',
      `<a class="btn btn-primary" href="#/students">学生の方へ <span class="arr">→</span></a>
       <a class="btn btn-ghost"   href="#/contact">お問い合わせ</a>`
    )}
  `,

  /* --- 活動 --- */
  '/activities': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">Activities</div>
        <h1>学ぶだけじゃない。<br>「やってみる」場所がある。</h1>
        <p>定例的な学びと、現場での実践。両方を行き来しながら成長できる活動を用意しています。</p>
      </div>
    </section>

    <section style="padding:6px 0 30px">
      <div class="wrap">
        <figure class="featured reveal">
          <img src="${IMG.teirei}" alt="定例会 第1回の様子" loading="lazy">
          <figcaption><span>定例会 第1回</span>2026.06.04 ・ 2026年度の活動計画を共有</figcaption>
        </figure>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('01', 'Activities', '活動内容')}
        <div class="g3">
          ${DATA.activities.map((a, i) => `
            <div class="card reveal" data-d="${i + 1}">
              <div class="tagk">${a[0]}</div>
              <h3>${a[1]}</h3>
              <p>${a[2]}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('02', 'Yearly', '年間の流れ（予定）')}
        <div class="timeline reveal">
          ${[
            ["4–6月",  "発足・基礎講座",   "キックオフ、ビジネス基礎、チームビルディング。"],
            ["7–9月",  "合宿・中間発表",   "夏季合宿で事業プラン策定、前期の成果発表。"],
            ["10–12月","実践・コンテスト", "企業訪問、マーケ実践、ビジネスコンテスト参加。"],
            ["1–3月",  "成果発表・新歓",   "年間総括と表彰、次年度に向けた新歓準備。"]
          ].map(h => `
            <div class="tl">
              <div class="when">${h[0]}</div>
              <div class="what">${h[1]}</div>
              <div class="desc">${h[2]}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    ${ctaBand(
      '活動を、のぞいてみる。',
      '見学だけでも歓迎です。気軽にお問い合わせください。',
      `<a class="btn btn-primary" href="#/students">参加・見学する <span class="arr">→</span></a>`
    )}
  `,

  /* --- お知らせ --- */
  '/news': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">News</div>
        <h1>お知らせ・活動レポート</h1>
        <p>米田会の最新情報と、これまでの活動の記録です。</p>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        <div class="reveal">${DATA.news.map(n => newsRow(n)).join('')}</div>
      </div>
    </section>
  `,

  /* --- 学生の方へ --- */
  '/students': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">For students</div>
        <h1>挑戦を、<br><span style="color:var(--blue)">ひとり</span>にしない。</h1>
        <p>学び・実践・仲間。あなたが「やってみたい」を形にするための環境が、ここにあります。学部・学年は問いません。</p>
        <div style="margin-top:30px;display:flex;gap:14px;flex-wrap:wrap">
          <a class="btn btn-primary" href="${DATA.links.studentForm}">参加・見学を申し込む <span class="arr">→</span></a>
          <a class="btn btn-ghost"   href="${DATA.links.line}">LINEで質問する</a>
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('01', 'What you get', '参加すると、得られるもの')}
        <div class="g3">
          ${DATA.benefits.map((b, i) => `
            <div class="card reveal" data-d="${i + 1}">
              <div class="n">0${i + 1}</div>
              <h3>${b[0]}</h3>
              <p>${b[1]}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('02', 'How to join', '参加までの流れ')}
        <div class="flow reveal">
          ${DATA.flow.map(s => `
            <div class="step">
              <div><b>${s[0]}</b><span>${s[1]}</span></div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec alt">
      <div class="wrap">
        ${secHead('03', 'FAQ', 'よくある質問')}
        <div class="faq reveal">
          ${DATA.faqs.map(f => `
            <details>
              <summary>${f[0]}<span class="pm">＋</span></summary>
              <div class="ans">${f[1]}</div>
            </details>`).join('')}
        </div>
      </div>
    </section>

    ${ctaBand(
      '最初の一歩を、ここから。',
      '少しでも気になったら、まずは話を聞きに来てください。',
      `<a class="btn btn-primary" href="${DATA.links.studentForm}">参加・見学を申し込む <span class="arr">→</span></a>
       <a class="btn btn-ghost"   href="${DATA.links.line}">LINEで問い合わせる</a>`
    )}
  `,

  /* --- 企業・パートナーの方へ --- */
  '/partners': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">For companies & partners</div>
        <h1>意欲ある学生に、<br>直接つながる。</h1>
        <p>採用広報、共催イベント、商品・サービスのフィードバック。米田会は企業の皆さまと、形式的でない接点をつくります。</p>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('01', 'Who we are', '信頼いただける理由')}
        <div class="g3">
          ${DATA.partnerTrust.map((t, i) => `
            <div class="card reveal" data-d="${i + 1}">
              <div class="n">0${i + 1}</div>
              <h3>${t[0]}</h3>
              <p>${t[1]}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec light">
      <div class="wrap">
        ${secHead('02', 'Partnership', '連携のメリット')}
        <div class="merits reveal" style="max-width:760px">
          ${DATA.partnerMerits.map((m, i) => `
            <div class="m">
              <div class="mn">0${i + 1}</div>
              <div><b>${m[0]}</b><span>${m[1]}</span></div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        ${secHead('03', 'Co-hosting', '共催イベントモデル')}
        <div class="reveal" style="max-width:760px">
          <p class="lead">企業が<em>テーマと知見</em>を、米田会が<em>意欲ある学生</em>を持ち寄る。<br>双方にメリットのあるイベントを、一緒に設計します。</p>
        </div>
      </div>
    </section>

    ${ctaBand(
      '連携について、<span class="accent">話してみる</span>。',
      'まずは気軽にご相談ください。担当よりご連絡します。',
      `<a class="btn btn-primary" href="${DATA.links.partnerForm}">連携・協賛を相談する <span class="arr">→</span></a>`
    )}
  `,

  /* --- お問い合わせ --- */
  '/contact': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">Contact</div>
        <h1>お問い合わせ</h1>
        <p>ご用件に合わせて、入口を分けています。該当する方からご連絡ください。</p>
      </div>
    </section>

    <section class="sec">
      <div class="wrap">
        <div class="csplit">
          <div class="cbox reveal" data-d="1">
            <div class="tagk">For students</div>
            <h3>学生の方</h3>
            <p>参加・見学のお申し込み、活動に関するご質問はこちら。学部・学年は問いません。</p>
            <div class="acts">
              <a class="btn btn-primary" href="${DATA.links.studentForm}">参加・見学を申し込む <span class="arr">→</span></a>
              <a class="btn btn-ghost"   href="${DATA.links.line}">LINEで質問する</a>
            </div>
          </div>
          <div class="cbox reveal" data-d="2">
            <div class="tagk">For companies</div>
            <h3>企業・パートナーの方</h3>
            <p>共催イベント・協賛・採用広報など、連携に関するご相談はこちら。</p>
            <div class="acts">
              <a class="btn btn-primary" href="${DATA.links.partnerForm}">連携・協賛を相談する <span class="arr">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};


/* ============================================================
   ルーター（URL ハッシュ → ページ切り替え）
   ============================================================ */

const app = el('#app');

function go(path) {
  if (!views[path]) path = '/';

  // ページHTMLを挿入
  app.innerHTML = views[path]();
  window.scrollTo(0, 0);

  // ナビのアクティブ状態を更新
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + path);
  });

  try { history.replaceState(null, '', '#' + path); } catch (e) {}

  initReveal();
  initCount();
}

// クリックナビゲーション（ハッシュリンク対応）
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a) return;
  e.preventDefault();
  go(a.getAttribute('href').slice(1));
  closeMenu();
});

// ブラウザの戻る・進む対応
addEventListener('hashchange', () => {
  go(location.hash.replace(/^#/, '') || '/');
  syncLogoImages();
  closeMenu();
});

// 初回ロード
go(location.hash.replace(/^#/, '') || '/');
syncLogoImages();


/* ============================================================
   ロゴ画像の同期
   ============================================================ */

function syncLogoImages() {
  document.querySelectorAll('.logo-img').forEach(i => i.src = IMG.logo);
  const fav = document.querySelector('link[rel=icon]');
  if (fav) fav.href = IMG.logo;
}


/* ============================================================
   スクロール連動（ヘッダー + プログレスバー）
   ============================================================ */

const hdr  = el('#hdr');
const prog = el('#prog');

addEventListener('scroll', () => {
  // ヘッダーの背景
  hdr.classList.toggle('scrolled', scrollY > 40);

  // プログレスバー
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  prog.style.width = (max > 0 ? (h.scrollTop / max * 100) : 0) + '%';
}, { passive: true });


/* ============================================================
   ハンバーガーメニュー（モバイル）
   ============================================================ */

const burger = el('#burger');
const nav    = el('#nav');

function closeMenu() {
  nav.classList.remove('open');
  burger.children[0].style.transform = '';
  burger.children[1].style.opacity   = '1';
  burger.children[2].style.transform = '';
}

burger.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  nav.classList.toggle('open', open);
  burger.children[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)'  : '';
  burger.children[1].style.opacity   = open ? '0' : '1';
  burger.children[2].style.transform = open ? 'rotate(-45deg) translate(6px,-6px)': '';
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));


/* ============================================================
   出現アニメーション（IntersectionObserver）
   ============================================================ */

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14 });

  app.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ============================================================
   カウントアップアニメーション
   ============================================================ */

function initCount() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;

      const countEl = e.target;
      const target  = +countEl.dataset.target;

      if (reduce) {
        countEl.textContent = target;
      } else {
        const duration = 1300;
        const start    = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          countEl.textContent = Math.round(easeOut(progress) * target);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }

      cio.unobserve(countEl);
    });
  }, { threshold: 0.5 });

  app.querySelectorAll('.count[data-target]').forEach(el => cio.observe(el));
}
