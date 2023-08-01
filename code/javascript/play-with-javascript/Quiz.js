




function teachJavascript() {
  let tnrName = "Nag"; // this data moved to heap end of teach,
  try {
    console.log(tnrName + " teaching javascript");
    //throw new Error("js-error")
    // async ==> teach NG framework
    setTimeout(function () { // event
      console.log(tnrName + " teaching NG framework");
      //throw new Error("NG-error")
      console.log("teaching NG framework ends");
    }, 5000)
    console.log("teaching javascript ends");
  } catch (e) {
    console.log("i caught - " + e.message);
  }
}


teachJavascript();