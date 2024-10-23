import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Correct workerSrc for pdf.js from a trusted CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [error, setError] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Use Cloudflare URL for the actual PDF file
  const pdf = "https://pub-cc2e42ab4af04da38c4f2d46ab5cb6a8.r2.dev/BHAGYASHRICHAVAN_SDE.pdf";

  const onError = (error) => {
    setError("Failed to load PDF: " + error.message);
    console.error("PDF Load Error: ", error);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf} // Use Cloudflare link for downloading the PDF
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Display the PDF */}
        <Row className="resume">
          {error ? (
            <p>{error}</p>
          ) : (
            <Document
              file={pdf}  // Load PDF from Cloudflare
              onLoadError={onError}
              className="d-flex justify-content-center"
              crossOrigin="anonymous" 
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          )}
        </Row>

        {/* Second Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
