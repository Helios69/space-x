import React from "react";

import { formatAMPM } from "../../helpers";
import styles from "./launchesItem.module.scss";

const LaunchesItem = ({ item }) => {
  let status;
  switch (item.launch_success) {
    case null:
      status = "unknown";
      break;
    case true:
      status = "success";
      break;
    case false:
      status = "failure";
      break;
    default:
      return;
  }
  const launchDate = new Date(item.launch_date_utc);
  return (
    <div className={styles.launch}>
      <div className={styles.launch__image}>
        {item.links.mission_patch ? (
          <img src={item.links.mission_patch} alt="" />
        ) : (
          <div className={styles.launch__inner_image} />
        )}
      </div>
      <div className={styles.launch__content}>
        <div className="flex aic">
          <h3 className={styles.launch__title}>
            <span>#{item.flight_number} </span>
            {item.mission_name}
          </h3>
          <span
            className={`${styles.launch__status} ${
              styles[`launch__status__${status}`]
            }`}
          >
            {status.toUpperCase()}
          </span>
          {item.links.article_link && (
            <a
              href={item.links.article_link}
              className={styles.launch__article}
            >
              <svg viewBox="0 0 18 18">
                <path d="M11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11ZM16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V9H16V16Z" />
              </svg>
            </a>
          )}
        </div>
        <div className={styles.launch__date}>
          Launch Date: <span>{formatAMPM(launchDate)}</span>
        </div>
        <div className="flex">
          <p className={styles.launch__text}>{item.details}</p>
          {item.links.video_link && (
            <a href={item.links.video_link} className={styles.launch__video}>
              <svg viewBox="0 0 14 14">
                <path d="M6.99998 0.333328C3.31998 0.333328 0.333313 3.31999 0.333313 7C0.333313 10.68 3.31998 13.6667 6.99998 13.6667C10.68 13.6667 13.6666 10.68 13.6666 7C13.6666 3.31999 10.68 0.333328 6.99998 0.333328ZM5.66665 10V3.99999L9.66665 7L5.66665 10Z" />
              </svg>
              WATCH
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchesItem;
