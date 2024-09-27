function generatePreview() {
    const input = document.getElementById("markdown-input").value;
    const preview = document.getElementById("preview-content");
    preview.innerHTML = marked(input);
}

function insertBold() {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const boldText = "**" + text.substring(start, end) + "**";
    textarea.value = text.substring(0, start) + boldText + text.substring(end);
}

function insertItalic() {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const italicText = "_" + text.substring(start, end) + "_";
    textarea.value = text.substring(0, start) + italicText + text.substring(end);
}

function insertHeading() {
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    const level = document.getElementById("heading-level").value;
    if (level) {
        const headingText = "#".repeat(level) + " " + text.substring(start, end);
        textarea.value = text.substring(0, start) + headingText + text.substring(end);
    }
}

function insertLink() {
    const url = prompt("请输入链接 URL:");
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const linkText = "[" + text.substring(start, end) + "](" + url + ")";
    textarea.value = text.substring(0, start) + linkText + text.substring(end);
}

function insertImage() {
    const url = prompt("请输入图片 URL:");
    const textarea = document.getElementById("markdown-input");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const imageText = "![" + text.substring(start, end) + "](" + url + ")";
    textarea.value = text.substring(0, start) + imageText + text.substring(end);
}

// 初始化 markdown-it 实例
const md = window.markdownit();

function generatePreview() {
    const input = document.getElementById("markdown-input").value;
    const preview = document.getElementById("preview-content");

    // 使用 markdown-it 解析 Markdown 输入并转换为 HTML
    preview.innerHTML = md.render(input);
}
const previewButton = document.getElementById('previewButton');
const previewModal = document.getElementById('previewModal');
const previewContent = document.getElementById('previewContent');
const modalPreviewContent = document.getElementById('modalPreviewContent');
const close = document.getElementsByClassName("close")[0];

previewButton.addEventListener('click', () => {
  // 将预览内容填充到 modalPreviewContent 中
  modalPreviewContent.innerHTML = marked(/* 获取编辑器中的 Markdown 文本 */);
  previewModal.style.display = 'block';
});

close.onclick = function() {
  previewModal.style.display = "none";
}

// 点击模态窗口外部关闭
window.onclick = function(event) {
  if (event.target == previewModal) {
    previewModal.style.display = "none";
  }
}