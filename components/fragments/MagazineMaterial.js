import React, { useState, useEffect}  from "react";
import { useHistory } from "react-router-dom";
import Link from "next/link";

import axios from 'axios';
import config from 'react-global-configuration';

import Button from '../common/Button';
import Skeleton from "react-loading-skeleton";

import './css/magazine_material.scss';


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


function MagazineMaterial(props) {
    const [magazine, setMagazine] = useState(null);
    const [loading, setLoading] = useState(false);
    let date = "";
    let history = useHistory();
   
   
    useEffect (()=>{
        setLoading(true);
        const fetchData = async () => {
          
          let apiUrl = `${process.env.apiDomain}/magazines/${props.magazine_id}`;
          await axios.get(apiUrl)
          .then(res =>{ 
          
            setMagazine(res.data);
            setLoading(false);
            
            })
          .catch(err => {console.log(err);setLoading(false);});
          };
          fetchData();
        
      },[props.magazine_id]);
      if (magazine) date = getDate(magazine.created_ts);
    return(
    <div>
     {loading && <Skeleton height={124} style={{marginBottom: 64}}/>}
        {magazine &&
            <div className="magazine-material-wrap">
                <div className="row">
                    
                    <div className="col-12 col-md-8 flex-mobile">
                    <Link href={`/Magazine/${props.magazine_id}`}>
                      <a>
                        <img src={magazine.image1} className="magazine-image"/>
                      </a>
                    </Link>
                    <div className="magazine-mobile-titles">
                        <p className="magazine-published">Матеріал друкованого видання</p>
                        <p className="number">{`№ ${magazine.localnum} (${magazine.num}) від ${date}`}</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <Link className="button" to={`/Magazine/${props.magazine_id}`}>
                          <a>
                            <Button title="Перейти до змісту"/>
                          </a>
                        </Link>
                    </div>
                </div>
            </div>
        }
    </div>
    );
}

export default MagazineMaterial;