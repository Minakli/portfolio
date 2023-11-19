import s from "./InfoBox.module.css";

export default function InfoBox() {
  // useRef for Info left div
  const infoRef = useRef(null);

  // Array lines for Info left div content
  const [infoLinesArr, setInfoLinesArr] = useState([]);

  // Array code snippets
  const [codeSnippetArr, setCodeSnippetArr] = useState([]);

  // Dividing Info left div content into lines
  useEffect(() => {
    if (infoRef.current) {
      let infoBoxWidth = infoRef.current.getBoundingClientRect().width;

      // Width for one letter
      let signWidth = 16;

      const text = personalInfo.content;
      let words = text.split(" ");
      let currentLine = "";
      let currentWidth = 0;
      let updatedLine = [];
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordWidth = word.length * signWidth;
        if (currentWidth + wordWidth <= infoBoxWidth - 140) {
          currentLine += word += " ";
          currentWidth += wordWidth + signWidth;
        } else {
          updatedLine.push(currentLine);
          currentLine = word += " ";
          currentWidth = wordWidth + signWidth;
        }
      }
      updatedLine.push(currentLine);
      setInfoLinesArr(updatedLine);
    }
  }, []);
  return <div></div>;
}