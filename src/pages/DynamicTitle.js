// App.js
// Kindacode.com
import { useEffect, useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      // We pretend to be fetching data from a server and it takes 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // When the data "fetching" process is complete, we will set the title and content
      setTitle("This is a cool title");
      setContent("Everything is done");
    };

    fetchData();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title ? title : "No title"}</title>
      </Helmet>

      <div style={{ padding: 100 }}>
        <h1>{content}</h1>
      </div>
    </HelmetProvider>
  );
};

export default App;