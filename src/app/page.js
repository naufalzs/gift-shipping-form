export default function Home() {
  return (
    <div className="container">
      <main className="card-wrapper">
        <section className="sidebar">
          <div className="sidebar__desktop-wrapper">
            <h1 className="brand-title">Time to Shopping</h1>
            <div className="stepper stepper--desktop">
              <div className="stepper__step"></div>
              <div className="stepper__connector"></div>
            </div>
            <img
              src="/images/gift-box.svg"
              className="brand-img"
              alt="brand title"
            />
          </div>
          <div className="stepper stepper--mobile">
            <div className="stepper__step"></div>
            <div className="stepper__connector"></div>
          </div>
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
