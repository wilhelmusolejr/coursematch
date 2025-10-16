import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadPdfButton({
  name = "Student",
  CET = 90,
  GPA = 95,
  STRAND = "STEM",
  colleges = {},
}) {
  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    if (!element) return;

    // temporarily force RGB colors
    element.style.colorScheme = "light";

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    } else {
      let remainingHeight = canvas.height;
      let position = 0;
      const pageHeightPx = Math.floor((canvas.width * pdfHeight) / pdfWidth);

      while (remainingHeight > 0) {
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = Math.min(pageHeightPx, remainingHeight);

        const ctx = pageCanvas.getContext("2d");
        ctx.drawImage(
          canvas,
          0,
          position,
          canvas.width,
          pageCanvas.height,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        const pageData = pageCanvas.toDataURL("image/png");
        if (position > 0) pdf.addPage();
        pdf.addImage(
          pageData,
          "PNG",
          0,
          0,
          pdfWidth,
          (pageCanvas.height * pdfWidth) / canvas.width
        );

        remainingHeight -= pageCanvas.height;
        position += pageCanvas.height;
      }
    }

    pdf.save("CourseMatch_Results.pdf");
  };

  let college_count = 0;

  let tagline;

  for (let college in colleges) {
    switch (college) {
      case "aligned":
        tagline = "Aligned Choice";
        break;
      case "not_aligned":
        tagline = "Alternative Path";
        break;
      case "mixed":
        tagline = "Explore Everything";
        break;
    }

    college_count++;
  }

  console.log(colleges);

  return (
    <>
      {/* PDF CONTENT */}
      <div
        ref={printRef}
        style={{
          position: "absolute",
          left: "-9999px", // move off-screen
          top: "0",
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)",
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "12px",
          lineHeight: 1.6,
        }}
      >
        <h1
          style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "12px" }}
        >
          Hi, {name}! Here are your course recommendations
        </h1>

        <p style={{ marginBottom: "24px" }}>
          Our intelligent prediction system has processed your academic data —{" "}
          <b>{CET}</b> CET score, <b>{GPA}</b> GPA, and <b>{STRAND}</b> strand —
          to generate the most suitable department matches. Review your results
          below and discover where your strengths truly align.
        </p>

        <h2
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}
        >
          Found {college_count} college{college_count !== 1 && "s"}:
        </h2>

        {Object.entries(colleges).map(([key, value], index) => (
          <div key={key} style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
              {index + 1}. {value.name} |{" "}
              <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                {tagline}
              </span>
            </h3>

            <p style={{ marginBottom: "8px" }}>{value.about}</p>

            <p style={{ fontWeight: "600" }}>Programs:</p>
            <ul style={{ paddingLeft: "20px", marginBottom: "8px" }}>
              {value.program?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <p style={{ fontWeight: "600" }}>Career Paths:</p>
            <ul style={{ paddingLeft: "20px" }}>
              {value.career_path?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}

        <p style={{ marginTop: "20px" }}>
          Each model provided a unique recommendation, showcasing the diverse
          opportunities available based on your academic profile. This variety
          allows you to explore different paths and consider multiple options
          that align with your strengths and interests.
        </p>

        <hr
          style={{
            marginTop: "50px",
          }}
        />

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "12px",
            color: "gray",
          }}
        >
          For more info, visit{" "}
          <a
            href="https://coursematch.vercel.app/"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            https://test.com
          </a>
        </p>
      </div>

      {/* BUTTON */}
      <div
        onClick={handleDownload}
        className="rounded-3xl bg-blue-800 font-medium uppercase px-8 py-3 w-fit text-white cursor-pointer"
      >
        Download results
      </div>
    </>
  );
}
