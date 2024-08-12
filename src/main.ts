import 'virtual:uno.css'
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
const colorList = document.getElementById('colorList') as HTMLUListElement;

let colors: string[] = [];

fileInput.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            const text = reader.result as string;
            colors = text.split('\n');
            renderColors();
        };
    }
});

function renderColors() {
  colorList.innerHTML = '';
    colors.forEach((color) => {
        const li = document.createElement('li');
        li.textContent = color;
        colorList.appendChild(li);
    });
}
