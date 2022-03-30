
let flag=true;
const openSomething=(value)=>

{
    if(value=='anti'&&flag==true)
    {
        document.getElementById("anti").style.display="block";
        flag=false;
    }
    else{
        document.getElementById("anti").style.display="none";
        flag=true;
    }
    if(value=='art')
    {
        document.getElementById("art").style.display="block";
      
    }
    else{
        document.getElementById("art").style.display="none";
       
    }
    if(value=='collectibles')
    {
        document.getElementById("collectibles").style.display="block";
    }
    else{
        document.getElementById("collectibles").style.display="none";
      
    }
    if(value=='artAndCraft')    
    {
        document.getElementById("artAndCraft").style.display="block";
       
    }
    else{
        document.getElementById("artAndCraft").style.display="none";
       
    }
    if(value=='coins')
    {
        document.getElementById("coins").style.display="block";
       
    }
    else{
        document.getElementById("coins").style.display="none";
       
    }
    if(value=='dollsAndTeddy')
    {
        document.getElementById("dollsAndTeddy").style.display="block";
        
    }
    else{
        document.getElementById("dollsAndTeddy").style.display="none";
        
    }
    if(value=='entertainment')
    {
        document.getElementById("entertainment").style.display="block";
     
    }
    else{
        document.getElementById("entertainment").style.display="none";
        
    }
    if(value=='pottery')
    {
        document.getElementById("pottery").style.display="block";
       
    }
    else{
        document.getElementById("pottery").style.display="none";
        
    }
    if(value=='stamps')
    {
        document.getElementById("stamps").style.display="block";
        
    }
    else{
        document.getElementById("stamps").style.display="none";
        
    }
    if(value=='vintage')
    {
        document.getElementById("vintage").style.display="block";
       
    }
    else{
        document.getElementById("vintage").style.display="none";
       
    }

}



const goFun=(value)=>
{
     localStorage.setItem("category",JSON.stringify(value));
        window.location.href=`${value}.html`;
}
