const toggleStyleCheckbox = document.getElementById("toggleStyleCheckbox");
const targetText = document.getElementById("targetText");

// チェックボックスの変更イベントを監視
toggleStyleCheckbox.addEventListener("change", () => {
  if (toggleStyleCheckbox.checked) {
    // チェックボックスがオンの場合、'highlighted'クラスを追加
    targetText.classList.add("highlighted");
  } else {
    // チェックボックスがオフの場合、'highlighted'クラスを削除
    targetText.classList.remove("highlighted");
  }
});
