import React from "react";
import Button from "../common/Button";
import Link from "next/link";


function getDate(public_ts){
  const today = new Date();
  let options = { month: 'long', day: 'numeric' ,  timeZone: 'UTC'};
  let date = new Date(public_ts).toLocaleDateString('uK-UK', options);
  if (new Date(public_ts).getYear() < today.getYear()) {
      options = {  year:'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'};
      date = new Date(public_ts).toLocaleDateString('uK-UK', options);
    }
  return date;
}


function JournalItem(props) {
  
  let journalData = props.journalItem;
  let date = getDate(journalData.public_ts);
  let journalNumber = !journalData.double ? `№ ${journalData.localnum} (${journalData.num})`: `№ ${journalData.localnum}-${journalData.localnum+1} (${journalData.num}-${journalData.num+1})`;
  return (
    <div className="journal">
      <Link href={`/Magazine/${journalData.num}`}>
        <a>
          <img
            className="journal-cover"
            src={journalData.image1}
            alt={`Український тиждень №${journalData.localnum}`}
          />
        </a>
      </Link>
      <Link href={`/Magazine/${journalData.num}`}>
        <a>
          <p className="journal-title">Український тиждень</p>
        </a>
      </Link>
      <p className="journal-number">{journalNumber}</p>
      <p className="journal-period">{date}</p>
      {journalData.isSpecialEdition ? (
        <Button redButton={true} title="Завантажити pdf" />
      ) : (
        ""
      )}
    </div>
  );

}

export default JournalItem;
