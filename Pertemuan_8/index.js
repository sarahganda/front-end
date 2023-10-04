// Rest dan Spread Operator

const penjumlahan = (a,b,c,...okay) => {
    let total = 0;
    okay.forEach((item)=>{
        total = total + item;
    });
    console.log(total);
};

penjumlahan(1,2,4,3,4,5,6);






