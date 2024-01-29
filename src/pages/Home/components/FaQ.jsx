import "./faq.css";
import { useTheme } from "../../../layout/ThemeContext";
function FaQ() {
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme ? "dark" : "light";
  return (
    <>
      <div className="faq-section page-wrap" data-bs-theme={themeClass}>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Question 1: How do you ensure the work is original and free from
                plagiarism?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We utilize Turnitin to check for plagiarism and ensure the
                authenticity of our work. Each example is customized to your
                needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Question 2: How can I communicate with the expert handling my
                homework and share my specific requirements?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can communicate your specific requirements and queries via
                email, our Facebook page, or directly on our website (coming
                soon).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Question 3: What is your policy for revisions if I'm not
                satisfied with the work provided?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Depending on your responsibility model, you can request
                revisions within 10 days before the delivery date. Our models
                include non-responsibility, shared-responsibility, and
                full-responsibility, each with specific revision options.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Question 4: Do you provide refunds if the work doesn't meet my
                expectations?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we offer refunds. However, please note that we cannot
                accept refund requests if the work has been submitted by someone
                else. Our service provides personalized guidance and examples to
                help you learn, maintaining academic integrity is essential.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FaQ;
