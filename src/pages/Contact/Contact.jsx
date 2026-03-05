import styles from "./styles.module.scss";
import { Select } from "../../components/Select/Select";
import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState(null);

  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>Let's Talk</h1>
        <h2>+84 162.995.6018</h2>
        <h2>Location</h2>
        <p>- BaoLoc City</p>
        <p>
          - village 16 - LocThanh commune - BaoLam district - LamDong province
        </p>
        <h2>Official Email</h2>
        <p>- huynhtanthanh.dev@gmail.com</p>
      </div>
      <div className={styles.send_mail}>
        <input className={styles.ip_ct} type="text" placeholder="Name" />
        <div className={styles.inf}>
          <input className={styles.ip_inf} type="text" placeholder="Phone" />
          <input className={styles.ip_inf} type="text" placeholder="Email" />
        </div>
        <input
          className={styles.ip_ct}
          type="text"
          placeholder="Tell Us About Project"
        />
        <Select
          options={options || []}
          value={value}
          onChange={setValue}
          placeholder="Chọn trái cây"
        />
      </div>
    </div>
  );
};

export default Contact;
