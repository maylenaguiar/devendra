import React, { Fragment } from "react";
import { Icon } from "semantic-ui-react";
import "./CartWidget.css";

const CardWidget = () => {
  return(
  <>
		<a className="cart" href="/">
    	<Icon name="shopping cart" size ="large" />{" "}
  	</a>
	</>
	)
};

export default CardWidget;
