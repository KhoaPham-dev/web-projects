import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  state = {
    greeting: ''
  }
  componentDidMount(){
    axios.get('/api/a')
      .then(res=>{
        this.setState({greeting: res.data.sayHi})
        console.log('ok')
      });
  }
  render(){

  
  return (
    <div className="App">
        <h1>{this.state.greeting}</h1>
        <div className="map">
            <div id="pos44" className="pos44"><img className="pos" src="./images/pos44.png" alt=""/></div>
            <div id="pos9" className="pos9"><img className="pos" src="./images/pos9.png" alt=""/></div>
            <div id="pos10" className="pos10"><img className="pos" src="./images/pos10.png" alt=""/></div>
            <div id="pos28" className="pos28"><img className="pos" src="./images/pos28.png" alt=""/></div>
            <div id="pos65" className="pos65"><img className="pos" src="./images/pos65.png" alt=""/></div>
            <div id="pos8" className="pos8"><img className="pos" src="./images/pos8.png" alt=""/></div>

            <div id="pos27" className="pos27"><img className="pos" src="./images/pos27.png" alt=""/></div>
            <div id="pos41" className="pos41"><img className="pos" src="./images/pos41.png" alt=""/></div>
            <div id="pos42" className="pos42"><img className="pos" src="./images/pos42.png" alt=""/></div>
            <div id="pos43" className="pos43"><img className="pos" src="./images/pos43.png" alt=""/></div>
            <div id="pos7" className="pos7"><img className="pos" src="./images/pos7.png" alt=""/></div>
            <div id="pos61" className="pos61"><img className="pos" src="./images/pos61.png" alt=""/></div>
            <div id="pos11" className="pos11"><img className="pos" src="./images/pos11.png" alt=""/></div>

            <div id="pos35" className="pos35"><img className="pos" src="./images/pos35.png" alt=""/></div>
            <div id="pos52" className="pos52"><img className="pos" src="./images/pos52.png" alt=""/></div>
            <div id="pos1" className="pos1"><img className="pos" src="./images/pos1.png" alt=""/></div>
            <div id="pos59" className="pos59"><img className="pos" src="./images/pos59.png" alt=""/></div>
            <div id="pos51" className="pos51"><img className="pos" src="./images/pos51.png" alt=""/></div>
            <div id="pos39" className="pos39"><img className="pos" src="./images/pos39.png" alt=""/></div>
            <div id="pos15" className="pos15"><img className="pos" src="./images/pos15.png" alt=""/></div>
            <div id="pos54" className="pos54"><img className="pos" src="./images/pos54.png" alt=""/></div>
            <div id="pos5" className="pos5"><img className="pos" src="./images/pos5.png" alt=""/></div>
            <div id="pos34" className="pos34"><img className="pos" src="./images/pos34.png" alt=""/></div>
            <div id="pos33" className="pos33"><img className="pos" src="./images/pos33.png" alt=""/></div>
            <div id="pos18" className="pos18"><img className="pos" src="./images/pos18.png" alt=""/></div>
            <div id="pos63" className="pos63"><img className="pos" src="./images/pos63.png" alt=""/></div>
            <div id="pos53" className="pos53"><img className="pos" src="./images/pos53.png" alt=""/></div>
            <div id="pos11_2" className="pos11_2"><img className="pos" src="./images/pos11.png" alt=""/></div>
            <div id="pos51_2" className="pos51_2"><img className="pos" src="./images/pos51.png" alt=""/></div>
            <div id="e10_65" className="path e10_65"><img  src="./images/e10_65.png" alt=""/></div>
            <div id="e28_65" className="path e28_65"><img  src="./images/e28_65.png" alt=""/></div>
            <div id="e65_8" className="path e65_8"><img src="./images/e65_8.png" alt=""/></div>
            <div id="e8_44" className="path e8_44"><img src="./images/e8_44.png" alt=""/></div>
            <div id="e9_10" className="path e9_10"><img  src="./images/e9_10.png" alt=""/></div>
            <div id="e9_28" className="path e9_28"><img  src="./images/e9_28.png" alt=""/></div>
            <div id="e9_65" className="path e9_65"><img  src="./images/e9_65.png" alt=""/></div>

            <div id="e44_61" className="path e44_61"><img  src="./images/e44_61.png" alt=""/></div>
            <div id="e41_42" className="path e41_42"><img  src="./images/e41_42.png" alt=""/></div>
            <div id="e42_43" className="path e42_43"><img  src="./images/e42_43.png" alt=""/></div>
            <div id="e42_11" className="path e42_11"><img  src="./images/e42_11.png" alt=""/></div>
            <div id="e44_27" className="path e44_27"><img  src="./images/e44_27.png" alt=""/></div>
            <div id="e61_41" className="path e61_41"><img  src="./images/e61_41.png" alt=""/></div>
            <div id="e61_43" className="path e61_43"><img  src="./images/e61_43.png" alt=""/></div>
            <div id="e61_7" className="path e61_7"><img  src="./images/e61_7.png" alt=""/></div>
            <div id="e7_11" className="path e7_11"><img  src="./images/e7_11.png" alt=""/></div>
            <div id="e27_41" className="path e27_41"><img  src="./images/e27_41.png" alt=""/></div>
            <div id="e27_43" className="path e27_43"><img  src="./images/e27_43.png" alt=""/></div>
            <div id="e27_7" className="path e27_7"><img  src="./images/e27_7.png" alt=""/></div>

            <div id="e18_51_2" className="path e18_51_2"><img  src="./images/e18_51_2.png" alt=""/></div>
            <div id="e11_2_51_2" className="path e11_2_51_2"><img  src="./images/e11_2_51_2.png" alt=""/></div>
            <div id="e18_11_2" className="path e18_11_2"><img  src="./images/e18_11_2.png" alt=""/></div>
            <div id="e33_18" className="path e33_18"><img  src="./images/e33_18.png" alt=""/></div>
            <div id="e33_11_2" className="path e33_11_2"><img  src="./images/e33_11_2.png" alt=""/></div>
            <div id="e11_11_2" className="path e11_11_2"><img  src="./images/e11_11_2.png" alt=""/></div>
            <div id="e54_33" className="path e54_33"><img  src="./images/e54_33.png" alt=""/></div>
            <div id="e11_33" className="path e11_33"><img  src="./images/e11_33.png" alt=""/></div>
            <div id="e42_33" className="path e42_33"><img  src="./images/e42_33.png" alt=""/></div>
            <div id="e41_54" className="path e41_54"><img  src="./images/e41_54.png" alt=""/></div>

            <div id="e1_53" className="path e1_53"><img  src="./images/e1_53.png" alt=""/></div>
            <div id="e35_1" className="path e35_1"><img  src="./images/e35_1.png" alt=""/></div>
            <div id="e52_35" className="path e52_35"><img  src="./images/e52_35.png" alt=""/></div>
            <div id="e51_52" className="path e51_52"><img  src="./images/e51_52.png" alt=""/></div>
            <div id="e59_52" className="path e59_52"><img  src="./images/e59_52.png" alt=""/></div>
            <div id="e59_51" className="path e59_51"><img  src="./images/e59_51.png" alt=""/></div>
            <div id="e63_59" className="path e63_59"><img  src="./images/e63_59.png" alt=""/></div>
            <div id="e15_51" className="path e15_51"><img  src="./images/e15_51.png" alt=""/></div>
            <div id="e15_34" className="path e15_34"><img  src="./images/e15_34.png" alt=""/></div>
            <div id="e15_59" className="path e15_59"><img  src="./images/e15_59.png" alt=""/></div>

            <div id="e34_63" className="path e34_63"><img  src="./images/e34_63.png" alt=""/></div>
            <div id="e5_59" className="path e5_59"><img  src="./images/e5_59.png" alt=""/></div>
            <div id="e63_5" className="path e63_5"><img  src="./images/e63_5.png" alt=""/></div>
            <div id="e34_5" className="path e34_5"><img  src="./images/e34_5.png" alt=""/></div>
            <div id="e39_15" className="path e39_15"><img  src="./images/e39_15.png" alt=""/></div>
            <div id="e39_5" className="path e39_5"><img  src="./images/e39_5.png" alt=""/></div>
            <div id="e33_39" className="path e33_39"><img  src="./images/e33_39.png" alt=""/></div>
            <div id="e33_5" className="path e33_5"><img  src="./images/e33_5.png" alt=""/></div>
            <div id="e54_5" className="path e54_5"><img  src="./images/e54_5.png" alt=""/></div>
            <div id="e54_39" className="path e54_39"><img  src="./images/e54_39.png" alt=""/></div>
        </div> 
    </div>
  );
}
}

export default App;
