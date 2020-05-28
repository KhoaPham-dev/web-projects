//Add here
var pos9 = document.getElementById("pos9");
var pos44 = document.getElementById("pos44");
var pos8 = document.getElementById("pos8");
var pos10 = document.getElementById("pos10");
var pos65 = document.getElementById("pos65");
var pos28 = document.getElementById("pos28");

var pos27 = document.getElementById("pos27");
var pos41 = document.getElementById("pos41");
var pos42 = document.getElementById("pos42");
var pos43 = document.getElementById("pos43");
var pos61 = document.getElementById("pos61");
var pos7 = document.getElementById("pos7");
var pos11 = document.getElementById("pos11");

var pos54 = document.getElementById("pos54");
var pos33 = document.getElementById("pos33");
var pos18 = document.getElementById("pos18");
var pos11_2 = document.getElementById("pos11_2");
var pos51_2 = document.getElementById("pos51_2");

var pos35 = document.getElementById("pos35");
var pos52 = document.getElementById("pos52");
var pos1 = document.getElementById("pos1");
var pos59 = document.getElementById("pos59");
var pos51 = document.getElementById("pos51");
var pos39 = document.getElementById("pos39");
var pos15 = document.getElementById("pos15");
var pos5 = document.getElementById("pos5");
var pos34 = document.getElementById("pos34");
var pos63 = document.getElementById("pos63");
var pos53 = document.getElementById("pos53");

//Add here
var e10_65 = document.getElementById("e10_65");
var e28_65 = document.getElementById("e28_65");
var e65_8 = document.getElementById("e65_8");
var e8_44 = document.getElementById("e8_44");
var e9_10 = document.getElementById("e9_10");
var e9_28 = document.getElementById("e9_28");
var e9_65 = document.getElementById("e9_65");


var e44_61 = document.getElementById("e44_61");
var e41_42 = document.getElementById("e41_42");
var e42_43 = document.getElementById("e42_43");
var e42_11 = document.getElementById("e42_11");
var e44_27 = document.getElementById("e44_27");
var e61_41 = document.getElementById("e61_41");
var e61_43 = document.getElementById("e61_43");
var e61_7 = document.getElementById("e61_7");
var e7_11 = document.getElementById("e7_11");
var e27_41 = document.getElementById("e27_41");
var e27_43 = document.getElementById("e27_43");
var e27_7 = document.getElementById("e27_7");

var e18_51_2 = document.getElementById("e18_51_2");
var e11_2_51_2 = document.getElementById("e11_2_51_2");
var e18_11_2 = document.getElementById("e18_11_2");
var e33_18 = document.getElementById("e33_18");
var e33_11_2 = document.getElementById("e33_11_2");
var e11_11_2 = document.getElementById("e11_11_2");
var e54_33 = document.getElementById("e54_33");
var e11_33 = document.getElementById("e11_33");
var e42_33 = document.getElementById("e42_33");
var e41_54 = document.getElementById("e41_54");

var e1_53 = document.getElementById("e1_53");
var e35_1 = document.getElementById("e35_1");
var e52_35 = document.getElementById("e52_35");
var e51_52 = document.getElementById("e51_52");
var e59_52 = document.getElementById("e59_52");
var e59_51 = document.getElementById("e59_51");
var e63_59 = document.getElementById("e63_59");
var e15_51 = document.getElementById("e15_51");
var e15_34 = document.getElementById("e15_34");
var e15_59 = document.getElementById("e15_59");
var e34_63 = document.getElementById("e34_63");
var e5_59 = document.getElementById("e5_59");
var e63_5 = document.getElementById("e63_5");
var e34_5 = document.getElementById("e34_5");
var e39_15 = document.getElementById("e39_15");
var e39_5 = document.getElementById("e39_5");
var e33_39 = document.getElementById("e33_39");
var e33_5 = document.getElementById("e33_5");
var e54_5 = document.getElementById("e54_5");
var e54_39 = document.getElementById("e54_39");

var count = 0;
var vertexFirst = '';
var vertexSecond = '';

//Add here
const vertex9 = new GraphVertex('9');
const vertex44 = new GraphVertex('44');
const vertex8 = new GraphVertex('8');
const vertex10 = new GraphVertex('10');
const vertex65 = new GraphVertex('65');
const vertex28 = new GraphVertex('28');

const vertex27 = new GraphVertex('27');
const vertex61 = new GraphVertex('61');
const vertex41 = new GraphVertex('41');
const vertex42 = new GraphVertex('42');
const vertex43 = new GraphVertex('43');
const vertex7 = new GraphVertex('7');
const vertex11 = new GraphVertex('11');

const vertex11_2 = new GraphVertex('11_2');
const vertex18 = new GraphVertex('18');
const vertex54 = new GraphVertex('54');
const vertex33 = new GraphVertex('33');
const vertex51_2 = new GraphVertex('51_2');

const vertex35 = new GraphVertex('35');
const vertex52 = new GraphVertex('52');
const vertex1 = new GraphVertex('1');
const vertex59 = new GraphVertex('59');
const vertex51 = new GraphVertex('51');
const vertex39 = new GraphVertex('39');
const vertex15 = new GraphVertex('15');
const vertex5 = new GraphVertex('5');
const vertex34 = new GraphVertex('34');
const vertex63 = new GraphVertex('63');
const vertex53 = new GraphVertex('53');
//Add here
const edge9_10 = new GraphEdge(vertex9, vertex10, 1);
const edge9_65 = new GraphEdge(vertex9, vertex65, 4);
const edge9_28 = new GraphEdge(vertex9, vertex28, 1);
const edge10_65 = new GraphEdge(vertex10, vertex65, 1);
const edge28_65 = new GraphEdge(vertex28, vertex65, 1);
const edge65_8 = new GraphEdge(vertex65, vertex8, 3);
const edge8_44 = new GraphEdge(vertex8, vertex44, 7);

const edge44_61 = new GraphEdge(vertex44, vertex61, 7);
const edge41_42 = new GraphEdge(vertex41, vertex42, 3);
const edge42_43 = new GraphEdge(vertex42, vertex43, 2);
const edge42_11 = new GraphEdge(vertex42, vertex11, 1);
const edge44_27 = new GraphEdge(vertex44, vertex27, 7);
const edge61_41 = new GraphEdge(vertex61, vertex41, 1);
const edge61_43 = new GraphEdge(vertex61, vertex43, 2);
const edge61_7 = new GraphEdge(vertex61, vertex7, 3);
const edge7_11 = new GraphEdge(vertex7, vertex11, 3);
const edge27_41 = new GraphEdge(vertex27, vertex41, 1);
const edge27_43 = new GraphEdge(vertex27, vertex43, 2);
const edge27_7 = new GraphEdge(vertex27, vertex7, 3);
const edge27_61 = new GraphEdge(vertex27, vertex61, 0);

const edge18_51_2 = new GraphEdge(vertex18, vertex51_2, 3);
const edge11_2_51_2 = new GraphEdge(vertex11_2, vertex51_2, 2);
const edge18_11_2 = new GraphEdge(vertex18, vertex11_2, 3);
const edge33_18 = new GraphEdge(vertex33, vertex18, 1);
const edge33_11_2 = new GraphEdge(vertex33, vertex11_2, 1);
const edge11_11_2 = new GraphEdge(vertex11, vertex11_2, 4);
const edge54_33 = new GraphEdge(vertex54, vertex33, 1);
const edge11_33 = new GraphEdge(vertex11, vertex33, 3);
const edge42_33 = new GraphEdge(vertex42, vertex33, 2);
const edge41_54 = new GraphEdge(vertex41, vertex54, 1);

const edge1_53 = new GraphEdge(vertex1, vertex53, 99);
const edge35_1 = new GraphEdge(vertex35, vertex1, 1);
const edge52_35 = new GraphEdge(vertex52, vertex35, 2);
const edge51_52 = new GraphEdge(vertex51, vertex52, 1);
const edge59_52 = new GraphEdge(vertex59, vertex52, 5);
const edge59_51 = new GraphEdge(vertex59, vertex51, 3);
const edge63_59 = new GraphEdge(vertex63, vertex59, 3);
const edge15_51 = new GraphEdge(vertex15, vertex51, 4);
const edge15_34 = new GraphEdge(vertex15, vertex34, 1);
const edge15_59 = new GraphEdge(vertex15, vertex59, 5);
const edge34_63 = new GraphEdge(vertex34, vertex63, 1);
const edge5_59 = new GraphEdge(vertex5, vertex59, 6);
const edge63_5 = new GraphEdge(vertex63, vertex5, 3);
const edge34_5 = new GraphEdge(vertex34, vertex5, 3);
const edge39_15 = new GraphEdge(vertex39, vertex15, 1);
const edge39_5 = new GraphEdge(vertex39, vertex5, 3);
const edge33_39 = new GraphEdge(vertex33, vertex39, 2);
const edge33_5 = new GraphEdge(vertex33, vertex5, 3);
const edge54_5 = new GraphEdge(vertex54, vertex5, 3);
const edge54_39 = new GraphEdge(vertex54, vertex39, 1);
//Add here
const graph = new Graph();
graph
  .addEdge(edge9_10)
  .addEdge(edge9_65)
  .addEdge(edge9_28)
  .addEdge(edge10_65)
  .addEdge(edge28_65)
  .addEdge(edge65_8)
  .addEdge(edge8_44)
  .addEdge(edge44_61)
  .addEdge(edge41_42)
  .addEdge(edge42_43)
  .addEdge(edge42_11)
  .addEdge(edge44_27)
  .addEdge(edge61_41)
  .addEdge(edge61_43)
  .addEdge(edge61_7)
  .addEdge(edge7_11)
  .addEdge(edge27_41)
  .addEdge(edge27_43)
  .addEdge(edge27_7)
  .addEdge(edge27_61)
  .addEdge(edge18_51_2)
  .addEdge(edge11_2_51_2)
  .addEdge(edge18_11_2)
  .addEdge(edge33_18)
  .addEdge(edge33_11_2)
  .addEdge(edge11_11_2)
  .addEdge(edge54_33)
  .addEdge(edge11_33)
  .addEdge(edge42_33)
  .addEdge(edge41_54)
  .addEdge(edge1_53)
  .addEdge(edge35_1)
  .addEdge(edge52_35)
  .addEdge(edge51_52)
  .addEdge(edge59_52)
  .addEdge(edge59_51)
  .addEdge(edge63_59)
  .addEdge(edge15_51)
  .addEdge(edge15_34)
  .addEdge(edge15_59)
  .addEdge(edge34_63)
  .addEdge(edge5_59)
  .addEdge(edge63_5)
  .addEdge(edge34_5)
  .addEdge(edge39_15)
  .addEdge(edge39_5)
  .addEdge(edge33_39)
  .addEdge(edge33_5)
  .addEdge(edge54_5)
  .addEdge(edge54_39)
  
function renderShortestPath(event){
  count++;
  console.log(count);

  if(count == 1){
//Add here
    e9_10.classList.remove("active-path");
    e9_65.classList.remove("active-path");
    e9_28.classList.remove("active-path");
    e10_65.classList.remove("active-path");
    e28_65.classList.remove("active-path");
    e65_8.classList.remove("active-path");
    e8_44.classList.remove("active-path");

    e44_61.classList.remove("active-path");
    e41_42.classList.remove("active-path");
    e42_43.classList.remove("active-path");
    e42_11.classList.remove("active-path");
    e44_27.classList.remove("active-path");
    e61_41.classList.remove("active-path");
    e61_43.classList.remove("active-path");
    e61_7.classList.remove("active-path");
    e7_11.classList.remove("active-path");
    e27_41.classList.remove("active-path");
    e27_43.classList.remove("active-path");
    e27_7.classList.remove("active-path");

    e18_51_2.classList.remove("active-path");
    e11_2_51_2.classList.remove("active-path");
    e18_11_2.classList.remove("active-path");
    e33_18.classList.remove("active-path");
    e33_11_2.classList.remove("active-path");
    e11_11_2.classList.remove("active-path");
    e54_33.classList.remove("active-path");
    e11_33.classList.remove("active-path");
    e42_33.classList.remove("active-path");
    e41_54.classList.remove("active-path");

    e1_53.classList.remove("active-path");
    e35_1.classList.remove("active-path");
    e52_35.classList.remove("active-path");
    e51_52.classList.remove("active-path");
    e59_52.classList.remove("active-path");
    e59_51.classList.remove("active-path");
    e63_59.classList.remove("active-path");
    e15_51.classList.remove("active-path");
    e15_34.classList.remove("active-path");
    e15_59.classList.remove("active-path");
    e34_63.classList.remove("active-path");
    e5_59.classList.remove("active-path");
    e63_5.classList.remove("active-path");
    e34_5.classList.remove("active-path");
    e39_15.classList.remove("active-path");
    e39_5.classList.remove("active-path");
    e33_39.classList.remove("active-path");
    e33_5.classList.remove("active-path");
    e54_5.classList.remove("active-path");
    e54_39.classList.remove("active-path");

    vertexFirst = event.target.parentNode.className;
    if(vertexFirst.length == 4){
      vertexFirst = vertexFirst.substring(vertexFirst.length-1, vertexFirst.length);
    }
    else if(vertexFirst.length == 5){
      vertexFirst = vertexFirst.substring(vertexFirst.length-2, vertexFirst.length);
    }
    else if(vertexFirst.length == 7){
      vertexFirst = vertexFirst.substring(vertexFirst.length-4, vertexFirst.length);
    }
    console.log(vertexFirst);
  }
  else if(count == 2){
    vertexSecond = event.target.parentNode.className;
    if(vertexSecond.length == 4){
      vertexSecond = vertexSecond.substring(vertexSecond.length-1, vertexSecond.length);
    }
    else if(vertexSecond.length == 5){
      vertexSecond = vertexSecond.substring(vertexSecond.length-2, vertexSecond.length);
    }
    else if(vertexSecond.length == 7){
        vertexSecond = vertexSecond.substring(vertexSecond.length-4, vertexSecond.length);
        
    }
//Add here
      switch (vertexFirst) {
        case '9':
          vertexFirst = vertex9;
          break;
        case '44':
          vertexFirst = vertex44;
          break;
        case '10':
          vertexFirst = vertex10;
        break;
        case '8':
          vertexFirst = vertex8;
        break;
        case '28':
          vertexFirst = vertex28;
        break;
        case '65':
          vertexFirst = vertex65;
        break;
        case '61':
          vertexFirst = vertex61;
        break;
        case '27':
          vertexFirst = vertex27;
        break;
        case '7':
          vertexFirst = vertex7;
        break;
        case '41':
          vertexFirst = vertex41;
        break;
        case '42':
          vertexFirst = vertex42;
        break;
        case '43':
          vertexFirst = vertex43;
        break;
        case '11':
          vertexFirst = vertex11;
        break;
        case '11_2':
          vertexFirst = vertex11_2;
        break;
        case '51_2':
          vertexFirst = vertex51_2;
        break;
        case '54':
          vertexFirst = vertex54;
        break;
        case '33':
          vertexFirst = vertex33;
        break;
        case '18':
          vertexFirst = vertex18;
        break;
        case '35':
          vertexFirst = vertex35;
        break;
        case '52':
          vertexFirst = vertex52;
        break;
        case '51':
          vertexFirst = vertex51;
        break;
        case '59':
          vertexFirst = vertex59;
        break;
        case '1':
          vertexFirst = vertex1;
        break;
        case '39':
          vertexFirst = vertex39;
        break;
        case '15':
          vertexFirst = vertex15;
        break;
        case '5':
          vertexFirst = vertex5;
        break;
        case '34':
          vertexFirst = vertex34;
        break;
        case '63':
          vertexFirst = vertex63;
        break;
        case '53':
          vertexFirst = vertex53;
        break;
      }
      const { distances, previousVertices } = bellmanFord(graph, vertexFirst);
      count = 0;
      var endPoint=true;
      var idPath1;
      var idPath2;
      while(endPoint){
        if(previousVertices[vertexSecond] == null){
          endPoint = false;
          break;
        }
        idPath1 = `e${previousVertices[vertexSecond].value}_${vertexSecond}`;
        idPath2 = `e${vertexSecond}_${previousVertices[vertexSecond].value}`;
        try{
          document.getElementById(idPath1).classList.add("active-path");
        }catch(err){
          document.getElementById(idPath2).classList.add("active-path");
        }
        vertexSecond = previousVertices[vertexSecond].value;
      }
      console.log(previousVertices);
  }

}

//Add here
pos9.addEventListener('click', renderShortestPath);
pos44.addEventListener('click', renderShortestPath);
pos10.addEventListener('click', renderShortestPath);
pos8.addEventListener('click', renderShortestPath);
pos28.addEventListener('click', renderShortestPath);
pos65.addEventListener('click', renderShortestPath);

pos61.addEventListener('click', renderShortestPath);
pos27.addEventListener('click', renderShortestPath);
pos7.addEventListener('click', renderShortestPath);
pos41.addEventListener('click', renderShortestPath);
pos42.addEventListener('click', renderShortestPath);
pos43.addEventListener('click', renderShortestPath);
pos11.addEventListener('click', renderShortestPath);

pos11_2.addEventListener('click', renderShortestPath);
pos51_2.addEventListener('click', renderShortestPath);
pos33.addEventListener('click', renderShortestPath);
pos54.addEventListener('click', renderShortestPath);
pos18.addEventListener('click', renderShortestPath);

pos35.addEventListener('click', renderShortestPath);
pos52.addEventListener('click', renderShortestPath);
pos1.addEventListener('click', renderShortestPath);
pos59.addEventListener('click', renderShortestPath);
pos51.addEventListener('click', renderShortestPath);
pos39.addEventListener('click', renderShortestPath);
pos15.addEventListener('click', renderShortestPath);
pos5.addEventListener('click', renderShortestPath);
pos34.addEventListener('click', renderShortestPath);
pos63.addEventListener('click', renderShortestPath);
pos53.addEventListener('click', renderShortestPath);