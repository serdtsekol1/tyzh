import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

function Fragment(props) {
  return (
    <div className={`fragment-${props.size}`}>
      {props.children}
      <div className={`fragment-${props.size}-button`}>
        {props.noShowMore ? (
          ""
        ) : (
          <div>
          {props.showMoreLink ?
          (<Link to={props.showMoreLink}>
            <Button redButton={props.redButton?true:false} title={props.showMoreTitle ? props.showMoreTitle: "Показати більше"} />
          </Link>)
          :
          (<a class="subsc-button" href={props.showMoreHref}>
          <Button redButton={props.redButton?true:false} title={props.showMoreTitle ? props.showMoreTitle: "Показати більше"} />
        </a>)
        }
        </div>
        )}
        
      </div>
    </div>
  );
}

export default Fragment;
