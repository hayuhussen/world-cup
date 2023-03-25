const countriesList = 'https://restcountries.com/v2/all';
function fun() {
  fetch(countriesList)
    .then((response) => response.json())
    .then((countriesData) => {
    for(let i=0;i<16;i++){
            
            
            let random_string = Math.floor(Math.random() * countriesData.length);
            let countryname = countriesData[random_string].name;
           
           if(i<16){
           let sent=`<input type="number" max="9" name="" id="inumber${i+1}" ></input>${countryname}`;
           document.getElementById(`number${i+1}`).innerHTML +=sent;
          
            
    
        }}}) 
        .catch((err) => console.log(err));}






// function fun(){
   
// const country = ["USA", "GERMAN", "ITALY","KOREA", "JAPAN", "RUSSSIA","HOLAND", "ETHIOPIA", "BRITISH","CHINA", "SUDAN", "TURKY","YEMEN", "NIGERIA", "KENYA","UGANDA","ARIGITINA","AUSTRLIA","SWEDEN","DENMARK"];



//     for(var i=0;i<=country.length;i++){
        
//         var random_string ='';
//        random_string +=country[Math.floor(Math.random() * country.length)];
       
//        if(i<4){
//        let sent=`<input type="number"></input>${random_string}`;
//        document.getElementById('number').innerHTML +=sent;
//     }if(i>4&&i<9){
//     let go=`<input type="number"></input>${random_string}`;
//     document.getElementById('number1').innerHTML +=go;}
  
//     if(i>10&&i<15){
//         let go=`<input type="number"></input>${random_string}`;
//         document.getElementById('number2').innerHTML +=go;}
//         if(i>16&&i<21){
//             let go=`<input type="number"></input>${random_string}`;
//             document.getElementById('number3').innerHTML +=go;}}

//     }
    



        



