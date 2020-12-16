const firebaseConfig = {
    apiKey: "AIzaSyBDUVxL_S0b9AxSRjBsQ6ri80mhO0kZ03c",
    authDomain: "mc-mazaya.firebaseapp.com",
    databaseURL: "https://mc-mazaya.firebaseio.com",
    projectId: "mc-mazaya",
    storageBucket: "mc-mazaya.appspot.com",
    messagingSenderId: "1043747982646",
    appId: "1:1043747982646:web:eb8806eb17fa88668fb797",
    measurementId: "G-5VCPWL0HQL"
  };
  //var GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  
  function nextTradeMarkInfoOffer(){
    var nameOfBranch = document.getElementById("branchName").value;
    var DescOfOffer = document.getElementById("Desc").value;
    var  code= document.getElementById("code").value;
    var  selectBranch= document.getElementById("branch");


    //branch 
    //retrive and fill
    //choose
    var selectRegionText = selectRegion.options[selectRegion.selectedIndex].text;
    if(Validation(nameOfBranch,DescOfBranch,selectRegion.value)){
        //id of key of the trademark.
    firebase.database().ref('Trademarks/-MHFk6d50tMb_wYSXVnx/Branches').push(
                {
                    branchName:nameOfBranch,
                    description:DescOfBranch,
                    latitude:lat.toString(),
                    longitude:lng.toString(),
                    region:selectRegionText
                });
    alert(nameOfBranch+DescOfBranch+selectRegionText+lat+lng);
}
}