import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Profile from './Profile';

const Contact = (props: any) => {
  const { handleSubmit } = props;
  const [showProfile, setShowProfile] = useState<Boolean>(false);

  const pageTitle = 'Contact';

  return (
    <main>
      <div className="pageContent">
        <section className="pageHeader">
          <div className="container">
            <h1>{pageTitle}</h1>
            <div className="pageSlogan">
              <p>Automatic recognition of Lorem Ipsum</p>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="contentBlock">
            <h2>Where does it come from?</h2>
            <div className="row">
              <div className="col-4">
                <div className="form">
                  <form
                    onSubmit={handleSubmit((formValues: any) => {
                      console.log(formValues);
                      setShowProfile(true);
                    })}
                  >
                    <div className="formGroup">
                      <label>First Name</label>
                      <Field type="text" name="firstName" component="input" />
                    </div>
                    <div className="formGroup">
                      <label>Last Name</label>
                      <Field type="text" name="lastName" component="input" />
                    </div>
                    <div className="formGroup">
                      <button className="btn btnPrime" type="submit">
                        Submit It
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-4">{showProfile && <Profile />}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default reduxForm({
  form:'myForm'
})(Contact);
