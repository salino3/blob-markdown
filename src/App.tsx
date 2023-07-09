import "./App.css";


function App() {
  const download = (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  const content = `# El título del archivo Markdown`;
  const blob = new Blob([content], { type: "text/markdown" });
  const filename = "archivo.md";

  return (
    <div className="App">
      <h1>Descargar texto in archivo MarkDown</h1>
      <button
        className="jello-horizontal"
        onClick={() => download(blob, filename)}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
