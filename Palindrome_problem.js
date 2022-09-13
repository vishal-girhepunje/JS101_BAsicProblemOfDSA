 let num=12321;
 let rev=0;
 let tem=num;
 while(num>0){
    rem=num%10;
    num=Math.floor(num/10);
    rev=rev*10+rem;
    }
    if(num==rev){
        console.log("Yes");
    }else{
        console.log("No");
    }