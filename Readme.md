目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

<h1>HTML の解説</h1>
HTML は Web ページの構造を決めるためのコードです。このコードは、Web ページに表示される要素とその配置を定義しています。

<h3>headセクション</h3> この部分はWebブラウザには直接表示されませんが、Webページの基本的な情報や外部ファイルを読み込む設定を記述します。

<h3>meta charset="UTF-8"</h3> 文字化けを防ぐために、文字コードをUTF-8に設定しています。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> 異なるデバイス（スマホやタブレットなど）でページが適切に表示されるように、表示領域の設定をしています。

<h3>title</h3> Webブラウザのタブやウィンドウに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという名前のCSSファイルを読み込んでいます。これにより、Webページのデザインが適用されます。

<h3>bodyセクション</h3> この部分は実際にWebブラウザに表示されるコンテンツを記述します。

<h3>div class="box"</h3> 「チェックボックスでスタイル変更」というテキストが入った四角い領域を作成しています。後ほどCSSでアニメーションするデザインが適用されます。

<h3>br</h3> 改行タグで、要素の間にスペースを作っています。

<h3>div class="control-area"</h3> チェックボックスとラベルをまとめるための領域です。

<h3>input type="checkbox" id="toggleStyleCheckbox"</h3> チェックボックスを作成しています。id="toggleStyleCheckbox"は、JavaScript からこのチェックボックスを特定するために使われます。

<h3>label for="toggleStyleCheckbox"</h3> チェックボックスの横に表示される「テキストをハイライトする」というテキストです。for="toggleStyleCheckbox"によって、このラベルをクリックすると対応するチェックボックスが操作できるようになります。

<h3>p id="targetText" このテキストの色と太さが変わります。</h3> 「このテキストの色と太さが変わります。」というテキストを持つ段落です。id="targetText"は、JavaScriptからこのテキストを特定し、スタイルを変更するために使われます。

<h3>script src="script.js"</h3> script.jsという名前のJavaScriptファイルを読み込んでいます。これにより、Webページに動きが追加されます。

<h1>CSS: Webページをデザインする</h1>
CSSはHTMLで作成されたWebページのデザイン（色、形、配置など）を設定するためのコードです。

- body: Web ページ全体のスタイルを設定しています。

  - width: 100%;: 幅を 100%に設定し、画面いっぱいに広がるようにしています。

  - background: url(img/WaterSurface2025_2.png) no-repeat;: img/WaterSurface2025_2.png という画像を背景に設定し、繰り返さないようにしています。

  - background-size: cover;: 背景画像が要素全体を覆うように拡大・縮小されます。

  - font-family: "Open Sans", sans-serif;: テキストのフォントを設定しています。

  - display: flex; flex-direction: column; justify-content: center; align-items: center;: コンテンツを中央に配置するための設定です。

  - min-height: 100vh;: ページの最小の高さをビューポート（表示領域）の高さに設定しています。

  - margin: 0;: 外側の余白をなくしています。

  - color: #333;: テキストの色を濃い灰色に設定しています。

- .control-area: チェックボックスとラベルを囲む領域のデザインです。

  - margin-bottom: 30px;: 下に 30px の余白を設定しています。

  - background-color: #ffffff;: 背景色を白に設定しています。

  - padding: 20px 30px;: 内側の余白を設定しています。

  - border-radius: 8px;: 角を丸くしています。

  - box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);: 影をつけて立体感をだしています。

  - display: flex; align-items: center; gap: 15px;: チェックボックスとラベルを横に並べ、要素間の隙間を 15px に設定しています。

- input[type="checkbox"]: チェックボックス自体のデザインです。

  - width: 20px; height: 20px;: チェックボックスのサイズを設定しています。

  - cursor: pointer;: マウスカーソルを上に置くとポインターになるように設定しています。

  - accent-color: #0288d1;: チェックボックスがチェックされたときの色を青色に設定しています。

- label: チェックボックスの横のテキストのデザインです。

  - font-size: 1.1em;: 文字の大きさを少し大きくしています。

  - color: #555;: 文字の色を灰色に設定しています。

  - cursor: pointer;: マウスカーソルを上に置くとポインターになるように設定しています。

- #targetText: スタイルが変わるテキスト（「このテキストの色と太さが変わります。」）のデザインです。

  - font-size: 1.5em;: 文字の大きさを大きくしています。

  - padding: 20px 30px;: 内側の余白を設定しています。

  - border: 2px solid #ccc;: 灰色の 2px の枠線をつけています。

  - border-radius: 8px;: 角を丸くしています。

  - background-color: #ffffff;: 背景色を白に設定しています。

  - transition: all 0.3s ease-in-out;: スタイルが変化する際に、0.3 秒かけて滑らかに変化するように設定しています。

- .highlighted: JavaScript によって#targetText に追加されるクラスで、このクラスが適用されると以下のスタイルが適用されます。

  - color: #00bfff;: テキストの色を水色に設定しています。

  - font-weight: bold;: テキストを太字に設定しています。

  - border-color: #00bfff;: 枠線の色を水色に設定しています。

  - background-color: #ffebee;: 背景色を薄い赤色に設定しています。

  - box-shadow: 0 0 15px rgba(211, 47, 47, 0.3);: 赤っぽい影をつけています。

- .box: 「チェックボックスでスタイル変更」というテキストが入った領域のデザインです。

  - width: 720px; height: 480px;: 幅と高さを設定しています。

  - margin: 13% auto 0;: 上に 13%の余白、左右を自動にすることで中央に配置しています。下には余白がありません。

  - display: flex; align-items: center; justify-content: center;: テキストをボックスの中央に配置しています。

  - color: #fff;: テキストの色を白に設定しています。

  - font-size: 32px; font-weight: bold;: テキストの大きさと太さを設定しています。

  - position: relative;: 子要素を絶対配置する際の基準位置として設定しています。

  - transition: 0.4s;: スタイルが変化する際に、0.4 秒かけて滑らかに変化するように設定しています。

- .box::before, .box::after: box 要素の擬似要素で、角にアニメーションする枠線を表現するために使われています。

  - content: "";: 空のコンテンツを設定しています。

  - width: 50px; height: 50px;: サイズを設定しています。

  - border-top, border-left, border-bottom, border-right: それぞれ上、左、下、右の枠線のスタイルを設定しています。

  - position: absolute;: 親要素（.box）を基準に配置しています。

  - top: -1px; left: -1px;など: 各角の配置を設定しています。

  - transition: 0.4s; transition-delay: 0.5s;: 変化に 0.4 秒かけ、0.5 秒の遅延を設定しています。

- .box:hover:before, .box:hover::after: box 要素にマウスカーソルが乗ったときの擬似要素の変化です。

  - width: 100%; height: 100%;: 幅と高さを 100%にし、枠線がボックス全体を囲むようにします。

  - border-color: rgba(255, 255, 255, 0.3);: 枠線の色を薄い白に設定しています。

  - transition-delay: 0s;: 遅延をなくし、すぐに変化するようにします。

  - border-radius: 10px;: 角を丸くします。

- .box:hover: box 要素にマウスカーソルが乗ったときの変化です。

  - background: rgba(255, 255, 255, 0.1);: 背景を薄い白にします。

  - backdrop-filter: blur(15px);: 背景をぼかします。

  - transition-delay: 0.3s;: 変化に 0.3 秒の遅延を設定しています。

  - border-radius: 10px;: 角を丸くします。

<h1>JavaScript: Webページに動きを加える</h1>

JavaScript は Web ページに動きやインタラクティブな機能を追加するためのコードです。このコードでは、チェックボックスのオン/オフによってテキストのスタイルを変更する機能を実現しています。

- const toggleStyleCheckbox = document.getElementById("toggleStyleCheckbox");:

  - HTML ファイルで id="toggleStyleCheckbox"が設定されている要素（この場合はチェックボックス）を JavaScript で操作できるように取得し、toggleStyleCheckbox という定数に代入しています。

- const targetText = document.getElementById("targetText");:

  - HTML ファイルで id="targetText"が設定されている要素（この場合は「このテキストの色と太さが変わります。」という段落）を JavaScript で操作できるように取得し、targetText という定数に代入しています。

- toggleStyleCheckbox.addEventListener("change", () => { ... });:

  - これは「イベントリスナー」という機能です。toggleStyleCheckbox（チェックボックス）の**change イベント**（状態が変化したとき、つまりチェックボックスがオンになったりオフになったりしたとき）を監視しています。

  - change イベントが発生すると、{ ... }の中の処理が実行されます。

- if (toggleStyleCheckbox.checked) { ... } else { ... }:

  - これは条件分岐の文です。toggleStyleCheckbox.checked は、チェックボックスがチェックされているか（true）、**チェックされていないか（false）**を示します。

  - if (toggleStyleCheckbox.checked): もしチェックボックスがオンになっていれば、以下の処理が実行されます。

    - targetText.classList.add("highlighted");: targetText（「このテキストの色と太さが変わります。」の段落）に、CSS で定義されている**highlighted というクラスを追加**します。これにより、テキストの色や太さ、背景色、影などが変わります。

  - else: もしチェックボックスがオフになっていれば（つまり、toggleStyleCheckbox.checked が false の場合）、以下の処理が実行されます。

    - targetText.classList.remove("highlighted");: targetText から**highlighted というクラスを削除**します。これにより、テキストは元のスタイルに戻ります。

<h1>【まとめ】</h1>
このコードは、Webページにチェックボックスとテキストを表示し、チェックボックスをオンにすると特定のテキストの見た目が変わり、オフにすると元の見た目に戻るようにするものです。また、背景画像の設定や、マウスホバー時にアニメーションする「Box」要素なども含まれています。
