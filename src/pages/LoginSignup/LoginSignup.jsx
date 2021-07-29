import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import styles from "./LoginSignup.module.css";

const LoginSignup = (props) => {
  return (
    <div className="container">
      <Card title={props.login ? "Login" : "Signup"}>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email address:
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            className={styles.input}
          />
          {!props.login && (
            <>
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className={styles.input}
              />
            </>
          )}
          <Button type="submit" text={props.login ? "Login" : "Signup"} />
        </form>
        {props.login ? (
          <p>
            Do not have account? <Link to="/signup">Signup</Link>
          </p>
        ) : (
          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>
        )}
      </Card>
    </div>
  );
};

export default LoginSignup;
