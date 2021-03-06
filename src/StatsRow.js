import React from "react";
import StockChart from './stock.svg'
import { db } from "./firebase";
import "./StatsRow.css"


function StatsRow(props) {
  //   console.log(props, "what is in props here?");
// (currentPrice - openPrice)/openPrice



  
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
 

  const getModal = () => {
    db.collection("myStocks")
    .where("ticker", "==", props.name)
    .get()
    .then((querySnapshot)=> {
      if (!querySnapshot.empty) {
        
        querySnapshot.forEach(function(doc) {
          db.collection("myStocks")
          .doc(doc.id)
          .update({
            shares: doc.data().shares+=1
          })
        })
      } else {
        db.collection("myStocks")
        .add({
          ticker: props.name,
          shares: 1
        })
      }
      
    })
  }


  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && 
          (props.volume + " shares")
        }</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} alt="description of pic"/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage" style={{color: percentage > 0 ? "green" : "red"}}> {Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}





export default StatsRow;