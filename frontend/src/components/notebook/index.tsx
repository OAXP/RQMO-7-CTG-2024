import React, { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./notebook.css";
import useDiseases from "@src/hooks/useDisease";
import IDisease from "@src/types/disease";

const Notebook: React.FC<NotebookProps> = ({ isOpened, handleOpen }) => {
  const diseases: IDisease[] = useDiseases();
  // Add an empty page to make the number of pages even
  diseases.length + 1 % 2 === 0 && diseases.push({ name: "", symptoms: [] });

  const mouseOverContainerRef = useRef<HTMLDivElement>(null);
  const ex1LayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpened) {
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ios/i.test(
          navigator.userAgent
        )
      ) {
        const mouseOverContainer = mouseOverContainerRef.current;
        const ex1Layer = ex1LayerRef.current!;

        const mouseMoveHandler = (e: MouseEvent) => {
          let position = [e.clientX, e.clientY, ex1Layer];
          window.requestAnimationFrame(() => {
            transformElement(ex1Layer, position);
          });
        };

        mouseOverContainer?.addEventListener("mousemove", mouseMoveHandler);

        return () => {
          mouseOverContainer?.removeEventListener(
            "mousemove",
            mouseMoveHandler
          );
        };
      }
    }
  }, [isOpened]);

  const constrain = 50;

  const transforms = (x: number, y: number, el: HTMLElement) => {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - box.height / 2) / constrain;
    let calcY = (x - box.x - box.width / 2) / constrain;

    return `perspective(1000px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  };

  const transformElement = (el: HTMLDivElement, xyEl: any) => {
    el.style.transform = transforms.apply(null, xyEl);
  };

  return (
    isOpened && (
      <div className="modal-container" ref={mouseOverContainerRef} id="outside">
        <div className="content-container" ref={ex1LayerRef} id="tilting-layer">
          <div className="notebook-tabs">
            <button className="button close-button" onClick={handleOpen}>
              <svg
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
              </svg>
            </button>
          </div>
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={400}
            height={600}
            showCover={true}
            disableFlipByClick={true}
            showPageCorners={true}
            className="notebook"
          >
            <div className="page">
              <div className="notebook-cover">
                <h1>Medical Book</h1>
              </div>
            </div>
            {diseases?.map((disease, index) => (
              <div className="page" key={index}>
                <div className="notebook-header">
                  <h1>{disease.name}</h1>
                </div>
                <ul>
                  {disease.symptoms.map((symptom, symptomIndex) => (
                    <li key={symptomIndex}>
                      <span>{symptom.part}:</span> <br />
                      {symptom.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    )
  );
};

export default Notebook;
