import React, { useState } from 'react';
import axios from 'axios';

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState([]);
  const [checked, setChecked] = useState(false);

  let errorsArr = [];

  const checkName = () => {
    if (!(name.match(/^[A-ЯЁ][а-яё]+/))) {
      errorsArr.push('Имя должно содержать только русские буквы');
    }
    if (name.length < 2) {
      errorsArr.push('Имя должно содержать хотя бы 2 буквы');
    }
  };

  const checkPhone = () => {
    if (!phone.match(/^(8|\+7)[0-9]{7,10}$/i)) {
      errorsArr.push('Неверный номер телефона');
    }
  };

  const checkCheckbox = () => {
    if (!checked) {
      errorsArr.push('Вы должны принять условия');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    errorsArr = [];
    checkName();
    checkPhone();
    checkCheckbox();
    if (errorsArr.length > 0) {
      setErrors(errorsArr);
      return;
    }
    setLoading(true);
    axios.post('https://formcarry.com/s/nUdcDnvBy-', {
      name, email, phone, comment
    })
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);;
      });
  };

  const errorsJSX = errors.map((error) => {
    return (
      <p className='error-custom'>{error}</p>
    )
  })

  return (
    <div className="col-md-6 col-xs-12 col-sm-6 ma">
      {errorsJSX}
      <form method="POST"
            accept-charset="UTF-8"
            id="my-formcarry"
            className="contact-form"
      >
        <input className="js-text-full text-full form-text form-control"
               type="text"
               id="name-form"
               name="your_name"
               size="60"
               placeholder="Ваше имя"
               title="Введите ваше имя"
               required
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
        <input className="js-text-full text-full form-text required form-control"
               type="text"
               id="phone-form"
               name="phone"
               size="60"
               placeholder="Ваш телефон"
               required
               title="Введите ваш телефон"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
        />
        <input className="form-email required form-control"
               type="email"
               id="email-form"
               name="email"
               size="60"
               placeholder="Ваш email"
               required
               title="Введите ваш email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <textarea className="js-text-full text-full form-textarea form-control resize-vertical"
                  title="Введите ваш комментарий"
                  id="comment"
                  name="comment"
                  rows="10"
                  cols="60"
                  placeholder="Ваш комментарий"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
        />
        <div
          className="form-item js-form-item form-type-checkbox js-form-type-checkbox checkbox"
        >
          <label htmlFor="agreement-form" className="control-label option js-form-required form-required">
            <input required
                   className="form-checkbox required"
                   type="checkbox"
                   id="agreement-form"
                   name="agreement"
                   onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="custom-checkbox"/>
            Отправляя заявку, я даю согласие на <a href="#" rel="nofollow">обработку
            своих персональных данных</a><i className="red"> * </i>
          </label>
        </div>
        <iframe
          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le7ciYUAAAAAALNHRR_GYgiOXgsH8EX9GbvQ42y&amp;co=aHR0cHM6Ly9kcnVwYWwtY29kZXIucnU6NDQz&amp;hl=ru&amp;type=image&amp;v=qc5B-qjP0QEimFYUxcpWJy5B&amp;theme=dark&amp;size=normal&amp;cb=ruwyzhxi7lnz"
          width="306" height="83" role="presentation" name="a-i1p58kpiq2ew">
        </iframe>
        <div className="form-actions form-group js-form-wrapper form-wrapper" id="edit-actions">
          <button className="button button--primary js-form-submit form-submit btn-primary btn"
                  type="submit"
                  disabled={loading}
                  onClick={handleSubmit}
          >Свяжитесь с нами
          </button>
        </div>
      </form>
    </div>
  );
};
