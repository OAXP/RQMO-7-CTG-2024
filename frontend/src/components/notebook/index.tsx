import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./notebook.css";
import useDiseases from "@src/hooks/useDisease";
import IDisease from "@src/types/disease";
import NotebookProps from "@src/types/notebook";

const Notebook: React.FC<NotebookProps> = ({ isOpened, handleOpen }) => {
  const allDiseases = useDiseases();
  const [filteredDiseases, setFilteredDiseases] = useState<IDisease[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [types, setTypes] = useState<string[]>(["All"]);

  // This effect will create a list of unique types of diseases
  useEffect(() => {
    const uniqueTypes = Array.from(
      new Set(allDiseases.map((disease) => disease.type))
    );
    setTypes(["All", ...uniqueTypes]);
  }, [allDiseases]);

  // This effect will filter the diseases based on the selected type
  // It will reload the list of diseases if the selected type changes
  useEffect(() => {
    const filtered =
      selectedType === "All"
        ? allDiseases
        : allDiseases.filter((disease) => disease.type === selectedType);
    // Here's where you check if the number of pages is even or not
    const evenFilteredDiseases =
      filtered.length % 2 !== 0
        ? [...filtered, { name: "", symptoms: [], type: "" }]
        : filtered;
    setFilteredDiseases(evenFilteredDiseases);
  }, [selectedType, allDiseases]);

  const handleTypeChange = (type: string) => setSelectedType(type);

  const mouseOverContainerRef = useRef<HTMLDivElement>(null);
  const ex1LayerRef = useRef<HTMLDivElement>(null);

  // This effect will handle the mouse move event to tilt the notebook
  // It will only work if the notebook is opened and the device is not a mobile device
  useEffect(() => {
    if (
      !isOpened ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|ios/i.test(
        navigator.userAgent
      )
    ) {
      return;
    }

    const mouseOverContainer = mouseOverContainerRef.current;
    const ex1Layer = ex1LayerRef.current;

    const mouseMoveHandler = (e: MouseEvent) => {
      window.requestAnimationFrame(() =>
        transformElement(ex1Layer, e.clientX, e.clientY)
      );
    };

    mouseOverContainer?.addEventListener("mousemove", mouseMoveHandler);
    return () =>
      mouseOverContainer?.removeEventListener("mousemove", mouseMoveHandler);
  }, [isOpened]);

  // This function will tilt the notebook based on the mouse position
  const transformElement = (
    el: HTMLDivElement | null,
    x: number,
    y: number
  ) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const calcX = -(y - rect.y - rect.height / 2) / 50;
    const calcY = (x - rect.x - rect.width / 2) / 50;
    const transform = `perspective(1000px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    el.style.transform = transform;
  };

  return (
    isOpened ? (
      <div className="modal-container" ref={mouseOverContainerRef} id="outside">
        <div className="content-container" ref={ex1LayerRef} id="tilting-layer">
          <div className="notebook-tabs">
            {types.map((type, index) => (
              <button
                key={index}
                className={`button ${selectedType === type ? "active" : ""}`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
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
            {filteredDiseases?.map((disease, index) => (
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
    ): null
  );
};

export default Notebook;
