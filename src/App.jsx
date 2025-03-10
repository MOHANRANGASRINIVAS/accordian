
import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomAccordion = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="container mt-4">
      <h3>React bootstrap accordions with a rotating arrow indicator</h3>
      <Accordion activeKey={activeKey}>
        {[
          { title: "Here's a first title", content: "Content for first accordion." },
          { title: "Here's a second title", content: "Content for two accordion" },
          { title: "Here's a 3rd title", content: "Content for third accordion." }
        ].map((item, index) => (
          <Card key={index} className="mb-2">
            <Card.Header>
              <Button
                variant="link"
                onClick={() => toggleAccordion(index)}
                className="w-100 d-flex justify-content-between align-items-center text-decoration-none "
              >
                {item.title}
                <FaChevronDown
                  className={`arrow-icon ${activeKey === index ? "rotate" : ""}`}
                />
              </Button>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>{item.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <style>{`
        .arrow-icon {
          transition: transform 0.3s ease-in-out;
        }
        .rotate {
          transform: rotate(180deg);
        }
        
      `}</style>
    </div>
  );
};

export default CustomAccordion;
