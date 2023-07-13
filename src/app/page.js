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
            <form className="form__input form__input--step-1" id="form-step-1">
              <label htmlFor="name">
                <div className="input__label">Name</div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g. Naufal Zufar"
                  className="input__text"
                />
              </label>
              <label htmlFor="number">
                <div className="input__label">Phone Number</div>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="e.g. +6281372961321"
                  className="input__text"
                />
              </label>
              <label htmlFor="email">
                <div className="input__label">Email Adress</div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="e.g. hansolo@mail.com"
                  className="input__text"
                />
              </label>
              <label htmlFor="address">
                <div className="input__label">Delivery Adress</div>
                <textarea
                  type="text"
                  name="address"
                  id="address"
                  placeholder="e.g. Gangnam street, Busan, 14020"
                  className="input__textarea"
                  rows={5}
                />
              </label>
            </form>
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
