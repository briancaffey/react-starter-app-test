import React from 'react';
import { browserHistory, Link } from 'react-router';
import css from './styles.css';

class ErrorPage extends React.Component {

  componentDidMount() {
    document.title = 'Page Not Found';
  }

  goBack(e) {
    e.preventDefault();
    browserHistory.goBack();
  }

  render() {
    return (
      <div className={css.container}>
        <main className={css.content}>
          <h1 className={css.code}>code</h1>
          <p className={css.title}>title</p>
          <p className={css.text}>
            The page you're looking for does not exist or an another error occurred.
          </p>
          <p className={css.text}>
            <a href="/" onClick={this.goBack}>Go back</a>, or head over to the&nbsp;
            <Link to="/">home page</Link> to choose a new direction.
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;