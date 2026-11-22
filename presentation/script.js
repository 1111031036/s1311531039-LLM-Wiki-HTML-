const slides = [{"section": "封面", "title": "人工智慧與資訊安全", "subtitle": "AI 時代的風險、挑戰與防護", "body": "TAICA｜生成式 AI：文字與圖像生成的原理與實務", "chapter": "封面"}, {"section": "學習目標", "title": "這堂課要帶走什麼？", "subtitle": "從理解 AI 到建立安全使用習慣", "body": "辨識 AI 與資安的雙向關係；理解 LLM 常見風險；學會個人與企業的基本防護思維。", "chapter": "導論"}, {"section": "研究動機", "title": "為什麼要研究 AI 資安？", "subtitle": "AI 已進入學習、工作與日常服務", "body": "AI 可以提升效率，但資料輸入、模型輸出、外部工具與自動化決策都帶來新的管理責任。資訊管理不只關心工具能不能用，也要思考資料如何被使用與保護。", "chapter": "導論"}, {"section": "核心概念", "title": "AI、機器學習與生成式 AI", "subtitle": "三者是範圍不同、彼此相關的概念", "body": "AI 是廣泛領域；機器學習讓系統從資料學習模式；生成式 AI 依學得模式產生文字、圖像、音訊或程式碼。", "chapter": "第一章"}, {"section": "AI 與資安的雙向關係", "title": "AI 既是防禦工具，也是需要保護的系統", "subtitle": "三個觀察角度", "body": "用 AI 支援資安工作；保護 AI 模型、資料與平台；降低 AI 被不當使用所帶來的影響。", "chapter": "第一章"}, {"section": "AI 資安應用", "title": "讓大量資訊更容易被分析", "subtitle": "AI 可作為資安人員的分析助手", "body": "例如告警分類、異常活動辨識、郵件內容初步分類、事件摘要及威脅情資整理。輸出仍需由人員核對。", "chapter": "第二章"}, {"section": "應用限制", "title": "模型判斷不等於事實", "subtitle": "誤報、漏報與資料偏差都可能發生", "body": "模型表現會受資料品質、情境改變及設計限制影響。高影響決策應保留人工覆核與回復流程。", "chapter": "第二章"}, {"section": "LLM 風險地圖", "title": "生成式 AI 應用有哪些風險？", "subtitle": "從輸入、模型、資料、輸出與工具檢視", "body": "常見議題包含提示注入、敏感資訊揭露、供應鏈風險、資料污染、不安全輸出、過度代理權限與錯誤資訊。", "chapter": "第三章"}, {"section": "提示注入", "title": "不可信內容可能影響模型行為", "subtitle": "把外部內容視為資料，而不是可信命令", "body": "防護思維：限制模型可接觸的資料與工具；將指示與外部內容分層；對重要動作設置人工核准。", "chapter": "第三章"}, {"section": "敏感資訊揭露", "title": "輸入資料可能超出原本預期", "subtitle": "資料最小化是第一道防線", "body": "避免將密碼、個資、客戶紀錄或未公開文件貼入未經審核的服務；依組織政策選擇核准工具。", "chapter": "第三章"}, {"section": "供應鏈與資料品質", "title": "AI 系統不只有模型本身", "subtitle": "資料集、模型、套件、外掛與託管平台都要納入考量", "body": "建立元件清冊、確認來源與版本、評估供應商政策，並在更新後重新檢視風險。", "chapter": "第三章"}, {"section": "過度代理權限", "title": "自動化能力越多，責任越重要", "subtitle": "避免讓 AI 在沒有監督下執行高影響操作", "body": "採最小權限、限制可用工具、記錄重要動作，並在付款、刪除或對外發布等情境保留人工確認。", "chapter": "第三章"}, {"section": "錯誤資訊與深偽", "title": "看起來可信，不代表內容真實", "subtitle": "AI 生成內容需要查證脈絡", "body": "重要通知、影像或聲音若涉及金錢、帳號或個人安全，應透過已知官方管道再次確認。", "chapter": "第三章"}, {"section": "個資與隱私", "title": "輸入前先想：這份資料能不能分享？", "subtitle": "便利不能取代資料保護", "body": "理解資料用途、保存方式與服務條款；只提供必要資訊；未經同意不分享他人資料。", "chapter": "第四章"}, {"section": "學生的安全使用習慣", "title": "把安全變成日常流程", "subtitle": "五個簡單原則", "body": "不貼個資與密碼；不任意上傳私人文件；重要內容交叉查證；保留原始來源；遵守課程與機構規範。", "chapter": "第四章"}, {"section": "企業導入 AI", "title": "導入工具之前，先建立治理", "subtitle": "企業需要明確的使用範圍與責任", "body": "盤點用途、分類資料、評估供應商、設定權限、測試監控、建立事件應變與定期檢視。", "chapter": "第五章"}, {"section": "NIST AI RMF", "title": "用風險管理思維治理 AI", "subtitle": "框架協助組織辨識、衡量與管理風險", "body": "NIST 的生成式 AI Profile 補充生成式 AI 情境下的風險考量，可作為組織規劃與評估的參考，不是一次性勾選清單。", "chapter": "第五章"}, {"section": "ENISA 多層防護", "title": "從基礎資安延伸到 AI 特定風險", "subtitle": "安全措施需要依系統與產業情境調整", "body": "ENISA 提出多層次良好實務架構，提醒組織同時考慮一般資安基礎、AI 特定問題及產業應用情境。", "chapter": "第五章"}, {"section": "個人防護清單", "title": "先保護帳號，再保護資料", "subtitle": "建立可持續的安全習慣", "body": "使用多因素驗證；不同服務使用不同密碼；不輸入敏感資料；核對來源；遇到可疑要求時先停下確認。", "chapter": "第六章"}, {"section": "組織防護清單", "title": "讓規則、技術與人員一起運作", "subtitle": "安全不是單一工具可以完成", "body": "採最小權限、資料分類、日誌監控、人工覆核、員工教育及事件通報。定期檢查模型與服務更新。", "chapter": "第六章"}, {"section": "情境案例", "title": "員工想用 AI 摘要客戶資料", "subtitle": "你會先做哪件事？", "body": "情境：部門同仁準備把含客戶姓名、聯絡方式與交易資訊的檔案貼入公開 AI 服務。請先判斷資料類型、授權與工具政策。", "chapter": "互動"}, {"section": "互動測驗", "title": "哪個做法最符合資料最小化？", "subtitle": "選擇一個較安全的做法", "body": "A：整份客戶名冊直接貼上；B：先確認政策並移除非必要識別資訊；C：把檔案改名後上傳。", "chapter": "互動"}, {"section": "流程總結", "title": "安全使用 AI 的五步驟", "subtitle": "辨識情境 → 分類資料 → 限制權限 → 驗證輸出 → 持續檢視", "body": "這五個步驟可以套用在個人學習、企業導入與 AI 系統開發情境。", "chapter": "總結"}, {"section": "結論", "title": "AI 的價值，取決於我們如何負責任地使用", "subtitle": "效率與安全必須一起設計", "body": "AI 不是單純的威脅，也不是萬能防禦工具。理解風險、保護資料、限制權限、驗證輸出，才能建立可信任的使用方式。", "chapter": "總結"}, {"section": "參考資料", "title": "延伸閱讀與資料來源", "subtitle": "本簡報以公開機構資料整理", "body": "NIST GenAI Profile；OWASP Top 10 for LLM Applications；CISA AI Roadmap；UNESCO Guidance for Generative AI；ENISA AI Cybersecurity Practices。完整網址請見專案 sources/README.md。", "chapter": "參考資料"}];
let current = 0;
const stage = document.getElementById('stage');
const counter = document.getElementById('counter');
const fill = document.getElementById('progressFill');
const tocPanel = document.getElementById('tocPanel');
function render() {
  const s = slides[current];
  const isCover = current === 0;
  let extra = '';
  if (current === 21) {
    extra = `<div class="quiz"><strong>情境討論</strong><p>請先確認資料是否含個資、是否獲得授權，以及組織是否核准該 AI 服務。</p><div class="case-note">思考：如果工具未經審核，是否有更安全的替代方式？</div></div>`;
  }
  if (current === 22) {
    extra = `<div class="quiz"><strong>小測驗：哪個做法最符合資料最小化？</strong><div><button onclick="answerQuiz('A')">A｜整份客戶名冊直接貼上</button><button onclick="answerQuiz('B')">B｜先確認政策並移除非必要識別資訊</button><button onclick="answerQuiz('C')">C｜改檔名後直接上傳</button></div><div id="quizFeedback" aria-live="polite"></div></div>`;
  }
  stage.innerHTML = `<article class="slide"><div class="eyebrow">${s.chapter} / ${String(current+1).padStart(2,'0')}</div>${isCover?'<div class="hero-mark">AI</div>':''}<h1>${s.title}</h1><div class="subtitle">${s.subtitle}</div><div class="body-copy">${s.body}</div><div class="meta">資管三A 1311531039 葉家榕　·　TAICA 教學簡報</div>${extra}</article>`;
  counter.textContent = `${String(current+1).padStart(2,'0')} / ${slides.length}`;
  fill.style.width = `${(current+1)/slides.length*100}%`;
  document.getElementById('prevBtn').disabled = current===0;
  document.getElementById('nextBtn').textContent = current===slides.length-1 ? '回到首頁 ↺' : '下一頁 →';
  document.querySelectorAll('.toc-item').forEach((el,i)=>el.classList.toggle('active',i===current));
}
function go(n) { current = (n+slides.length)%slides.length; render(); }
window.answerQuiz = function(v) {
 const f=document.getElementById('quizFeedback');
 if(!f)return;
 f.textContent = v==='B' ? '答對了！先確認規範並減少不必要的個人資料，能降低資料暴露風險。' : '再想一想：改檔名不會改變檔案內的個資內容。';
};
document.getElementById('prevBtn').addEventListener('click',()=>go(current-1));
document.getElementById('nextBtn').addEventListener('click',()=>go(current===slides.length-1?0:current+1));
document.getElementById('tocBtn').addEventListener('click',()=>tocPanel.classList.add('open'));
document.getElementById('closeToc').addEventListener('click',()=>tocPanel.classList.remove('open'));
document.getElementById('tocList').innerHTML=slides.map((s,i)=>`<button class="toc-item" data-i="${i}"><small>${s.chapter} · ${String(i+1).padStart(2,'0')}</small>${s.title}</button>`).join('');
document.querySelectorAll('.toc-item').forEach(el=>el.addEventListener('click',()=>{go(Number(el.dataset.i));tocPanel.classList.remove('open');}));
document.addEventListener('keydown',e=>{
 if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1);}
 if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1);}
 if(e.key==='Home')go(0);
 if(e.key==='End')go(slides.length-1);
 if(e.key==='Escape')tocPanel.classList.remove('open');
});
render();
