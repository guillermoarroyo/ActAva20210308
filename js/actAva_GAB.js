function mostraAlertaJPC(){
  alert("Alerta!");
}

function passaSeguentGAB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i+1].id;
      break;
    };
  }

  amagaElementGAB(idObjPregAct);
  mostraElementGAB(idObjPregSeg);
}

function passaAnteriorGAB(objRebut){
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregSeg = colArticles[i-1].id;
      break;
    };
  }

  amagaElementGAB(idObjPregAct);
  mostraElementGAB(idObjPregSeg);
}

function mostraElementGAB(idRebut){
  document.getElementById(idRebut).classList.add("elementVisibleGAB");
  document.getElementById(idRebut).classList.remove("elementOcultGAB");
}

function amagaElementGAB(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisibleGAB");
  document.getElementById(idRebut).classList.add("elementOcultGAB");
}