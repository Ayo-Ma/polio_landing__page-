import Accordion from "./Accordion";
import SectionHeading from "./SectionHeading";

const AccordionSection = () => {
  return (
    <section className="FAQ wrapper">
      <SectionHeading
        smallText=""
        heading="Frequently asked questions"
        bodyText="Everything you need to know about Polio"
      />
      <div className="accordion-section ">
        <Accordion
          AccordionQuestion="Is there a free trial available?"
          AccordionText="Yes, we offer a free 30-day trial. You can explore all features without any commitment. No credit card required!"
        />
        <Accordion
          AccordionQuestion="What features does this CRM offer?"
          AccordionText="Our CRM includes contact management, sales tracking, automated follow-ups, reporting & analytics, third-party integrations, and more."
        />
        <Accordion
          AccordionQuestion="Can I integrate this CRM with other tools?"
          AccordionText="Yes! Our CRM seamlessly integrates with email platforms, marketing tools, and third-party apps like Slack, Zapier, and Google Workspace."
        />
        <Accordion
          AccordionQuestion="Is my data secure?"
          AccordionText="Absolutely. We use end-to-end encryption, multi-factor authentication, and regular security audits to keep your data safe."
        />
        <Accordion
          AccordionQuestion="Do you offer customer support?"
          AccordionText="Yes! We offer 24/7 customer support via live chat, email, and phone to assist you with any queries or technical issues."
        />
        <Accordion
          AccordionQuestion="How much does the CRM cost after the trial?"
          AccordionText="We have flexible pricing plans based on your team size and needs. Check our pricing page for detailed plans and custom options."
        />
        <Accordion
          AccordionQuestion="Can I customize this CRM for my business?"
          AccordionText="Yes! You can customize workflows, dashboards, reports, and automations to fit your specific business needs."
        />
        <Accordion
          AccordionQuestion="How do I migrate data from my existing CRM?"
          AccordionText="We offer easy data migration tools and dedicated support to help you transition smoothly from your current CRM."
        />
      </div>
    </section>
  );
};

export default AccordionSection;
