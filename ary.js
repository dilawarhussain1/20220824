let arry=[];

function arymethod(){

    let val=document.getElementById('nam').value;
       arry.push(val);
       arryLop();
    }

    function pop(){
    arry.pop();
    arryLop();
    }
      function arryLop(){
        document.getElementById('nam').value="";
        document.getElementById('area').innerHTML="";
        for(let x=0; x<=arry.length; x++){
            let hoom= `<h1>${x+1}:${arry[x]}</h1>`;
            document.getElementById('area').innerHTML+=hoom;
        }
   
      }

         

      
