import "./App.scss";
import starIcon from "./assets/images/icon-star.svg";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import { accordionData } from "./assets/Components/Props/AccordionProps";
import { useState } from "react";
function App() {
  const [arr, setArr] = useState([1]);
  const handleIcon = (sNO) => {
    if (arr.includes(sNO)) {
      const newArr = arr.filter((item) => item !== sNO);
      setArr(newArr);
    } else {
      const newArr = [...arr, sNO];
      setArr(newArr);
    }
  };

  return (
    <div className="faq-accordion-card-container">
      <div className="faq-accordion-card">
        <div className="faq-accordion-card-header">
          <img alt={starIcon} src={starIcon} />
          <h1>FAQs</h1>
        </div>
        <div className="faq-accordion-card-body">
          {accordionData.map((item) => (
            <>
              <div key={item.sNo} className="faq-accordion-card-body-content">
                <div
                  className="faq-accordion-card-body-content-question"
                  onClick={() => handleIcon(item.sNo)}
                >
                  <h3>{item.question}</h3>
                  <img
                    alt={arr.includes(item.sNo) ? minusIcon : plusIcon}
                    src={arr.includes(item.sNo) ? minusIcon : plusIcon}
                  />
                </div>
                {arr.includes(item.sNo) && (
                  <p className="faq-accordion-card-body-content-answer">
                    {item.answer}
                  </p>
                )}
              </div>
              {item.sNo === 4 ? "" : <hr />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
