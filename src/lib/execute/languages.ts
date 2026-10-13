export interface LanguageMeta {
  id: number;
  name: string;
  label: string;
  monacoLanguage: string;
}

export const LANGUAGES: LanguageMeta[] = [
  { id: 63, name: "javascript", label: "JavaScript", monacoLanguage: "javascript" },
  { id: 100, name: "react", label: "React (JSX)", monacoLanguage: "javascript" },
  { id: 101, name: "html", label: "HTML", monacoLanguage: "html" },
  { id: 102, name: "css", label: "CSS", monacoLanguage: "css" },
  { id: 74, name: "typescript", label: "TypeScript", monacoLanguage: "typescript" },
  { id: 71, name: "python", label: "Python", monacoLanguage: "python" },
  { id: 60, name: "go", label: "Go", monacoLanguage: "go" },
  { id: 73, name: "rust", label: "Rust", monacoLanguage: "rust" },
  { id: 62, name: "java", label: "Java", monacoLanguage: "java" },
  { id: 54, name: "cpp", label: "C++", monacoLanguage: "cpp" },
  { id: 50, name: "c", label: "C", monacoLanguage: "c" },
  { id: 72, name: "ruby", label: "Ruby", monacoLanguage: "ruby" },
  { id: 68, name: "php", label: "PHP", monacoLanguage: "php" },
];
