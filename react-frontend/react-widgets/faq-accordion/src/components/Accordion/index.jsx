import AccordionItem from "../AccordionItem";

const Accordion = () => {
  return (
    <div>
      <h2><img src="/images/icon-star.svg" alt="star icon" />FAQs</h2>
      <AccordionItem
        isFirst={true}
        title="What is Frontend Mentor, and how will it help me?"
        content=" Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
      />
      <AccordionItem
        isFirst={false}
        title="Is Frontend Mentor free?"
        content="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
      />
      <AccordionItem
        isFirst={false}
        title="Can I use Frontend Mentor projects in my portfolio?"
        content="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
      />
      <AccordionItem
        isFirst={false}
        title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        content="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
      />
    </div>
  );
}

export default Accordion;

