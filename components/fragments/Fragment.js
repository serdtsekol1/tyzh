import React from "react";
import Link from "next/link";
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
          (<Link href={props.showMoreLink}>
            <a>
              <Button redButton={props.redButton?true:false} title={props.showMoreTitle ? props.showMoreTitle: "Показати більше"} />
            </a>
          </Link>)
          :
          (<a className="subsc-button" href={props.showMoreHref}>
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
