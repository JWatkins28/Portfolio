import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <Document
        file={props.pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}