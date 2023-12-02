import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import { RiArrowDropDownLine } from "react-icons/ri";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function CourseAccordion({ content, idx }) {
  return (
    <div className="bg-[#1f1f1f] w-[100%]">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header style={{ display: "flex", alignItems: "center" }}>
            <CustomToggle eventKey={idx}>
              Week {idx + 1} <RiArrowDropDownLine className="text-[24px]" />
            </CustomToggle>
            <p>{content.topics.length} lectures</p>
          </Card.Header>
          <Accordion.Collapse eventKey={idx}>
            <Card.Body>
              {content.topics.map((topic, index) => {
                return (
                  <p className="py-2 font-medium text-neutral-900 ">
                    {index + 1}. {topic}
                  </p>
                );
              })}{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default CourseAccordion;
