import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faDumbbell,
  faFont,
  faFileAlt,
  faDice,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSpinner);
library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);

function FontAwesome(props) {
  return (
    <FontAwesomeIcon icon={props.icon} size={props.size} spin={props.spin} />
  );
}

export default FontAwesome;
