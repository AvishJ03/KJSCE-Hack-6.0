import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Footer from "../../MyComponents/Footer";
import Header from "../../MyComponents/Header";
import "./theory.css";
// import { useStylesTheory } from "./theory.styles";

/**
 * Passing support for syntax hightlighting in markdown
 */

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={a11yDark}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Theory = ({ param }) => {
  // styles
  // const classes = useStylesTheory();

  // local states
  const [markdownText, setMarkdownText] = useState(null);
  const [loading, setLoading] = useState(true);

  // hooks

  useEffect(() => {
    fectchMarkdown(param);
  }, [param]);

  // custom functions
  const fectchMarkdown = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/theory/${id}.md`);
      setMarkdownText(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error fetching theory");
    }
  };

  return (
    <div className="theorycustom1">
      <Header />
      {markdownText && (
        <ReactMarkdown
          className="theorycustom2"
          components={components}
          children={markdownText}
        />
      )}
      <Footer />
    </div>
  );
};

export default Theory;
