import React, { useState, useEffect}  from "react";
import { Link,useHistory } from "react-router-dom";

import axios from 'axios';
import config from 'react-global-configuration';

import Button from '../common/Button';
import Skeleton from "react-loading-skeleton";

import './css/magazine_material.scss';

function MagazineMaterial(props) {
    const [magazine, setMagazine] = useState(null);
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    let options = { month: 'long', day: 'numeric',  timeZone: 'UTC'};
    let date = "";
   
    useEffect (()=>{
        setLoading(true);
        const fetchData = async () => {
          
          let apiUrl = `${config.get("apiDomain")}/magazines/${props.magazine_id}`;
          await axios.get(apiUrl)
          .then(res =>{ 
          
            setMagazine(res.data);
            setLoading(false);
    
            
            
            })
          .catch(err => history.push('/page-not-found/'));  
          };
          fetchData();
        
      },[props.magazine_id]);
      if (magazine)
      date = new Date(magazine.created_ts).toLocaleDateString('uK-UK', options);
    return(
    <div>
     {loading && <Skeleton height={124} style={{marginBottom: 64}}/>}
        {magazine &&
            <div className="magazine-material-wrap">
                <div className="row">
                    
                    <div className="col-12 col-md-8 flex-mobile">
                    <Link to={`/Magazine/${props.magazine_id}`}>
                        <img src={magazine.image1} className="magazine-image"/>
                    </Link>
                    <div className="magazine-mobile-titles">
                        <p className="magazine-published">Матеріал друкованого видання</p>
                        <p className="number">{`№ ${magazine.localnum} (${magazine.num}) від ${date}`}</p>
                    </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <Link className="button" to={`/Magazine/${props.magazine_id}`}><Button title="Перейти до змісту"/></Link>
                    </div>
                </div>
            </div>
        }
    </div>
    );
}

export default MagazineMaterial;