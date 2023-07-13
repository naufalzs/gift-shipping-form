import stepData from "json/step.json";

const Step = ({ isLastOrder, index, title }) => (
  <div className="step">
    <div className="step-status">
      <div className="step-status__circle">
        <div className="step-status__circle-inner"></div>
      </div>
      {!isLastOrder && (
        <div className="step-status__connector">
          <div className="step-status__connector-progress"></div>
        </div>
      )}
    </div>
    <div className="step-info">
      <div className="step-info__order">Step {index + 1}</div>
      <div className="step-info__title">{title}</div>
    </div>
  </div>
);

const stepper = stepData.data.map((step, index) => (
  <Step
    key={step.id}
    isLastOrder={index + 1 === stepData.data.length}
    index={index}
    title={step.title}
  />
));

export default function Home() {
  return (
    <div className="container">
      <main className="card-wrapper">
        <section className="sidebar">
          <div className="sidebar__desktop-wrapper">
            <h1 className="brand-title">Time to Shopping</h1>
            <div className="stepper stepper--desktop">{stepper}</div>
            <img
              src="/images/gift-box.svg"
              className="brand-img"
              alt="brand title"
            />
          </div>
          <div className="stepper stepper--mobile">{stepper}</div>
        </section>
        <section className="form-container">
          <div className="form">
            <div className="form__title">Shipping Info</div>
            <div className="form__subtitle">
              Please provide your personal info to help us deliver your gift
            </div>
            <div className="form__step-1"></div>
          </div>
          <div className="btn-container">
            <button className="btn btn--back">Step Back</button>
            <button className="btn btn--next">Next Step</button>
          </div>
        </section>
      </main>
    </div>
  );
}
