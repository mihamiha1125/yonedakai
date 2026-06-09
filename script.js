/* ============================================================
   ★ 編集はこの DATA を直すだけ。レイアウトは触らなくてOK（崩れません）
   ・お知らせ追加 → DATA.news の先頭に { } を1つ足す
   ・メンバー変更 → DATA.members を編集
   ・一文ビジョン → DATA.hero.h1 / 各文言も全部ここ
   ・フォーム/LINEのURL → DATA.links を実URLに差し替え
   ============================================================ */

// ---- 画像（Base64）----
// IMG.logo と IMG.teirei は元のHTMLの <script> 内にある Base64 文字列を貼り付けてください。
// 以下は変数名のみ定義しています。実際の値は元コードの IMG オブジェクトからコピーしてください
const IMG = {
  logo: "img/IMG_9578.PNG",
  teirei: "img/IMG_0226.jpg"
};

// ---- サイトデータ ----
const DATA = {
  links: {
    studentForm: "https://forms.gle/xQkSt1sDUyMZwXVG7",
    interview:   "https://timerex.net/s/wtstradiorer_7b8d/6a779b2c",
    interviewEmbed: "",
    partnerForm: "https://forms.gle/ZUVYuwwEy99QgnVZA",
    line:        "https://lin.ee/vLrY3LkD"
  },
  hero: {
    tag: "神奈川大学・起業ビジネスコミュニティ",
    h1:  ["挑戦を、", "<span class='accent'>ひとり</span>にしない。"],
    sub: "「やってみたい」を抱えたまま、ひとりで止まってしまう学生は多い。米田会は、<b style='color:var(--paper);font-weight:700;white-space:nowrap'>学び × 実践 × 仲間</b><wbr>を一つの場に束ね、挑戦が当たり前になる環境を神奈川大学につくります。",
    keys: [["学び","体系的なビジネス知識"],["実践","実際のプロジェクト経験"],["仲間","切磋琢磨できる仲間と人脈"]]
  },
  doors: {
    student: { tag:"For students",             title:"学生の方へ",           desc:"何が得られるか、どう参加するか。あなたの最初の一歩はこちら。",   to:"#/students" },
    company: { tag:"For companies & partners", title:"企業・パートナーの方へ", desc:"連携の価値、共催イベント、協賛についてはこちら。",               to:"#/partners" }
  },
  problems: [
    ["01","孤独で、続かない","ひとりで挑戦しても、壁にぶつかったとき相談相手がいない。多くの人がここで止まる。"],
    ["02","ロールモデルがいない","身近に挑戦する先輩が少なく、「自分には無理」という思い込みが先に立つ。"],
    ["03","知識と人脈が足りない","ビジネスの基礎や、実務経験者とつながる機会が、学内には驚くほど少ない。"]
  ],
  pillars: [
    ["LEARN","学び","財務・マーケ・事業設計を、輪読とワークショップで体系的に。現役起業家を招いた特別講義も。"],
    ["BUILD","実践","実際のプロジェクトに関わり、企画から運営まで。机上で終わらない実務を現場で経験する。"],
    ["CONNECT","仲間","志を同じくする仲間、そして現役起業家や社会人とのつながり。挑戦をひとりにしない関係性。"]
  ],
  stats: [
    ["100","名","現在のメンバー数","MEMBERS"],
    ["全","学部・全学年","学部・学年を問わず","OPEN TO ALL"],
    ["週1","+","定例会＋月1回以上のイベント","ACTIVE"]
  ],
  activities: [
    ["Weekly","定例会（週1回）","勉強会・読書会、アイデアシェア、財務やマーケのスキルアップワークショップ。仲間からのフィードバックで磨く。"],
    ["Monthly +","特別イベント","現役起業家・経営者を招いた講義、企業訪問、他大学・社会人コミュニティとの交流、ビジネスコンテスト参加支援。"],
    ["Hands-on","実践プロジェクト","実際のプロジェクトに挑戦し、企画から運営まで現場で学ぶ。学びを「やってみる」につなげる場。"]
  ],
  members: [
    ["黒","代表","黒澤知雅"],
    ["石","共同設立者","石井友貴"],
    ["大","共同設立者","大富貴稀"]
  ],
  history: [
    ["2026.04","サークル設立準備開始","コアメンバーで構想・設立稟議を進行。"],
    ["2026.06","正式活動スタート","神奈川大学公認サークルとして始動。"],
    ["これから","顧問就任・事業連携","顧問の就任、企業との共催イベントを準備中。"]
  ],
  // ★お知らせ：先頭に追加していくだけ
  // 形式: ["日付", "カテゴリ", "タイトル", "本文", "サムネイル画像（IMG.xxx または空文字列）"]
  news: [
    ["2026.06.04","活動レポート","定例会 第1回を開催しました","2026年度の活動計画を全員で共有し、これからの方向性を確認しました。",IMG.teirei],
    ["2026.06.04","お知らせ","米田会が正式に活動を開始しました","神奈川大学公認サークルとして始動しました。",""],
    ["2026.05.01","お知らせ","公式サイトを公開しました","",""]
  ],
  benefits: [
    ["体系的に学べる","起業・ビジネスの基礎を、独学では届かない深さと順序で。"],
    ["実際に行動できる","プロジェクトに関わり、机上で終わらない実務を経験できる。"],
    ["仲間と出会える","同じ志の仲間、現役起業家や社会人とのつながりができる。"]
  ],
  joinStart: [
    "まずは公式LINEを友だち追加",
    "まずはここから。米田会の公式LINEを友だち追加してください。メニューから、入会フォームの回答や面談の予約ができます。",
    "LINEを友だち追加",
    "line"
  ],
  joinSteps: [
    ["入会フォームに回答","公式LINEの登録後、メニューから入会フォームに回答します。","",""],
    ["面談を予約","「面談調整」メニューから、面談の日程を予約します。","面談を予約する","interview"],
    ["面談・入会","面談を経て、入会となります。","",""]
  ],
  partnerFlow: [
    ["お問い合わせフォームをご送信","会社名・ご用件（共催／協賛／採用など）・ご相談内容をご記入ください。","フォームを開く","partnerForm"],
    ["担当よりご連絡","渉外担当より、2〜3営業日以内にメールにてご返信いたします。","",""],
    ["オンライン／対面でお打ち合わせ","連携の内容を具体化し、一緒に形にしてまいります。","",""]
  ],
  faqs: [
    ["ビジネスや起業の知識がなくても大丈夫？","まったく問題ありません。基礎から学べる場なので、興味があれば誰でも歓迎です。"],
    ["どの学部・学年でも入れる？","全学部・全学年が対象です。文系・理系も問いません。"],
    ["どのくらいの頻度で活動するの？","定例会が週1回、特別イベントが月1回以上を予定しています。無理なく参加できます。"],
    ["途中から参加してもいい？","もちろん大丈夫です。まずは見学・お問い合わせからどうぞ。"]
  ],
  partnerTrust: [
    ["明確な運営体制","代表・共同設立者を中心としたコアチームが運営しております。"],
    ["全学部・全学年に発信","学部や学年を問わず、意欲ある学生へアプローチいただけます。"],
    ["健全な運営方針","大学の規則を遵守し、活動報告を行う透明な運営に努めております。"]
  ],
  partnerMerits: [
    ["意欲の高い学生層へのリーチ","起業・ビジネスに能動的な学生へ、自然な形でアプローチいただけます。"],
    ["共催イベントモデル","セミナー・ワークショップの共同開催で、形式的でない接点を設計いたします。"],
    ["大学発のブランド価値","挑戦する学生コミュニティとの連携を、対外的に発信いただけます。"]
  ],
  tiers: {
    body:  { name:"米田会（本体）", desc:"全学生に開かれた、起業・ビジネスへの入口。学び・つながり・挑戦の文化を育む場です。意欲があれば、学部・学年を問わず誰でも参加できます。" },
    alpha: { name:"米田会α",       desc:"本気で成果を出しに行く、選抜制の実行コホート。実際のプロジェクトに挑み、本体の運営やロールモデルも担う精鋭メンバーの集まりです。" },
    path: "本体で学び、意欲と行動を重ねたメンバーが、米田会αへ。挑戦のステージが、段階的に用意されています。"
  }
};

/* ========================================================
   ヘルパー関数
   ======================================================== */
const el = (s) => document.querySelector(s);

const secHead = (num, label, title) =>
  `<div class="sec-head reveal">
     <span class="sec-num">${num}</span>
     <div>
       <div class="sec-label">${label}</div>
       <h2 class="sec-title">${title}</h2>
     </div>
   </div>`;

const numsBlock = () =>
  `<div class="nums">
     ${DATA.stats.map((s, i) =>
       `<div class="num reveal" data-d="${i + 1}">
          <div class="big">
            ${/^[0-9]+$/.test(s[0])
              ? `<span class="count" data-target="${s[0]}">0</span>`
              : s[0]}
            <span class="u">${s[1]}</span>
          </div>
          <div class="lbl">${s[2]}</div>
          <div class="pill">${s[3]}</div>
        </div>`
     ).join('')}
   </div>`;

const pillarsBlock = () =>
  `<div class="pillars">
     ${DATA.pillars.map((p, i) =>
       `<div class="pillar reveal" data-d="${i + 1}">
          <div class="pn">PILLAR 0${i + 1}</div>
          <h3>${p[0]}</h3>
          <div class="jp">${p[1]}</div>
          <p>${p[2]}</p>
        </div>`
     ).join('')}
   </div>`;

const ctaBand = (h, p, acts) =>
  `<section class="cta-band">
     <div class="cta-glow"></div>
     <div class="wrap">
       <h2 class="reveal">${h}</h2>
       <p class="reveal">${p}</p>
       <div class="acts reveal">${acts}</div>
     </div>
   </section>`;

/* ========================================================
   ニュース行テンプレート
   ======================================================== */
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

/* ========================================================
   ページビュー（各ルートのHTML）
   ======================================================== */
const views = {

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
    <section class="sec">
      <div class="wrap">
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
        ${secHead('01', 'What we offer', '学び × 実践 × 仲間を、<br>ひとつの場所に。')}
        ${pillarsBlock()}
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        ${secHead('02', 'By the numbers', 'いまの、米田会。')}
        ${numsBlock()}
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('03', 'News', '最新のお知らせ')}
        <div class="reveal">${DATA.news.slice(0, 3).map(n => newsRow(n)).join('')}</div>
        <div style="margin-top:30px" class="reveal">
          <a class="btn btn-ghost" href="#/news">お知らせ一覧へ <span class="arr">→</span></a>
        </div>
      </div>
    </section>
    ${ctaBand(
      '挑戦は、<span class="accent">いま</span>始める。',
      '学生も企業の方も、まずはお気軽にお問い合わせください。',
      `<a class="btn btn-primary" href="#/students">学生の方はこちら <span class="arr">→</span></a>
       <a class="btn btn-ghost" href="#/partners">企業の方はこちら</a>`
    )}
  `,

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
          ${DATA.problems.map((p, i) =>
            `<div class="card reveal" data-d="${i + 1}">
               <div class="n">${p[0]}</div>
               <h3>${p[1]}</h3>
               <p>${p[2]}</p>
             </div>`
          ).join('')}
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
        ${secHead('03', 'Two layers', '米田会と、米田会α。')}
        <div class="g2">
          <div class="card reveal" data-d="1">
            <div class="tagk">Open community</div>
            <h3>${DATA.tiers.body.name}</h3>
            <p>${DATA.tiers.body.desc}</p>
          </div>
          <div class="card alpha reveal" data-d="2">
            <div class="n">α</div>
            <div class="tagk">Select cohort</div>
            <h3>${DATA.tiers.alpha.name}</h3>
            <p>${DATA.tiers.alpha.desc}</p>
          </div>
        </div>
        <p class="lead reveal" style="margin:42px auto 0;text-align:center;max-width:840px">${DATA.tiers.path}</p>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('04', 'Team', '運営するコアチーム')}
        <div class="g3">
          ${DATA.members.map((m, i) =>
            `<div class="member reveal" data-d="${i + 1}">
               <div class="avatar">${m[0]}</div>
               <div>
                 <div class="role">${m[1]}</div>
                 <div class="name">${m[2]}</div>
               </div>
             </div>`
          ).join('')}
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
    <section class="sec">
      <div class="wrap">
        ${secHead('05', 'History', 'これまでとこれから')}
        <div class="timeline reveal">
          ${DATA.history.map(h =>
            `<div class="tl">
               <div class="when">${h[0]}</div>
               <div class="what">${h[1]}</div>
               <div class="desc">${h[2]}</div>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    ${ctaBand(
      '一緒に、挑戦しませんか。',
      '学部・学年は問いません。まずは話を聞きに来てください。',
      `<a class="btn btn-primary" href="#/students">学生の方へ <span class="arr">→</span></a>
       <a class="btn btn-ghost" href="#/contact">お問い合わせ</a>`
    )}
  `,

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
    <section class="sec light">
      <div class="wrap">
        ${secHead('01', 'Activities', '活動内容')}
        <div class="g3">
          ${DATA.activities.map((a, i) =>
            `<div class="card reveal" data-d="${i + 1}">
               <div class="tagk">${a[0]}</div>
               <h3>${a[1]}</h3>
               <p>${a[2]}</p>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        ${secHead('02', 'Yearly', '年間の流れ（予定）')}
        <div class="timeline reveal">
          ${[
            ["6月","発足・基礎講座","キックオフ、ビジネス基礎、チームビルディング。各自の役職を決定。"],
            ["7–8月","学祭企画","秋の学園祭に向けて、出店の企画・準備を進める。"],
            ["9月","夏合宿","合宿で事業プランを策定し、チームの結束を高める。"],
            ["10月","学祭出店","横浜キャンパスの「神大フェスタ」、みなとみらいキャンパスの「みなとみらい祭」に出店。"],
            ["3月","学生×企業マッチングイベント","学生と企業をつなぐ、300名規模のイベントを開催。"]
          ].map(h =>
            `<div class="tl">
               <div class="when">${h[0]}</div>
               <div class="what">${h[1]}</div>
               <div class="desc">${h[2]}</div>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    ${ctaBand(
      '活動を、のぞいてみる。',
      '見学だけでも歓迎です。お気軽にお問い合わせください。',
      `<a class="btn btn-primary" href="${DATA.links.line}">公式LINEで参加・相談 <span class="arr">→</span></a>`
    )}
  `,

  '/news': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">News</div>
        <h1>お知らせ・活動レポート</h1>
        <p>米田会の最新情報と、これまでの活動の記録です。</p>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        <div class="reveal">${DATA.news.map(n => newsRow(n)).join('')}</div>
      </div>
    </section>
  `,

  '/students': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">For students</div>
        <h1>挑戦を、<br><span style="color:var(--blue)">ひとり</span>にしない。</h1>
        <p>学び・実践・仲間。「やってみたい」を、仲間と一緒に形にしていく場所です。学部・学年は問いません。</p>
        <div style="margin-top:30px;display:flex;gap:14px;flex-wrap:wrap">
          <a class="btn btn-primary" href="${DATA.links.line}">公式LINEで参加・相談 <span class="arr">→</span></a>
          <a class="btn btn-ghost" href="#/activities">活動内容を見る</a>
        </div>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('01', 'What you get', '参加すると、得られるもの')}
        <div class="g3">
          ${DATA.benefits.map((b, i) =>
            `<div class="card reveal" data-d="${i + 1}">
               <div class="n">0${i + 1}</div>
               <h3>${b[0]}</h3>
               <p>${b[1]}</p>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        ${secHead('02', 'How to join', '入会の流れ')}
        <div class="jf reveal">
          <div class="jf-start">
            <span class="jf-badge">START</span>
            <div class="jf-sb">
              <h3>${DATA.joinStart[0]}</h3>
              <p>${DATA.joinStart[1]}</p>
              <a class="btn jf-line" href="${DATA.links[DATA.joinStart[3]]}" target="_blank" rel="noopener">
                ${DATA.joinStart[2]} <span class="arr">→</span>
              </a>
            </div>
          </div>
          <div class="jf-conn"><span></span></div>
          <ol class="jf-steps">
            ${DATA.joinSteps.map((s, i) =>
              `<li class="jf-step">
                 <div class="jf-num">0${i + 1}</div>
                 <div class="jf-c">
                   <h4>${s[0]}</h4>
                   <p>${s[1]}</p>
                   ${s[2]
                     ? `<a class="step-cta" href="${DATA.links[s[3]]}" target="_blank" rel="noopener">${s[2]} <span class="arr">→</span></a>`
                     : ''}
                 </div>
               </li>`
            ).join('')}
          </ol>
          <p class="jf-note">※ 入会を決めていなくても大丈夫です。見学・面談だけでも歓迎しています。</p>
        </div>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('03', 'FAQ', 'よくある質問')}
        <div class="faq reveal">
          ${DATA.faqs.map(f =>
            `<details>
               <summary>${f[0]}<span class="pm">＋</span></summary>
               <div class="ans">${f[1]}</div>
             </details>`
          ).join('')}
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        <div class="card alpha reveal" style="max-width:800px;margin:0 auto">
          <div class="n">α</div>
          <div class="tagk">Next step</div>
          <h3>さらに本気で挑戦したい人へ — 米田会α</h3>
          <p>本体での活動を通じて、選抜制の実行コホート「米田会α」を目指せます。実際のプロジェクトに挑み、成果をつくる精鋭メンバーの集まりです。挑戦のステージは、段階的に用意されています。</p>
        </div>
      </div>
    </section>
    ${ctaBand(
      '最初の一歩を、ここから。',
      '少しでも気になったら、まずは公式LINEで話を聞いてみてください。',
      `<a class="btn btn-primary" href="${DATA.links.line}">公式LINEで参加・相談 <span class="arr">→</span></a>
       <a class="btn btn-ghost" href="#/activities">活動を見る</a>`
    )}
  `,

  '/partners': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">For companies &amp; partners</div>
        <h1>意欲ある学生に、<br>直接つながる。</h1>
        <p>採用広報、共催イベント、商品・サービスのフィードバック。米田会は企業の皆さまと、形式的でない接点を築いてまいります。</p>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        ${secHead('01', 'Who we are', '信頼いただける理由')}
        <div class="g3">
          ${DATA.partnerTrust.map((t, i) =>
            `<div class="card reveal" data-d="${i + 1}">
               <div class="n">0${i + 1}</div>
               <h3>${t[0]}</h3>
               <p>${t[1]}</p>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('02', 'Partnership', '連携のメリット')}
        <div class="merits reveal" style="max-width:760px">
          ${DATA.partnerMerits.map((m, i) =>
            `<div class="m">
               <div class="mn">0${i + 1}</div>
               <div><b>${m[0]}</b><span>${m[1]}</span></div>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        ${secHead('03', 'Co-hosting', '共催イベントモデル')}
        <div class="reveal" style="max-width:760px">
          <p class="lead">企業の皆さまが<em>テーマと知見</em>を、米田会が<em>意欲ある学生</em>を持ち寄り、<br>双方にメリットのあるイベントを、一緒に設計いたします。</p>
        </div>
      </div>
    </section>
    <section class="sec light">
      <div class="wrap">
        ${secHead('04', 'How it works', 'お問い合わせの流れ')}
        <div class="flow reveal">
          ${DATA.partnerFlow.map(s =>
            `<div class="step">
               <div>
                 <b>${s[0]}</b>
                 <span>${s[1]}</span>
                 ${s[2]
                   ? `<a class="step-cta" href="${DATA.links[s[3]]}" target="_blank" rel="noopener">${s[2]} <span class="arr">→</span></a>`
                   : ''}
               </div>
             </div>`
          ).join('')}
        </div>
      </div>
    </section>
    ${ctaBand(
      '連携について、<span class="accent">お話し</span>しませんか。',
      'まずはお気軽にご相談ください。担当よりご連絡いたします。',
      `<a class="btn btn-primary" href="${DATA.links.partnerForm}">連携・協賛のご相談 <span class="arr">→</span></a>`
    )}
  `,

  '/contact': () => `
    <section class="phero view">
      <div class="wrap">
        <div class="crumb">Contact</div>
        <h1>お問い合わせ</h1>
      </div>
    </section>
    <section class="sec">
      <div class="wrap">
        <div class="csplit">
          <div class="cbox reveal" data-d="1">
            <div class="tagk">For students</div>
            <h3>学生の方</h3>
            <p>参加・見学のお申し込み、活動に関するご質問は、公式LINEからお気軽にどうぞ。学部・学年は問いません。</p>
            <div class="acts">
              <a class="btn btn-primary" href="${DATA.links.line}">公式LINEで相談する <span class="arr">→</span></a>
            </div>
          </div>
          <div class="cbox reveal" data-d="2">
            <div class="tagk">For companies</div>
            <h3>企業・パートナーの方</h3>
            <p>共催イベント・協賛・採用広報など、連携に関するご相談はこちらから承ります。担当より2〜3営業日以内にご返信いたします。</p>
            <div class="acts">
              <a class="btn btn-primary" href="${DATA.links.partnerForm}">連携・協賛のご相談 <span class="arr">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

/* ========================================================
   ルーター & インタラクション
   ======================================================== */
const app = el('#app');

function go(path) {
  if (!views[path]) path = '/';
  app.innerHTML = views[path]();
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + path);
  });
  try { history.replaceState(null, '', '#' + path); } catch (e) {}
  initReveal();
  initCount();
  jpBreak();
}

function initReveal() {
  const io = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .14 });
  app.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initCount() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const cio = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const t = +el.dataset.target;
        if (reduce) {
          el.textContent = t;
        } else {
          const d = 1300, s = performance.now();
          const step = (n) => {
            const p = Math.min((n - s) / d, 1);
            el.textContent = Math.round(easeOut(p) * t);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        cio.unobserve(el);
      }
    });
  }, { threshold: .5 });
  app.querySelectorAll('.count[data-target]').forEach(el => cio.observe(el));
}

function jpBreak() {
  const sel = [
    '#app p','#app .lead','#app h1','#app h2','#app .sec-title','#app .card h3',
    '#app .merits b','#app .merits span','#app .step b','#app .step span',
    '#app .num .lbl','#app .door p','#app .cbox p','#app .faq summary',
    '#app .faq .ans','#app .advisor p','#app .tl .what','#app .tl .desc',
    '#app .hero-sub','#app .dtag','.foot-brand p'
  ].join(',');
  document.querySelectorAll(sel).forEach(el => {
    if (el.dataset.jb) return;
    el.dataset.jb = '1';
    el.innerHTML = el.innerHTML
      .replace(/\s([×✕])\s/g, ' $1 ')
      .replace(/([×✕])/g, '⁠$1⁠')
      .replace(/([、。・／])/g, '$1<wbr>');
  });
}

// クリックナビゲーション（ハッシュルーティング）
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a) return;
  e.preventDefault();
  go(a.getAttribute('href').slice(1));
  closeMenu();
});

addEventListener('hashchange', () => {
  go(location.hash.replace(/^#/, '') || '/');
  document.querySelectorAll('.logo-img').forEach(i => i.src = IMG.logo);
  { const fav = document.querySelector('link[rel=icon]'); if (fav) fav.href = IMG.logo; }
  closeMenu();
});

// 初期表示
go(location.hash.replace(/^#/, '') || '/');
document.querySelectorAll('.logo-img').forEach(i => i.src = IMG.logo);
{ const fav = document.querySelector('link[rel=icon]'); if (fav) fav.href = IMG.logo; }

// ヘッダースクロール & プログレスバー
const hdr = el('#hdr'), prog = el('#prog');
addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', scrollY > 40);
  const h = document.documentElement, m = h.scrollHeight - h.clientHeight;
  prog.style.width = (m > 0 ? (h.scrollTop / m * 100) : 0) + '%';
}, { passive: true });

// モバイルメニュー
const burger = el('#burger'), nav = el('#nav');
function setMenu(o) {
  nav.classList.toggle('open', o);
  hdr.classList.toggle('menu-open', o);
  document.body.style.overflow = o ? 'hidden' : '';
  burger.children[0].style.transform = o ? 'rotate(45deg) translate(5px,5px)' : '';
  burger.children[1].style.opacity  = o ? '0' : '1';
  burger.children[2].style.transform = o ? 'rotate(-45deg) translate(6px,-6px)' : '';
}
function closeMenu() { setMenu(false); }
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
