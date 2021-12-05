import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <Button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};
